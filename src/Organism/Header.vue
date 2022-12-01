<template>
  <header
    class="pin-x-center bg-blur-2xl fixed top-0 z-40 w-full bg-opacity-30 px-6 scrolled:bg-n-black"
  >
    <div class="mx-auto flex w-full max-w-8xl items-center justify-between">
      <g-link
        to="/"
        class="w-48 transition-all duration-300 ease-in-out scrolled:w-14 xl:w-16"
      >
        <img src="/logo3.svg" alt="" />
      </g-link>

      <div
        class="4 mr-10 flex w-full max-w-8xl items-center justify-end text-right"
      >
        <MoleculeSiteMenu />
      </div>
      <div class="flex items-center justify-end space-x-4">
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
