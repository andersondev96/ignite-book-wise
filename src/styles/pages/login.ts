import { styled } from "@/stitches.config";

export const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  height: "100vh",
  padding: "$6",
  gap: "$6",
  boxSizing: "border-box",
  overflow: "hidden",

  "@md": {
    gridTemplateColumns: "1.2fr 1fr", // Reduzido de 1.4fr para dar mais espaço ao form
    paddingLeft: "$2",
    paddingRight: "$6",
    paddingTop: "$4",
    paddingBottom: "$4",
    gap: "$8", // Aumentado de $2 para $8 (mais distância dos botões)
  },

  "@lg": {
    paddingLeft: "$3",
    paddingRight: "$8",
    gap: "$10", // Ainda mais distância em telas grandes
  },
});

export const ImageWrapper = styled("div", {
  display: "none",

  "@md": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
    maxWidth: "600px", // Limita a largura máxima da imagem
  },

  img: {
    width: "100%",
    height: "80vh",
    minHeight: "550px",

    objectFit: "cover",
    objectPosition: "center center", // Ajuste conforme necessário
    borderRadius: "$lg",
    aspectRatio: "3/4", // Força proporção retangular vertical
  },
});

export const LoginForm = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  maxWidth: "420px",
  width: "100%",
  margin: "0 auto",

  h1: {
    color: "$gray100",
    fontSize: "$2xl",
    fontWeight: "$bold",
    marginBottom: "$2",
  },

  span: {
    color: "$gray300",
    fontSize: "$md",
    lineHeight: "$short",
  },

  "@sm": {
    h1: { fontSize: "$xl" },
    span: { fontSize: "$sm" },
  },
});

export const AuthButtons = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  marginTop: "$6",
});
