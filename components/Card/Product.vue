<template>
  <div class="shadow-sm border rounded-lg grid gap-2 overflow-hidden">
    <img src="https://placehold.co/400" alt="" />
    <div class="grid gap-1 px-4 pb-4">
      <span class="text-xs">{{
        limitChars(
          "Cartiera Dapper Bag Tas Laptop Ransel Pria Wanita Anti Air Waterproof Premium Backpack Sekolah Kantor Kerja Outdoor"
        )
      }}</span>
      <div class="flex gap-2 items-center">
        <span class="font-bold text-lg">Rp. 168.000</span>
        <span class="font-medium line-through text-xs text-slate-500"
          >Rp. 168.000</span
        >
      </div>
      <div class="flex items-center gap-1">
        <Icon name="mdi:star" class="text-yellow-500" />
        <span class="text-sm">4.8</span>
        <span class="text-sm">-</span>
        <span class="text-sm">28 Sold</span>
      </div>
    </div>
  </div>
</template>
