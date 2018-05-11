package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.planner.entities.Planner;

public interface PlannerService {
	
	List<Planner> findAll();
	Planner findById(int id);
	Planner findByCity(String city);
	Planner replaceById(int id);
	Planner updateById(int id);
	Boolean deleteById(int id);

}
