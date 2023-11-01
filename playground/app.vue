<template>
    <main class="flex flex-col gap-8 p-8">
        <UHeading> Buttons </UHeading>

        <div class="flex gap-2">
            <UButton variant="primary">
                <span class="px-2"> Button </span>
            </UButton>

            <UButton variant="secondary">
                <span class="px-2"> Button </span>
            </UButton>

            <UButton variant="text">
                <span class="px-2"> Button </span>
            </UButton>

            <UButton variant="outline">
                <span class="px-2"> Button </span>
            </UButton>

            <UButton variant="danger">
                <span class="px-2"> Button </span>
            </UButton>
        </div>

        <UHeading> Inputs </UHeading>

        <div class="flex gap-2">
            <UInput placeholder="Input" />

            <USearchInput placeholder="Search Input" />

            <UNumberInput placeholder="Number Input" />

            <UPasswordInput placeholder="Password Input" />

            <UPhoneInput placeholder="Phone Input" />
        </div>
    </main>
</template>
