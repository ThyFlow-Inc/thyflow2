<template>
  <div>
    <Navbar />

    <article>
      <h1>{{ blogPost.title }}</h1>

      <div class="container">
        <article class="p-4" v-html="$md.render(blogPost.body)"></article>
      </div>
    </article>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default {
  name: "post",
  components: {
    Navbar
  },
  head() {
    return {
      title: "ThyFlow Blog"
    };
  },
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      };
  }
};
</script>

<style lang="css" scoped>
.container {
  max-width: 700px;
  margin: auto;
}

.outer-container {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
}
a {
  color: #353535;
  background-repeat: repeat-x;
  background-size: 2px 2px;
  background-position: 0 23px;
}
</style>
