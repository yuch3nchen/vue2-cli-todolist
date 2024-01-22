<template>
  <div id="app" class="shadow p-3 rounded">
    <h1 class="display-4 mb-3 fw-bold">Todolist</h1>
    <AddtoDo @add-todo="addToDoItem" />
    <Todos
      :todo-entries="todoEntries"
      @delete-todo="deleteToDoItem"
      @toggle-status="toggleStatusItem"
    />
  </div>
</template>

<script>
import AddtoDo from "./components/AddToDo.vue";
import Todos from "./components/ToDos.vue";

export default {
  name: "App",
  components: {
    AddtoDo,
    Todos,
  },
  data() {
    return {
      todoEntries: [
        //   {
        //   title: '',
        //   level: '',
        //   completed: false,
        //   timeStamp: ''},
      ],
    };
  },
  methods: {
    addToDoItem(newItem) {
      this.todoEntries.push(newItem);
      //console.log(this.todoEntries);
    },
    deleteToDoItem(index) {
      this.todoEntries.splice(index, 1);
    },
    toggleStatusItem(todo) {
      // console.log(todo);
      const updatedTime = new Date().toLocaleString();
      this.todoEntries[todo].timeStamp = updatedTime;
      this.todoEntries[todo].completed = !this.todoEntries[todo].completed;
      //console.log(this.todoEntries);
    },
    loadFromLocalStorage() {
      const storedData = localStorage.getItem("todoEntries");
      if (storedData) this.todoEntries = JSON.parse(storedData);
    },
  },
  watch: {
    todoEntries: {
      handler(newItem) {
        localStorage.setItem("todoEntries", JSON.stringify(newItem));
      },
      // 深度監聽，內部值變化就會被調用
      deep: true,
    },
  },
  created() {
    this.loadFromLocalStorage();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap");
#app {
  font-family: "Noto Sans TC", sans-serif;
}
</style>
