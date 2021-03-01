package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Grade;

import com.example.demo.repository.GradeRepository;


@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class GradeController {

	@Autowired
	private GradeRepository gradeRepository;
	
	
	//get all grades
	@GetMapping("/grades")
	public List<Grade> getAllGrades(){
		return gradeRepository.findAll();
	}
	
	//create grade rest api
	@PostMapping("/grades")
	public Grade createGrade( @RequestBody Grade grade) {
		return gradeRepository.save(grade);
	}
	
	//get grade by id
	@GetMapping ("/grades/{id}")
	public ResponseEntity<Grade> getGradeById(@PathVariable Long id){
		 Grade grade= gradeRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Grade not exist with id:"+ id));
		  
		 return  ResponseEntity.ok(grade);
	}
	
	//update grade rest api
	
	@PutMapping ("/grades/{id}")
	public ResponseEntity<Grade> updatesGradEntity( @PathVariable Long id, @RequestBody Grade gradeDetails){
		
		 Grade grade = gradeRepository.findById(id)
				 .orElseThrow(() ->new ResourceNotFoundException("Grade not exist with id:"+ id));
		  
		 grade.setTeacherName(gradeDetails.getTeacherName());
		 grade.setTeacherPhone(gradeDetails.getTeacherPhone());
		 grade.setTeacheradress(gradeDetails.getTeacheradress());
		 grade.setNoofStudents(gradeDetails.getNoofStudents());
		 
		 
		 Grade updatedGrade= gradeRepository.save(grade);
		 return ResponseEntity.ok(updatedGrade);
	}

	
	//delete student rest api
	@DeleteMapping("/grades/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteGrade(@PathVariable Long id){
		
		 Grade grade = gradeRepository.findById(id)
				 .orElseThrow(() ->new ResourceNotFoundException("Student not exist with id:"+ id));
		  
		 gradeRepository.delete(grade);
		 Map<String, Boolean> response= new HashMap<>();
		 response.put("deleted", Boolean.TRUE);
		 return ResponseEntity.ok(response); 
					 
	}
	
}
