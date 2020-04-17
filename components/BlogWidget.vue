<template>
  <nuxt-link :to="link">
    <div class="">
      <div class="articles-item__image bg-center">
        {{ post.data.url }}
      </div>
      <h2
        class="text-greenery font-bold leading-snug text-md sm:text-lg md:text-1xl"
      >
        {{ $prismic.richTextAsPlain(post.data.title) }}
      </h2>
      <p class="uppercase text-xs text-gray-500 font-bold">
        <span class="created-at">{{ formattedDate }}</span>
      </p>
      <p class="my-4 text-greenery">
        {{ getFirstParagraph(post) }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  props: ["post"],
  data: function() {
    return {
      link: "",
      formattedDate: ""
    };
  },
  name: "blog-widget",
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post) {
      const textLimit = 300;
      const slices = post.data.body;
      let firstParagraph = "";
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (!haveFirstParagraph && slice.slice_type == "text") {
          slice.primary.text.forEach(function(block) {
            if (block.type == "paragraph" && !haveFirstParagraph) {
              firstParagraph += block.text;
              haveFirstParagraph = true;
            }
          });
        }
      });
      //console.log(post.data.body[0].primary.image);

      const limitedText = firstParagraph.substr(0, textLimit);

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(" ")) + "...";
      } else {
        return firstParagraph;
      }
    }
  },
  created() {
    (this.link = LinkResolver(this.post)),
      (this.formattedDate = Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date(this.post.data.date)));
    console.log(this.post.data.url);
  }
};
</script>

<style lang="css" scoped>
.text-greenery {
  color: #061410;
}
</style>
