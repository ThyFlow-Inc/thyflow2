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
  async asyncData({ app }) {
    async function awaitImport(blog) {
      const wholeMD = await import(`~/content/blog/${blog.slug}.md`);
      return {
        attributes: wholeMD.attributes,
        link: blog.slug
      };
    }

    const blogList = await Promise.all(
      blogs.map(blog => awaitImport(blog))
    ).then(res => {
      return {
        blogList: res
      };
    });

    return blogList;
  }
};
</script>

<style lang="scss" scoped>
</style>