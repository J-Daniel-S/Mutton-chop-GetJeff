package getJeff.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import getJeff.entities.Activity;

public interface IActivityRepository extends CrudRepository<Activity, Long> {

	@Override
	public List<Activity> findAll();

}
