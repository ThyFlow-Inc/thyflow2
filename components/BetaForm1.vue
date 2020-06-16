<template>
  <div class="header flex flex-wrap bg-orange-400 mt-12 ">
    <!--Left Col-->
    <div
      class="lg:w-3/6 sm:w-3/6 m-4 text-center lg:text-left self-center  bg-white"
    >
      <h1
        class="lg:mx-16 sm:mx-8 lg:text-4xl sm:text-1xl text-black mt-4 font-extrabold"
      >
        ThyFlow Invite Only Beta Test
      </h1>
      <h2 class="lg:mx-16 sm:mx-8 lg:text-3xl sm:text-2xl font-bold mt-4 ">
        What is ThyFlow?
      </h2>
      <p class="lg:mx-16 sm:mx-6  lg:text-xl md:text-md">
        ThyFlow, is a mobile app and website that let users view profiles and
        book an appointment with a local, mobile, barber.
      </p>
      <h2 class="lg:mx-16 sm:mx-8 lg:text-2xl sm:text-xl font-bold mt-4">
        Why ThyFlow?
      </h2>
      <p class="lg:mx-16 sm:mx-4 lg:text-xl md:text-md">
        ThyFlow handpicked, licensed, mobile barbers, have years of experience
        cutting hair in a barbershop setting. They are professionals,
        open-minded individuals, They are offering a convenient way for locals
        just like you, to get a haircut at home.
      </p>
      <p class="lg:mx-16 sm:mx-4 lg:text-xl md:text-md">
        After booking, ThyFlow barbers will show up at your location with
        professional tools for your haircut. No cash, no problem, Pay for your
        service in app.
      </p>
      <h2 class="lg:mx-16 sm:mx-8 lg:text-2xl sm:text-xl font-bold mt-4">
        How to Join & Book a Mobile Barber?
      </h2>
      <p class="lg:mx-16 sm:mx-4 lg:text-xl md:text-md">
        Fill the form to receive an invitation to our Invite only beta. After
        filling the form, an email with a link and steps to book your first
        mobile barber will be sent to you. We are looking forward to helping you
        look your best.
      </p>
    </div>

    <!--Right Col-->
    <div
      class=" lg:w-2/6 px-4 text-center lg:center lg:text-left self-center lg:px-20 sm:px-10"
    >
      <p class="text-white bg-transparent text-2xl font-bold p-1">
        Fill out the form below to get an invite to ThyFlow
      </p>
      <form
        action="https://forms.zohopublic.com/thyflow/form/SoftwareEvaluation/formperma/MU3LPuPQcFL-l4IZfInMb1Bia7Vc1I79YkZpx59NXEY/htmlRecords/submit"
        name="form"
        method="POST"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
        id="form"
      >
        <div class=" rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-8">
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-email"
              >
                Your Name
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded py-3 "
                name="SingleLine"
                type="text"
                placeholder="Type your Name"
              />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold"
                for="grid-phone"
              >
                Email Address
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4"
                name="Email"
                type="text"
                placeholder="Type your Email"
              />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold"
                for="grid-phone"
              >
                Your City
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4"
                name="SingleLine1"
                type="text"
                placeholder="Type your City"
              />
            </div>
          </div>
          <button
            class="uppercase bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg"
          >
            Send my Invite
          </button>
        </div>
      </form>
    </div>
    <div class="container mx-auto px-6 flex flex-col items-center">
      <p class="text-xl text-white">Support@thyflow.com</p>
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
  font-family: "Poppins", Courier, monospace;
}
.header {
  background-image: linear-gradient(
      to right,
      rgba(88, 201, 236, 0.521),
      rgba(28, 58, 228, 0.603)
    ),
    url("~assets/back_use.png");
  background-size: contain;
}
</style>
