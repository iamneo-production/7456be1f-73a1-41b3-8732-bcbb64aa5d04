package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Employee;

// japrepository exposes database cool methods like save ,find ,findall ,provides out of box implementation
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long >{

}