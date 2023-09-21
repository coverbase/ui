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

export type ModuleOptions = {
    prefix?: string;
};

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: name,
        version: version,
        configKey: "ui",
    },
    defaults: {},
    async setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url);

        nuxt.options.css.push(resolve("./runtime/style.css"), "@unocss/reset/tailwind.css");

        addComponentsDir({
            prefix: options.prefix,
            path: resolve("./runtime/components"),
        });

        await installModule(vueuseNuxt);

        await installModule(unocssNuxt, {
            shortcuts: {
                "text-primary": "text-slate-900",
                "border-primary": "border-slate-900",
                "divide-primary": "divide-slate-900",
                "ring-primary": "ring-slate-900",
                "bg-primary": "bg-slate-900",

                "text-secondary": "text-slate-400",
                "border-secondary": "border-slate-400",
                "divide-secondary": "divide-slate-400",
                "ring-secondary": "ring-slate-400",
                "bg-secondary": "bg-slate-400",

                "text-tertiary": "text-slate-200",
                "border-tertiary": "border-slate-200",
                "divide-tertiary": "divide-slate-200",
                "ring-tertiary": "ring-slate-200",
                "bg-tertiary": "bg-slate-200",
            },
        } satisfies UnocssNuxtOptions);
    },
});
