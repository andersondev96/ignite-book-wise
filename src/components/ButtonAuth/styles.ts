import { styled } from "@/stitches.config";

// ButtonAuth/styles.ts
export const Container = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "$4",

  padding: "$4 $5",
  width: "100%",
  maxWidth: "100%",
  borderRadius: "$md",
  backgroundColor: "$gray600",
  cursor: "pointer",

  transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",

  "&:hover": {
    backgroundColor: "$gray500",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.35)",
  },

  "&:focus-visible": {
    outline: "2px solid $purple200",
    outlineOffset: "2px",
  },

  span: {
    fontSize: "$lg",
    fontWeight: "$bold",
    color: "$gray100",
    lineHeight: 1.4,
  },

  "@sm": {
    padding: "$3 $4",
    span: { fontSize: "$md" },
  },
});

export const IconWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",

  img: {
    width: "100%",
    height: "100%",
    borderRadius: "$xs",
    objectFit: "cover",
  },

  svg: {
    width: "100%",
    height: "100%",
    color: "$purple100",
  },
});
