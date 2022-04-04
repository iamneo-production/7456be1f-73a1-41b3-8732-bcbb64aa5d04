package com.examly.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.mnpxodel.Referee;

public interface RefereeRepository extends JpaRepository<Referee, Integer> {

}
