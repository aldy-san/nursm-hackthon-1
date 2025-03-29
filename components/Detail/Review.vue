<template>
  <div class="col-span-full border-t grid gap-4 py-4">
    <span class="text-2xl font-semibold">Reviews</span>
    <div class="hover:border-black transition-all p-4">
      <div class="flex items-center justify-between">
        <div class="grid gap-2">
          <span class="text-4xl">4.0/5.0</span>
          <div class="flex">
            <Icon
              v-for="(item, i) in 5"
              :key="i"
              name="mdi:star"
              class="text-yellow-500 text-xl"
            />
          </div>
        </div>
        <div class="flex flex-wrap gap-4 text-nowrap">
          <Button
            v-for="(item, i) in reviewFilter"
            :key="i"
            :text="item"
            :is-active="filter.includes(item)"
            @click="handleFilter(item, 'filter')"
          />
        </div>
      </div>
    </div>
    <div v-for="(item, i) in 6" :key="i" class="grid gap-2 pb-4 border-b">
      <div class="flex justify-between">
        <div class="flex items-center gap-4">
          <img
            src="https://placehold.co/400"
            alt=""
            class="size-6 rounded-full"
          />
          <span>John Doe</span>
        </div>
        <span class="text-sm text-gray-500">5 Months ago</span>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex">
          <Icon
            v-for="(item, j) in 5"
            :key="j"
            name="mdi:star"
            class="text-yellow-500 text-xl"
          />
        </div>
        <span class="text-sm text-gray-500">for variant: Black, XL</span>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
    </div>
  </div>
</template>

<script setup>
const filter = ref([]);
const reviewFilter = [
  "5 Star (123)",
  "4 Star (24)",
  "3 Star (0)",
  "2 Star (1)",
  "1 Star (2)",
  "With Image or Video",
];
const handleFilter = (newItem) => {
  if (!filter.value.includes(newItem)) {
    filter.value.push(newItem);
  } else {
    filter.value = filter.value.filter((item) => item !== newItem);
  }
};
</script>
