<template>
  <div>
    <header class="text-gray-700 body-font">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <a
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <nuxt-link to="/">
            <img src="~/assets/big_logo.png" class="ml-3 text-xl h-12" />
          </nuxt-link>
        </a>
        <nav
          class="md:ml-auto flex flex-wrap items-center text-base justify-center"
        ></nav>
        <button
          class="inline-flex text-white font-bold items-center bg-orange-500 py-1 px-3  hover:bg-orange-300 rounded text-lg mt-4 md:mt-0"
        >
          Home
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
    <div
      class="container flex flex-col justify-center items-center my-8 text-center"
    >
      <!--<div class="mt-2 text-lg text-peachy font-semibold lg:text-xl">
        ThyFlow Admin
      </div>-->
      <h2 class="lg:text-4xl md:text-2xl font-bold">
        {{ blogPost.title }}
      </h2>
    </div>
    <div class="rounded-lg h-64 overflow-hidden">
      <img class="rounded-lg w-full h-72" :src="blogPost.thumbnail" />
    </div>
    <div class="flex justify-center mt-10">
      <p class="inline-flex text-orange-500  py-2 px-6 font-bold  text-lg">
        Author | Sals from ThyFlow
      </p>
      <p class="ml-4 inline-flex text-blue-700  py-2 px-6 font-bold text-lg">
        Date | Nov, 17 2020
      </p>
    </div>
    <div
      class="container mt-4 text-greenery text-xl leading-snug md:mt-20 md:mb-10 md:text-2xl lg:mx-26"
    >
      <article
        class="lg:mx-64 md:mx-20 sm:mx-16"
        v-html="$md.render(blogPost.body)"
      ></article>
    </div>
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

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
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
@media (min-width: 1024px) {
  .article-hero {
    padding-right: 10vw;
    padding-left: 10vw;
  }
}

.container__article {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 18rem;
  padding-left: 18rem;
}

@media (min-width: 640px) {
  .container__article {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 8rem;
    padding-left: 8rem;
  }
}
.overflowhidden {
  overflow: hidden;
}
.blogSelected-horizontalImage {
  height: 56rem;
  background-size: contain;
  transition: all ease 0.35s;
  opacity: 0;

  &[lazy="loading"] {
    filter: blur(15px);
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
  &[lazy="loaded"] {
    opacity: 1;
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
  .intro {
    display: flex;
  }
}
.elevate-cover {
  display: flex;
  flex-direction: column;
  min-height: 459px;

  @media (min-width: 560px) {
    flex-direction: row;
  }

  &__img,
  &__textOffset {
    width: 100%;
  }

  &__left {
    max-width: 500px;
    width: 100%;
    padding: 2.4rem;
    margin-bottom: auto;

    @media (min-width: 560px) {
      margin-left: auto;
      padding: 2.4rem 4rem 2.4rem 2.4rem;
    }
  }

  &__textOffset {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 2rem;
    font-family: "Tiempos Headline", Arial, sans-serif;
    color: black;

    @media (min-width: 360px) {
      font-size: 4rem;
    }
  }

  &__description {
    margin: 0;
    opacity: 0;
    animation: fadeinmove 0.5s ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
}
.dynamicMarkdown {
  padding: 3.2rem 0;
  font-size: 16px;
  line-height: 1.7;
  color: black;

  > *:not(.datagrid):not(.image-placeholder) {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  @media (min-width: 360px) {
    padding: 7.2rem 0;
    font-size: 19px;
  }

  h2 {
    padding-bottom: 3rem;
    padding-bottom: 2rem;

    @media (max-width: 360px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.2rem;
    padding-bottom: 2rem;
  }
}
</style>
