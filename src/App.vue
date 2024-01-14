<template>
  <div id="app" class="container shadow p-3 rounded">
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
        {
          title: "打電腦",
          level: "normal",
          completed: false,
        },
        {
          title: "吃飯",
          level: "important",
          completed: false,
        },
        {
          title: "睡覺",
          level: "urgent",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addToDoItem(newItem) {
      this.todoEntries.push(newItem);
      console.log(this.todoEntries);
    },
    deleteToDoItem(index) {
      this.todoEntries.splice(index, 1);
    },
    toggleStatusItem(index) {
      this.todoEntries[index].completed = !this.todoEntries[index].completed;
      console.log(this.todoEntries);
    },
  },
  watch: {
    todoEntries: {
      handler(newItem) {
        localStorage.setItem("todoEntries", JSON.stringify(newItem));
      },
      deep: true,
    },
  },
  created() {
    const storedData = localStorage.getItem("todoEntries");
    if (storedData) this.todoEntries = JSON.parse(storedData);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap");
#app {
  font-family: "Noto Sans TC", sans-serif;
}
</style>
