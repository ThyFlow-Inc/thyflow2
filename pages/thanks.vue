<template>
  <div>
    <Navbar />
    <section class="container">
      <div class="lg:my-32 text-center">
        <h1 class="hero__title mb-4">
          <strong> Thank You!</strong>
        </h1>
      </div>
    </section>
    <section></section>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/Navbar.vue";
export default {
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
