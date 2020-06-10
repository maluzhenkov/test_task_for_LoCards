import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const hostAPI = "http://fakerestapi.azurewebsites.net/api/";

export default new Vuex.Store({
  state: {
    books: [],
    book: {},
    comments: [],
  },
  getters: {
    getBooksList: (state) => state.books,
    getBook: (state) => state.book,
  },
  mutations: {
    SET_BOOKS_LIST(state, data) {
      state.books = data;
    },
    SET_BOOK(state, data) {
      state.book = data;
    },
    REMOVE_BOOK(state, id) {
      const idx = state.books.findIndex((item) => item.ID === id);
      if (state.books[idx]) {
        state.books.splice(idx, 1);
      }
    },
  },
  actions: {
    async fetchBooksList({ commit }) {
      return axios.get(hostAPI + "Books").then((res) => {
        console.log("Response:", res);
        const { status, data } = res;
        if (status === 200) {
          commit("SET_BOOKS_LIST", data);
        } else {
          throw new Error("Какая-то ошибка сервера!");
        }
      });
    },
    async fetchBook({ commit }, id) {
      return axios.get(hostAPI + "Books/" + id).then((res) => {
        console.log("Response:", res);
        const { status, data } = res;
        if (status === 200) {
          commit("SET_BOOK", data);
        } else {
          throw new Error("Какая-то ошибка сервера!");
        }
      });
    },
    async deleteBook({ commit }, id) {
      return axios.delete(hostAPI + "Books/" + id).then((res) => {
        console.log("Response:", res);
        const { status } = res;
        if (status === 200) {
          //эмуляция удаления
          commit("REMOVE_BOOK", id);
        } else {
          throw new Error("Какая-то ошибка сервера!");
        }
      });
    },
  },
  // modules: {}  //Не такое большое приложение - обойдемся без модулей
});
