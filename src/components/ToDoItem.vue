<template>
  <div
    class="d-flex flex-column flex-xl-row flex-wrap gap-2 justify-content-sm-between align-items-xl-center border border-2 rounded px-3 py-2"
  >
    <p
      class="mb-0 fs-5"
      :class="[
        getLevelClass(todoItem.level),
        { completed: todoItem.completed },
      ]"
    >
      {{ todoItem.title }}
    </p>
    <div
      class="align-self-end d-flex align-items-center justify-content-end gap-2 flex-wrap"
    >
      <span class="text-body-tertiary fw-light time-stamp">{{
        todoItem.timeStamp
      }}</span>
      <div class="btn-group">
        <button class="btn btn-sm btn-outline-secondary" @click="toggleStatus">
          {{ todoItem.completed ? "標示未完成" : "標示已完成" }}
        </button>
        <button class="btn btn-sm btn-danger" @click="deleteTodo">刪除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  // props 是单向数据流，只能由父组件传递给子组件，子组件不能直接修改 prop 的值。
  props: {
    todoItem: Object,
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
.time-stamp {
  font-size: 0.8rem;
}
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
