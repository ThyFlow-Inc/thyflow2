<template>
  <header class="header">
    <div class="logo-box">
      <img class="logo" src="~assets/logo.png" alt="logo" />
    </div>
    <h1
      class="heading-primary w-full my-2 text-6xl font-bold leading-tight text-center tracking-widest text-box"
    >ThyFLow</h1>
    <h1 class="w-full my-3 text-3xl font-bold leading-tight text-center sub-header">
      <span class="text_1">Mobile Barbers</span>
      <span class="text_2">Local Barbers</span>
    </h1>

    <a
      class="header-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full"
      href="https://www.thyflow.co"
    >Book a barber</a>
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
  animation: moveInRight 3s;
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

.text_1 {
  animation: text1;
}

.text_2 {
  animation: text2;
}

.text_1,
.text_2 {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  animation-duration: 15s;
  animation-timing-function: steps(25, end);
  animation-iteration-count: infinite;
}

.text_1::after,
.text_2::after {
  content: "|";
  position: absolute;
  right: 0;
  animation: caret infinite;
  animation-duration: 1s;
  animation-timing-function: steps(1, end);
}

@keyframes text2 {
  0%,
  50%,
  100% {
    width: 0;
  }

  60%,
  90% {
    width: 9em;
  }
}

@keyframes text1 {
  0%,
  50%,
  100% {
    width: 0;
  }
  10%,
  40% {
    width: 9em;
  }
}

@keyframes caret {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
