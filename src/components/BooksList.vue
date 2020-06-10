<template>
  <v-list three-line elevation="24">
    <template v-for="item in data">
      <v-list-item :key="item.ID" @click.stop="showDetail(item.ID)">
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold py-4">{{item.Title}}</v-list-item-title>
          <div class="text-truncate">{{item.Description}}</div>
          <card-footer :data="item" />
        </v-list-item-content>

        <v-list-item-action>
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="error" icon v-bind="attrs" v-on="on">
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-card-actions>
                <v-btn text @click="deleteMenu = false">Отмена</v-btn>
                <v-btn text color="error" @click="deletePost(item.ID)">Удалить</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
          <v-btn icon></v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider :key="'divider-'+item.ID" />
    </template>
  </v-list>
</template>

<script>
import CardFooter from "@/components/CardFooter";

export default {
  name: "BooksList",
  components: { CardFooter },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    actionLoading: false,
    deleteMenu: false
  }),
  methods: {
    showDetail(id) {
      this.$router.push({ name: "BookDetail", params: { id } });
    },
    deletePost(id) {
      this.deleteMenu = false;
      this.$emit("remove", id);
    }
  }
};
</script>