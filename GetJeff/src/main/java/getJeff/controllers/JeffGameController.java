package getJeff.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import getJeff.entities.Passerby;
import getJeff.services.ActivityService;
import getJeff.services.NameService;
import getJeff.services.PasserbyService;
import getJeff.utils.PasserbyGenerator;
import getJeff.utils.PasserbyQuerier;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RequestMapping("/get_jeff")
public class JeffGameController {

	@Autowired
	PasserbyService pasRepo;
	@Autowired
	NameService namRepo;
	@Autowired
	ActivityService actRepo;

	Thread generate;
	PasserbyGenerator pasGenerator;
	PasserbyQuerier pasQuery;

	List<Passerby> passers;

	@GetMapping
	public RedirectView jeffGetting() {
		pasGenerator = new PasserbyGenerator(pasRepo, namRepo, actRepo);
		pasQuery = new PasserbyQuerier(pasRepo);
		generate = new Thread(pasGenerator);
		passers = new ArrayList<>();
		generate.start();

		return new RedirectView("/get_jeff/initial_jeffs");
	}

	@GetMapping("/initial_jeffs")
	public List<Passerby> startGettingJeff() {
		passers = pasQuery.initialQuery();
		return passers;
	}

	@GetMapping("/more_jeffs")
	public List<Passerby> keepGettingJeff() {
		passers = pasQuery.subsequentQuery();
		return passers;
	}

	// After the timer expires on the UI side send a post request here
	// or possibly also after defeat conditions are satisfied
	@SuppressWarnings("deprecation")
	@GetMapping("/stop_jeff")
	public String stop(Model model) throws InterruptedException {
		generate.stop();
		Thread.sleep(3000);
		pasRepo.deleteAll();
		return "Jeff is stopped :)";
	}

//	@GetMapping("/jeff_wins") // perhaps can consolidate with stop_jeff
//	public String noMoreJeffs() {
//		pasRepo.deleteAll();
//		return "jeff_Wins";
//	}

}
