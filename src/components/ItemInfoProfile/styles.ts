import { styled } from "@/stitches.config";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const IconWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  borderRadius: "999px",
  background: "transparent",

  svg: {
    width: "24px",
    height: "24px",
    color: "$green100",
  },
});

export const ItemInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
});

export const Title = styled("strong", {
  fontSize: "$sm",
  fontWeight: 700,
  color: "$gray100",
  lineHeight: 1.4,
});

export const Description = styled("span", {
  fontSize: "$xs",
  color: "$gray400",
  lineHeight: 1.4,
});
