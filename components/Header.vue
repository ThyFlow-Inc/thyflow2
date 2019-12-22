<template>
  <header class="header">
    <div class="logo-box"></div>
    <h1
      class="zoom t-color heading-primary w-full my-2 text-6xl font-bold leading-tight text-center tracking-widest text-box"
    >
      <span>ThyFLow</span>
    </h1>
    <vue-typer
      class="t-color w-full my-3 text-3xl font-bold leading-tight text-center sub-header text-orange"
      :text="Yusadolat"
    ></vue-typer>
    <a
      class="header-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full"
      href="https://zfrmz.com/YwaCWiBx7wEJ3E7hNmZl"
    >Book a Mobile barber</a>
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
  height: 80vh;
  background-image: linear-gradient(
      to right,
      rgba(88, 201, 236, 0.801),
      rgba(28, 58, 228, 0.603)
    ),
    url("~assets/hero.png");
  background-size: cover;
  background-position: top;
  position: relative;
}
.logo-box {
  position: absolute;
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
.heading-primary-main {
  font-size: 64px;
  font-weight: 600;
  letter-spacing: 30px;
  animation: moveInLeft 2s;
}
.heading-primary-sub {
  display: block;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
  animation: moveInRight 3s;
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
