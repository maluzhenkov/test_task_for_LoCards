<template>
  <v-app>
    <v-content :class="background">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    background: "deep-purple",
    backgroundList: [
      "red",
      "pink",
      "purple",
      "deep-purple",
      "indigo",
      "blue",
      "light-blue",
      "cyan",
      "teal",
      "green",
      "light-green",
      "light-green",
      "amber",
      "orange",
      "blue-grey"
    ]
  }),
  watch: {
    $route() {
      const idx = this.getRandomNumber();
      this.background = this.backgroundList[idx];
    }
  },
  methods: {
    getRandomNumber(x = 15) {
      return Math.floor(Math.random() * x);
    }
  }
};
</script>
