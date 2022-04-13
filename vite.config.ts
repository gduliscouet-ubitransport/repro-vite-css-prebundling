import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

import Components from "unplugin-vue-components/vite";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";

export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [
      createVuePlugin(),
      Components({
        dts: false,
        resolvers: [VuetifyResolver()],
      }),
    ],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },
  };
});
