package com.examly.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.Referee;

@Repository
public interface RefereeRepository extends JpaRepository<Referee, Long> {

}