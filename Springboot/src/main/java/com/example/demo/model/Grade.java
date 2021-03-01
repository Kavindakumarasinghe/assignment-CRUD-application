package com.example.demo.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="grade")
public class Grade {
	 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name ="teacher_name")
	private String teacherName;
	
	@Column(name = "teacher_phn")
	private int teacherPhone;
	
	@Column(name  ="teacher_adress")
	private String teacheradress;
	
	@Column(name ="noofstudents")
	private int noofStudents;
	
	@OneToMany(mappedBy = "grade")
	private List<Student> student;
	
	public Grade() {
		
		
	}
	
	
	public Grade(String teacherName, int teacherPhone, String teacheradress, int noofStudents) {
		super();
		this.teacherName = teacherName;
		this.teacherPhone = teacherPhone;
		this.teacheradress = teacheradress;
		this.noofStudents = noofStudents;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTeacherName() {
		return teacherName;
	}
	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}
	public int getTeacherPhone() {
		return teacherPhone;
	}
	public void setTeacherPhone(int teacherPhone) {
		this.teacherPhone = teacherPhone;
	}
	public String getTeacheradress() {
		return teacheradress;
	}
	public void setTeacheradress(String teacheradress) {
		this.teacheradress = teacheradress;
	}
	public int getNoofStudents() {
		return noofStudents;
	}
	public void setNoofStudents(int noofStudents) {
		this.noofStudents = noofStudents;
	}

}
