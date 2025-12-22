import { ReactElement, useCallback, useEffect, useState, useMemo } from "react";
import { CaretLeft, User, MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { ProfileDetails } from "@/src/components/ProfileDetails";
import { RatedBooksProfile } from "@/src/components/RatedBooksProfile";
import { SearchInput } from "@/src/components/SearchInput";
import { PageTitle } from "@/src/components/ui/PageTitle";
import { DefaultLayout } from "@/src/layouts";
import { api } from "@/src/lib/axios";
import {
  BackButton,
  Container,
  EmptyStateMessage,
  Main,
  LoadingContainer,
  ErrorContainer,
  VisuallyHidden,
  HeaderSection,
  SearchSection,
  RatingsSection,
  ProfileAside,
} from "@/src/styles/pages/profile";

import { NextPageWithLayout } from "../_app.page";
import type { UserSchema } from "@/src/types/user";
import type { RatingWithBook } from "@/src/types/rating";

const DEBOUNCE_DELAY = 300;

const Profile: NextPageWithLayout = () => {
  const router = useRouter();
  const { query, isReady } = router;
  const userId = query.id as string;
  const { status, data: session } = useSession();

  const [user, setUser] = useState<UserSchema | null>(null);
  const [ratings, setRatings] = useState<RatingWithBook[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isLoadingRatings, setIsLoadingRatings] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isOwnerProfile = session?.user?.id === userId;
  const isLoading = isLoadingProfile || isLoadingRatings;
  const hasNoResults =
    !isLoading && ratings.length === 0 && searchTerm.length > 0;

  const fetchUserProfile = useCallback(async () => {
    if (!userId) return;

    setIsLoadingProfile(true);
    setError(null);

    try {
      const { data } = await api.get<UserSchema>(`/profile/${userId}`);
      setUser(data);
    } catch (err) {
      console.error("Erro ao carregar perfil:", err);
      setError("Não foi possível carregar o perfil. Tente novamente.");
    } finally {
      setIsLoadingProfile(false);
    }
  }, [userId]);

  const fetchRatings = useCallback(async () => {
    if (!userId) return;

    setIsLoadingRatings(true);

    try {
      const endpoint = `/profile/${userId}/rates${
        searchTerm ? `?book=${encodeURIComponent(searchTerm)}` : ""
      }`;
      const { data } = await api.get<{ ratings: RatingWithBook[] }>(endpoint);
      setRatings(data.ratings || []);
    } catch (err) {
      console.error("Erro ao carregar avaliações:", err);
      setRatings([]);
    } finally {
      setIsLoadingRatings(false);
    }
  }, [userId, searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const newQuery = { ...router.query };
    if (value.trim()) {
      newQuery.book = value;
    } else {
      delete newQuery.book;
    }

    router.replace(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    if (isReady && query.book) {
      setSearchTerm(query.book.toString());
    }
  }, [isReady, query.book]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchRatings();
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [fetchRatings]);

  if (error && !user) {
    return (
      <Container>
        <ErrorContainer role="alert" aria-live="polite">
          <p>{error}</p>
          <button onClick={() => router.push("/")}>Voltar para home</button>
        </ErrorContainer>
      </Container>
    );
  }

  if (isLoadingProfile && !user) {
    return (
      <Container>
        <LoadingContainer role="status" aria-live="polite" aria-busy="true">
          <VisuallyHidden>Carregando perfil...</VisuallyHidden>
          <div className="spinner" aria-hidden="true" />
        </LoadingContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Main role="main" aria-label="Conteúdo principal do perfil">
        <HeaderSection>
          {status === "authenticated" && isOwnerProfile ? (
            <PageTitle title="Perfil" icon={<User aria-hidden="true" />} />
          ) : (
            <BackButton href="/" aria-label="Voltar para página inicial">
              <CaretLeft size={20} aria-hidden="true" />
              <span>Voltar</span>
            </BackButton>
          )}
        </HeaderSection>

        {user && (
          <div className="profile-details-wrapper">
            <ProfileDetails user={user} />
          </div>
        )}

        <SearchSection aria-label="Busca de livros avaliados">
          <SearchInput
            name="book"
            value={searchTerm}
            placeholder="Buscar livro avaliado"
            onChange={handleSearchChange}
            aria-label="Buscar livros avaliados"
            variant="default"
          />
        </SearchSection>

        <RatingsSection
          aria-label="Livros avaliados"
          aria-live="polite"
          aria-busy={isLoadingRatings}
        >
          <div id="search-results-info" className="sr-only">
            {isLoadingRatings
              ? "Carregando avaliações..."
              : `${ratings.length} ${
                  ratings.length === 1
                    ? "avaliação encontrada"
                    : "avaliações encontradas"
                }`}
          </div>

          {isLoadingRatings ? (
            <LoadingContainer>
              <VisuallyHidden>Carregando avaliações...</VisuallyHidden>
              <div className="spinner" aria-hidden="true" />
            </LoadingContainer>
          ) : hasNoResults ? (
            <EmptyStateMessage role="status">
              Nenhum resultado encontrado para a busca de{" "}
              <strong>&quot;{searchTerm}&quot;</strong>
            </EmptyStateMessage>
          ) : (
            <ul role="list" aria-label="Lista de livros avaliados">
              {ratings.map((rating) => (
                <li key={rating.id} data-rated-book>
                  <RatedBooksProfile rate={rating} />
                </li>
              ))}
            </ul>
          )}
        </RatingsSection>
      </Main>
      {user && (
        <ProfileAside aria-label="Detalhes do perfil">
          <ProfileDetails user={user} />
        </ProfileAside>
      )}
    </Container>
  );
};

Profile.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>;
};

export default Profile;
