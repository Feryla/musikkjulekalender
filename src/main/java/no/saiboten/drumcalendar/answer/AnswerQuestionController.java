package no.saiboten.drumcalendar.answer;

import java.util.Calendar;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import no.saiboten.drumcalendar.day.postgres.DayPostgres;
import no.saiboten.drumcalendar.day.service.DayService;
import no.saiboten.drumcalendar.user.CalendarUser;
import no.saiboten.drumcalendar.user.CalendarUserService;
import no.saiboten.drumcalendar.user.LoggedInRequestHolder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

@Controller
public class AnswerQuestionController {

	Logger LOGGER = LoggerFactory.getLogger(AnswerQuestionController.class);

	@Autowired
	private LoggedInRequestHolder loggedIn;

	@Autowired
	private CalendarUserService calendarUserService;

	@Autowired
	private DayService dayService;

	@RequestMapping("/answer")
	public ModelAndView answerQuestion(@RequestParam(value = "song") String song) {
		ModelAndView mav = new ModelAndView("answergiven");
		mav.setView(new MappingJackson2JsonView());
	
		if (song == null || song.equals("")) {
			mav.addObject("feedback", "Sang var tom. Vennligst prøv igjen..");
			return mav;
		}

		song = song.trim();

		Pattern pattern = Pattern.compile("(\\w|\\s|[0-9]|\\?|\\&|ø|æ|å)+");
		Matcher matchSong = pattern.matcher(song);
		if (!matchSong.matches()) {
			mav.addObject(
					"feedback",
					"Forslaget inneholdt ulovlige tegn. Kun bokstaver og tall er tillatt. Dersom svaret ditt inneholder spesielle tegn, kan du fjerne disse, vi har i så fall gjort det samme i fasiten");
			return mav;
		}

		CalendarUser user = loggedIn.getCalendarUser();
		DayPostgres today = dayService.getToday();
		Calendar cal = Calendar.getInstance();
		cal.setTime(today.getRevealDate());

		LOGGER.debug("Date is: " + cal.getTimeInMillis() + ". User is: " + user);
		if (user != null) {
			Answer answer = new Answer();
			answer.setAnswerSong(song);
			answer.setDay(cal.getTimeInMillis());
			
//			for(String songSolution : today.getSolutionsSong()) {
//				if(songSolution.toLowerCase().equals(answer.getAnswerSong().toLowerCase())) {
//					answer.setCorrectSong(true);
//					answer.setTimeOfCorrectAnswerInMillis(System.currentTimeMillis());
//				}
//			} //FIXME

			user.addAnswer(cal.getTimeInMillis(), answer);
			
			calendarUserService.putUser(user);
			LOGGER.debug("User updated with new answer: " + song );
			
			if(answer.isCorrectSong()) {
				mav.addObject("feedback", "Riktig! Svaret var: " + song + ". Godt jobbet!");
				mav.addObject("correct", true);
			}
			else {
				mav.addObject("feedback", "Beklager, svaret var feil! Du tippet: " + song);
				mav.addObject("correct", false);

			}
			
		} else {
			mav.addObject("feedback", "Noe gikk galt. Er du innlogget?");
			mav.addObject("correct", false);
		}

		return mav;
	}

	@RequestMapping("/answermobile")
	public ModelAndView answerMobile(@RequestParam(value = "song") String song) {
		ModelAndView mav = answerQuestion(song);
		mav.setViewName("/mobile/answergiven");
		return mav;
	}
	
	@RequestMapping("/answer.json")
	public ModelAndView answerJson(@RequestParam(value = "song") String song) {
		ModelAndView mav = answerQuestion(song);
		mav.setView(new MappingJackson2JsonView());
		return mav;
	}

	@RequestMapping(value = "/admin/answerCheat")
	public ModelAndView answerQuestionGet() {
		ModelAndView mav = new ModelAndView("cheat");
		return mav;
	}

	@RequestMapping(value = "/admin/answerCheat", method = RequestMethod.POST)
	public ModelAndView answerQuestion(@RequestParam(value = "song") String song, @RequestParam(value = "day") Long day) {
		ModelAndView mav = new ModelAndView("answergiven");

		CalendarUser user = loggedIn.getCalendarUser();
		Long date = day;
		LOGGER.debug("Date is: " + date + ". User is: " + user);
		if (user != null) {
			Answer answer = new Answer();
			answer.setAnswerSong(song);
			answer.setDay(date);
			user.addAnswer(date, answer);
			calendarUserService.putUser(user);
			LOGGER.debug("User updated with new answer: " + song + " ");
			mav.addObject("feedback", "Svar gitt: " + song);
		} else {
			mav.addObject("feedback", "Noe gikk galt. Er du innlogget?");
		}

		return mav;
	}
}