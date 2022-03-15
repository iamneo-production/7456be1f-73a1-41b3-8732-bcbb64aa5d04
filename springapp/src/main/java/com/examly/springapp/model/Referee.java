package com.examly.springapp.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Referee")
public class Referee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private  long id;
	@Column(name="Name")
	private String RefName;
	@Column(name="NoOfMatches")
	private int noofMatches;
	@Column(name="RefUrl")
	private String RefUrl;
	
	public Referee() {
		
	}
	public Referee(String refName, int noofMatches, String refUrl) {
		super();
		RefName = refName;
		this.noofMatches = noofMatches;
		RefUrl = refUrl;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRefName() {
		return RefName;
	}
	public void setRefName(String refName) {
		RefName = refName;
	}
	public int getNoofMatches() {
		return noofMatches;
	}
	public void setNoofMatches(int noofMatches) {
		this.noofMatches = noofMatches;
	}
	public String getRefUrl() {
		return RefUrl;
	}
	public void setRefUrl(String refUrl) {
		RefUrl = refUrl;
	}
	

}
