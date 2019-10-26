<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const post = await import(`~/content/blog/${params.slug}.md`);
    const attr = post.attributes;
    const slug = params.slug;

    const {
      author,
      authorlink,
      date,
      summary,
      thumbnail,
      title,
      type,
      update
    } = attr;

    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };

    const publishedDate = new Date(date);
    const updatedDate = new Date(update);
    const published = publishedDate.toLocaleDateString('en-GB', dateOptions);
    const updated = updatedDate.toLocaleDateString('en-GB', dateOptions);

    return {
      title,
      author,
      authorlink,
      date,
      update,
      published,
      updated,
      type,
      thumbnail,
      summary,
      slug,
      html: post.html
    };
  }
};
</script>

<style lang="scss" scoped>
</style>