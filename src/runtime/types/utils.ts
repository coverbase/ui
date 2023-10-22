import { ref, watch, type Ref } from "vue";

export function useConverter<TInput, TOutput>(
    inputValue: Ref<TInput>,
    read: (input: TInput) => TOutput,
    write: (output: TOutput) => TInput
) {
    const outputValue = ref<TOutput>();

    watch(
        outputValue,
        (value) => {
            if (value) {
                inputValue.value = write(value);
            }
        },
        {
            deep: true,
        }
    );

    watch(
        inputValue,
        (value) => {
            outputValue.value = read(value);
        },
        {
            immediate: true,
        }
    );

    return outputValue;
}
