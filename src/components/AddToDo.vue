<template>
  <div class="todolist-input d-flex flex-wrap">
    <input type="text" class="me-3" v-model="title" name="title" />
    <select class="me-3" v-model="todoLevel">
      <option value="normal">一般</option>
      <option value="important">重要</option>
      <option value="urgent">緊急</option>
    </select>
    <button @click="addTodo">增加</button>
  </div>
</template>

<script>
export default {
  name: "AddTodoButton",
  data() {
    return {
      title: "",
      todoLevel: "normal",
    };
  },
  methods: {
    addTodo() {
      const newTodoObj = {
        title: this.title,
        level: this.todoLevel,
        completed: false,
      };
      this.$emit("add-todo", newTodoObj);
      this.title = "";
      this.todoLevel = "normal";
    },
  },
};
</script>
