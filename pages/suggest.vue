<template>
  <div>
    <Navbar />
    <header class="hero-over hero-over--curvy">
      <div class="container">
        <div class="my-12 text-center">
          <h1 class="hero__title mb-4">
            Below are the Cities we are launching in
          </h1>
          <p class="text-orange-500 text-2xl">
            San Francisco Bay Area
          </p>
        </div>
      </div>
    </header>

    <section class="slice-checkbox-grid my-20">
      <div class="container">
        <div class="bg-white rounded-xl px-10 py-6 lg:px-16 lg:py-10">
          <div class="flex flex-wrap -m-4">
            <div class="flex-grow w-full p-4 sm:w-1/2 lg:w-1/3">
              <div
                class="slice-checkbox-grid__item flex h-full items-center p-4 lg:px-8 lg:py-6"
              >
                <img src="~/assets/check.svg" alt="check" class="mr-4" />
                <div class="content-strong-peachy text-greenery">
                  <strong>Santa Clara</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mx-auto lg:px-24">
      <div class="pb-16">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          ThyFlow Cities
        </h1>

        <div class="mb-4 text-3xl font-bold text-center xl:text-4xl">
          Below are the Cities we are launching in
        </div>
        <div class="text-center pb-8 xl:text-center">
          <h2 class="uppercase text pb-8">
            <span class="pb-2 border-b-2">San Francisco Bay Area</span>
          </h2>
        </div>

        <p class="text-center">List of city we are launching in</p>
        <ul class="list-outside text-center">
          <li>Santa Clara</li>
          <li>San Jose</li>
          <li>Mountain View</li>
          <li>Sunnyvale</li>
          <li>Palo Alto</li>
          <li>Redwood City</li>
          <li>San Mateo</li>
          <li>Morgan Hill</li>
        </ul>
      </div>
      <section class="bg-white border-b">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <div class="w-full mb-4 text-center">
            <h2 class="text-orange-500 font-bold text-2xl">
              Suggest your city
            </h2>
            <a
              href="https://forms.zohopublic.com/thyflow/form/SuggestYourCitytoThyFlow/formperma/cmIzL3wHRCRENgpCYGxVwdwbVxPiiIsRFkPS5HLLyWg"
              >Fill this form</a
            >
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="css" scoped>
.content-strong-peachy strong,
.slice-text strong {
  color: #f5a08c;
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

.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
.hero-over {
  position: relative;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background-color: #139baa;
}

.hero-over--bg-overlap {
  padding-bottom: 25rem;
  margin-bottom: -25rem;
}

.hero-over--curvy {
  padding-bottom: 14rem;
  margin-bottom: -13rem;
}

.hero__title {
  font-size: 2rem;
  color: #fff;
  line-height: 1.2;
}

@media (min-width: 1024px) {
  .hero__title {
    font-size: 3.333rem;
  }
}

.hero__subtitle {
  color: #f5a08c;
  font-weight: 600;
}

@media (min-width: 1024px) {
  .hero__subtitle {
    font-size: 1.111rem;
  }
}
</style>
