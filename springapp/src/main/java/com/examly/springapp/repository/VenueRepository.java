package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.handball.demo.Model.Venue;

public interface VenueRepository extends JpaRepository<Venue, Integer> {

}