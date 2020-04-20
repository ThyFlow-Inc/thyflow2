<template>
  <div>
    <Navbar />
    <section class="mb-20 rounded-lg">
      <div
        class="pt-10 pb-12 text-center bg-gallery rounded-xl lg:pt-20 lg:pb-14"
      >
        <div class="px-10 lg:px-20">
          <h2 class="mb-6 text-greenery font-normal text-4xl lg:text-5xl">
            ThyFlow
            <strong><span class="text-peachy font-bold">Cities</span></strong>
          </h2>
          <p class="content-strong-peachy text-lg leading-loose mb-12">
            Below are the <span class="text-peachy font-bold"> Cities</span> we
            are launching in
          </p>
        </div>
        <div class="px-4 sm:px-10 lg:px-20">
          <div
            class="js-swiper-industries-container swiper-container pt-4 swiper-container-initialized swiper-container-horizontal flex flex-wrap"
          >
            <div
              class="swiper-wrapper flex flex-wrap"
              style="transform: translate3d(0px, 0px, 0px);"
            >
              <div
                class="swiper-slide mb-6 text-greenery swiper-slide-active"
                style="width: 196.8px; margin-right: 10px;"
              >
                <a href="#" class="flex items-center justify-center flex-col">
                  <div
                    class="badge badge--fw-xl badge--solid badge--solid-snow shadow-lg mx-4 mb-6 md:shadow-2xl md:badge--fw-2xl"
                  >
                    <img src="~assets/city.svg" alt="city" />
                  </div>
                  <div class="justify-center w-full">
                    <span class="font-bold text-greenery text-underline">
                      Santa Clara
                    </span>
                  </div>
                </a>
              </div>
              <div
                class="swiper-slide mb-6 text-greenery swiper-slide-next"
                style="width: 196.8px; margin-right: 10px;"
              >
                <a href="#" class="flex items-center justify-center flex-col">
                  <div
                    class="badge badge--fw-xl badge--solid badge--solid-snow shadow-lg mx-4 mb-6 md:shadow-2xl md:badge--fw-2xl"
                  >
                    <img src="~/assets/hotel.svg" alt="hotel" />
                  </div>
                  <div class="justify-center w-full">
                    <span class="font-bold text-greenery text-underline">
                      San Jose
                    </span>
                  </div>
                </a>
              </div>
              <div
                class="swiper-slide mb-6 text-greenery swiper-slide-active"
                style="width: 196.8px; margin-right: 10px;"
              >
                <a href="#" class="flex items-center justify-center flex-col">
                  <div
                    class="badge badge--fw-xl badge--solid badge--solid-snow shadow-lg mx-4 mb-6 md:shadow-2xl md:badge--fw-2xl"
                  >
                    <img src="~assets/agric.svg" alt="city" />
                  </div>
                  <div class="justify-center w-full">
                    <span class="font-bold text-greenery text-underline">
                      Mountain View
                    </span>
                  </div>
                </a>
              </div>
              <div
                class="swiper-slide mb-6 text-greenery swiper-slide-active"
                style="width: 196.8px; margin-right: 10px;"
              >
                <a href="#" class="flex items-center justify-center flex-col">
                  <div
                    class="badge badge--fw-xl badge--solid badge--solid-snow shadow-lg mx-4 mb-6 md:shadow-2xl md:badge--fw-2xl"
                  >
                    <img src="~assets/house1.svg" alt="city" />
                  </div>
                  <div class="justify-center w-full">
                    <span class="font-bold text-greenery text-underline">
                      Sunnyvale
                    </span>
                  </div>
                </a>
              </div>
              <div
                class="swiper-slide mb-6 text-greenery swiper-slide-active"
                style="width: 196.8px; margin-right: 10px;"
              >
                <a href="#" class="flex items-center justify-center flex-col">
                  <div
                    class="badge badge--fw-xl badge--solid badge--solid-snow shadow-lg mx-4 mb-6 md:shadow-2xl md:badge--fw-2xl"
                  >
                    <img src="~assets/city.svg" alt="city" />
                  </div>
                  <div class="justify-center w-full">
                    <span class="font-bold text-greenery text-underline">
                      Palo Alto
                    </span>
                  </div>
                </a>
              </div>
              <div
                class="swiper-slide mb-6 text-greenery swiper-slide-active"
                style="width: 196.8px; margin-right: 10px;"
              >
                <a href="#" class="flex items-center justify-center flex-col">
                  <div
                    class="badge badge--fw-xl badge--solid badge--solid-snow shadow-lg mx-4 mb-6 md:shadow-2xl md:badge--fw-2xl"
                  >
                    <img src="~assets/agric.svg" alt="city" />
                  </div>
                  <div class="justify-center w-full">
                    <span class="font-bold text-greenery text-underline">
                      Redwood City
                    </span>
                  </div>
                </a>
              </div>
              <div
                class="swiper-slide mb-6 text-greenery swiper-slide-active"
                style="width: 196.8px; margin-right: 10px;"
              >
                <a href="#" class="flex items-center justify-center flex-col">
                  <div
                    class="badge badge--fw-xl badge--solid badge--solid-snow shadow-lg mx-4 mb-6 md:shadow-2xl md:badge--fw-2xl"
                  >
                    <img src="~assets/hotel.svg" alt="city" />
                  </div>
                  <div class="justify-center w-full">
                    <span class="font-bold text-greenery text-underline">
                      San Mateo
                    </span>
                  </div>
                </a>
              </div>
              <div
                class="swiper-slide mb-6 text-greenery swiper-slide-active"
                style="width: 196.8px; margin-right: 10px;"
              >
                <a href="#" class="flex items-center justify-center flex-col">
                  <div
                    class="badge badge--fw-xl badge--solid badge--solid-snow shadow-lg mx-4 mb-6 md:shadow-2xl md:badge--fw-2xl"
                  >
                    <img src="~assets/agric.svg" alt="city" />
                  </div>
                  <div class="justify-center w-full">
                    <span class="font-bold text-greenery text-underline">
                      Morgan Hill
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="relative w-full lg:w-5/6 xl:w-4/6 mx-auto z-30 xl:shadow-xl p-5 rounded"
    >
      <div
        class="tracking-wide font-medium text-gray-500  w-full text-center  mb-4 font-medium text-lg ml-2"
      >
        <p>Suggest your growing city us</p>
      </div>
      <div
        class="flex flex-col md:flex-row justify-center items-center text-center"
      >
        <div class="text-center">
          <a
            href="https://forms.zohopublic.com/thyflow/form/SuggestYourCitytoThyFlow/formperma/cmIzL3wHRCRENgpCYGxVwdwbVxPiiIsRFkPS5HLLyWg"
            class="bg-orange-500 text-center text-gray-100 hover:text-white shadow font-bold text-sm lg:text-lg py-3 px-4 rounded-lg flex justify-start items-center cursor-pointer w-full md:w-64"
          >
            Suggest your city here
          </a>
        </div>
      </div>
    </div>

    <section
      class="container mx-auto pb-16 animation-fade animation-delay px-0 sm:px-5 mt-20"
    >
      <div
        class="pt-6 lg:pt-10 p-10 w-full lg:w-5/6 mx-auto block lg:flex z-30 bg-white sm:shadow-2xl rounded sm:border border-gray-200 pb-0 sm:pb-10"
      >
        <div class="w-full lg:w-2/3 mr-3">
          <h2
            class="font-bold text-xl sm:text-3xl lg:text-2xl text-center lg:text-left"
          >
            Subscribe to our Newsletter
          </h2>
          <p
            class="text-sm sm:text-normal lg:text-sm text-gray-500 tracking-wide text-center lg:text-left lg:mb-0 lg:mt-0 mb-6 mt-2 "
          >
            Be the first person to know when we lauch in your city
          </p>
        </div>
        <form action="#" class="self-stretch w-full block sm:flex items-center">
          <input
            type="email"
            class="bg-white border-2 border-gray-300 rounded sm:rounded-l sm:rounded-r-none p-4 py-3 block w-full appearance-none leading-normal outline-none focus:border-custom-purple flex-1 text-lg sm:border-r-0 form-inputs"
            placeholder="Your email address"
          />
          <button
            class="text-white py-3 px-10 w-full mt-4 sm:mt-0 sm:w-auto rounded sm:rounded-r sm:rounded-l-none bg-orange-500 font-normal block uppercase hover:bg-purple-400 transition border-2 border-custom-purple text-lg font-medium"
          >
            Sign me up
          </button>
        </form>
      </div>
    </section>
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

