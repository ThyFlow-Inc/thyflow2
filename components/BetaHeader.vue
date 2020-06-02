<template>
  <div class="banner-area-inner">
    <div class="banner-inner-area banner-area1">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <!-- banner text -->
            <div class="banner-text-inner">
              <div class="banner-shape-wrap">
                <div class="banner-shape-inner">
                  <img
                    src="/assets/img/banner/shaps1.png"
                    alt=""
                    class="shape shape1 rotate3d"
                  />
                  <img
                    src="/assets/img/banner/shaps2.png"
                    alt=""
                    class="shape shape2 rotate2d"
                  />
                  <img
                    src="/assets/img/banner/shaps3.png"
                    alt=""
                    class="shape shape3 rotate-2d"
                  />
                  <img
                    src="/assets/img/banner/shaps4.png"
                    alt=""
                    class="shape shape4 rotate3d"
                  />
                  <img
                    src="/assets/img/banner/shaps5.png"
                    alt=""
                    class="shape shape5 rotate2d"
                  />
                  <img
                    src="/assets/img/banner/shaps6.png"
                    alt=""
                    class="shape shape6 rotate-2d"
                  />
                  <img
                    src="/assets/img/banner/shaps7.png"
                    alt=""
                    class="shape shape7 rotate3d"
                  />
                </div>
              </div>

              <h1>ThyFlow Beta</h1>
              <p class="text-black mb-2">
                our team has been working on a way to make the barber industry
                mobile for local customers like you. We are here to tell you, WE
                DID IT!
              </p>
              <p class="text-black">
                The platform is called ThyFlow. It is a mobile app and website
                that lets users view profiles and book an appointment with a
                verify mobile barber. Yes, the barber will show up to your
                location with tools and a chair for your haircut. So you can sit
                back and relax.
              </p>
              <a href="#beta-form" class="btn bg-orange-500 text-white"
                >Join ThyFlow Beta</a
              >
              <a href="#Video" class="btn">Discover More</a>
            </div>
            <!-- banner text -->
          </div>
          <div class="col-lg-5 offset-lg-1 col-md-4 offse-xl-2">
            <!-- banner image-->
            <div class="banner-image">
              <img src="~/assets/barber_22.png" alt="" />
            </div>
            <!--End of banner image-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  head() {
    return {
      script: [],
      title: "ThyFLow Beta",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto&display=swap"
        },
        
        {
          rel: "stylesheet",
          href: "/assets/plugins/mediabox/mediabox.min.css"
        },
        
      ]
    };
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped></style>
