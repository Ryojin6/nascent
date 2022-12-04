<template>
  <AtomSection
    v-aos
    tp="large"
    bp="large"
    class="relative bg-gradient-to-b text-white transition-all duration-1000 ease-in-out"
  >
    <AtomInner>
      <AtomAnimate>
        <h2 class="textXLarge flex justify-center text-center text-n-gold">
          FAQ
        </h2>
      </AtomAnimate>
      <AtomAnimate class="mb-10">
        <MoleculeAccordionCard
          v-for="item in faq"
          :key="item.id"
          :title="item.title"
          :description="item.description"
        />
      </AtomAnimate>
    </AtomInner>
  </AtomSection>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          title: 'Can I get a refund?',
          description: `Due to the nature of the prodcut we are unable to provide any refunds`,
        },
        {
          title: 'Do I have a guarantee for gains?',
          description: `We cannot guarantee that anyone will be able to replicate the gains 
          of those within our server.`,
        },
        {
          title: 'Do you provide financial advice?',
          description: `We are not providing financial advice as a part of our service.`,
        },
      ],
    };
  },
};
</script>
