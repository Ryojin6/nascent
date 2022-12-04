<template>
  <AtomSection tp="large" bp="large" class="bg-white text-n-charcoal">
    <AtomAnimate>
      <MoleculeTitle
        title="Nascent Global is an entity built by
          Entrepreneurs from all across the world that focuses on empowering the
          core values of Innovation, Knowledge and Ownership."
        subtitle="What is Nascent Global? "
      />
    </AtomAnimate>
    <AtomAnimate>
      <div class="mx-auto max-w-6xl pt-10">
        <div
          class="mb-6 grid grid-cols-3 gap-4 space-x-4 border-b-2 border-n-gold pb-4 sm:grid-cols-5"
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
            <div>
              <img src="/b.jpg" alt="" />
            </div>
          </div>

          <div class="space-y-4 px-6">
            <div>
              One of the pillars of Nascent Global is to empower & encourage the
              core principles of entrepreneurship by providing the necessary
              tools and knowledge to our users allowing them to pursue their
              passion. Join our experts as they convey many years of experience
              ranging across all the necessary topics in relation to building
              Brands and selling products Online .
            </div>
            <ul class="list-inside list-disc">
              <li>Ecommerce</li>
              <li>Dropshipping</li>
              <li>Marketing</li>
              <li>Social Media Marketing Agency (SMMA)</li>
              <li>Self branding</li>
            </ul>
            <div>
              Industry experts will train you to find winning products, create
              the perfect store, and generate traffic on your sites. Whether
              you’re interested in dropshipping or private labelling, we
              streamlined the whole process from having zero experience to
              owning a profitable online business.
            </div>
          </div>
        </div>
        <div
          v-show="selectedTab === 'Finance'"
          class="relative z-20 grid justify-center gap-4 md:grid-cols-2"
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
            <div>
              <img src="/f.jpg" alt="" />
            </div>
          </div>

          <div class="space-y-4 px-6">
            <div>
              Over the years, our Seasoned Finance Experts have curated a sharp
              skill set and a precise understanding of not only the Financial
              world, but more importantly how to leverage and take advantage of
              trends in order to generate returns on investments. With your
              perseverance coupled with our guidance, explore endless
              possibilities & gains using our
            </div>
            <ul class="list-inside list-disc">
              <li>
                Trading calls from our inhouse day traders managing 7+ figures
              </li>
              <li>Learning from other investors trading millions in volume</li>
              <li>Financial tracking resources</li>
            </ul>
          </div>
        </div>
        <div
          v-show="selectedTab === 'Information and Technology'"
          class="relative z-20 grid justify-center gap-4 md:grid-cols-2"
        >
          <div>
            <div class="pb-6">
              <div class="text-xs text-gray-300">
                Programming | Coding | Website Development
              </div>
              <div class="textLarge font-title font-bold uppercase text-n-gold">
                Information and tehcnology
              </div>
            </div>
            <div>
              <img src="/it.jpg" alt="" />
            </div>
          </div>

          <div class="space-y-4 px-6">
            <div>
              Join our Tech division as we dive into Coding/Programming & Web
              Development. As of recently we have decided to include this
              program allowing our users to learn about one of the most
              predominant industries of all time. Start earning and building !
            </div>
            <ul class="list-inside list-disc">
              <li>Trading cProgramming Solidity Smart Contracts</li>
              <li>Developing a programmers mindset</li>
              <li>Personal and corporate security</li>
              <li>WEB 2 vs WEB 3</li>
            </ul>
          </div>
        </div>
        <div
          v-show="selectedTab === 'Lifestyle'"
          class="relative z-20 grid justify-center gap-4 md:grid-cols-2"
        >
          <div>
            <div class="pb-6">
              <div class="text-xs text-gray-300">
                Health | Wellness | Fitness
              </div>
              <div class="textLarge font-title font-bold uppercase text-n-gold">
                Lifestyle
              </div>
            </div>
            <div>
              <img src="/l.jpg" alt="" />
            </div>
          </div>

          <div class="space-y-4 px-6">
            <div>
              Take advantage of our LIFESTYLE division to fulfil all the
              necessary gaps directly tying in to your overall success. A
              combination of our Revenue Generating Methods & our
              Positive/Healthy lifestyle tips will get you on track to becoming
              the best version of yourself and reach your full potential
            </div>
            <ul class="list-inside list-disc">
              <li>Healthy body- gym chats, gym programs, food plans</li>
              <li>Healthy mind-daily wellness, mental health, daily quotes</li>
              <li>Emphasis on consistency and discipline in life</li>
              <li>
                Moderators lead by example how to live a balance and fulfilled
                life
              </li>
            </ul>
          </div>
        </div>
        <div
          v-show="selectedTab === 'Networking'"
          class="relative z-20 grid justify-center gap-4 md:grid-cols-2"
        >
          <div>
            <div class="pb-6">
              <div class="text-xs text-gray-300">
                Events | Opportunities | Leads | Practices
              </div>
              <div class="textLarge font-title font-bold uppercase text-n-gold">
                NETWORKING
              </div>
            </div>
            <div>
              <img src="/n.jpg" alt="" />
            </div>
          </div>

          <div class="space-y-4 px-6">
            <div>
              Your Net Worth is your Network ! Join our community of like minded
              individuals all sharing the same tunnel vision for success and
              ultimate financial freedom for endless connections & opportunities
            </div>
            <ul class="list-inside list-disc">
              <li>Gain access to other like minded individuals</li>
              <li>Form connections within the space</li>
              <li>Collaborate and work on projects together</li>
              <li>Grow together to be strong</li>
            </ul>
          </div>
        </div>
      </div>
    </AtomAnimate>
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
          title: `Lifestyle`,
          image: '/lifestyle.svg',
        },
        {
          title: `Networking`,
          image: '/networking.svg',
        },
      ],
    };
  },
};
</script>
