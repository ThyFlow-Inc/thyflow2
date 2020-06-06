<template>
  <div>
    <barberHeader />
    <barberForm />
  </div>
</template>

<script>
import barberHeader from "~/components/barberHeader.vue";
import barberForm from "~/components/barberForm.vue";

export default {
  name: "barber",
  head() {
    return {
      script: [],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Dosis&display=swap"
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
    barberHeader,
    barberForm
  }
};
</script>

<style lang="css" scoped>
body {
  font-family: "Dosis", Courier, monospace;
}
</style>
