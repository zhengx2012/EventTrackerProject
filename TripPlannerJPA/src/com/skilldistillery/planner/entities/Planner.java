package com.skilldistillery.planner.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Planner {
	/* attributes */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String city;
	private String state;
	private String country;

	@Temporal(TemporalType.DATE)
	private Date date;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "flight_time")
	private Date flightTime;

	@Column(name = "flight_number")
	private String flightNumber;

	@Column(name = "flight_Company")
	private String flightCompany;

	@Column(name = "trip_expenses")
	private double tripExpenses;

	/* constructors */
	public Planner() {
	}

	public Planner(int id, String city, String state, String country, Date date, Date flightTime, String flightNumber,
			String flightCompany, double tripExpenses) {
		super();
		this.id = id;
		this.city = city;
		this.state = state;
		this.country = country;
		this.date = date;
		this.flightTime = flightTime;
		this.flightNumber = flightNumber;
		this.flightCompany = flightCompany;
		this.tripExpenses = tripExpenses;
	}

	/* gets and sets */
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Date getFlightTime() {
		return flightTime;
	}

	public void setFlightTime(Date flightTime) {
		this.flightTime = flightTime;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getFlightCompany() {
		return flightCompany;
	}

	public void setFlightCompany(String flightCompany) {
		this.flightCompany = flightCompany;
	}

	public double getTripExpenses() {
		return tripExpenses;
	}

	public void setTripExpenses(double tripExpenses) {
		this.tripExpenses = tripExpenses;
	}

}
