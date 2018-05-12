package com.skilldistillery.planner.services;

import java.util.List;

import com.skilldistillery.planner.entities.Planner;

public interface PlannerService {
	
	List<Planner> findAll();
	Planner findById(int id);
	Planner findByCity(String city);
	Planner addPlan(Planner plan);
	Planner replaceById(int id, Planner planner);
	Planner updateById(int id, Planner planner);
	Boolean deleteById(int id);

}
