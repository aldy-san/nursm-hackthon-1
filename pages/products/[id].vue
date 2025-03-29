<template>
  <div class="container mx-auto grid gap-4 py-4">
    <div class="flex items-center gap-2">
      <template v-for="(item, i) in breadcrumbs" :key="i">
        <span>{{ item }}</span>
        <span v-if="i !== breadcrumbs.length - 1">/</span>
      </template>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 grid gap-4 grid-cols-5">
        <div class="relative col-span-2">
          <div class="grid gap-4 mb-auto sticky top-4 left-0">
            <img src="https://placehold.co/400" alt="" />
            <div class="grid grid-cols-4 gap-2">
              <img
                v-for="(item, i) in 4"
                :key="i"
                src="https://placehold.co/400"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-span-3 grid gap-4 mb-auto">
          <h1 class="font-medium text-xl">
            Cartiera Dapper Bag Tas Laptop Ransel Pria Wanita Anti Air
            Waterproof Premium Backpack Sekolah Kantor Kerja Outdoor
          </h1>
          <div class="flex items-center gap-2 text-sm">
            <span>28+ Sold</span>
            <span>•</span>
            <Icon name="mdi:star" class="text-yellow-500" />
            <span>4.8</span>
            <span>(31 rating)</span>
          </div>
          <div class="flex items-end gap-3">
            <span class="text-3xl font-bold"
              >$ 13.<span class="text-xl">49</span></span
            >
            <span class="text-lg font-bold text-gray-400 line-through"
              >16.<span class="text-sm">49</span></span
            >
          </div>
          <hr />

          <div class="flex border-b">
            <button
              v-for="(item, i) in ['Detail', 'Specification']"
              :key="i"
              class="px-8 border-b-2 pb-2"
              :class="tab === item ? 'border-black' : 'border-transparent'"
              @click="tab = item"
            >
              {{ item }}
            </button>
          </div>
          <article v-if="tab === 'Detail'" class="text-sm grid gap-2">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </article>
          <ul v-if="tab === 'Specification'" class="grid gap-2">
            <li class="flex">
              <span class="min-w-[30%] text-gray-700">Release Year</span>: 2001
            </li>
            <li class="flex">
              <span class="min-w-[30%] text-gray-700">Warranty Type</span>:
              Brand Warranty (Official)
            </li>
            <li class="flex">
              <span class="min-w-[30%] text-gray-700">Warranty Period</span>: 2
              Years
            </li>
          </ul>
          <hr />
          <NuxtLink class="flex items-center gap-6">
            <img
              src="https://placehold.co/400"
              alt=""
              class="size-12 rounded-full"
            />
            <span>Brand Name</span>
            <div class="ml-auto">
              <Button
                :text="isFollowed ? 'Followed' : 'Follow'"
                class="mr-auto"
                :is-active="isFollowed"
                @click="isFollowed = !isFollowed"
              ></Button>
            </div>
          </NuxtLink>
        </div>
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
        <hr />
      </div>
      <div class="h-full relative">
        <div class="border text-lg px-3 py-2 grid gap-4 sticky top-4 left-0">
          <span class="text-2xl font-medium">Variant & Quantity</span>
          <hr />
          <span class="text-xl font-medium">Choose Color</span>
          <div class="flex gap-3 flex-wrap">
            <Button
              v-for="(item, i) in ['Red', 'Blue', 'Black', 'Maroon']"
              :key="i"
              :is-active="color === item"
              :text="item"
              @click="color = item"
            ></Button>
          </div>
          <span class="text-xl font-medium">Choose Size</span>
          <div class="flex gap-3 flex-wrap">
            <Button
              v-for="(item, i) in ['S', 'M', 'L', 'XL']"
              :key="i"
              :is-active="size === item"
              :text="item"
              @click="size = item"
            ></Button>
          </div>
          <hr />
          <span class="text-xl font-medium">Change Quantity</span>
          <div class="flex">
            <button
              class="size-8 flex items-center justify-center border hover:bg-black hover:text-white"
              @click="qty !== 1 && qty--"
            >
              <Icon name="uil:minus" />
            </button>
            <span
              class="size-8 flex items-center justify-center border border-x-0"
              >{{ qty }}</span
            >
            <button
              class="size-8 flex items-center justify-center border hover:bg-black hover:text-white"
              @click="qty++"
            >
              <Icon name="uil:plus" />
            </button>
            <span class="ms-4 text-sm self-center">Stock: 20</span>
          </div>
          <div class="grid gap-2">
            <button class="btn flex items-center justify-center gap-3">
              <Icon name="mdi:cart-outline" />
              <span>Add to Cart</span>
            </button>
            <button class="btn btn-primary">
              <Icon name="uil:shopping-bag" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const breadcrumbs = ["Home", "Fashion", "Bag"];
const tab = ref("Detail");
const qty = ref(1);
const color = ref("Red");
const size = ref("");
const isFollowed = ref(false);
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
