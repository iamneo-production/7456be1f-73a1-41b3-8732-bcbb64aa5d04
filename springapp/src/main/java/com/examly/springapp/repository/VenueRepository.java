package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Venue;

public interface VenueRepository extends JpaRepository<Venue, Integer> {

}
