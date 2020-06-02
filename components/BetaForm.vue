<template>
  <div class="header flex flex-wrap bg-orange-400 mt-12 ">
    <!--Left Col-->
    <div
      class="w-full lg:w-3/6 sm:w-3/6 px-8 text-center lg:text-left self-center mt-4"
    >
      <h1 class="lg:mx-16 sm:mx-8 lg:text-3xl sm:text-1xl text-black mt-6">
        ThyFlow Invite Only Beta Test
      </h1>
      <h2 class="lg:mx-16 sm:mx-8 lg:text-2xl sm:text-xl text-white mt-6">
        What is ThyFlow?
      </h2>
      <p class="lg:mx-16 sm:mx-6  lg:text-base md:text-md">
        ThyFlow, is a mobile app and website that let users view profiles and
        book an appointment with a verify, local, mobile barber. After booking
        an appointment, sit back and relax, and let ThyFlow barbers will bring
        their service to you! Because you are a VIP.
      </p>
      <h2 class="lg:mx-16 sm:mx-8 lg:text-2xl sm:text-xl text-white mt-6">
        Why ThyFlow?
      </h2>
      <p class="lg:mx-16 sm:mx-4 lg:text-base md:text-md">
        Well, ThyFlow handpicked mobile barbers, have years of experience
        working in a barbershop. Our barbers are open-minded individuals that
        now enjoy providing convenient alternatives to local customers just like
        you! That simply does not have the time to go to the barbershop or just
        want to do things differently. Last but not least, After booking,
        ThyFlow barbers will show up at your location with professional tools
        for your haircut. P.s. You do not have to deal with any cash transaction
        either, Pay and rate service in app.
      </p>
      <h2 class="lg:mx-16 sm:mx-8 lg:text-2xl sm:text-xl text-white mt-6">
        How to Join & Book a Mobile Barber?
      </h2>
      <p class="lg:mx-16 sm:mx-4 lg:text-base md:text-md">
        The invitation will include the link to download the app! ThyFlow is
        currently Beta testing the platform and service in San Francisco Bay
        Area. Fill this form to receive an invitation. We are looking forward to
        helping you look your best! However, please do not send repeated emails
        to our customer service email asking to send you the link first, Thanks
        for understanding.
      </p>
    </div>

    <!--Right Col-->
    <div
      class="w-full lg:w-3/6 px-4 text-center lg:center lg:text-left self-center lg:px-20 sm:px-10"
    >
      <form
        action="https://forms.zohopublic.com/thyflow/form/SoftwareEvaluation/formperma/MU3LPuPQcFL-l4IZfInMb1Bia7Vc1I79YkZpx59NXEY/htmlRecords/submit"
        name="form"
        method="POST"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
        id="form"
      >
        <div
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-8"
        >
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-email"
              >
                Your Name
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                name="SingleLine"
                type="text"
                placeholder="Type your Name"
              />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-phone"
              >
                Email Address
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                name="Email"
                type="text"
                placeholder="Type your Email"
              />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-phone"
              >
                Your City
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                name="SingleLine1"
                type="text"
                placeholder="Type your City"
              />
            </div>
          </div>
          <button
            class="uppercase bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg"
          >
            Send me an Invite
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BetaForm",
  head() {
    return {
      script: [],
      title: "ThyFLow Beta",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins&display=swap"
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
h1,
h2,
p {
  font-display: "Poppins";
}
</style>