.content-strong-greenery strong,
.content-strong-peachy .text-greenery strong,
.slice-text .text-greenery strong {
  color: #0f6973;
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

.badge,
.tabs__item-icon {
  padding: 0.1rem;
  border-radius: 1.1rem;
}

.badge--fw {
  flex-shrink: 0;
  width: 3.5rem;
  height: 3.5rem;
}

.badge--fw-xs {
  flex-shrink: 0;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 1rem;
}

.badge--fw-sm,
.tabs__item-icon {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 1.2rem;
}

.badge--fw-md {
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 1.3rem;
}

.badge--fw-lg {
  flex-shrink: 0;
  width: 4.5rem;
  height: 4.5rem;
  padding: 0.15rem;
  border-radius: 1.4rem;
}

.badge--fw-xl {
  flex-shrink: 0;
  width: 5.5rem;
  height: 5.5rem;
  padding: 0.25rem;
  border-radius: 1.5rem;
}

.badge--fw-2xl {
  flex-shrink: 0;
  width: 7rem;
  height: 7rem;
  padding: 0.4rem;
  border-radius: 2rem;
}

.badge--outline {
  display: inline-block;
  padding: 1rem;
  border-width: 1px;
  border-radius: 0.8rem;
  text-align: center;
  font-size: 0.889rem;
  border-radius: 1.5rem;
}

@media (min-width: 768px) {
  .badge--outline {
    font-size: 1rem;
  }
}

.badge--outline-greenery {
  border-color: rgba(15, 105, 115, 0.3);
}

.badge--outline__icon {
  display: block;
}

.badge--solid-peachy,
.tabs__item-icon {
  background-color: #faebe6;
}

.badge--solid-gallery {
  background-color: #ebefed;
}

.badge--solid-snow {
  background-color: #fbfaf7;
}

.badge--solid-white,
.tabs__item--close .tabs__item-icon {
  background-color: #fff;
}

.badge--solid__icon {
  display: inline-block;
  vertical-align: middle;
}

.leading-loose {
  line-height: 1.7;
}
.bg-gallery {
  background-color: #ebefed;
}

.text-peachy {
  color: #f5a08c;
}

.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}

.hero__tagline {
  font-size: 1.111rem;
  line-height: 1.5;
  color: #f5a08c;
  font-weight: 700;
}
.hero__title {
  font-size: 1.6rem;
  line-height: 1.1;
}

@media (min-width: 1024px) {
  .hero__title {
    font-size: 2.333rem;
  }
}
</style>
