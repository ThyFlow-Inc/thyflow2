<template>
  <div>
    <Navbar />
    <section
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
      style="min-height: 75vh;"
    >
      <div class="absolute top-0 w-full h-full bg-center bg-cover header-2">
        <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-12">
              <h1 class="text-white font-semibold text-5xl">About Us</h1>
              <p class="mt-4 text-lg text-white">
                At ThyFlow, We believe a great looking haircut gives you confident
                to achieve your goals. Having confidence in yourself will help you do
                anything you want in this life and be a leader among your friends.
                ThyFlow Mobile Barbers help you be more confident by providing a world
                class haircut service at the comfort of your home or wherever.
                ThyFlow service is convenient and reliable for anyone with a busy
                lifestyle. Only the top local barbers on platform!
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-----------hery------->
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style="height: 70px; transform: translateZ(0px);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
      <!------------hello------>
    </section>
    <section class="pb-20 bg-blue-500 -mt-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                >
                  <i class="fas fa-award"></i>
                </div>
                <h6 class="text-xl font-semibold">Vetted Service Providers</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  All our local providers go through a
                  background check before they join our network.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                >
                  <i class="fas fa-retweet"></i>
                </div>
                <h6 class="text-xl font-semibold">Security</h6>
                <p
                  class="mt-2 mb-4 text-gray-600"
                >All employees go through security and safety training.</p>
              </div>
            </div>
          </div>
          <div class="pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                >
                  <i class="fas fa-fingerprint"></i>
                </div>
                <h6 class="text-xl font-semibold">Money-back Guarantee</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  Like your haircut or get your money back!
                  Our Service ensures barbershop from your home.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap items-center mt-32">
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div
              class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
            >
              <i class="fas fa-user-friends text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal text-orange-400">Our Story</h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-white"
            >ThyFlow Team, focus on building a trusted platform for anyone to find verified Mobile Service providers in their local area and book an appointment.</p>
            <p
              class="text-lg font-light leading-relaxed mt-0 mb-4 text-white"
            >We connect service providers with customers that need and want their service, in a safe and secure manner.</p>
            <a
              href="https://www.creative-tim.com/framework/tailwind-starter-kit"
              class="font-bold text-orange-400 mt-8"
            >Sal Sosso, Founder ThyFlow</a>
          </div>
          <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
            >
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block"
                  style="height: 95px; top: -94px;"
                >
                  <polygon points="-30,95 583,95 583,65" class="text-pink-600 fill-current" />
                </svg>
                <h4 class="text-xl font-bold text-white">Top Notch Services</h4>
                <p
                  class="text-md font-light mt-2 text-white"
                >ThyFlow Industry Profesionals handpicked and verify new barbers.</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    <BarberProfile />
    <div class="gradient">
      <svg
        class="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
            <g class="wave" fill="#f8fafc">
              <path
                d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
              />
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g
                transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                />
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                />
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <section class="container mx-auto text-center py-6 mb-12">
        <h1
          class="w-full my-2 text-4xl font-bold leading-tight text-center text-white"
        >Become a Mobile Barber</h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          <a href="https://www.thyflow.com/become-a-barber">Apply as barber!</a>
        </button>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import BarberProfile from "~/components/BarberProfile.vue";
import OurStory from "~/components/OurStory.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    BarberProfile,
    OurStory,
    Footer
  }
};
</script>

<style lang="css" scoped>
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
.header-2 {
  background-image: url("~assets/about-header.jpg");
}
</style>