package getJeff.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import getJeff.dao.INameRepository;
import getJeff.entities.Name;

@Service
public class NameService {

	@Autowired
	INameRepository namRepo;

	public List<Name> findAll() {
		return namRepo.findAll();
	}

}
