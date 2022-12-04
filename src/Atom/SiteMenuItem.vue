<template>
  <a
    :href="item.link"
    class="text-3xl uppercase transition-all duration-300 ease-in-out hover:text-n-gold scrolled:text-base xl:text-base"
    >{{ item.label }}</a
  >
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
