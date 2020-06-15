<template>
  <div>
    <Navbar />
    <div
      class="container flex flex-col justify-center items-center my-8 text-center"
    >
      <div class="mt-2 text-lg text-peachy font-semibold lg:text-xl">
        ThyFlow Admin
      </div>
      <h1 class="elevate-cover__title">
        {{ blogPost.title }}
      </h1>
    </div>
    <div class="text items-center">
      <img class="rounded-lg" :src="blogPost.thumbnail" />
    </div>

    <div
      class="mt-4 mb-5 px-2 content-text text-greenery text-xl leading-snug md:mt-20 md:mb-10 md:text-2xl lg:mx-26"
    >
      <article
        class="container small"
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
    font-size: 3rem;
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
    padding-bottom: 3.2rem;
    padding-bottom: 2rem;

    @media (max-width: 360px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.2rem;
    padding-bottom: 2rem;
  }

  li {
    list-style-type: initial;
  }

  pre {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 2.4rem;
    border-radius: 4px;
    background-color: #f6f8fa;
    overflow-x: scroll;
    display: block;
    margin-bottom: 5rem;

    code {
      background-color: #f6f8fa;
    }
  }

  code {
    background: #f3f4f4;
    border-radius: 4px;
    display: inline;
    color: bisque;
    font-size: 14px;
    padding: 0.2em 0.4em;

    @media (min-width: 350px) {
      font-size: 16px;
    }
  }
}
</style>
