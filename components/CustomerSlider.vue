<template>
  <div class="bg-white">
    <h1
      class="w-full mb-2 text-4xl font-bold leading-tight text-center text-orange-500"
    >What our customers are saying</h1>

     
    
    <div class="w-full mb-4">
      <div class="h-1 mx-auto w-64 opacity-25 my-0 py-0 rounded-t"></div>
    </div>
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
      class="container mx-auto flex flex-wrap pt-4 pb-12 bg-white"
    >
      <SliderItem class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink gradient">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow gradient">
          <img class="h-16 w-16 rounded-full mx-auto pt-1 bg-white" src="~/assets/profile.png" />

          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-black px-6 text-center">Craig Rooney</div>
            <p
              class="text-black text-base px-12 mx-auto mb-5 text-center"
            >ThyFLow is a great platform to find awesome local barbers and we completely enjoy their services. 100% satisfied.</p>
          </a>
        </div>

        <div class="text-center md:text-left"></div>
      </SliderItem>
      <!--------------One------------>
      <SliderItem class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink gradient">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow gradient">
          <img class="h-16 w-16 rounded-full mx-auto pt-1 bg-white" src="~/assets/profile.png" />

          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-black px-6 text-center">Rahul Kumar</div>
            <p
              class="text-black text-base px-12 mx-auto mb-5 text-center"
            >If you are looking for a trusted baber platform, Thyflow is the best!</p>
          </a>
        </div>

        <div class="text-center md:text-left"></div>
      </SliderItem>
      <!-------------Second--------------->
      <SliderItem class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink gradient">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow gradient">
          <img class="h-16 w-16 rounded-full mx-auto pt-1 bg-white" src="~/assets/profile.png" />

          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-black px-6 text-center">David Trojan.</div>
            <p
              class="text-black text-base px-12 mx-auto mb-5 text-center"
            >What can I say, great price with excellent results. Thank you ThyFlow!</p>
          </a>
        </div>

        <div class="text-center md:text-left"></div>
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
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>