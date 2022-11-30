<template>
  <TemplateDefault>
    <AtomSection
      class="relative flex min-h-screen items-center justify-center"
      tp="large"
      bp="large"
    >
      <AtomInner class="pt-16">
        <div class="mx-auto max-w-5xl">
          <img src="/logo.svg" alt="" class="w-full" />
        </div>
        <div class="relative z-10 mx-auto max-w-5xl text-center">
          <h1 class="textMedium pt-6 font-sans text-n-gold">
            Nascent Global provides education to our members on the fundamentals
            of long term wealth generation through live education, mentorship
            and resources.
          </h1>
        </div>
      </AtomInner>
    </AtomSection>
    <OrganismTabs />

    <AtomSection
      tp="large"
      bp="large"
      class="relative overflow-hidden text-white"
    >
      <AtomInner>
        <OrganismTwoColumn
          title="Exclusive Network of Entrepreneurs"
          image="/iphone.png"
          description="One of our main priorities is to empower those who are keen to pursue
           the paths of Entrepreneurship alongside our network."
        />
        <OrganismTwoColumn
          title="Wealth Generation"
          image="/mac.png"
          description="Nascent Global provides education to our members on the fundamentals of 
          long term wealth generation through live education, mentorship and resources."
          reverse
        />
      </AtomInner>
    </AtomSection>
    <MoleculePrice />
    <OrganismFAQ />
  </TemplateDefault>
</template>
