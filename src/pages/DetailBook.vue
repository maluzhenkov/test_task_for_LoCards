<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-progress-circular v-if="this.loading" :size="70" :width="7" color="white" indeterminate />
      <v-col v-else sm="12" lg="8" xl="6">
        <book-detail :bookData="book" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookDetail from "@/components/BookDetail.vue";

export default {
  name: "DetailBook",
  components: { BookDetail },
  props: ["id"],
  data: () => ({
    loading: false
  }),
  computed: {
    book() {
      return this.$store.getters.getBook;
    }
  },
  created() {
    this.getBook();
  },
  methods: {
    getBook() {
      this.loading = true;
      this.$store
        .dispatch("fetchBook", this.id)
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>