const todo = () => {
  let todos = [];
  return {
    add: (todoText) => {
      todos.push({
        id: todos.length + 1,
        todoText,
        isDon: false,
      });
      console.log(todos);
    },

    listTask: () => {
      todos.forEach((item) =>
        console.log(
          `${item.id}. ${item.isDon ? "[X] " : "[ ]"} ${item.todoText}`
        )
      );
    },

    markOne: (id) => {
      todos.forEach((item) => (item.id === id ? (item.isDon = true) : ""));
    },
    delete: (id) => {
      todos = todos.filter((item) => item.id !== id);
    },
  };
};

const userOne = todo();

userOne.add("Learn Javascript");
userOne.markOne(1);
userOne.listTask();

userOne.delete(1);
userOne.listTask();
