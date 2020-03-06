<template>
  <div>
    <Navbar />
    <div class="header">
      <div class="flex flex-wrap mx-4">
        <!--Left Col-->
        <div class="w-full lg:w-3/6 px-8 text-center lg:text-left self-center mt-10">
          <h1 class="mx-16 text-5xl font-bold leading-none text-orange-700">Become a ThyFlow Barber</h1>
          <p class="mb-12">
            <p
              class="mx-16 text-white font-bold lg:text-2xl md:text-1xl"
            
            > If you are looking for a flexible way to earn a great income doing what you enjoy, Join ThyFlow Barber Team. 
             <p
              class="mx-16 text-white font-bold lg:text-2xl md:text-1xl"
            
            > 
            THYFLOW - This is an alternative way for men to get a haircut at home. ThyFlow, offer customers Barbershop experience at home or wherever they at. 
            ThyFlow Barbers work within their neighborhood to drive to customer's homes to provide a haircut service.</p>
          
        </div>

        <!--Right Col-->
        <div class="w-full lg:w-3/6 px-4 text-center lg:center lg:text-left self-center px-20">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-8">
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-email">
        Email
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="Type your email">
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-phone">
        Phone Number
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="Type your email">
    </div>
  </div>
  <!-----Checkbox----->
  <div class=" mb-6">
  <span class="text-xs uppercase font-bold">Are you a certified barber? </span>
  <div class="mt-2">
    <label class="inline-flex items-center">
      <input type="radio" class="form-radio" name="accountType" value="personal">
      <span class="ml-2">Yes</span>
    </label>
    <label class="inline-flex items-center ml-6">
      <input type="radio" class="form-radio" name="accountType" value="busines">
      <span class="ml-2">No</span>
    </label>
  </div>
</div>
  <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
Submit Information</button>
</div>
          <!---<img src="~/assets/barber.png" class="w-full xl:w-4/5 z-50 inline-block" />-->
        </div>
      </div>
    </div>
    <!--------------Header Done----------->
  <div class="flex flex-wrap md:px-16 md:py-16">
        <div class="w-6/6 sm:w-1/2 p-6">
          <p class="text-base md:text-3xl sm:text-xl mb-3 font-bold text-orange mx-4">
            Why ThyFlow?
          </p>
          <p class="px-3 text-orange md:text-2xl sm:text-base mb-3">
            ThyFlow Team, focus on building a trusted platform for anyone to find 
            verified Mobile Service providers in their local area and book an appointment. We connect 
            service providers with customers that need and want their service, in 
            a safe and secure manner. 
          </p>
        </div>
        <div
          class="w-full sm:w-1/2 mb-5"
        >
          <img
            class="zoom md:min-w-0 md:w-4/7 z-50 sm:w-full sm:h-full"
            src="~/assets/barber_showcase.png"
          />
        </div>
      </div>

      <!------Third section-------->
       <div class="header2">
      <div class="flex flex-wrap mx-4">
        <!--Left Col-->
        <div class="w-full lg:w-6/6 px-8 text-center lg:text-left self-center ">
      <tabs class="mt-20"
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
    />
    <div class="content px-6">
      <div class="px-8" v-if="currentTab === 'tab1'">
        Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
        aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non
        numquam eius modi tempora incidunt ut labore
        et dolore magnam aliquam quaerat voluptatem.
      </div>
      <div class="text-white text-2xl" v-if="currentTab === 'tab2'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div v-if="currentTab === 'tab3'">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
        occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
        mollitia animi, id est laborum et dolorum fuga.
      </div>
    </div>
        </div>

       
      </div>
    </div>
    <!-----------Willing do------->
    
      <!----------tabs-------->
         <div class=" mx-auto">
      <div class="pb-16">
        
      </div>
         </div>
      <!-------Finish Tabs------>
      <div class="mx-auto flex flex-wrap pt-4 pb-4">
        <h1 class="mx-auto block text-5xl font-bold leading-none text-orange self-center">Interested?</h1>
      </div>
      <div class="mx-auto  self-center">
        <a
          href="https://thyflow.zohorecruit.com/careers"
          class="bg-blue-500 hover:bg-blue-400 text-white w-full font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-2xl"
        >Fill the form here!</a>
      </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Tabs from "vue-tabs-with-active-line";

import Footer from "~/components/Footer.vue";



const TABS = [{
  title: 'Tab 1',
  value: 'tab1',
}, {
  title: 'Tab 2',
  value: 'tab2',
}, {
  title: 'Tab 3',
  value: 'tab3',
}];

export default {
  components: {
    Navbar,
    Tabs,
    Footer
  },
  data: () => ({
    tabs: TABS,
    currentTab: 'tab1',
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
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
  height: 80vh;
  background-image: linear-gradient(
      to right,
      rgba(88, 201, 236, 0.801),
      rgba(28, 58, 228, 0.603)
    ),
    url("~assets/barber_22.jpg");
  background-size: cover;
  background-position: top;
  position: relative;
}
.header2 {
  height: 70vh;
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
