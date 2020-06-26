package getJeff.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import getJeff.dao.IActivityRepository;
import getJeff.entities.Activity;

@Service
public class ActivityService {

	@Autowired
	IActivityRepository actRepo;

	public List<Activity> findAll() {
		return actRepo.findAll();
	}
}
