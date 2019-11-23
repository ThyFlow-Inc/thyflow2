<template>
  <div>
    <Navbar />
    <section class="home">
      <article>
        <!-- Button to edit document in dashboard -->
        <prismic-edit-button :documentId="documentId" />
        <!-- Template for page title -->
        <h1 class="blog-title">{{ $prismic.richTextAsPlain(homepageContent.headline) }}</h1>
        <!-- Template for page description -->
        <p class="blog-description">{{ $prismic.richTextAsPlain(homepageContent.description) }}</p>
      </article>
    </section>
    <section class="mx-auto px-4">
      <ul class="flex">
        <li class="flex-1 mr-2">
          <a
            class="text-center block lg:text-2xl text-xl py-2 px-4 text-orange-500 font-semibold uppercase underline"
            href="#"
          >Recent</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="text-center block lg:text-2xl text-xl text-gray-500 hover:text-orange-500 hover:underline py-2 px-4 font-semibold uppercase"
            href="#"
          >Popular</a>
        </li>
        <li class="text-center flex-1">
          <a
            class="block py-2 px-4 lg:text-2xl text-xl text-gray-500 hover:text-orange-500 hover:underline font-semibold uppercase"
            href="#"
          >Barber Tips</a>
        </li>
      </ul>
    </section>
    <!-- Check blog posts exist -->
    <div v-if="posts.length !== 0" class="flex flex-wrap px-4">
      <!-- Template for blog posts -->
      <section
        class="w-full lg:w-1/3 md:w-1/3 xl:w-1/3 p-3 bg-gray-100 rounded-none"
        v-for="post in posts"
        :key="post.id"
        v-bind:post="post"
      >
        <!-- Here :post="post" passes the data to the component -->
        <blog-widget :post="post"></blog-widget>
      </section>
    </div>
    <!-- If no blog posts return message -->
    <div v-else class="blog-main">
      <p>No Posts published at this time.</p>
    </div>
    <ApplyBarber class="gradient" />
    <Footer />
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
// Importing blog posts widget
import BlogWidget from "~/components/BlogWidget.vue";
import ApplyBarber from "~/components/ApplyBarber.vue";

export default {
  name: "Home",
  components: {
    ApplyBarber,
    BlogWidget,
    Navbar,
    Footer
  },
  head() {
    return {
      title: "ThyFlow Blog"
    };
  },
  async asyncData({ context, error, req }) {
    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });
      // Query to get blog home content
      const document = await api.getSingle("blog_home");
      let homepageContent = document.data;
      // Query to get posts content to preview
      const blogPosts = await api.query(
        Prismic.Predicates.at("document.type", "post"),
        { orderings: "[my.post.date desc]" }
      );
      // Load the edit button
      if (process.client) window.prismic.setupEditButton();
      // Returns data to be used in template
      return {
        homepageContent,
        documentId: document.id,
        posts: blogPosts.results,
        image: homepageContent.image.url
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="sass" scoped>
.home
  max-width: 700px
  margin: auto
  text-align: center
  .blog-avatar
    height: 140px
    width: 140px
    border-radius: 50%
    background-position: center
    background-size: cover
    margin: 1em auto
  .blog-description
    font-size: 18px
    color: #9A9A9A
    line-height: 30px
    margin-bottom: 3rem
    padding-bottom: 3rem
    font-family: 'Lato', sans-serif
    border-bottom: 1px solid #DADADA
.blog-main
  max-width: 700px
  margin: auto
  text-align: left
  &.single img
    width: 100%
    height: auto
  &.single a
    text-decoration: none
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background-repeat: repeat-x
    background-size: 2px 2px
    background-position: 0 23px
.blog-post
  margin: 0
  margin-bottom: 3rem
@media (max-width: 767px)
  .home
    padding: 0 20px
  .blog-main
    padding: 0
    font-size: 18px
</style>