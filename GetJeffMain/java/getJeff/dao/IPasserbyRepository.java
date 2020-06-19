package getJeff.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import getJeff.entities.Passerby;

public interface IPasserbyRepository extends CrudRepository<Passerby, Long> {

	@Override
	public List<Passerby> findAll();

}
