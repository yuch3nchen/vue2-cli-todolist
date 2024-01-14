<template>
  <div class="row flex-column flex-md-row justify-content-between g-3 mb-5">
    <div class="col-auto col-md-8 col-lg-6">
      <input type="text" class="form-control" v-model="title" name="title" />
    </div>
    <div class="col-auto col-md-4 col-lg-3">
      <select class="form-select" v-model="todoLevel">
        <option value="normal">一般</option>
        <option value="important">重要</option>
        <option value="urgent">緊急</option>
      </select>
    </div>
    <div class="col-auto col-lg-3">
      <button class="btn btn-success px-3 d-block w-100" @click="addTodo">
        增加
      </button>
    </div>
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
      if (this.title === "") return alert("請輸入事項！");
      const timeData = new Date().toLocaleString();
      const newTodoObj = {
        title: this.title,
        level: this.todoLevel,
        completed: false,
        timeStamp: timeData,
      };
      this.$emit("add-todo", newTodoObj);
      this.title = "";
      this.todoLevel = "normal";
    },
  },
};
</script>
