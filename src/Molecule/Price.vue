<template>
  <AtomSection class="bg-white font-sans" tp="large" bp="large">
    <AtomAnimate class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="pb-10 xl:flex xl:items-start xl:justify-between xl:space-x-4">
        <div class="pr-4">
          <h3 class="font-tile text-4xl font-bold tracking-tight sm:text-5xl">
            <span class="text-gray-900"
              >The ultimate business resource you need to succeed for</span
            >
            <span
              v-aos
              class="mt-2 inline-block p-1 px-2 underline transition-all duration-700 ease-in-out"
              aos-from="text-n-charcoal scale-0"
              aos-to="text-n-gold  scale-100"
              >$59.99/mo or $499.99/yr
            </span>
          </h3>
          <p class="mt-5 text-xl text-gray-500">
            The Nascent Global membership program is a first-of-its kind online
            membership experience built by Entrepreneurs for Entrepreneurs.
          </p>
        </div>
      </div>
      <div
        class="border-t border-gray-200 pt-10 xl:grid xl:grid-cols-3 xl:gap-x-8"
      >
        <div>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            All-in-one community driven
          </p>
          <p class="mt-4 text-lg text-gray-500">
            initiative led by the Nascent Global Administration team
          </p>
        </div>
        <div
          class="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:col-span-2 xl:mt-0"
        >
          <ul role="list" class="divide-y divide-gray-200">
            <div>
              <li class="flex py-4 md:py-0 md:pb-4">
                <AtomIconCheck />
                <span class="ml-3 text-base text-gray-500"
                  >Exclusive Network Access
                </span>
              </li>
              <li class="flex py-4 md:py-0 md:pb-4">
                <AtomIconCheck />
                <span class="ml-3 text-base text-gray-500">
                  Daily Livestreams
                </span>
              </li>

              <li class="flex py-4 md:py-0 md:pb-4">
                <AtomIconCheck />
                <span class="ml-3 text-base text-gray-500">
                  Business Research Team
                </span>
              </li>
              <li class="flex py-4 md:py-0 md:pb-4">
                <AtomIconCheck />
                <span class="ml-3 text-base text-gray-500">
                  Wellness Resources
                </span>
              </li>
            </div>
          </ul>
          <ul
            role="list"
            class="divide-y divide-gray-200 border-t border-gray-200 md:border-t-0"
          >
            <div>
              <li class="flex py-4 md:py-0 md:pb-4">
                <AtomIconCheck />
                <span class="ml-3 text-base text-gray-500">
                  Unfiltered Mentorship
                </span>
              </li>
              <li class="flex py-4 md:py-0 md:pb-4">
                <AtomIconCheck />
                <span class="ml-3 text-base text-gray-500">
                  Members Only Incentives
                </span>
              </li>
              <li class="flex py-4 md:py-0 md:pb-4">
                <AtomIconCheck />
                <span class="ml-3 text-base text-gray-500">
                  Investing Essentials
                </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div
        class="mt-6 flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        <a
          href="https://buy.stripe.com/8wMaHpgskfa5cTK7sw"
          target="_blank"
          class="custom-transition whitespace-nowrap rounded-md bg-n-gold px-8 py-3 font-title font-bold uppercase text-n-charcoal hover:bg-black hover:text-n-gold"
        >
          Sign up Monthly
        </a>
        <a
          href="https://buy.stripe.com/cN26r92Bu5zv8DueUZ"
          target="_blank"
          class="custom-transition whitespace-nowrap rounded-md bg-black px-8 py-3 font-title font-bold uppercase text-n-gold hover:bg-n-gold hover:text-n-charcoal"
        >
          Sign up Yearly
        </a>
      </div>
    </AtomAnimate>
  </AtomSection>
</template>
