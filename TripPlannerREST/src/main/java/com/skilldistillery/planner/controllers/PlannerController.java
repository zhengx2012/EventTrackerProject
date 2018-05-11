package com.skilldistillery.planner.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.services.PlannerService;

@RestController
@RequestMapping(path = "api")
public class PlannerController {
	
	@Autowired
	private PlannerService plannerService;

}
