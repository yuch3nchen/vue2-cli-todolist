<template>
  <div id="app" class="container mx-auto">
    <h1>Todolist</h1>
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
ul {
  padding: 0;
  list-style: none;
}
li {
  margin-bottom: 1rem;
}
.container {
  max-width: 360px;
  padding-left: 1rem;
  padding-right: 1rem;
}
.mx-auto {
  margin: auto;
}
.d-flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.me-3 {
  margin-right: 1rem;
}
.space-between {
  justify-content: space-between;
}
.ms-auto {
  margin-left: auto;
}
</style>
