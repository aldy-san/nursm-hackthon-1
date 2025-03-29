<template>
  <div class="font-sans">
    <Header />
    <main class="min-h-screen">
      <slot />
    </main>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Product Catalog",
});
</script>
