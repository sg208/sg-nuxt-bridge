<template>
  <div class="container grid mx-auto text-center">
    <div class="grid-cols-12 mt-10">
      <h1 heading>Posts</h1>
      <p>From index page, the count is {{ counter.count }}</p>
    </div>
    <div v-if="posts" class="grid-cols-12 mt-10">
      <div
        v-for="post in posts"
        :key="post.id"
        class="p-5 mx-5 mb-5 border-2 border-solid rounded-lg"
      >
        <h2 v-html="post.title.rendered" />
      </div>
    </div>
    <div v-else class="grid-cols-12 mt-10">
      <div class="p-5 mx-5 mb-5 border-2 border-solid rounded-lg">
        <p>
          Sorry, something wrong with the post today! Nothing for you today!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: null,
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      await axios
        .get(
          `${this.$axios.defaults.baseURL}posts?_fields=title,id,slug&per_page=100`
        )
        .then((response) => {
          if (response) {
            this.posts = response.data;
          }
        });
    },
  },
};
</script>

<script setup>
import { useCounterStore } from "@/store/counter";

const counter = useCounterStore();
</script>
