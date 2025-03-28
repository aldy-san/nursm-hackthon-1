<template>
  <div
    class="relative px-4 py-2 border cursor-pointer flex items-center gap-4"
    @click="isOpen = !isOpen"
  >
    <span>{{ value || props.placeholder }}</span>
    <Icon name="uil:angle-down" class="text-lg" />
    <ul
      v-if="isOpen"
      class="absolute w-full grid top-[calc(100%+12px)] left-0 rounded-lg overflow-hidden shadow-md border"
    >
      <li
        v-for="(item, i) in props.options"
        :key="i"
        class="px-4 py-2 hover:bg-slate-50 bg-white"
        @click="emits('update:modelValue', item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const props = defineProps({
  modelValue: {
    type: [Array, String, Boolean],
    default: null,
  },
  placeholder: {
    type: String,
    default: "Select",
  },
  options: {
    type: Array,
    default: Array,
  },
});

const emits = defineEmits(["update:modelValue"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
  },
});
</script>
