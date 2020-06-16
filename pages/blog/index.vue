<template>
  <div>
    <Navbar />
    <section class="flex-1">
      <div class="lg:mt-24 sm:mt-12 ">
        <article class="text-center">
          <!-- Button to edit document in dashboard -->
          <!-- Template for page title -->
          <h1 class="blog-title">
            ThyFlow Blog
          </h1>
          <!-- Template for page description -->
          <p class="blog-description">
            Where we write about our journey
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
    <section class="bg-grey-lighter py-10">
      <div class="flex flex-wrap lg:mx-8">
        <div
          class="flex items-center md:items-start flex-col px-16 pb-8 w-1/3"
          v-for="(blogPost, index) in blogPosts"
          :key="index"
        >
          <div
            class="h-full border-2 border-gray-200 rounded-lg overflow-hidden"
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              :src="blogPost.thumbnail"
            />

            <nuxt-link
              class="title-font text-lg font-medium text-gray-900 m-4"
              :to="'/blog/' + blogPost.slug"
              >{{ blogPost.title }}</nuxt-link
            >
            <p class="leading-relaxed m-4">{{ blogPost.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
// Importing blog posts widget

export default {
  name: "Home",

  components: {
    Navbar
  },
  head() {
    return {
      title: "ThyFlow Blog",
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ],
      link: [
        { src: "https://fonts.googleapis.com/css2?family=Poppins&display=swap" }
      ]
    };
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  }
};
</script>

<style lang="css" scoped>
body {
  font-family: "Poppins", Courier, monospace;
}
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
