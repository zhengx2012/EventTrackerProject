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

	/* helpers */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((city == null) ? 0 : city.hashCode());
		result = prime * result + ((country == null) ? 0 : country.hashCode());
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((flightCompany == null) ? 0 : flightCompany.hashCode());
		result = prime * result + ((flightNumber == null) ? 0 : flightNumber.hashCode());
		result = prime * result + ((flightTime == null) ? 0 : flightTime.hashCode());
		result = prime * result + id;
		result = prime * result + ((state == null) ? 0 : state.hashCode());
		long temp;
		temp = Double.doubleToLongBits(tripExpenses);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Planner other = (Planner) obj;
		if (city == null) {
			if (other.city != null)
				return false;
		} else if (!city.equals(other.city))
			return false;
		if (country == null) {
			if (other.country != null)
				return false;
		} else if (!country.equals(other.country))
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (flightCompany == null) {
			if (other.flightCompany != null)
				return false;
		} else if (!flightCompany.equals(other.flightCompany))
			return false;
		if (flightNumber == null) {
			if (other.flightNumber != null)
				return false;
		} else if (!flightNumber.equals(other.flightNumber))
			return false;
		if (flightTime == null) {
			if (other.flightTime != null)
				return false;
		} else if (!flightTime.equals(other.flightTime))
			return false;
		if (id != other.id)
			return false;
		if (state == null) {
			if (other.state != null)
				return false;
		} else if (!state.equals(other.state))
			return false;
		if (Double.doubleToLongBits(tripExpenses) != Double.doubleToLongBits(other.tripExpenses))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Planner [id=" + id + ", city=" + city + ", state=" + state + ", country=" + country + ", date=" + date
				+ ", flightTime=" + flightTime + ", flightNumber=" + flightNumber + ", flightCompany=" + flightCompany
				+ ", tripExpenses=" + tripExpenses + "]";
	}

}
