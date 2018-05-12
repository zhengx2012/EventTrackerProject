package com.skilldistillery.planner.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.planner.entities.Planner;
import com.skilldistillery.planner.repositories.PlannerRepository;

@Service
public class PlannerServiceImpl implements PlannerService {

	@Autowired
	PlannerRepository plannerRepo;

	@Override
	public List<Planner> findAll() {
		return plannerRepo.findAll();
	}

	@Override
	public Planner findById(int id) {
		return plannerRepo.findById(id).get();
	}

	@Override
	public Planner findByCity(String city) {
		return plannerRepo.findByCityIgnoreCase(city);
	}

	@Override
	public Planner addPlan(Planner plan) {
		return plannerRepo.saveAndFlush(plan);
	}

	@Override
	public Planner replaceById(int id, Planner replace) {
		Planner managed = plannerRepo.findById(id).get();
		managed.setCity(replace.getCity());
		managed.setState(replace.getState());
		managed.setCountry(replace.getCountry());
		managed.setDate(replace.getDate());
		managed.setFlightTime(replace.getFlightTime());
		managed.setFlightCompany(replace.getFlightCompany());
		managed.setFlightNumber(replace.getFlightNumber());
		managed.setTripExpenses(replace.getTripExpenses());
		return plannerRepo.saveAndFlush(managed);
	}

	@Override
	public Planner updateById(int id, Planner update) {
		Planner managed = plannerRepo.findById(id).get();
		if (update.getCity() != null) {
			managed.setCity(update.getCity());
		}
		if (update.getState() != null) {
			managed.setState(update.getState());
		}
		if (update.getCountry() != null) {
			managed.setCountry(update.getCountry());
		}
		if (update.getDate() != null) {
			managed.setDate(update.getDate());
		}
		if (update.getFlightTime() != null) {
			managed.setFlightTime(update.getFlightTime());
		}
		if (update.getFlightCompany() != null) {
			managed.setFlightCompany(update.getFlightCompany());
		}
		if (update.getFlightNumber() != null) {
			managed.setFlightNumber(update.getFlightNumber());
		}
		if (update.getTripExpenses() > 0.0) {
			managed.setTripExpenses(update.getTripExpenses());
		}
		return plannerRepo.saveAndFlush(managed);
	}

	@Override
	public Boolean deleteById(int id) {
		try {
			plannerRepo.deleteById(id);
			return true;

		} catch (Exception e) {
			e.printStackTrace();

		}

		return false;
	}

}
