package com.skilldistillery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.planner.entities.Planner;
import com.skilldistillery.planner.repositories.PlannerRepository;

@Service
public class PlannerServiceImpl implements PlannerService {

	@Autowired PlannerRepository plannerRepo;

	@Override
	public List<Planner> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Planner findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Planner findByCity(String city) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Planner replaceById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Planner updateById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean deleteById(int id) {
		// TODO Auto-generated method stub
		return null;
	}
}
