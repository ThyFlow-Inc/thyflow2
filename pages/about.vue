<template>
  <div class="about">
    <Navbar />
    <AboutHeader />
    <section class=" pt-12 pb-10 bg-gallery">
      <div class="container">
        <h2
          class="m-8  text-center text-greenery font-bold text-5xl lg:text-6xl"
        >
          Our <span class="text-orange-500">Core</span> Values<span
            class="text-orange-500"
            >.</span
          >
        </h2>
        <div>
          <div class="text-peachy text-6xl">
            <span class="text-stroke-peachy">
              01
            </span>
            <span class="font-hairline opacity-50">/</span>
          </div>
          <div class="flex flex-wrap -mx-4">
            <p
              class="w-full px-4 mb-4 text-greenery leading-tight text-4xl md:w-1/2 lg:text-5xl"
            >
              Value For People
            </p>
            <div class="w-full px-4 leading-relaxed md:w-1/2">
              <p class="text-1xl sm:text-xl">
                We will treat all people with respect, dignity, and courtesy.
              </p>
            </div>
          </div>
          <hr class="mt-12" />
          <div>
            <div class="text-peachy text-6xl">
              <span class="text-stroke-peachy">02</span>
              <span class="font-hairline opacity-50">/</span>
            </div>
            <div class="flex flex-wrap -mx-4">
              <p
                class="w-full px-4 mb-4 text-greenery leading-tight text-4xl md:w-1/2 lg:text-5xl"
              >
                Customer Focus
              </p>
              <div class="w-full px-4 leading-relaxed md:w-1/2">
                <p class="text-1xl sm:text-xl">
                  The customer is the BOSS. If we are not supporting the
                  customer directly, we serve the service providers that do.
                  Customer service trumps everything!
                </p>
              </div>
            </div>
            <hr class="mt-12" />
          </div>
          <div>
            <div class="text-peachy text-6xl">
              <span class="text-stroke-peachy">03</span>
              <span class="font-hairline opacity-50">/</span>
            </div>
            <div class="flex flex-wrap -mx-4">
              <p
                class="w-full px-4 mb-4 text-greenery leading-tight text-4xl md:w-1/2 lg:text-5xl"
              >
                Constant Improvement
              </p>
              <div class="w-full px-4 leading-relaxed md:w-1/2">
                <p class="text-1xl sm:text-xl">
                  Good enough never is sufficient. We have a strong work ethic
                  because we enjoy what we do.
                </p>
              </div>
            </div>
            <hr class="mt-12" />

          </div>
          <div>
            <div class="text-peachy text-6xl">
              <span class="text-stroke-peachy">04</span>
              <span class="font-hairline opacity-50">/</span>
            </div>
            <div class="flex flex-wrap -mx-4">
              <p
                class="w-full px-4 mb-4 text-greenery leading-tight text-4xl md:w-1/2 lg:text-5xl"
              >
                Passion for Winning
              </p>
              <div class="w-full px-4 leading-relaxed md:w-1/2">
                <p class="text-1xl sm:text-xl">
                  We have an unyielding drive to win. But always remain
                  humble.
                </p>
              </div>
            </div>
          </div>
          <!-----------New Core Value Added--->
          <div>
            <div class="text-peachy text-6xl">
              <span class="text-stroke-peachy">05</span>
              <span class="font-hairline opacity-50">/</span>
            </div>
            <div class="flex flex-wrap -mx-4">
              <p
                class="w-full px-4 mb-4 text-greenery leading-tight text-4xl md:w-1/2 lg:text-5xl"
              >
                Unique Culture
              </p>
              <div class="w-full px-4 leading-relaxed md:w-1/2">
                <p class="text-1xl sm:text-xl">
                  We hold ourselves and each other accountable, and work well as
                  a team, collaborate, and embrace a lean, flat and horizontal structure.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="features features--right features--image">
      <div class="container">
        <div
          class="features__container flex flex-wrap lg:flex-no-wrap lg:-mx-4"
        >
          <div
            class="features__visual-col w-full lg:flex lg:items-center lg:w-1/2 features__visual-col--image"
          >
            <div class="features__image-wrapper aos-init aos-animate">
              <img
                src="~/assets/barber_11.jpg"
                alt="barber"
                class="features__image features__image--mobile-center"
              />
            </div>
          </div>
          <div class="features__content xl:pr-16">
            <div class="flex-1">
              <div
                class="badge badge--solid badge--solid-peachy badge--fw-lg mb-10"
              >
                <img src="~/assets/clipper.png" alt="" class="h-12" />
              </div>
              <div
                class="flex items-center text-base text-orange-500 font-bold"
              >
                <h2 class="text-1xl">Our Story</h2>
              </div>
              <div class="content-strong-peachy mb-8 leading-loose">
                <p class=" text-1xl sm:text-lg">
                  The ThyFlow team believes having a mobile barber/hairstylist
                  ensures our customers to have a personalized and tailored hair
                  cutting experience. Users can stay home, request a local
                  barber or hairstylist, and receive a haircut with ease. As we
                  employ barbers and hairstylists within your neighborhood, who
                  are passionate about what they do, well qualified, and believe
                  in quality over quantity with each appointment.
                </p>
                <p>
                  We offer local hairstyles and barbers a great income and
                  access to many customers within their neighborhood. Where they
                  can provide an exceptional service; while focusing on their
                  craft. ThyFlow is your option for a local, timely, and
                  outstanding service that leaves you clean, confident, and
                  fresh.
                </p>
              </div>
              <div
                class="flex items-center text-base text-orange-500 font-bold"
              >
                <p class="">Support@thyflow.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ApplyBarber />

    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import AboutHeader from "~/components/AboutHeader.vue";
