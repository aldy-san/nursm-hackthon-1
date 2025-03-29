<template>
  <div class="col-span-3 grid gap-4 mb-auto">
    <h1 class="font-medium text-3xl">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s
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
    <article v-if="tab === 'Detail'" class="grid gap-2">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </article>
    <ul v-if="tab === 'Specification'" class="grid gap-2">
      <li class="flex">
        <span class="min-w-[30%] text-gray-700">Release Year</span>: 2001
      </li>
      <li class="flex">
        <span class="min-w-[30%] text-gray-700">Warranty Type</span>: Brand
        Warranty (Official)
      </li>
      <li class="flex">
        <span class="min-w-[30%] text-gray-700">Warranty Period</span>: 2 Years
      </li>
    </ul>
    <hr />
    <NuxtLink class="flex items-center gap-6">
      <img src="https://placehold.co/400" alt="" class="size-12 rounded-full" />
      <div class="grid gap-1">
        <span>Brand Name</span>
        <div class="flex items-center gap-2">
          <Icon name="mdi:star" class="text-yellow-500" />
          <span class="text-sm">4.5/5.0</span>
        </div>
      </div>
      <span></span>
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
</template>
<script setup>
const tab = ref("Detail");
const isFollowed = ref(false);
</script>
