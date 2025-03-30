<template>
  <div class="container mx-auto grid gap-4 py-4 px-4">
    <div class="flex items-center gap-2">
      <template v-for="(item, i) in breadcrumbs" :key="i">
        <span>{{ item }}</span>
        <span v-if="i !== breadcrumbs.length - 1">/</span>
      </template>
    </div>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="md:col-span-2 grid gap-8 md:grid-cols-5 md:border-r md:pr-4">
        <DetailImage />
        <DetailContent />
        <DetailReview />
      </div>
      <DetailAddCart />
    </div>
  </div>
</template>

<script setup>
const breadcrumbs = ["Home", "Fashion", "Bag"];
</script>
