<template>
  <div class="pt-2 bg-white md:pt-8 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <!--Left Col-->
    <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
      <h1
        class="my-2 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
      >Download ThyFlow Mobile Apps</h1>

      <p
        class="text-blue-400 font-bold pb-4 lg:pb-3 text-center md:text-left fade-in"
      >Download our app:</p>
      <div class="flex w-full justify-center md:justify-start pb-4 lg:pb-0 fade-in">
        <a href="https://play.google.com/store/apps/details?id=com.thyflow.orderingapp">
          <img src="~/assets/googleplay.svg" class="h-12 pr-4 bounce-top-icons" />
        </a>

        <a href="#">
          <img src="~/assets/appstore.svg" class="h-12 bounce-top-icons" />
        </a>
      </div>
    </div>

    <!--Right Col-->
    <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
      <img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="~/assets/devices.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
</style>