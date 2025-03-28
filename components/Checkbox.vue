<template>
  <label :for="props.label" class="flex gap-x-4">
    <input
      :id="props.label"
      v-model="isChecked"
      :name="props.label"
      type="checkbox"
      class="custom-checkbox cursor-pointer rounded checked:!bg-primary focus:ring-0 disabled:cursor-not-allowed disabled:checked:!bg-slate-300"
      :class="props.inputClass"
      :disabled="props.disabled"
      :value="props.value"
    />
    <span v-if="props.label">{{ props.label }} </span>
  </label>
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

<style lang="css">
.custom-checkbox[type="checkbox"] {
  width: 20px;
  height: 20px;
  color: #069dd8;
  cursor: pointer;
  overflow: visible;
  border-radius: 4px;
  &:focus {
    --tw-ring-color: #069dd8;
    --tw-ring-offset-width: 0px;
  }
}
</style>
