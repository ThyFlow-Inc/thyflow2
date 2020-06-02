<template>
  <div
    class="container mx-auto px-6 sm:px-12 sm:py-12 lg:py-2 xl:py-20 relative flex flex-col sm:flex-row"
  >
    <div
      class="sm:w-2/2 lg:w-full sm:pt-16 lg:pt-24 pb-10 sm:pb-16 lg:pb-30 relative z-30 bg-orange-400 bg-opacity-75 rounded-lg"
    >
      <h2 class="text-blue-900 font-bold tracking-wider text-3xl">
        At <stong>ThyFlow</stong>, we believe
      </h2>
      <h2 class=" text-blue-900 font-bold tracking-wider text-3xl">
        your appearance is
      </h2>
      <h2 class=" text-blue-900 font-bold tracking-wider text-3xl">
        part of your journey
      </h2>
      <h2 class="text-blue-900 font-bold tracking-wider text-3xl">
        to Confidence and Success.
      </h2>
      <p class="text-black  text-xl sm:w-2/3 lg:w-1/2">
        Let our Top Rated, Handpicked, Local, Mobile, Barbers and Hair Stylist
        Bring their service to YOU!
      </p>
      <div class="md:w-1/3">
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          value="Enter Your  Email"
        />
      </div>
      <div class="lg:w-1/6 text-center lg:pt-4">
        <a
          href="#"
          class="block bg-indigo-500 hover:bg-indigo-400 py-2 px-4 rounded-full text-sm font-mitr text-white uppercase mt-"
          >Get Invite</a
        >
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
        preload="auto"
      ></video>

      <div class="bg-gray-500 absolute inset-0 mt-16 -ml-8"></div>
      <svg
        class="relative z-20 pt-8 -ml-16"
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
          href: "https://fonts.googleapis.com/css?family=Roboto&display=swap"
        },

        {
          rel: "stylesheet",
          href: "/assets/plugins/mediabox/mediabox.min.css"
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

<style lang="scss" scoped></style>
