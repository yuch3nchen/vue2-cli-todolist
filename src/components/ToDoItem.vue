<template>
  <div
    class="d-flex flex-column flex-sm-row flex-wrap gap-2 justify-content-center justify-content-sm-between align-items-center border border-2 rounded px-3 py-2"
  >
    <p
      class="mb-0 fs-4 fw-light"
      :class="[
        getLevelClass(todoItem.level),
        { completed: todoItem.completed },
      ]"
    >
      {{ todoItem.title }}
    </p>
    <div class="btn-group">
      <button
        class="ms-auto btn btn-sm btn-outline-secondary"
        @click="toggleStatus"
      >
        {{ todoItem.completed ? "標示未完成" : "標示已完成" }}
      </button>
      <button class="btn btn-sm btn-danger" @click="deleteTodo">刪除</button>
    </div>
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
  color: #ee964b;
}
.urgent {
  color: #f95738;
}
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
