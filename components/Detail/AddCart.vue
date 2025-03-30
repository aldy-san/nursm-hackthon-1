<template>
  <div
    class="md:h-full bottom-0 left-0 bg-white max-md:border-t max-md:w-full max-md:fixed relative"
  >
    <div class="text-lg px-3 py-2 grid gap-4 md:sticky md:top-4 md:left-0">
      <div class="grid gap-4" :class="isOpen ? 'block' : 'max-md:hidden'">
        <div class="flex items-center justify-between">
          <span class="text-2xl font-medium">Variant & Quantity</span>
          <button
            class="md:!hidden btn !flex-none aspect-square !p-1"
            @click="isOpen = false"
          >
            <Icon name="mdi:close" />
          </button>
        </div>
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
            class="size-8 flex items-center justify-center border hover:opacity-75 hover:border-opacity-75 transition-all active:bg-gray-200"
            @click="qty !== 1 && qty--"
          >
            <Icon name="uil:minus" />
          </button>
          <span
            class="size-8 flex items-center justify-center border border-x-0"
            >{{ qty }}</span
          >
          <button
            class="size-8 flex items-center justify-center border hover:opacity-75 hover:border-opacity-75 transition-all active:bg-gray-200"
            @click="qty++"
          >
            <Icon name="uil:plus" />
          </button>
          <span class="ms-4 text-sm self-center">Stock: 20</span>
        </div>
      </div>
      <div class="grid gap-2">
        <button
          class="btn flex items-center justify-center gap-3"
          @click="isOpen = true"
        >
          <Icon name="mdi:cart-outline" />
          <span>Add to Cart</span>
        </button>
        <button class="btn btn-primary" @click="isOpen = true">
          <Icon name="uil:shopping-bag" />
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const isOpen = ref(false);
const qty = ref(1);
const color = ref("Red");
const size = ref("");
</script>
