<template>
  <transition name="fade">
    <div
      v-show="elementVisible"
      class="fixed top-0 z-50 flex h-full w-full items-center justify-center bg-black"
    >
      <div class="mx-auto max-w-2xl">
        <img src="/animation.svg" alt="" class="w-full" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      elementVisible: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.elementVisible = false;
    }, 2000);
  },
};
</script>
