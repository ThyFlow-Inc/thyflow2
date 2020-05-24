<template>
  <header class="header flex text-center">
    <video
      src="https://res.cloudinary.com/thyflow/video/upload/v1588451371/thyvideo_xrhqf2.mp4"
      ref="videoRef"
      loop
      playsinline
      preload="auto"
    ></video>
    <h1
      class="logo-box w-full my-2 text-6xl font-bold leading-tight text-center tracking-widest lg:mt-32 sm:mt-28"
    >
      <span>ThyFlow</span>
    </h1>
    <vue-typer
      class="t-color w-full lg:mt-64 sm:mt-56 text-3xl font-bold leading-tight text-center  text-orange logo-box"
      :text="Yusadolat"
    >
    </vue-typer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      Yusadolat: [
        "Mobile Barbers",
        "Local Barbers",
        "Handpicked Barbers",
        "Haircut at home",
        "Your Private Barber",
        "Barbershop Experience at home"
      ]
    };
  },

  mounted: function() {
    //this.$refs.videoRef.src = "./assets/thyvideo.mp4";
    this.$refs.videoRef.play();
  }
};
</script>

<style lang="css" scoped>
body {
  font-weight: 400;
  font-size: 16px;
  color: #777;
}
.t-color {
  color: orange !important;
}
.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  color: orange;
}
.custom.char {
  /* Styles for each character
       e.g. color, background-color */
  color: orange;
}

.header {
  background-image: linear-gradient(
    to right,
    rgba(88, 201, 236, 0.801),
    rgba(28, 58, 228, 0.603)
  );
  background-size: cover;
  background-position: top;
  position: relative;
}
.logo-box {
  position: absolute;
  z-index: 1;
  top: 40px;
  left: 40px;
  color: orange;
}
.logo {
  height: 35px;
}
.text-box {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.sub-header {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: orange !important;
}
.header-button {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.heading-primary {
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.vue-typer,
.typed {
  background-color: transparent;
}
.selected[data-v-302772ec] {
  color: #000;
  background-color: #accef7;
}
</style>
