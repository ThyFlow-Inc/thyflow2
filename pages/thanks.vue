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
              Someone from our team will reach out to you via email.
            </h3>
            <a href="https://thyflow.com/" class="btn">Go back Home</a>
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
        {
          rel: "stylesheet",
          href: "/assets/css/bootstrap.min.css"
        },
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
