<template>
  <div>
    <ul class="list-unstyled mb-0">
      <li class="mb-3" v-for="(item, index) in todoEntries" :key="index">
        <ToDoItem
          :todo-item="item"
          @delete="deleteItem(index)"
          @toggle="toggleStatus(index)"
        />
      </li>
      <li v-if="todoEntries.length == 0">
        <h2 class="text-secondary fs-4 text-center">尚無任何事項</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";

export default {
  name: "ToDos",
  components: { ToDoItem },
  props: {
    todoEntries: Array,
  },
  methods: {
    deleteItem(index) {
      this.$emit("delete-todo", index);
    },
    toggleStatus(index) {
      this.$emit("toggle-status", index);
    },
  },
};
</script>
