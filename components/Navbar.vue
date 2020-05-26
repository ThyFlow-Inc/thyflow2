<template>
  <nav id="header" class="w-full z-30 bg-orange-300">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <nuxt-link
          class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          to="/"
        >
          <img
            class="hee h-10 fill-current inline px-2"
            src="~/assets/big_logo.png"
            alt="number-one"
          />
        </nuxt-link>
      </div>
      <!------------Hambuger menu---------->
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow lg:flex sm:flex sm:items-center sm:w-auto"
      >
        <div class="text-sm sm:flex-grow w-auto">
          <nuxt-link
            class="block py-2 px-4 lg:invisible text-orange sm:inline-block font-bolder text-lg no-underline mt-4"
            to="/become-a-barber"
            >Become a barber</nuxt-link
          >
          <nuxt-link
            class="block py-2 px-4 lg:invisible text-orange sm:inline-block font-bolder text-lg no-underline mt-4"
            to="/blog"
            >Blog</nuxt-link
          >
          <nuxt-link
            class="block py-2 px-4 lg:invisible text-white sm:inline-block font-bolder text-lg no-underline mt-4"
            to="/about"
            >About</nuxt-link
          >
        </div>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >

            <nuxt-link
              class="inline-block py-2 px-4  font-bold no-underline"
              to="/beta"
              >Join Beta</nuxt-link
            >


            <nuxt-link
              class="inline-block py-2 px-4 text-white font-bold no-underline"
              to="/become-a-barber"
              >Become a barber</nuxt-link
            >

            <nuxt-link
              class="inline-block py-2 px-4 text-white font-bold no-underline"
              to="/blog"
              >Blog</nuxt-link
            >
            <nuxt-link
              class="inline-block text-white no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-4"
              to="about"
              >About</nuxt-link
            >

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style lang="css" scoped>
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
</style>
