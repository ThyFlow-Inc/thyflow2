<template>
  <div>
    <Navbar />
    <div class="header flex flex-wrap lg:mx-4 sm:mx-2">
        <!--Left Col-->
        <div
          class="w-full lg:w-3/6  sm:w-3/6 px-8 text-center lg:text-left self-center mt-5"
        >
          <h1 class="lg:mx-16 sm:mx-8 lg:text-5xl sm:text-2xl font-bold leading-none text-orange-700">
            Become a ThyFlow Barber
          </h1>
          <p class="lg:mx-16  sm:mx-6 text-white font-bold lg:text-2xl md:text-1xl">
            If you are looking for a flexible way to earn a great income doing
            what you enjoy, Join ThyFlow Barber Team.
          </p>
          <p class="lg:mx-16 sm:mx-4 text-white font-bold lg:text-2xl md:text-1xl">
            THYFLOW - This is an alternative way for men to get a haircut at
            home. ThyFlow, offer customers Barbershop experience at home or
            wherever they at. ThyFlow Barbers work within their neighborhood to
            drive to customer's homes to provide a haircut service.
          </p>
        </div>

        <!--Right Col-->
        <div
          class="w-full lg:w-3/6 px-4 text-center lg:center lg:text-left self-center lg:px-20 sm:px-10"
        >
                     <form action='https://forms.zohopublic.com/thyflow/form/JobApplicationForm1/formperma/1Mjwi0GhpXVJPdj52haw-eWIuyNXje40sTFLllnIVEk/htmlRecords/submit' name='form' method='POST'  accept-charset='UTF-8' enctype='multipart/form-data' id='form'>  

          <div
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-8"
          >
          
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>

                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  name="Name_First"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  name="Name_Last"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-email"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  name="Email"
                  type="text"
                  placeholder="Type your email"
                />

              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-phone"
                >
                  Phone Number
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  name="PhoneNumber_countrycode"
                  type="text"
                  placeholder="Type your Phone"
                />
              </div>
            </div>
            <!-----Checkbox----->
            <div class=" mb-6">
              <span class="text-xs uppercase font-bold"
                >Are you a certified barber?
              </span>
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="Radio"
                    value="Yes"
                  />
                  <span class="ml-2">Yes</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="Radio"
                    value="No"
                  />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </div>
            <button
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Submit Information
            </button>

          </div>

          <!---<img src="~/assets/barber.png" class="w-full xl:w-4/5 z-50 inline-block" />-->
              </form>

        </div>

      </div>

    <!--------------Header Done----------->
    <div class="flex flex-wrap md:px-16 md:py-16">
      <div class="w-6/6 sm:w-1/2 p-6">
        <p
          class="text-base md:text-3xl sm:text-xl mb-3 font-bold text-orange mx-4"
        >
          Why ThyFlow?
        </p>
        <p class="px-3 text-orange md:text-2xl sm:text-base mb-3">
          ThyFlow Team, focus on building a trusted platform for anyone to find
          verified Mobile Service providers in their local area and book an
          appointment. We connect service providers with customers that need and
          want their service, in a safe and secure manner.
        </p>
      </div>
      <div class="w-full sm:w-1/2 mb-5">
        <img
          class="zoom md:min-w-0 md:w-4/7 z-50 sm:w-full sm:h-full"
          src="~/assets/barber_33.jpg"
        />
      </div>
    </div>

    <!------Third section-------->
    <div class="header2">
      <div class="flex flex-wrap mx-4">
        <!--Left Col-->
        <div class="w-full lg:w-3/6 py-12 px-16 text-center lg:text-left self-center lg:mt-12 sm:mt-6 ">
          <!-------First section------>
          <button
            @click="button1 = true"
            class="bg-blue-500 hover:bg-blue-700 block text-white lg:text-2xl sm:1xl font-bold w-full py-2 lg:px-12 sm:px-4 border border-blue-700 rounded lg:mb-8 sm:mb-6"
          >
            What you'll do
          </button>

           <button
            @click="button1 = false"
            class="bg-blue-500 hover:bg-blue-700 text-white lg:text-2xl sm:text-1xl font-bold w-full py-2 lg:px-12 sm:px-6 border border-blue-700 rounded lg:mb-8"
          >
          What you'll need
          </button>
           <button
            @click="button1 = false"
            class="bg-blue-500 hover:bg-blue-700 text-white lg:text-2xl sm:text-1xl font-bold w-full py-2 lg:px-12  sm:px-6 border border-blue-700 rounded lg:mb-8"
          >
          Who we're looking for
          </button>
        </div>

        <div class="w-full lg:w-3/6 px-8 text-center lg:text-left self-center ">
          <!-------Second section------>
          <h4 v-show="!button1" class="text-white md:text-3xl sm:text-xl font-bold mb-3">
            Your Responsibilities
          </h4>
            <li class="text-white md:text-lg sm:text-base mb-3">
              Provide all customers with a High-Quality haircut.

              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </li>
            <li class="text-white md:text-lg sm:text-base mb-3">
              Represent the ThyFlow Brand.
              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </li>
            <li class="text-white md:text-lg sm:text-base mb-3">
            Provide exceptional customer service.
              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </li>
            
          <div v-show="button2" >
            <h4 class="text-white md:text-3xl sm:text-xl font-bold mb-3">
            Safety & Security is a key propriety to our team
          </h4>
            <p class="text-white md:text-lg sm:text-base mb-3">
              Barbers background

              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </p>
            <p class="text-white md:text-lg sm:text-base mb-3">
              Barbers license
              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </p>
            <p class="text-white md:text-lg sm:text-base mb-3">
              Two-step interview process

              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </p>
            <p class="text-white md:text-lg sm:text-base mb-3">
              Friends and family referral
              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </p>
            <p class="text-white md:text-lg sm:text-base mb-3">
              Interview by industry professional
              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-----------Willing do------->

    <div class="flex flex-wrap md:px-16 md:py-16">
      <div class="w-full sm:w-1/2 mb-5">
        <img
          class="zoom md:min-w-0 md:w-4/7 z-50 sm:w-full sm:h-full"
          src="~/assets/berber_44.jpg"
        />
      </div>
      <div class="w-6/6 sm:w-1/2 p-6">
        <p
          class="text-base md:text-3xl sm:text-xl mb-3 font-bold text-orange mx-4"
        >
          Rewarding Benefits?
        </p>
        <p class="px-3 text-orange md:text-2xl sm:text-base mb-3">
          We offer competitive benefits to keep you healthy and grow your career.
        </p>
        <p class="text-orange md:text-lg sm:text-base mb-3 mx-6">
          <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
              Competitive pay
            </p>
            <p class="text-orange md:text-lg sm:text-base mb-3 mx-6">
              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
              Monthly bonus
              
            </p>
      </div>
      
    </div>

    <!-------Finish Tabs------>
   <!-- <div class="mx-auto flex flex-wrap pt-4 pb-4">
      <h1
        class="mx-auto block text-5xl font-bold leading-none text-orange self-center"
      >
        Interested?
      </h1>
    </div>
    <div class="w-full text-center  self-center">
      <a
        href="https://thyflow.zohorecruit.com/careers"
        class="bg-blue-500 hover:bg-blue-400 text-white w-full font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-2xl"
        >Fill the form here!</a
      >
    </div>--->
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

import Footer from "~/components/Footer.vue";



export default {
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    button1: false,
    button2: false
  }),
  methods: {

    }
  
};
</script>
<style lang="scss" scoped>
.default-tabs {
  position: relative;
  margin: 0 auto;
  &__item {
    display: inline-block;
    margin: 5px;
    padding: 10px;
    padding-top: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: white;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    &_active {
      color: white;
    }
    &:hover {
      border-bottom: 2px solid gray;
      color: black;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: white;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: rgb(255, 252, 251);
    transition: transform 0.4s ease, width 0.4s ease;
  }
}

.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
.header {
  background-image: linear-gradient(
      to right,
      rgba(88, 201, 236, 0.801),
      rgba(28, 58, 228, 0.603)
    ),
    url("~assets/barber_88.png");
  background-size: cover;
  background-position: top;
  position: relative;
}
.header2 {
  background-image: linear-gradient(
      to right,
      rgba(65, 99, 109, 0.801),
      rgba(28, 58, 228, 0.603)
    ),
    url("~assets/barber_33.jpg");
  background-size: cover;
  background-position: top;
  position: relative;
}
.content {
  margin-top: 30px;
  font-size: 20px;
}
.default-tabs {
  position: relative;
  margin: 0 auto;
}
</style>
