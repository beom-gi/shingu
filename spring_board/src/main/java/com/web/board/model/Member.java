package com.web.board.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "member")
@DynamicInsert  
@DynamicUpdate 
public class Member {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Integer no;
	
	@Column(name = "studentid")
	private String studentid;

	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "divisioncode")
	private String divisioncode;
	
	@Column(name = "phonenumber")
	private String phonenumber;
	
	public Integer getNo() {
		return no;
	}

	public void setNo(Integer no) {
		this.no = no;
	}

	public String getStudentid() {
		return studentid;
	}

	public void setStudentid(String studentid) {
		this.studentid = studentid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDivisioncode() {
		return divisioncode;
	}

	public void setDivisioncode(String divisioncode) {
		this.divisioncode = divisioncode;
	}
	
	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	@Override
	public String toString() {
		return "Member [no="+ no + ",studentid =" + studentid  + ", username=" + username + ", password=" + password + ", divisioncode=" + divisioncode + ", phonenumber=" + phonenumber +"]";
	}
}
