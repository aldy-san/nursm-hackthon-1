<template>
  <div class="flex items-center gap-x-2">
    <div class="relative mt-1 cursor-pointer">
      <input
        :id="props.label"
        v-model="isChecked"
        type="checkbox"
        :value="props.value"
        class="size-5 rounded-md border appearance-none checked:bg-secondary relative"
        :class="props.inputClass"
      />
      <Icon
        name="uil:check"
        class="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none"
      />
    </div>
    <label
      :for="props.label"
      class="text-sm font-medium text-gray-900 cursor-pointer"
      >{{ props.value }}</label
    >
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [Array, String, Boolean],
    default: null,
  },
  label: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number, Object, Boolean],
    default: "",
  },
  inputClass: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:modelValue"]);

const isChecked = computed({
  get() {
    return props.modelValue;
  },
  set(checked) {
    emits("update:modelValue", checked);
  },
});
</script>

<style lang="css"></style>
