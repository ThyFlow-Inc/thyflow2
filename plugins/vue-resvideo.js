import Vue from "vue";
Vue.component("tabs", {
  template: `
        <div>
            <div class="tabs">
              <ul class="flex mt-8 sm:1/2">
                <li class="flex-1 mr-2" v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                    <a class="text-center block font-bold border border-blue-500 rounded lg:text-2xl sm:text-1xl py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
              </ul>
            </div>

            <div class="tabs-details">
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
