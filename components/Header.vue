<template>
  <header class="header">
    <div class="logo-box"></div>
    <h1
      class="heading-primary w-full my-2 text-6xl font-bold leading-tight text-center tracking-widest text-box"
    >ThyFLow</h1>
    <vue-typer
      class="w-full my-3 text-3xl font-bold leading-tight text-center sub-header text-orange"
      :text="Yusadolat"
    ></vue-typer>
    <a
      class="header-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full"
      href="https://www.thyflow.co"
    >Book a barber</a>
  </header>
</template>

<script>
export default {
  data() {
    return {
      Yusadolat: [
        'Mobile Barbers',
        'Local Barbers',
        'Handpicked Barbers',
        'Haircut at home',
        'Your Private Barber',
        'Barbershop Experience at home'
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

span {
  color: orange !important;
}
.header {
  height: 80vh;
  background-image: linear-gradient(
      to right,
      rgba(88, 201, 236, 0.801),
      rgba(28, 58, 228, 0.603)
    ),
    url('~assets/hero.png');
  background-size: cover;
  background-position: top;
  position: relative;
}
.logo-box {
  position: absolute;
  top: 40px;
  left: 40px;
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
.vue-typer .custom.char {
  color: #d4d4bd;
}
</style>
