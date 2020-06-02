<template>
  <div>
    <NewNav />
    <BetaHeader1 />
    <BetaForm />
    <!-----Join Beta Form--->
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
