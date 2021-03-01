package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="student")


public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lName;
	
	@Column(name="adress")
	private String adress; 
	
	@Column(name="parent_name")
	private String parentName;
	
	@Column(name="date_of_birth")
	private String dob;
	
	@Column(name="enrollment_date")
	private String enrollmentDate;
	
	@ManyToOne
	private Grade grade;
	
	public Student() {
		
	}
	
	
	public Student(String firstName, String lName, String adress, String parentName, String dob,
			String enrollmentDate) {
		super();
		this.firstName = firstName;
		this.lName = lName;
		this.adress = adress;
		this.parentName = parentName;
		this.dob = dob;
		this.enrollmentDate = enrollmentDate;
	}
	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}
	public String getParentName() {
		return parentName;
	}
	public void setParentName(String parentName) {
		this.parentName = parentName;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getEnrollmentDate() {
		return enrollmentDate;
	}
	public void setEnrollmentDate(String enrollmentDate) {
		this.enrollmentDate = enrollmentDate;
	}
	
}
