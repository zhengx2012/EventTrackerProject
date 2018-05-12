package com.skilldistillery.planner.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import com.skilldistillery.planner.entities.Planner;

class PlannerTest {
	
	private EntityManagerFactory emf;
	private EntityManager em;
	private Planner planner;

	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("TripPlanner");
		em = emf.createEntityManager();
		planner = em.find(Planner.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}

	@Test
	@DisplayName("Test Planner Entity mapping")
	void test1() {
		assertEquals("Denver", planner.getCity());
	}

}
