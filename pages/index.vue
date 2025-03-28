<template>
  <main>
    <div
      class="container md:divide-x mx-auto md:divide-gray-300 grid md:grid-cols-5 gap-4 md:gap-8 px-4"
    >
      <SideFilter @trigger-loading="triggerLoading" />
      <div class="grid md:col-span-4 gap-2 mb-auto md:pl-8 md:pt-4">
        <div class="flex justify-between items-center">
          <span
            >Showing 1 - 20 of <span class="underline">Something</span></span
          >
          <div class="flex items-center gap-4">
            <span>Sort By: </span>
            <Select v-model="sort" :options="['Name', 'Popular']" />
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 pb-8">
          <template v-if="isLoading">
            <div
              v-for="i in 8"
              :key="i"
              class="animate-pulse w-full aspect-[2/3] bg-gray-200"
            ></div>
          </template>
          <template v-else>
            <CardProduct v-for="i in 12" :key="i" />
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const sort = ref("Name");
const isLoading = ref(false);
const triggerLoading = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
};
watch(
  () => sort.value,
  () => {
    triggerLoading();
  }
);
</script>
