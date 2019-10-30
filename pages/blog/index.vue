<template>
  <div>
    <Navbar />
    <section>
      <div v-for="(blog, index) in blogList" :key="index" :post-info="blog" />
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import blogs from '~/content/blogs.json';

export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>