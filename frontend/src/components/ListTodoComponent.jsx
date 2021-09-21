import React, { Component } from 'react';
import TodoService from '../services/TodoService';

class ListTodoComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            description: '',
            todos: []
        };
        
        this.createTodo = this.createTodo.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.createTodo = this.createTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
        TodoService.getTodos().then((res) => {
            this.setState({todos: res.data});
        });
    }

    createTodo= (e) => {
        e.preventDefault();

        let todo = {description: this.state.description};

        TodoService.createTodo(todo).then((res) => {
            // this.setState({todos: this.state.todos.concat(todo)});
            // this.setState({todos: res.data});
            window.location.reload();
        });
    }

    deleteTodo(id){
        console.log('in deleteTodo for id: ' + id);
        TodoService.deleteTodo(id).then((res) => {
            this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
        });
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    render() {
        return (
            <div>
                <br />
                <h2 className="text-center">Todos</h2>
                <br />
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="description" placeholder="Add a new task" 
                        value={this.state.description} onChange={this.changeDescriptionHandler} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.createTodo}>Add</button>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-hover">
                        <thead></thead>
                        <tbody className="text-center">
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key = {todo.id}>
                                        <td> {todo.description} </td>
                                        <td>
                                            <button onClick={() => this.deleteTodo(todo.id)} className="btn btn-danger">Done</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodoComponent;