<template>
  <div
    class="container mx-auto px-6 sm:px-12 sm:py-12 lg:py-2 xl:py-20 relative flex flex-col sm:flex-row"
  >
    <div
      class="sm:w-2/2 lg:w-full sm:py-16 lg:pt-24 pb-10 sm:pb-16 lg:pb-30 relative z-30 header rounded-lg"
    >
      <div class="pl-6">
        <h2 class="text-black font-bold leading-tight text-4xl">
          At <strong>ThyFlow</strong>, we believe
        </h2>
        <h2 class=" text-black font-bold leading-tight text-3xl">
          your appearance is
        </h2>
        <h2 class=" text-black font-bold tracking-wider text-3xl">
          part of your journey
        </h2>
        <h2 class="text-black font-bold tracking-wider text-3xl">
          to Confidence and Success.
        </h2>
        <p class="text-black text-xl sm:w-2/3 lg:w-1/2">
          Let our Top Rated, Handpicked, Local, Mobile, <br />
          Barbers and Hair Stylist Bring their service to YOU!
        </p>
        <form
          action="https://forms.zohopublic.com/thyflow/form/SoftwareEvaluation/formperma/MU3LPuPQcFL-l4IZfInMb1Bia7Vc1I79YkZpx59NXEY/htmlRecords/submit"
          name="form"
          method="POST"
          accept-charset="UTF-8"
          enctype="multipart/form-data"
          id="form"
        >
          <div class="md:w-1/3 sm:w-1/3">
            <input
              class="bg-blue-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              name="Email"
              type="text"
              placeholder="Your Email Address"
            />
          </div>
          <div class="lg:w-1/6 text-center lg:pt-4">
            <button
              class="block bg-blue-500 hover:bg-indigo-400 py-2 px-4 font-mono rounded-full text-sm font-mitr text-white uppercase mt-"
            >
              Get Invite
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class="sm:w-1/2 lg:w-2/3 relative sm:absolute bottom-0 right-0 bg-gray-300"
    >
      <video
        class="absolute left-0 right-0 w-full h-full object-cover z-10"
        src="https://res.cloudinary.com/thyflow/video/upload/v1588451371/thyvideo_xrhqf2.mp4"
        ref="videoRef"
        loop
        playsinline
        muted
        preload="auto"
      ></video>

      <div class="bg-gray-500 absolute inset-0 mt-12"></div>
      <svg
        class="relative z-20 pt-12 rounded-lg -ml-16"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Capa 1"
        viewBox="0 0 428.29 298.11"
      >
        <defs />

        <path
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.219"
          d="M62.79 256.91l-5.49-5.49 5.49-5.49v10.98z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [],
      title: "ThyFLow Beta",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins&display=swap"
        }
      ]
    };
  },
  components: {},
  mounted: function() {
    //this.$refs.videoRef.src = "./assets/thyvideo.mp4";
    this.$refs.videoRef.play();
  }
};
</script>

<style lang="css" scoped>
h2,
p {
  font-family: "Poppins", Courier, monospace;
}
.header {
  background: linear-gradient(
    to right,
    rgba(236, 159, 88, 0.801),
    rgba(228, 125, 28, 0.308)
  );
}
</style>
