<template>
  <div>
    <header class="header mb-8">
      <!-- Start Header Navbar-->
      <div class="mainheader">
        <div class="main-menu-wrap">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-3 col-lg-3 col-md-4 col-6">
                <!-- Logo -->
                <div class="logo">
                  <nuxt-link to="/">
                    <img
                      src="~/assets/big_logo.png"
                      alt="thyflow"
                      class="h-10"
                    />
                  </nuxt-link>
                </div>
                <!-- End of Logo -->
              </div>
              <div class="col-xl-6 col-lg-6 col-md-4 col-6 menu-button">
                <div class="menu--inner-area clearfix">
                  <div class="menu-wrapper">
                    <nav>
                      <!-- Header-menu -->
                      <div class="header-menu dosis">
                        <div id="menu-button" class="">
                          <i class="fa fa-bars"></i>
                        </div>
                        <!----
                      <ul class="main-nav">
                        <li class="active">
                          <nuxt-link to="/">Home</nuxt-link>

                        </li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#app">App Screens</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li>
                          <a href="#">Blog</a>
                          <ul>
                            <li>
                              <nuxt-link to="/blog">Blog Posts</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/blog-details"
                                >single Post</nuxt-link
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>---->
                      </div>
                      <!-- End of Header-menu -->
                    </nav>
                  </div>
                </div>
              </div>
              <!--- <div class="col-lg-3 col-md-4 col-sm-5 d-md-block d-none">
              <div class="urgent-call text-right">
                <nuxt-link class="btn font-bold text-lg" to="/about">About Us</nuxt-link>
              </div>
            </div>-->
            </div>
          </div>
        </div>
      </div>
      <!-- End Header Navbar-->
    </header>
    <BetaHeader1 />
    <BetaForm1 />
    <!-----Join Beta Form--->
  </div>
</template>

<script>
import NewNav from "~/components/NewNav.vue";
import BetaHeader1 from "~/components/BetaHeader1.vue";
import BetaForm1 from "~/components/BetaForm1.vue";
import Video from "~/components/Video.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "beta",
  head() {
    return {
      script: [],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto&display=swap"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/bootstrap.min.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/font-awesome.min.css"
        },
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
    NewNav,
    BetaHeader1,

    BetaForm1
  },
  mounted() {
    MediaBox(".mediabox");
  }
};
</script>

<style lang="css" scoped>
html {
  font-display: "Roboto";
}
.section-title h2 {
  color: #36324a;
  font-weight: 600;
  margin-bottom: 30px;
}
.content-text-white a,
.content-text a,
.slice-text a,
.text-underline,
.text-underline-charcoal {
  background-repeat: repeat-x;
  font-weight: 600;
  padding-bottom: 3px;
  line-height: 1.5;
  background-image: linear-gradient(#f5a08c, #f5a08c);
  background-repeat: repeat-x;
  background-position: 0 95%;
  background-size: 1px 2px;
}
</style>
