<template>
  <header class="py-3 border-b border-gray-300">
    <div class="container mx-auto flex items-center gap-4 md:gap-8 px-4">
      <NuxtLink to="/" class="font-bold text-3xl max-md:hidden">LOGO</NuxtLink>
      <div class="w-full relative">
        <Icon
          name="uil:search"
          class="absolute left-4 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          class="input-default !pl-10"
          placeholder="Search Anything"
        />
      </div>
      <div class="flex gap-4">
        <button
          class="px-2 aspect-square hover:bg-black hover:text-white transition-all"
        >
          <Icon name="mdi:cart-outline" />
        </button>
        <button
          class="px-2 aspect-square hover:bg-black hover:text-white transition-all"
        >
          <Icon name="mdi:bell-outline" />
        </button>
        <button
          class="px-2 aspect-square hover:bg-black hover:text-white transition-all"
        >
          <Icon name="uil:user-circle" />
        </button>
      </div>
    </div>
  </header>
</template>
