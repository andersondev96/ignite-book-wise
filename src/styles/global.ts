import { globalCss } from "../../stitches.config";
import { nunito } from "../pages/_app.page";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  html: {
    fontFamily: nunito.style.fontFamily,
  },

  body: {
    backgroundColor: "$gray800",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
    minHeight: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
  },

  a: {
    color: "inherit",
  },

  button: {
    cursor: "pointer",
  },

  "button, input, textarea": {
    fontFamily: "inherit",
  },

  ".sr-only": {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
});
