<template>
  <AtomSection tp="large" bp="large" class="bg-white text-n-charcoal">
    <MoleculeTitle
      title="Nascent Global is an entity built by
          Entrepreneurs from all across the world that focuses on empowering the
          core values of Innovation, Knowledge and Ownership."
      subtitle="What is Nascent Global? "
    />
    <div class="mx-auto max-w-6xl pt-24">
      <div
        class="mb-6 grid grid-cols-5 gap-4 space-x-4 border-b-2 border-n-gold pb-4"
      >
        <button
          v-for="card in tabs"
          :key="card.title"
          class="custom-transition textSmall flex flex-col items-center justify-center space-y-2 rounded-t-md p-4 text-center font-title font-bold uppercase hover:bg-n-gold"
          :class="{ ' bg-n-gold': selectedTab === card.title }"
          @click="selectedTab = card.title"
        >
          <span class="flex items-center justify-center">
            <img class="mx-auto h-14 w-14" :src="card.image" alt="" />
          </span>
          <span class="hidden font-bold md:block">{{ card.title }}</span>
        </button>
      </div>

      <div
        v-show="selectedTab === 'Business'"
        class="relative z-20 grid justify-center gap-4 md:grid-cols-2"
      >
        <div>
          <div class="pb-6">
            <div class="text-xs text-gray-300">
              E-Commerce | Marketing | Strategy | Planning
            </div>
            <div class="textLarge font-title font-bold uppercase text-n-gold">
              Business
            </div>
          </div>
          <div
            class="flex h-64 items-center justify-center bg-black text-center text-white"
          >
            Image goes here
          </div>
        </div>

        <div class="space-y-4 px-6">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ipsam hic necessitatibus at quis maiores facilis. Vel, repellendus
            fugit accusantium laboriosam nulla id officia accusamus eveniet
            magni sint soluta eligendi.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ipsam hic necessitatibus at quis maiores facilis. Vel, repellendus
            fugit accusantium laboriosam nulla id officia accusamus eveniet
            magni sint soluta eligendi.
          </div>
          <ul class="list-inside list-disc">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
      <div
        v-show="selectedTab === 'Finance'"
        class="relative z-20 grid grid-cols-2 justify-center"
      >
        <div>
          <div class="pb-6">
            <div class="text-xs text-gray-300">
              Investing | Budgeting | Trading
            </div>
            <div class="textLarge font-title font-bold uppercase text-n-gold">
              Finance
            </div>
          </div>
          <div
            class="flex h-64 items-center justify-center bg-black text-center text-white"
          >
            Image goes here
          </div>
        </div>

        <div class="space-y-4 px-6">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ipsam hic necessitatibus at quis maiores facilis. Vel, repellendus
            fugit accusantium laboriosam nulla id officia accusamus eveniet
            magni sint soluta eligendi.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ipsam hic necessitatibus at quis maiores facilis. Vel, repellendus
            fugit accusantium laboriosam nulla id officia accusamus eveniet
            magni sint soluta eligendi.
          </div>
          <ul class="list-inside list-disc">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
    </div>
  </AtomSection>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'Business',

      tabs: [
        {
          title: `Business`,
          image: '/business.svg',
        },
        {
          title: `Finance`,
          image: '/finance.svg',
        },
        {
          title: `Information and Technology`,
          image: '/it.svg',
        },
        {
          title: `LIFESTYLE`,
          image: '/lifestyle.svg',
        },
        {
          title: `NETWORKING`,
          image: '/networking.svg',
        },
      ],
    };
  },
};
</script>
