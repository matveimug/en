import DefaultTheme from "vitepress/theme";
import { Visualia } from "visualia";
import DurationSnippet from "../../components/DurationSnippet.vue";

// import "visualia/style.css";
import "./edesign-style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
    app.component("DurationSnippet", DurationSnippet);
  },
};
