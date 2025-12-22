import Link from "next/link";
import { styled } from "@/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  padding: "$5",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",

  "@lg": {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "$10",
    padding: "$6",
  },
});

export const Main = styled("main", {
  width: "100%",
  minHeight: "calc(100vh - 8rem)",

  "@lg": {
    flex: "1 1 auto",
    maxWidth: "880px",
  },

  "> *": {
    marginBottom: "$6",
  },

  ".profile-details-wrapper": {
    display: "flex",
    justifyContent: "center",

    "@lg": {
      display: "none",
    },
  },
});

export const ProfileAside = styled("aside", {
  display: "none",

  "@lg": {
    display: "block",
  },
});

export const EmptyStateMessage = styled("div", {
  marginTop: "$8",
  textAlign: "center",
  color: "$gray400",
  fontSize: "$md",
  lineHeight: "$short",
  padding: "$6 $4",

  strong: {
    color: "$gray100",
    fontWeight: "$semibold",
  },

  "&::before": {
    content: '""',
    display: "block",
    width: "64px",
    height: "64px",
    margin: "0 auto $4 auto",
    backgroundColor: "$gray700",
    mask: "url('/icons/no-results.svg') no-repeat center",
    maskSize: "contain",
    borderRadius: "$md",
  },
});

export const BackButton = styled(Link, {
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",
  padding: "$2 $3",
  marginBottom: "$10",
  color: "$purple100",
  fontWeight: "$medium",
  fontSize: "$sm",
  textDecoration: "none",
  borderRadius: "$xs",
  transition: "all 0.2s ease",
  border: "1px solid transparent",

  "&:hover, &:focus-visible": {
    background: "$purple900",
    color: "$purple100",
    textDecoration: "none",
    borderColor: "$purple500",
    outline: "none",
    boxShadow: "0 0 0 2px $purple200",
  },

  "&:focus-visible": {
    outline: "2px solid $purple500",
    outlineOffset: "2px",
  },

  "@bp1": {
    padding: "$3 $4",
    fontSize: "$md",
  },
});

export const HeaderSection = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "$8",
  flexWrap: "wrap",
  gap: "$4",

  "@bp1": {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "$3",
  },
});

export const SearchSection = styled("section", {
  marginBottom: "$8",
  position: "sticky",
  top: "1rem",
  background: "$gray900",
  padding: "$2",
  borderRadius: "$md",
  backdropFilter: "blur(10px)",
  zIndex: 10,

  "@bp2": {
    position: "static",
    padding: 0,
    background: "transparent",
  },
});

export const RatingsSection = styled("section", {
  "& ul": {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "$4",
  },

  "& > [data-rated-book], & > div": {
    marginBottom: 0,
  },
});

export const LoadingContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "200px",
  padding: "$8",
  gap: "$4",

  ".spinner": {
    width: "48px",
    height: "48px",
    border: "3px solid $gray700",
    borderTopColor: "$green100",
    borderRadius: "50%",
    animation: "spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
  },

  ".loading-text": {
    color: "$gray400",
    fontSize: "$sm",
  },

  "@bp2": {
    minHeight: "250px",
    ".spinner": {
      width: "56px",
      height: "56px",
    },
  },

  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
});

export const ErrorContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$6",
  padding: "$10 $8",
  minHeight: "300px",
  background: "$gray800",
  borderRadius: "$lg",
  border: "1px solid $red500",
  textAlign: "center",

  p: {
    color: "$red300",
    fontSize: "$lg",
    fontWeight: "$medium",
    lineHeight: "$short",
    maxWidth: "400px",
  },

  button: {
    padding: "$3 $6",
    background: "linear-gradient(135deg, $green200 0%, $green100 100%)",
    color: "$gray100",
    borderRadius: "$md",
    border: "none",
    fontSize: "$sm",
    fontWeight: "$medium",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 8px rgba(34, 197, 94, 0.3)",

    "&:hover": {
      background: "linear-gradient(135deg, $green300 0%, $green200 100%)",
      transform: "translateY(-1px)",
      boxShadow: "0 4px 12px rgba(34, 197, 94, 0.4)",
    },

    "&:focus-visible": {
      outline: "2px solid $green500",
      outlineOffset: "2px",
    },
  },

  "@bp2": {
    minHeight: "350px",
    padding: "$12 $10",
  },
});

export const VisuallyHidden = styled("span", {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
});
