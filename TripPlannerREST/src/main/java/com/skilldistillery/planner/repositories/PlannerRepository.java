package com.skilldistillery.planner.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.planner.entities.Planner;

public interface PlannerRepository extends JpaRepository<Planner, Integer> {

	Planner findByCityIgnoreCase(String city);
}
