<template>
  <div
    v-aos
    class="transition-all duration-500 ease-in-out xl:p-10"
    aos-from=" translate-y-32 opacity-0 shadow-xl blur-lg"
    aos-to="translate-y-0 rotate-0 opacity-100 shadow-none blur-none"
  >
    <slot />
  </div>
</template>
