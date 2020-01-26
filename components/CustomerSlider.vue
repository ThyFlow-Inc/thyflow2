<template>
  <div>
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
      class="container mx-auto flex flex-wrap pt-4 pb-12"
    >
      <SliderItem
        v-for="(i, index) in list"
        :key="index"
        @click="changeIndex(1);"
        :style="i"
        class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink gradient"
      >
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow gradient">
          <img class="h-16 w-16 rounded-full mx-auto pt-1 bg-white" src="~/assets/profile.png" />

          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-white px-6 text-center">Craig Rooney</div>
            <p
              class="text-white text-base px-6 mb-5 text-center"
            >“What can I say, great price with excellent results. Thank you ThyFlow!”</p>
          </a>
        </div>

        <div class="text-center md:text-left">
          <p>Page noni {{ index + 1 }}</p>
        </div>
        <p class="mx-auto">Sub title</p>
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  data() {
    return {
      list: [],
      sliderValue: 2
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  },
  mounted() {
    setTimeout(
      () =>
        (this.list = [
          {
            backgroundColor: "#3f51b5",
            width: "100%",
            height: "100%",
            text: "I love thylow because of the seamless experience"
          },
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%"
          },
          {
            backgroundColor: "#f44336",
            width: "100%",
            height: "100%"
          },
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%"
          }
        ]),
      1000
    );
  }
};
</script>

<style lang="scss" scoped>
</style>