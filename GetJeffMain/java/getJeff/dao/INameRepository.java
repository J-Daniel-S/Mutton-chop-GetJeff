package getJeff.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import getJeff.entities.Name;

public interface INameRepository extends CrudRepository<Name, Long> {

	@Override
	public List<Name> findAll();

}
