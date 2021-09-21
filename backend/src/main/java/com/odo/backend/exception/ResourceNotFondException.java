package com.odo.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// this exception is thrown when record doesn't exist in the database
@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotFondException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public ResourceNotFondException(String message) {
        super(message);
    }
}
