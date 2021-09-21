import axios from "axios";

const TODO_API_BASE_URL="http://localhost:8080/api/v1/todos";

class TodoService {
    getTodos() {
        return axios.get(TODO_API_BASE_URL);
    }

    createTodo(todo) {
        return axios.post(TODO_API_BASE_URL, todo);
    }

    deleteTodo(id) {
        return axios.delete(TODO_API_BASE_URL + '/' + id);
    }
}

export default new TodoService()