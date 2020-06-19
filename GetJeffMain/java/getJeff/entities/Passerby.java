package getJeff.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Passerby {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "passerby_seq")
	@SequenceGenerator(name = "passerby_seq", sequenceName = "passerby_seq", allocationSize = 1)
	private long id;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private String activity;

	public Passerby() {

	}

	public Passerby(String name, String activity) {
		super();
		this.name = name;
		this.activity = activity;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}

	public long getId() {
		return id;
	}

	@Override
	public String toString() {
		return name + activity;
	}

}