import OurStory from "~/components/OurStory.vue";
import ApplyBarber from "~/components/ApplyBarber.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    AboutHeader,
    OurStory,
    ApplyBarber,
    Footer
  }
};
</script>

<style lang="css" scoped>
.btn {
  display: inline-block;
  padding: 0.7778rem 1.5rem;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  transition: color 0.2s, box-shadow 0.2s, background-color 0.2s,
    border-color 0.2s, fill 0.2s, opacity 0.2s;
}
.bg-gallery {
  background-color: #ebefed;
}
.content-strong-peachy strong,
.slice-text strong {
  color: #f5a08c;
}
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}

.text-peachy {
  color: #f5a08c;
}

.text-stroke-peachy {
  color: transparent;
  font-weight: 700;
  -webkit-text-stroke: 0.8px #f5a08c;
}

@media (-ms-high-contrast: none), screen and (-ms-high-contrast: active) {
  .text-stroke-peachy {
    color: #fff;
    text-shadow: -1px -1px 0 #f5a08c, 1px -1px 0 #f5a08c, -1px 1px 0 #f5a08c,
      1px 1px 0 #f5a08c;
  }
}

.hero {
  position: relative;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  color: #fff;
  background-color: #0f6973;
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

.display-0 {
  line-height: 1;
  font-size: 10rem;
}

.display-1 {
  line-height: 1;
  font-size: 5rem;
}

.display-2 {
  line-height: 1;
  font-size: 4.444rem;
}

.display-3 {
  line-height: 1;
  font-size: 3.889rem;
}
.leading-relaxed {
  line-height: 1.625;
}

.features {
  overflow: hidden;
}

@media (min-width: 1024px) {
  .features--left .features__visual-col--image {
    padding-right: 4rem;
  }
}

@media (min-width: 1024px) {
  .features--left .features__visual-col {
    order: 0;
  }
  .features--left .features__visual-col--overflow .features__image {
    background-position: 100%;
  }
  .features--left .features__visual-col .features__image {
    right: 0;
  }
}

@media (min-width: 1024px) {
  .features--right .features__visual-col--image {
    padding-left: 4rem;
  }
}

@media (min-width: 1024px) {
  .features--right .features__visual-col {
    order: 1;
  }
  .features--right .features__visual-col--overflow .features__image {
    background-position: 0;
  }
  .features--right .features__visual-col .features__image {
    left: 0;
  }
}

.features--image {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.features--overflow {
  padding-top: 3rem;
}

@media (min-width: 1024px) {
  .features--overflow {
    padding-bottom: 3rem;
  }
}

.features--overflow .features__image-wrapper {
  height: 500px;
}

@media (min-width: 768px) {
  .features--overflow .features__image-wrapper {
    height: 625px;
  }
}

@media (min-width: 1024px) {
  .features--overflow .features__image-wrapper {
    height: 100%;
  }
}

.features--overflow .features__image {
  position: absolute;
  height: 100%;
  margin-left: -1rem;
  margin-right: -1rem;
  background-size: contain;
  width: 9999px;
  max-width: inherit;
  max-height: 1000px;
}

.features--overflow .features__image--mobile-left {
  left: 0;
  background-position: 0;
}

.features--overflow .features__image--mobile-center {
  left: 50%;
  background-position: 50%;
  transform: translateX(-50%);
}

.features--overflow .features__image--mobile-right {
  right: 0;
  background-position: 100%;
}

@media (min-width: 1024px) {
  .features--overflow .features__image {
    right: inherit;
    left: inherit;
    transform: translateY(-50%);
  }
}

@media (min-width: 1024px) {
  .features--overflow .features__content {
    margin-top: 0;
    margin-bottom: 0;
  }
}

.features--overflow .features__visual-col--overflow {
  margin-top: -3rem;
  background-color: transparent;
}

@media (min-width: 1024px) {
  .features--overflow .features__visual-col--overflow {
    margin-bottom: -3rem;
    min-height: 720px;
  }
}

.features--accordions {
  margin-top: 0;
  margin-bottom: 0;
}

@media (min-width: 1024px) {
  .features--accordions .features__visual-col {
    height: 900px;
  }
}

.features__content {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 2.5rem;
}

@media (min-width: 1024px) {
  .features__content {
    width: 50%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
}

.features__image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.features__image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  height: 411.42857px;
}

@media (min-width: 1024px) {
  .features__image {
    position: absolute;
    top: 50%;
    width: 720px;
    max-width: calc(50vw - 1rem);
    height: inherit;
    max-height: 864px;
    transform: translateY(-50%);
  }
}

@media (min-width: 1240px) {
  .features__image {
    max-width: calc(50vw - 4rem);
  }
}

.features__image-play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (min-width: 1024px) {
  .features__image-play-button {
    transform: translate(calc(-50% - 1rem), -50%);
  }
}

@media (min-width: 1240px) {
  .features__image-play-button {
    transform: translate(calc(-50% - 4rem), -50%);
  }
}
</style>
