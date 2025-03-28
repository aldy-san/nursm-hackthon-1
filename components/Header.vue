<template>
  <header class="container mx-auto py-3">
    <div class="flex items-center gap-8">
      <span class="font-bold text-3xl">LOGO</span>
      <div class="w-full relative">
        <Icon
          name="uil:search"
          class="absolute left-4 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          class="input-rounded !pl-10"
          placeholder="Search Anything"
        />
      </div>
      <button class="px-2 aspect-square rounded-md hover:bg-slate-100">
        <Icon name="mdi:cart-outline" />
      </button>
      <button class="px-2 aspect-square rounded-md hover:bg-slate-100">
        <Icon name="mdi:bell-outline" />
      </button>
      <button class="px-2 aspect-square rounded-md hover:bg-slate-100">
        <Icon name="uil:user-circle" />
      </button>
    </div>
  </header>
</template>
