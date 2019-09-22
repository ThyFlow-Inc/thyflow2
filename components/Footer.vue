<template>
  <!--Footer-->
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <nuxt-link
            class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            to="/"
          >
            <img class="w-8 fill-current inline" src="~/assets/small_logo.png" alt="number-one" />
            ThyFlow
          </nuxt-link>
        </div>

        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Company</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                to="/about"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >About Us</nuxt-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                to="/faq"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >FAQ</nuxt-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                to="/contact"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Contact Us</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Legal</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                to="/terms"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Terms</nuxt-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                to="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Privacy</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Social</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.facebook.com/thyflow"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Facebook</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.linkedin.com/in/thyflow"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Linkedin</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.twitter.com/thyflow"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Twitter</a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Links</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                to="/become-a-barber"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Become a barber</nuxt-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                to="/suggest"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Suggest City</nuxt-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <nuxt-link
                to="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >#</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
