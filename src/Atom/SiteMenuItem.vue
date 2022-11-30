<template>
  <a
    :href="item.link"
    class="transition-all duration-300 ease-in-out hover:text-n-gold scrolled:text-base"
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
