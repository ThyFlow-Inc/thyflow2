<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      };
  }
};
</script>

<style lang="scss" scoped>
</style>