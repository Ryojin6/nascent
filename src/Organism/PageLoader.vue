<template>
  <transition name="fade">
    <div
      v-show="elementVisible"
      class="absolute top-0 z-50 flex h-full w-full items-center justify-center bg-black"
    >
      <!-- <div class="relative mx-auto w-full max-w-6xl">
        <g-image
          src="~/images/bg.gif"
          alt=""
          class="pin-center absolute z-20 h-full w-full p-1"
          immediate
        />

        <g-image
          src="~/images/mask.svg"
          immediate
          alt=""
          class="relative z-40 w-full"
        />
      </div> -->
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
