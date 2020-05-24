<template>
  <div class="banner-area-inner">
    <div class="banner-inner-area1">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <!-- banner text -->
            <div class="banner-text-inner">
              <div class="banner-shape-wrap">
                <div class="banner-shape-inner">

                </div>
              </div>

              <h1>Book verified mobile service providers within your neighborhood</h1>
              <p class="text-black lg:text-xl mb-2">
                we believe your appearance is part of your journey to Confidence and Success.
                Sit back and Relax. Let our Top Rated, Handpicked, Local, Mobile, Barbers and
                Hair Stylist Bring their service to YOU!
              </p>

              <a href="#beta-form" class="btn bg-orange-500 text-white"
              >Join ThyFlow Beta</a
              >
              <a href="#Video" class="btn">Discover More</a>
            </div>
            <!-- banner text -->
          </div>
          <div class="col-lg-5 offset-lg-1 col-md-4 offse-xl-2">
            <!-- banner Video-->
            <div class="banner-image">
              <video
                src="https://res.cloudinary.com/thyflow/video/upload/v1588451371/thyvideo_xrhqf2.mp4"
                ref="videoRef"
                loop
                playsinline
                preload="auto"
              ></video>
            </div>
            <!--End of banner image-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="css" scoped>
  .banner-inner-area1 {
    padding: 160px 0 70px;
    position: relative;
    overflow: hidden;
  }
  .nodisplay {
    display: none;
  }
</style>
