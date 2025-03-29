<template>
  <aside class="grid mb-auto pt-8 max-md:border-b max-md:pb-4">
    <div class="flex items-center justify-between" @click="isOpen = !isOpen">
      <span class="font-semibold text-xl max-md:cursor-pointer">Filter</span>
      <Icon v-if="isOpen" name="uil:angle-up" class="text-2xl md:hidden" />
      <Icon v-else name="uil:angle-down" class="text-2xl md:hidden" />
    </div>
    <Transition name="fade">
      <div class="mt-4 grid gap-2" :class="isOpen ? 'block' : 'max-md:hidden'">
        <span class="font-medium">Category</span>
        <div class="flex flex-wrap gap-1 capitalize">
          <Button
            v-for="(item, i) in categories"
            :key="i"
            :text="item"
            :is-active="filter.category.includes(item)"
            @click="handleFilter(item, 'category')"
          />
        </div>
        <span class="font-medium">Gender</span>
        <div class="flex flex-wrap gap-1 capitalize">
          <Button
            v-for="(item, i) in genders"
            :key="i"
            :text="item"
            :is-active="filter.gender.includes(item)"
            @click="handleFilter(item, 'gender')"
          />
        </div>
        <span class="font-medium">Price</span>
        <input
          v-model="filter.price_from"
          type="text"
          class="input-default text-sm"
          placeholder="From"
          @keydown="useOnlyNumber"
          @input="onSearch"
        />
        <input
          v-model="filter.price_to"
          type="text"
          class="input-default text-sm"
          placeholder="To"
          @keydown="useOnlyNumber"
          @input="onSearch"
        />
        <span class="font-medium">Rating</span>
        <div class="flex flex-wrap gap-1 capitalize">
          <Button
            v-for="(item, i) in 5"
            :key="i"
            :text="item"
            :is-active="filter.rating.includes(item.toString())"
            @click="handleFilter(item.toString(), 'rating')"
          />
        </div>
      </div>
    </Transition>
  </aside>
</template>

<script setup>
import { Icon } from "#components";
import { useDebounceFn } from "@vueuse/core";

const isOpen = ref(true);
const emits = defineEmits(["triggerLoading"]);
const route = useRoute();
const router = useRouter();
const filter = ref({
  category: route.query?.category?.split(",") || [],
  price_from: route.query.price_from || "",
  price_to: route.query.price_to || "",
  rating: route.query?.rating?.split(",") || [],
  gender: route.query?.gender?.split(",") || [],
});
const categories = [
  "memory",
  "temperature",
  "extent",
  "ratio",
  "thing",
  "medicine",
  "cookie",
  "conclusion",
  "moment",
];
const genders = ["Men", "Women", "Boys", "Girls", "Babies", "Unisex"];
const handleFilter = (newItem, key) => {
  emits("triggerLoading");
  if (!filter.value[key].includes(newItem)) {
    filter.value[key].push(newItem);
  } else {
    filter.value[key] = filter.value[key].filter((item) => item !== newItem);
  }
};
const onSearch = useDebounceFn(async () => {
  emits("triggerLoading");
}, 500);
watch(
  () => filter.value,
  () => {
    router.replace({
      query: {
        category: filter.value.category?.length
          ? filter.value.category.join(",")
          : undefined,
        price_from: filter.value.price_from || undefined,
        price_to: filter.value.price_to || undefined,
        rating: filter.value.rating?.length
          ? filter.value.rating.join(",")
          : undefined,
        gender: filter.value.gender?.length
          ? filter.value.gender.join(",")
          : undefined,
      },
    });
  },
  { deep: true }
);
</script>
