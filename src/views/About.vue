<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="breaking">Try to Breakpoint</button>
  </div>
</template>

<script>
export default {
  name: "about-page",
  methods: {
    breaking() {
      let i = 0;
      for (i; i < 10; i++) {
        console.log(`loop you ${i}`);
      }
      console.log("last i", i);
      alert("breaking");
    }
  }
};
</script>

<style>
</style>