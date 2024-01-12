<template>
  <div class="d-flex space-between">
    <p
      :class="[
        getLevelClass(todoItem.level),
        { completed: todoItem.completed },
      ]"
    >
      {{ todoItem.title }}
    </p>
    <button class="ms-auto me-3" @click="toggleStatus">
      {{ todoItem.completed ? "標示未完成" : "標示已完成" }}
    </button>
    <button @click="deleteTodo">刪除</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todoItem: Object,
  },
  data() {
    return {
      isCompleted: false,
    };
  },
  methods: {
    deleteTodo() {
      this.$emit("delete", this.todoItem);
    },
    getLevelClass(level) {
      if (level === "important") {
        return "important";
      } else if (level === "urgent") {
        return "urgent";
      }
    },
    toggleStatus() {
      this.$emit("toggle", this.todoItem);
    },
  },
};
</script>

<style>
.important {
  color: orange;
}
.urgent {
  color: red;
}
.completed {
  text-decoration: line-through;
}
</style>
