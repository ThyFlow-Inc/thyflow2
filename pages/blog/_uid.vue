<template>
  <div>
    <Navbar />
    <div class="container" :data-wio-id="documentId">
      <div class="outer-container">
        <div class="back">
          <a href="https://thyflow.com/blog">back to list</a>
        </div>
        <!-- Button to edit document in dashboard -->
        <prismic-edit-button :documentId="documentId" />
        <!-- Template for page title -->
        <h1 class="blog-title">{{ $prismic.richTextAsPlain(document.title) }}</h1>
        <!-- Template for published date -->
        <p class="blog-post-meta">
          <span class="created-at">{{ formattedDate }}</span>
        </p>
      </div>
      <!-- Slice Block Componenet tag -->
      <slices-block :slices="slices" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
//Importing all the slices components
import SlicesBlock from "~/components/SlicesBlock.vue";

export default {
  name: "post",
  components: {
    Navbar,
    Footer,
    SlicesBlock
  },
  head() {
    return {
      title: "ThyFlow Blog"
    };
  },
  async asyncData({ params, error, req }) {
    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      // Query to get post content
      const post = await api.getByUID("post", params.uid);

      // Load the edit button

      // Returns data to be used in template
      return {
        document: post.data,
        documentId: post.id,
        slices: post.data.body,
        formattedDate: Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit"
        }).format(new Date(post.data.date))
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "" });
    }
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