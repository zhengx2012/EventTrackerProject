package com.skilldistillery.planner.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.planner.entities.Planner;
import com.skilldistillery.planner.services.PlannerService;

@RestController
@RequestMapping(path = "/api")
public class PlannerController {

	@Autowired
	private PlannerService plannerService;

	@RequestMapping(path = "/ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}
	
	@RequestMapping(path = "/", method = RequestMethod.GET)
	public String home() {
		return "index.html";
	}

	@RequestMapping(path = "/trips", method = RequestMethod.GET)
	public List<Planner> index() {
		return plannerService.findAll();
	}

	@RequestMapping(path = "/trips/{id}", method = RequestMethod.GET)
	public Planner show(@PathVariable int id) {
		return plannerService.findById(id);
	}

	@RequestMapping(path = "/trips", method = RequestMethod.POST)
	public Planner create(@RequestBody Planner plan) {
		return plannerService.addPlan(plan);
	}

	@RequestMapping(path = "/trips/{id}", method = RequestMethod.PUT)
	public Planner replace(@PathVariable int id, @RequestBody Planner plan) {
		return plannerService.replaceById(id, plan);
	}

	@RequestMapping(path = "/trips/{id}", method = RequestMethod.PATCH)
	public Planner update(@PathVariable int id, @RequestBody Planner plan) {
		return plannerService.updateById(id, plan);
	}

	@RequestMapping(path = "/trips/{id}", method = RequestMethod.DELETE)
	public Boolean destroy(@PathVariable int id) {
		return plannerService.deleteById(id);
	}

}
