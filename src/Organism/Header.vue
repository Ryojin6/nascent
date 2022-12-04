<template>
  <header
    class="pin-x-center bg-blur-2xl custom-transition fixed top-0 z-50 w-full bg-black px-6 py-4 xl:py-0"
  >
    <div class="mx-auto flex w-full max-w-8xl items-center justify-between">
      <g-link
        to="/"
        class="w-20 transition-all duration-300 ease-in-out scrolled:w-14 xl:w-20"
      >
        <img src="/logo3.svg" alt="" />
      </g-link>

      <div
        class="order-2 ml-auto flex w-16 max-w-8xl items-center justify-end text-right xl:order-none xl:mr-10 xl:w-full"
      >
        <MoleculeSiteMenu />
      </div>
      <div class="flex w-full items-center justify-end space-x-4 xl:w-auto">
        <AtomIconTwitter
          link="https://twitter.com/NascentCo"
          class="text-n-gold hover:text-white"
        />
        <AtomIconDiscord
          link="https://discord.gg/nascentglobal"
          class="text-n-gold hover:text-white"
        />
        <AtomBookCall />
      </div>
    </div>
  </header>
</template>

<style></style>
