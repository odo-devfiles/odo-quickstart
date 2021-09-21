package com.odo.backend.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import com.odo.backend.exception.ResourceNotFondException;
import com.odo.backend.model.Todo;
import com.odo.backend.repository.TodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    // get all todos
    @GetMapping("/todos")
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    // create todo rest api
    @PostMapping("/todos")
    public Todo createTodo(@RequestBody Todo todo) {
        return todoRepository.save(todo);
    }

    // delete todo rest api
    @DeleteMapping("/todos/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTodo(@PathVariable Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(() -> new ResourceNotFondException("couldn't find todo item with id: " + id));
        
        todoRepository.delete(todo);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        
        return ResponseEntity.ok(response);
    }
}
