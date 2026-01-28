package com.student.student_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.student_management.model.Student;
import com.student.student_management.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;


    public Student saveStudent(Student student) {
        return repo.save(student);
    }

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public void deleteStudent(int id) {
        repo.deleteById(id);
    }
}