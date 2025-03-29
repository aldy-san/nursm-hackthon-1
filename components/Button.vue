<template>
  <button
    class="btn"
    :class="props.isActive && 'btn-primary'"
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
    default: false,
  },
});
const emits = defineEmits(["click"]);
</script>

<style>
.btn {
  @apply flex items-center justify-center gap-3 border border-gray-300 flex-1 text-center font-medium px-3 py-1 hover:opacity-75 hover:border-opacity-75 cursor-pointer transition-all;
}
.btn-primary {
  @apply bg-black border-white text-white;
}
</style>
