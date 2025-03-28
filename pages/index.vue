<template>
  <main>
    <div class="container mx-auto grid md:grid-cols-5 gap-8 py-4">
      <div class="grid mb-auto">
        <span class="font-bold text-xl">Filter</span>
        <div class="shadow-sm border p-4 mt-4 grid gap-2 rounded-lg">
          <span class="font-bold">Category</span>
          <div class="grid gap-2">
            <Checkbox label="asda" value="asdasd" />
          </div>
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
          <CardProduct v-for="(item, i) in 20" :key="i" />
        </div>
      </div>
    </div>
  </main>
</template>
