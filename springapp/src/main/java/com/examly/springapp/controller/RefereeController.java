package com.examly.springapp.controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.exception.ResourceNotFound;
import com.examly.springapp.model.Referee;
import com.examly.springapp.repository.RefereeRepository;



@CrossOrigin(allowedHeaders="*",origins="*")
@RestController
@RequestMapping("/admin")
public class RefereeController {
	@Autowired
	private RefereeRepository refereeRepository;
	
	// get referees
	@GetMapping("/referees")
	public List<Referee> getReferee(){
		return refereeRepository.findAll();
	}
		
	// create referee
	@PostMapping("/referees")
	public Referee createReferee(@RequestBody Referee referee) {
			return refereeRepository.save(referee);
		}
		//update
		@PutMapping("/referees/{id}")
		public  ResponseEntity<Referee> updateReferee(@PathVariable Long id,@RequestBody Referee RefereeDetails){
			Referee employee = refereeRepository.findById(id)
					.orElseThrow(()-> new ResourceNotFound("Referee not exist with id:"+ id));
			employee.setRefName(RefereeDetails.getRefName());
			employee.setRefUrl(RefereeDetails.getRefUrl());
			employee.setNoofMatches(RefereeDetails.getNoofMatches());
			Referee updatedEmployee = refereeRepository.save(employee);
			return ResponseEntity.ok(updatedEmployee);
		
		}
		
		//Delete Employee
		@DeleteMapping("/referees/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
			Referee referee = refereeRepository.findById(id)
					.orElseThrow(()-> new ResourceNotFound("referee not exist with id:"+ id));
			refereeRepository.delete(referee);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted",Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	
}
