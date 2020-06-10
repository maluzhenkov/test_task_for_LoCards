<template>
  <div class="d-flex justify-space-between text--secondary pt-4">
    <span>
      Cтраниц:
      {{data.PageCount}}
    </span>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <span v-on="on">{{data.PublishDate | date('date')}}</span>
      </template>
      <span>Время публикации</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  }
};
</script>