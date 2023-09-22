import { addComponentsDir, createResolver, defineNuxtModule, installModule } from "@nuxt/kit";
import unocssNuxt, { UnocssNuxtOptions } from "@unocss/nuxt";
import vueuseNuxt from "@vueuse/nuxt";
import { name, version } from "../package.json";

export type Color =
    | "rose"
    | "pink"
    | "fuchsia"
    | "purple"
    | "violet"
    | "indigo"
    | "blue"
    | "sky"
    | "cyan"
    | "teal"
    | "emerald"
    | "green"
    | "lime"
    | "yellow"
    | "amber"
    | "orange"
    | "red"
    | "gray"
    | "slate"
    | "zinc"
    | "neutral"
    | "stone";

function toColor(property: string, shade: string, color: Color) {
    return {
        [`${property}-${shade}-50`]: `${property}-${color}-50`,
        [`${property}-${shade}-100`]: `${property}-${color}-100`,
        [`${property}-${shade}-200`]: `${property}-${color}-200`,
        [`${property}-${shade}-300`]: `${property}-${color}-300`,
        [`${property}-${shade}-400`]: `${property}-${color}-400`,
        [`${property}-${shade}-500`]: `${property}-${color}-500`,
        [`${property}-${shade}-600`]: `${property}-${color}-600`,
        [`${property}-${shade}-700`]: `${property}-${color}-700`,
        [`${property}-${shade}-800`]: `${property}-${color}-800`,
        [`${property}-${shade}-900`]: `${property}-${color}-900`,
        [`${property}-${shade}-950`]: `${property}-${color}-950`,
    };
}

export type ModuleOptions = {
    primaryColor: Color;
    gray: Color;
};

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: name,
        version: version,
        configKey: "ui",
    },
    defaults: {
        primaryColor: "blue",
        gray: "slate",
    },
    async setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url);

        nuxt.options.css.push(resolve("./runtime/style.css"), "@unocss/reset/tailwind.css");

        addComponentsDir({
            path: resolve("./runtime/components"),
        });

        await installModule(vueuseNuxt);

        await installModule(unocssNuxt, {
            shortcuts: {
                ...toColor("from", "primary", options.primaryColor),
                ...toColor("to", "primary", options.primaryColor),

                ...toColor("text", "primary", options.primaryColor),
                ...toColor("text", "gray", options.gray),

                ...toColor("border", "primary", options.primaryColor),
                ...toColor("border", "gray", options.gray),

                ...toColor("divide", "primary", options.primaryColor),
                ...toColor("divide", "gray", options.gray),

                ...toColor("ring", "primary", options.primaryColor),
                ...toColor("ring", "gray", options.gray),

                ...toColor("bg", "primary", options.primaryColor),
                ...toColor("bg", "gray", options.gray),
            },
        } satisfies UnocssNuxtOptions);
    },
});
