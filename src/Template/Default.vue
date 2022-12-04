<template>
  <div class="text-n-green bg-n-black font-sans">
    <a href="#content" class="sr-only text-blue-600 focus:not-sr-only">
      Skip to main content
    </a>
    <AtomIeBanner />
    <OrganismPageLoader />
    <div class="">
      <OrganismHeader />
      <div id="content" />
      <slot />
      <div
        class="fixed bottom-0 flex w-full items-center justify-center space-x-4 bg-black p-4 sm:hidden"
      >
        <AtomIconTwitter
          link="https://twitter.com/NascentCo"
          class="text-n-gold hover:text-white sm:block"
        />
        <AtomIconDiscord
          link="https://discord.gg/nascentglobal"
          class="text-n-gold hover:text-white sm:block"
        />
      </div>
    </div>
  </div>
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
