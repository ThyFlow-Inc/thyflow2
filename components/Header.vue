<template>
  <header class="header">
    <div class="logo-box">
      <img class="logo" src="~assets/logo.png" alt="logo" />
    </div>
    <div class="text-box">
      <h1 class="heading-primary">
        <span class="heading-primary-main">ThyFLow</span>
        <span class="heading-primary-sub">Connecting barbers with local customers</span>
      </h1>
      <a href class="btn btn-white">Book a barber</a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
body {
  font-weight: 400;
  font-size: 16px;
  color: #777;
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
}
.logo {
  height: 35px;
}
.text-box {
  position: absolute;
  top: 50%;
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
  display: block;
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

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(-10px);
  }
}
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
}
.btn-white {
  background-color: #fff;
  color: #777;
  border-radius: 20px;
}
</style>
