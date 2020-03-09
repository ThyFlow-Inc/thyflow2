<template class="gradient">
  <div
    class="pt-2 bg-white md:pt-8 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center text-center"
  >
    <!-------Accordion-------->
<h1
        class="mx-auto md:text-3xl  sm:text-3xl font-bold leading-tight text-center text-orange-500"
      >
        Frequently asked question(FAQ)
      </h1>

    <div class="accordion flex flex-col items-center justify-center mb-8">
  <!--  Panel 1  -->
  <div class="w-1/2">
    <input type="checkbox" name="panel" id="panel-1" class="hidden">
    <label for="panel-1" class="relative block bg-orange-500 text-white p-4 shadow border-b border-grey">How much does a Haircut cost?</label>
    <div class="accordion__content overflow-hidden bg-grey-lighter">
      <h2 class="accordion__header pt-4 pl-4">Header</h2>
      <p class="accordion__body p-4" id="panel1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
  <!-- Panel 2 -->
  <div class="w-1/2">
    <input type="checkbox" name="panel" id="panel-2" class="hidden">
    <label for="panel-2" class="relative block bg-orange-500 text-white p-4 shadow border-b border-grey">How fast can I get a barber on ThyFlow?</label>
    <div class="accordion__content overflow-hidden bg-grey-lighter">
      <h2 class="accordion__header pt-4 pl-4">Header</h2>
      <p class="accordion__body p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
  <!--  Panel 3  -->
  <div class="w-1/2">
    <input type="checkbox" name="panel" id="panel-3" class="hidden">
    <label for="panel-3" class="relative block bg-orange-500 text-white p-4 shadow border-b border-grey">Can I get refund if am not satisfied with the service?</label>
    <div class="accordion__content overflow-hidden bg-grey-lighter">
      <h2 class="accordion__header pt-4 pl-4">Header</h2>
      <p class="accordion__body p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</div>
    

    <!--Right Col-->
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #c59d68 100%);
}
label:after {
  content: '+';
  position: absolute;
  right: 1em;
  color: #fff;
}

input:checked + label:after {
  content: '-';
  line-height: .8em;
}

.accordion__content{
  max-height: 0em;
  transition: all 0.4s cubic-bezier(0.865, 0.14, 0.095, 0.87);
}
input[name='panel']:checked ~ .accordion__content {
  /* Get this as close to what height you expect */
  max-height: 50em;
}
</style>
