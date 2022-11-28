package com.web.board.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "board")
@DynamicInsert  
@DynamicUpdate 
public class Board {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer itemno;
	
	@Column(name = "divisioncode")
	private String divisioncode;
	
	@Column(name = "itemtitle")
	private String itemtitle;
	
	@Column(name = "itemcontent")
	private String itemcontent;
	
	@Column(name = "itemcondition")
	private String itemcondition;
	
	@Column(name = "itemstatus")
	private boolean itemstatus;
	
	@Column(name = "studentid")
	private Integer studentid;
	
	@Column(name = "createdtime")
	private Date createdtime;
	
	@Column(name = "itemprice")
	private Integer itemprice;

	
	public Board() {
		super();
	}
	
	

	public Board(Integer itemno, String divisioncode, String itemtitle, String itemcondition, String itemcontent, Boolean itemstatus,
			Integer studentid, Date createdtime, Integer itemprice) {
		super();
		this.itemno = itemno;
		this.divisioncode = divisioncode;
		this.itemtitle = itemtitle;
		this.itemcondition = itemcondition;
		this.itemcontent = itemcontent;
		this.itemstatus = itemstatus;
		this.studentid = studentid;
		this.createdtime = createdtime;
		this.itemprice = itemprice;
	}

	// ---Getter/Setter ---

	public Integer getItemno() {
		return itemno;
	}



	public void setItemno(Integer itemno) {
		this.itemno = itemno;
	}



	public String getDivisioncode() {
		return divisioncode;
	}



	public void setDivisioncode(String divisioncode) {
		this.divisioncode = divisioncode;
	}



	public String getItemtitle() {
		return itemtitle;
	}



	public void setItemtitle(String itemtitle) {
		this.itemtitle = itemtitle;
	}



	public String getItemcontent() {
		return itemcontent;
	}



	public void setItemcontent(String itemcontent) {
		this.itemcontent = itemcontent;
	}



	public String getItemcondition() {
		return itemcondition;
	}



	public void setItemcondition(String itemcondition) {
		this.itemcondition = itemcondition;
	}



	public boolean isItemstatus() {
		return itemstatus;
	}



	public void setItemstatus(boolean itemstatus) {
		this.itemstatus = itemstatus;
	}



	public Integer getStudentid() {
		return studentid;
	}



	public void setStudentid(Integer studentid) {
		this.studentid = studentid;
	}



	public Date getCreatedtime() {
		return createdtime;
	}



	public void setCreatedtime(Date createdtime) {
		this.createdtime = createdtime;
	}



	public Integer getItemprice() {
		return itemprice;
	}



	public void setItemprice(Integer itemprice) {
		this.itemprice = itemprice;
	}
	

	}