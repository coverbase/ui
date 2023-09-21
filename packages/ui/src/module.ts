import { addComponentsDir, createResolver, defineNuxtModule, installModule } from "@nuxt/kit";
import unocssNuxt from "@unocss/nuxt";
import vueuseNuxt from "@vueuse/nuxt";
import { name } from "../package.json";

export default defineNuxtModule({
    meta: {
        name: name,
    },
    async setup(_, nuxt) {
        const { resolve } = createResolver(import.meta.url);

        nuxt.options.css.push(resolve("./runtime/style.css"), "@unocss/reset/tailwind.css");

        addComponentsDir({
            path: resolve("./runtime/components"),
        });

        await installModule(vueuseNuxt);
        await installModule(unocssNuxt);
    },
});
