package com.student.student_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.student.student_management.model.Student;



public interface StudentRepository extends JpaRepository<Student, Integer> {
}
