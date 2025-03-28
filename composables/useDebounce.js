import { ref } from "vue";

export const debounce = (callback, wait) => {
  const timeoutId = ref(undefined);

  const debouncedFunction = (...args) => {
    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
    }

    timeoutId.value = window.setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args);
    }, wait);
  };

  return debouncedFunction;
};
