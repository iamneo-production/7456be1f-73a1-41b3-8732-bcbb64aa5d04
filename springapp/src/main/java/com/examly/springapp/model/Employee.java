package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "employees")
public class Employee {

    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private long id;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="mail_id")
	private String emailId;
	
	@Column(name="url_link")
	private String urllink;
	
	public Employee()   // as hibernate uses proxys we have to use default constructors
	{
		
	}
	
	
	public Employee(String firstName, String lastName, String emailId,String urllink) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.urllink= urllink;
	}


	public String getUrllink() {
		return urllink;
	}
	public void setUrllink(String urllink) {
		this.urllink = urllink;
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


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmailId() {
		return emailId;
	}


	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
    
}
