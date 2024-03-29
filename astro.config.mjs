import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react()],
  output: "server",
  adapter: netlify()
});