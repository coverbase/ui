import { addComponentsDir, createResolver, defineNuxtModule, installModule } from "@nuxt/kit";
import unocssNuxt from "@unocss/nuxt";
import vueuseNuxt from "@vueuse/nuxt";
import { name, version } from "../package.json";

export default defineNuxtModule({
    meta: {
        name: name,
        version: version,
        configKey: "ui",
    },
    async setup(_, nuxt) {
        const { resolve } = createResolver(import.meta.url);

        const runtime = resolve("./runtime");
        const styles = resolve("./runtime/style.css");

        nuxt.options.build.transpile.push(runtime);
        nuxt.options.css.push(styles, "@unocss/reset/tailwind.css");

        nuxt.options.alias["#ui"] = runtime;

        addComponentsDir({
            prefix: "U",
            path: resolve("./runtime/components"),
        });

        await installModule(vueuseNuxt);
        await installModule(unocssNuxt);
    },
});
