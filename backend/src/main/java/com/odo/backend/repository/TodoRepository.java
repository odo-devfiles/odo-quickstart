package com.odo.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.odo.backend.model.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    
}
