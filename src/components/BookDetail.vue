<template>
  <div>
    <v-btn class="mb-4" depressed @click="$router.go(-1)">
      <v-icon left>mdi-arrow-left</v-icon>
      <span>Назад</span>
    </v-btn>
    <v-card>
      <template v-if="bookData">
        <v-card-title class="justify-center" v-text="bookData.Title" />
        <v-card-text>
          <p class="body-1">{{bookData.Excerpt}}</p>
          <card-footer :data="bookData" />
        </v-card-text>
      </template>
      <template v-else>
        <v-card-title>Детальная информация отсутствует</v-card-title>
      </template>
    </v-card>
  </div>
</template>

<script>
import CardFooter from "@/components/CardFooter";

export default {
  name: "BookDetail",
  components: { CardFooter },
  props: {
    bookData: {
      type: Object,
      default: null
    }
  }
};
</script>