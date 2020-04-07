import Vue from "vue";
Vue.component("tabs", {
  template: `
        <div>
            <div class="tabs">
              <ul class="flex mt-8 lg:w-full sm:w-1/2 border-b">
                <li class="flex-1 -mb-px text-2xl" v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-8 text-blue-700 font-bold" :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
              </ul>
            </div>

            <div class="bg-gray rounded-lg">
                <slot></slot>
            </div>
        </div>
    `,

  data() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name;
      });
    },
  },
});

Vue.component("tab", {
  template: `

        <div v-show="isActive"><slot></slot></div>

    `,

  props: {
    name: { required: true },
    selected: { default: false },
  },

  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    },
  },

  mounted() {
    this.isActive = this.selected;
  },
});
