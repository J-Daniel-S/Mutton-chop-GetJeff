package getJeff.utils;

import java.util.ArrayList;
import java.util.List;

import getJeff.entities.Passerby;
import getJeff.services.PasserbyService;

public class PasserbyQuerier {

	PasserbyService pasRepo;

	List<Passerby> passersby;
	int oldLength;
	int lengthChange;

	public PasserbyQuerier(PasserbyService pasRepo) {
		this.pasRepo = pasRepo;
		passersby = new ArrayList<>();
	}

	// this method may have to receive the thread and tell it to wait
	public List<Passerby> initialQuery() {
		passersby = pasRepo.findAll();
		oldLength = 0;
		return passersby;
	}

	public List<Passerby> subsequentQuery() {
		passersby = pasRepo.findAll();
		lengthChange = passersby.size() - 1;
		if (lengthChange > -1) {
			passersby = passersby.subList(oldLength, lengthChange);
		} else {
			passersby = null;
		}

		oldLength = lengthChange;
		return passersby;
	}

}
