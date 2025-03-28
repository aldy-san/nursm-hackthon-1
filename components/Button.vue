<template>
  <button
    class="border border-gray-300 flex-1 text-center font-medium px-3 py-1 hover:opacity-75 hover:border-opacity-75 cursor-pointer transition-all"
    :class="props.isActive && 'bg-black border-white text-white'"
    @click="emits('click')"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    default: "",
  },
  isActive: {
    type: Boolean,
    default: "",
  },
});
const emits = defineEmits(["click"]);
</script>
