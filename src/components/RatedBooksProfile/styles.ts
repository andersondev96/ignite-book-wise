import { styled } from "@/stitches.config";

export const Container = styled("article", {
  width: "100%",
  maxWidth: "640px",
});

export const TimeAgo = styled("span", {
  display: "block",
  marginBottom: "$2",
  color: "$gray400",
  fontSize: "$sm",
});

export const BookCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",

  padding: "$6",
  borderRadius: "$md",
  background: "$gray700",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  cursor: "pointer",
  transition:
    "transform 0.2s ease-out, box-shadow 0.2s ease-out, border 0.2s ease-out",
  border: "1px solid transparent",

  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
    borderColor: "$gray500",
  },

  "&:focus-visible": {
    outline: "2px solid $green100",
    outlineOffset: "2px",
  },

  "@md": {
    padding: "$5",
  },
});

export const BookInfo = styled("div", {
  display: "flex",
  gap: "$4",

  "@sm": {
    alignItems: "flex-start",
  },

  "@md": {
    gap: "$5",
  },

  "@media (max-width: 480px)": {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
});

export const CoverImage = styled("img", {
  width: "98px",
  height: "134px",
  borderRadius: "$sm",
  objectFit: "cover",
  flexShrink: 0,

  "@media (max-width: 480px)": {
    width: "80px",
    height: "110px",
  },
});

export const DetailsBook = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,
});

export const TitleAndAuthor = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",

  strong: {
    color: "$gray100",
    fontSize: "$md",
    fontWeight: "$bold",
    lineHeight: 1.3,
  },

  span: {
    color: "$gray400",
    fontSize: "$sm",
  },
});

export const Summary = styled("p", {
  color: "$gray300",
  fontSize: "$sm",
  lineHeight: 1.6,

  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});
