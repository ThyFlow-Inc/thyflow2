<template>
  <div>
    <section class="container">
      <div class="lg:my-32 text-center">
        <h1 class="hero__title mb-4">
          <strong> Thank You!</strong>
        </h1>
      </div>
    </section>
    <section>
      <div class="lg:my-32 text-center">
        <h1 class="hero__title mb-4">
          <video autoplay src="~assets/thank-you.mp4"></video>
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/Navbar.vue";
export default {
  name: "Thanks",
  head() {
    return {
      script: [],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto&display=swap"
        },
        { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
        {
          rel: "stylesheet",
          href: "/assets/plugins/mediabox/mediabox.min.css"
        },
        { rel: "stylesheet", href: "/assets/css/style.css" },
        { rel: "stylesheet", href: "/assets/css/responsive.css" },
        { rel: "stylesheet", href: "/assets/css/custom.css" }
      ]
    };
  },
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
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

.hero__title {
  font-size: 2.667rem;
  color: orange;
  line-height: 1.2;
}

@media (min-width: 1024px) {
  .hero__title {
    font-size: 3.333rem;
  }
}
.content-page {
  position: relative;
  border-radius: 1.25rem;
  background-color: #fbfaf7;
}
.has-sticky-navbar .aside-sticky-fade-in {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  animation: fade-in-delayed 1s both;
}
.bg-gallery {
  background-color: #ebefed;
}
.slice-text ol,
.slice-text p,
.slice-text ul {
  margin-bottom: 1rem;
}
</style>
