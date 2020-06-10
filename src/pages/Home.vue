<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-progress-circular v-if="this.loading" :size="70" :width="7" color="white" indeterminate />
      <v-col v-else sm="12" lg="8" xl="6">
        <books-list :data="books" @remove="deleteBook" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BooksList from "@/components/BooksList.vue";

export default {
  name: "Home",
  components: {
    BooksList
  },
  data: () => ({
    loading: false
  }),
  computed: {
    books() {
      return this.$store.getters.getBooksList;
    }
  },
  created() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      this.loading = true;
      this.$store
        .dispatch("fetchBooksList")
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    deleteBook(id) {
      this.$store
        .dispatch("deleteBook", id)
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
