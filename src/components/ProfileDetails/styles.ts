import { styled } from "@stitches/react";

export const Container = styled("aside", {
  width: "260px",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem 1.5rem",
  borderLeft: "1px solid $gray700",
  background: "transparent",
  borderRadius: 0,

  "@bp2": {
    width: "100%",
    borderLeft: "none",
    borderTop: "1px solid $gray800",
    paddingTop: "2rem",
  },
});

export const UserInfo = styled("header", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
  marginBottom: "2.5rem",

  "& [data-avatar]": {
    width: "72px",
    height: "72px",
  },

  strong: {
    fontSize: "$lg",
    fontWeight: "$bold",
    color: "$gray100",
    lineHeight: 1.3,
    textAlign: "center",
  },
});

export const MembershipText = styled("span", {
  fontSize: "$sm",
  color: "$gray400",
  lineHeight: 1.4,
});

export const Divisor = styled("div", {
  width: "32px",
  height: "3px",
  borderRadius: "999px",
  background: "$green100",
  marginBottom: "2.5rem",
});

export const BooksInfo = styled("section", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});
