<template>
  <section class="border-top pt-110 pb-150">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-12">
          <div class="download-app-inner text-center">
            <h2 class="h1">
              Thank you for Joining<br />
              ThyFlow Beta Test.
            </h2>
            <h3>
              Thank you for Joining to ThyFlow Beta. Please, check your email
              because we sent you a message in which you will find further
              instructions on how to proceed from now on.We are looking forward
              to your feedback before releasing our latest version of ThyFlow.
            </h3>
            <a href="https://thyflow.com/beta" class="btn">Go back Home</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DownloadApp",
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
  }
};
</script>

<style scoped></style>
