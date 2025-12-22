import { styled } from "@/stitches.config";

export const Container = styled("aside", {
  width: "100%",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem 1.5rem",
  background: "transparent",
  boxShadow: "none",
  borderRadius: 0,
  borderTop: "1px solid $gray700",

  "@lg": {
    width: "320px",
    borderTop: "none",
    borderLeft: "1px solid $gray700",
    alignItems: "center",
  },
});

export const UserInfo = styled("header", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
  marginBottom: "2rem",

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

  display: "none",

  "@lg": {
    display: "block",
  },
});

export const BooksInfo = styled("section", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1.25rem 2rem",

  "& > div": {
    flex: "0 1 45%",
    display: "flex",
    justifyContent: "center",
  },

  "@lg": {
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    gap: "1.5rem",

    "& > div": {
      flex: "0 0 auto",
      width: "100%",
      justifyContent: "flex-start",
    },
  },
});
