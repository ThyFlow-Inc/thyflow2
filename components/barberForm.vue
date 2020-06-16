<template>
  <section class=" body-font">
    <div class="container px-5 pb-24 mx-auto flex flex-wrap">
      <!------2----->

      <!----Free0--->
      <div class="flex flex-col flex-wrap lg:p2-6 lg:w-full lg:px-56 ">
        <form
          action="https://forms.zohopublic.com/thyflow/form/JobApplicationForm1/formperma/1Mjwi0GhpXVJPdj52haw-eWIuyNXje40sTFLllnIVEk/htmlRecords/submit"
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
  </section>
</template>

<script>
export default {
  name: "barberForm",
  head() {
    return {
      script: [],
      title: "ThyFLow Beta",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Dosis&display=swap"
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
h2 {
  font-family: "Dosis", Courier, monospace;
}

.checklist,
.disc {
  padding-left: 1rem;
}
.checklist li,
.disc li {
  padding-bottom: 0.75rem;
  padding-left: 2rem;
  position: relative;
}
.checklist li:before,
.disc li:before {
  content: "";
  width: 1rem;
  height: 1rem;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: 50%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.checklist li:last-of-type,
.disc li:last-of-type {
  padding-bottom: 0;
}
.checklist li.disc:before,
.disc li.disc:before {
  background-image: none;
  --border-opacity: 1;
  border-color: #0db98c;
  border-color: rgba(13, 185, 140, var(--border-opacity));
  border-radius: 9999px;
  width: 0.75rem;
  height: 0.75rem;
  top: 4px;
  border-width: 2px;
}
.disc {
  padding-left: 0.5rem;
}
.disc li {
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
}
.disc li:before {
  background-image: none;
  --bg-opacity: 1;
  background-color: #2a3d48;
  background-color: rgba(42, 61, 72, var(--bg-opacity));
  border-radius: 9999px;
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.5rem;
}
.icon {
  max-width: 3.75rem;
  max-height: 3rem;
}
.header2 {
  background-image: linear-gradient(
      to right,
      rgba(65, 99, 109, 0.801),
      rgba(28, 58, 228, 0.603)
    ),
    url("~assets/barber_11.jpg");
  background-size: cover;
  background-position: top;
  position: relative;
}
</style>
