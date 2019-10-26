<template>
  <div></div>
</template>

<script>
import blogs from '~/content/blogs.json';

export default {
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