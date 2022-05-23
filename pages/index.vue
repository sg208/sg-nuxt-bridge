<template>
  <div class="grid justify-center">
    <!-- <Tutorial /> -->
    <p>{{ something }}</p>
    <button @click="counter.increment()" class="px-4 py-2 border-2 rounded-xl">
      Add some more {{ counter.count }}
    </button>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<script setup>
import { useCounterStore } from "@/store/counter";

const something = ref("here is somehting");
const counter = useCounterStore();
</script>
