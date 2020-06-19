package getJeff.utils;

import java.util.List;

import getJeff.entities.Activity;
import getJeff.entities.Name;
import getJeff.entities.Passerby;
import getJeff.services.ActivityService;
import getJeff.services.NameService;
import getJeff.services.PasserbyService;

public class PasserbyGenerator implements Runnable {

	PasserbyService pasRepo;
	NameService namRepo;
	ActivityService actRepo;

	long delay = 5;
	List<Name> names;
	List<Activity> activities;

	public PasserbyGenerator(PasserbyService pasRepo, NameService namRepo, ActivityService actRepo) {
		this.pasRepo = pasRepo;
		this.namRepo = namRepo;
		this.actRepo = actRepo;
		names = namRepo.findAll();
		activities = actRepo.findAll();
	}

	// this method's only function will be to put a new passerby into the database.
	// I do not need to have it return anything
	public void makePossibleJeff() {
		int nameIndex = (int) (Math.random() * 50);
		int actIndex = (int) (Math.random() * 50);

		Passerby maybeJeff = new Passerby(names.get(nameIndex).toString(), activities.get(actIndex).toString());

		pasRepo.save(maybeJeff);
	}

	@Override
	public void run() {
		while (true) {
			try {
				Thread.sleep(delay);
				delay = (long) ((0.1 + Math.random()) * 1000);
				makePossibleJeff();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
}
