<template>
  <div class="bg-white font-sans">
    <div class="mx-auto max-w-7xl py-10 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="pb-10 xl:flex xl:items-start xl:justify-between xl:space-x-4">
        <div class="pr-4">
          <h3 class="font-tile text-4xl font-bold tracking-tight sm:text-5xl">
            <span class="text-gray-900">Everything you need for</span>
            <span class="block text-n-gold">$59.99/mo or $499.99/yr </span>
          </h3>
          <p class="mt-5 text-xl text-gray-500">
            The Nascent Global membership program is a community driven
            initiative led by the Nascent Global administrative team.
          </p>
        </div>
        <AtomBookCall />
      </div>
      <div
        class="border-t border-gray-200 pt-10 xl:grid xl:grid-cols-3 xl:gap-x-8"
      >
        <div>
          <h2 class="text-lg font-semibold text-n-gold">Everything you need</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            All-in-one community
          </p>
          <p class="mt-4 text-lg text-gray-500">
            A first-of-its-kind online membership experience built by
            Entrepreneurs for Entrepreneurs.
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
                  Live Trading Sessions.
                </span>
              </li>
              <li class="flex py-4 md:py-0 md:pb-4">
                <AtomIconCheck />
                <span class="ml-3 text-base text-gray-500">
                  Exclusive Research Team
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
                  Wellness Resources
                </span>
              </li>
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
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
