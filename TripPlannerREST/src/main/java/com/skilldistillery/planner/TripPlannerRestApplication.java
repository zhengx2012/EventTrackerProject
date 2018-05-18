package com.skilldistillery.planner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication
public class TripPlannerRestApplication extends SpringBootServletInitializer{
	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(TripPlannerRestApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(TripPlannerRestApplication.class, args);
	}
}
