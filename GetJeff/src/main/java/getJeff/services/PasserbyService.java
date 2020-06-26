package getJeff.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import getJeff.dao.IPasserbyRepository;
import getJeff.entities.Passerby;

@Service
public class PasserbyService {

	@Autowired
	IPasserbyRepository pasRepo;

	public List<Passerby> findAll() {
		return pasRepo.findAll();
	}

	public Passerby save(Passerby passerby) {
		return pasRepo.save(passerby);
	}

	public void deleteAll() {
		pasRepo.deleteAll();
	}

}
