<template>
  <div class="mx-auto max-w-6xl border-b pb-6">
    <button
      :id="`label${_uid}`"
      type="button"
      class="custom-transition flex w-full justify-between space-x-10 p-4 font-bold sm:items-center"
      :aria-expanded="show ? 'true' : 'false'"
      :aria-controls="`title${_uid}`"
      @click="show = !show"
    >
      <h3 class="pt-6 text-left font-title text-xl xl:text-2xl">
        {{ title }}
      </h3>
      <span class="flex pt-6 font-bold sm:items-center">
        <span
          class="transform transition-transform duration-300"
          :class="show ? '-rotate-90' : 'rotate-90'"
        >
          <AtomIconArrow class="w-4" />
        </span>
      </span>
    </button>
    <transition name="slide-fade">
      <div v-if="show" class="textSmall px-4 pt-6">
        {{ description }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
