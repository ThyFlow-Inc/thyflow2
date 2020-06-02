<template>
  <div>
    <NewNav />
    <BetaHeader1 />
    <BetaForm />
    <!-----Join Beta Form--->
    <div class="mt-6">
      <section class="slice slice-lg" id="beta-form">
        <div
          class="container position-relative zindex-100 b-section__bg--bottom"
        >
          <div class="row justify-content-center mb-5">
            <div class="col-lg-6 text-center lg:mt-10 sm:mt-6">
              <h2 class="font-bold">
                Be the first, to try ThyFlow mobile barber service.
              </h2>
              <p class="1h-190 mb-2">
                Beta test Starts
                <span class="text-underline">June 1, 2020</span>
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <!-- Form -->
              <form
                action="https://forms.zohopublic.com/thyflow/form/SoftwareEvaluation/formperma/MU3LPuPQcFL-l4IZfInMb1Bia7Vc1I79YkZpx59NXEY/htmlRecords/submit"
                name="form"
                id="form"
                method="POST"
                accept-charset="UTF-8"
                enctype="multipart/form-data"
              >
                <div class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Your name"
                    name="SingleLine"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="email"
                    name="Email"
                    placeholder="Your email here"
                    required
                  />
                </div>

                <div class="text-center">
                  <!-- <div class="g-recaptcha" data-sitekey="6Lfs5ScUAAAAANAJwGrdfvWLFRRiVbKRE2vfoaFj"></div> -->
                  <button type="reset" class="btn-reset d-none"></button>
                  <button
                    type="submit"
                    class="btn btn-block btn-lg btn-primary mt-4"
                  >
                    Join Beta Test
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import NewNav from "~/components/NewNav.vue";
import BetaHeader1 from "~/components/BetaHeader1.vue";
import BetaForm from "~/components/BetaForm.vue";
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
    BetaForm
  },
  mounted() {
    MediaBox(".mediabox");
  }
};
</script>

<style lang="css" scoped>
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
