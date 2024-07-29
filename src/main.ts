import { createVuetify } from "vuetify";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
const vuetify = createVuetify({
  theme: {
    defaultTheme: "dark",
  },
});

app.use(vuetify);

app.mount("#app");
