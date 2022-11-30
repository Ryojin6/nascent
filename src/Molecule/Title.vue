<template>
  <div class="mx-auto max-w-6xl text-center">
    <div class="font-title font-bold text-n-gold md:text-xl 2xl:text-2xl">
      {{ subtitle }}
    </div>
    <h2 class="textMedium">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
};
</script>
