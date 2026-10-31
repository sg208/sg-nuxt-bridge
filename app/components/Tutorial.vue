<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      Hi, this is Engga
      <nuxt-link
        to="/hello"
        class="block text-red-500 underline hover:animate-bounce hover:ease-in-out"
      >
        Go to Hello page >>>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
};
</script>
