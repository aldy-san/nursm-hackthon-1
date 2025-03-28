<template>
  <main>
    <div class="container mx-auto grid md:grid-cols-5 gap-8 py-4">
      <div class="grid mb-auto">
        <span class="font-bold text-xl">Filter</span>
        <div class="shadow-sm border p-4 mt-4 rounded-lg">
          <span class="font-bold">Category</span>
          <Checkbox label="asda" />
        </div>
      </div>
      <div class="grid md:col-span-4 gap-2 mb-auto">
        <div class="flex justify-between items-center">
          <span>Showing 1 - 20 of ""</span>
          <div class="flex items-center gap-4">
            <span>Sort By: </span>
            <Select :options="['Name', 'Popular']" />
          </div>
        </div>
        <div class="grid grid-cols-4 gap-3">
          <div
            v-for="(item, i) in 20"
            :key="i"
            class="shadow-sm border rounded-lg grid gap-2 overflow-hidden"
          >
            <img src="https://placehold.co/400" alt="" />
            <div class="grid gap-1 px-4 pb-4">
              <span class="text-sm">{{
                limitChars(
                  "Cartiera Dapper Bag Tas Laptop Ransel Pria Wanita Anti Air Waterproof Premium Backpack Sekolah Kantor Kerja Outdoor"
                )
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
