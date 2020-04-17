<template>
  <div>
    <Navbar />
    <section class="flex-1">
      <div class="lg:mt-24 sm:mt-12 ">
        <article class="text-center">
          <!-- Button to edit document in dashboard -->
          <prismic-edit-button :documentId="documentId" />
          <!-- Template for page title -->
          <h1 class="blog-title">
            {{ $prismic.richTextAsPlain(homepageContent.headline) }}
          </h1>
          <!-- Template for page description -->
          <p class="blog-description">
            {{ $prismic.richTextAsPlain(homepageContent.description) }}
          </p>
        </article>
      </div>

      <!-------Subcription form----->
      <div class=" mt-12">
        <form class="mt-8 sm:flex justify-center" action="#" method="post">
          <input
            type="email"
            name="EMAIL"
            required=""
            class="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
            placeholder="Enter your email"
          />
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
    <!----------Header Section------->
    <hr class="w-full bg-gray-100 my-12" style="height: 1px" />
    <section class="bg-grey-lighter pb-6">
      <div class="container">
        <!-- Check blog posts exist -->
        <div
          v-if="posts.length !== 0"
          class="hidden lg:flex flex-wrap lg:-mx-4"
        >
          <!-- Template for blog posts -->
          <section
            class="flex items-center md:items-start flex-col px-4 w-1/3 bg-white"
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
      </div>
    </section>
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
      console.log(homepageContent);
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

<style lang="css" scoped>
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1240px) {
  .container {
    max-width: 1240px;
  }
}
</style>
