<template>
  <div
    class="pt-2 bg-white md:pt-8 px-6 mx-auto flex flex-wrap flex-col md:flex-col text-center"
  >
    <!-------Accordion-------->
    <h2
      class="mx-auto md:text-3xl  sm:text-3xl font-bold leading-tight text-center text-orange-500"
    >
      Frequently asked question(FAQ)
    </h2>

    <div class="accordion flex flex-col items-center justify-center mb-8">
      <!--  Panel 1  -->
      <div class="w-1/2">
        <input type="checkbox" name="panel" id="panel-1" class="hidden" />
        <label
          for="panel-1"
          class="relative block bg-orange-500 text-white p-4 shadow border-b border-grey"
          >What if I don’t like my new haircut?
        </label>
        <div class="accordion__content overflow-hidden bg-grey-lighter">
          <p class="accordion__body p-4" id="panel1">
            If this does occur we will take your request and refund your payment in full.
          </p>
        </div>
      </div>
      <!-- Panel 2 -->
      <div class="w-1/2">
        <input type="checkbox" name="panel" id="panel-2" class="hidden" />
        <label
          for="panel-2"
          class="relative block bg-orange-500 text-white p-4 shadow border-b border-grey"
          >How experienced are the barbers?</label
        >
        <div class="accordion__content overflow-hidden bg-grey-lighter">
          <p class="accordion__body p-4">
            ThyFlow Barbers have a minimum of 3+ years of experience cutting
            hair, Before joining the platform.
          </p>
        </div>
      </div>
      <!--  Panel 3  -->
      <div class="w-1/2">
        <input type="checkbox" name="panel" id="panel-3" class="hidden" />
        <label
          for="panel-3"
          class="relative block bg-orange-500 text-white p-4 shadow border-b border-grey"
          >Can you guarantee I will get the same barber each time?
        </label>
        <div class="accordion__content overflow-hidden bg-grey-lighter">
          <p class="accordion__body p-4">
            Whether you receive the same barber depends on where you live. As most of our barbers service their neighborhood and local areas.
             But if you rate a barber below 3 stars, you will not get that same barber again.
          </p>
        </div>
      </div>
      <!--  Panel 4  -->
      <div class="w-1/2">
        <input type="checkbox" name="panel" id="panel-4" class="hidden" />
        <label
          for="panel-4"
          class="relative block bg-orange-500 text-white p-4 shadow border-b border-grey"
          >How far in advance can I book an appointment?
        </label>
        <div class="accordion__content overflow-hidden bg-grey-lighter">
          <p class="accordion__body p-4">
            You can book an appointment 2 hours in advance.
          </p>
        </div>
      </div>
      <!--  Panel 5  -->
      <div class="w-1/2">
        <input type="checkbox" name="panel" id="panel-5" class="hidden" />
        <label
          for="panel-5"
          class="relative block bg-orange-500 text-white p-4 shadow border-b border-grey"
          >Can you accommodate groups or events? (Like a wedding for
          example)</label
        >
        <div class="accordion__content overflow-hidden bg-grey-lighter">
          <p class="accordion__body p-4">
            Yes, email our customer support with your inquiries, a member from
            our team will reach out to you.
          </p>
        </div>
      </div>
    </div>

    <!--Right Col-->
  </div>
</template>

<script>
export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lobster&display=swap' }
    ]
  }
};
</script>

<style lang="css" scoped>
  h2{
    font-family: "Lobster", Times, serif;
  }
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #c59d68 100%);
}
label:after {
  content: "+";
  position: absolute;
  right: 1em;
  color: #fff;
}

input:checked + label:after {
  content: "-";
  line-height: 0.8em;
}

.accordion__content {
  max-height: 0em;
  transition: all 0.4s cubic-bezier(0.865, 0.14, 0.095, 0.87);
}
input[name="panel"]:checked ~ .accordion__content {
  /* Get this as close to what height you expect */
  max-height: 53em;
}
</style>
