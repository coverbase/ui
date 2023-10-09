export type Hsva = {
    hue: number;
    saturation: number;
    value: number;
    alpha: number;
};

export type Hsla = {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
};

export function hsvToHsl(hsva: Hsva): Hsla {
    let lightness = ((2 - hsva.saturation / 100) * hsva.value) / 2;

    let hsla: Hsla = {
        hue: hsva.hue,
        saturation: Math.round(
            (hsva.saturation * hsva.value) / (lightness < 50 ? lightness * 2 : 200 - lightness * 2)
        ),
        lightness: Math.round(lightness),
        alpha: hsva.alpha,
    };

    if (isNaN(hsla.saturation)) {
        hsla.saturation = 0;
    }

    return hsla;
}

export function hslToHsv(hsla: Hsla): Hsva {
    hsla.saturation /= 100;
    hsla.lightness /= 100;

    let value = hsla.lightness + hsla.saturation * Math.min(hsla.lightness, 1 - hsla.lightness);
    let saturationHsv = 0;

    if (value > 0) {
        saturationHsv = 2 * (1 - hsla.lightness / value) * 100;
    }

    return {
        hue: hsla.hue,
        saturation: Math.round(saturationHsv),
        value: Math.round(value * 100),
        alpha: hsla.alpha,
    };
}

export function parseToHsla(value: string | undefined): Hsla | undefined {
    const match = value?.match(/hsla\((.*), (.*)%, (.*)%, (.*)\)/);

    if (match) {
        return {
            hue: Number(match[1]),
            saturation: Number(match[2]),
            lightness: Number(match[3]),
            alpha: Number(match[4]),
        };
    }
}
