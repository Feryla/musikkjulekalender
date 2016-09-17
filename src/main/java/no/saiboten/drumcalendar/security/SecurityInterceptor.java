package no.saiboten.drumcalendar.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import no.saiboten.drumcalendar.user.CalendarUser;
import no.saiboten.drumcalendar.user.CalendarUserService;
import no.saiboten.drumcalendar.user.LoggedInRequestHolder;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@Component
public class SecurityInterceptor extends HandlerInterceptorAdapter implements
		HandlerInterceptor {

	final Logger LOGGER = Logger.getLogger(SecurityInterceptor.class.getName());

	@Autowired
	CalendarUserService userService;

	public SecurityInterceptor() {

	}

	@Autowired
	private LoggedInRequestHolder loggedIn;

	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object arg2) throws Exception {
		
		LOGGER.debug("The interceptor is connected. Yeah");
		
		if (loggedIn.isLoggedIn()) {
			LOGGER.debug("User is logged in!");
			CalendarUser user = userService.getUser(loggedIn.getUserName());
			if (user == null) {
				LOGGER.debug("User does not exist in db. Creating user in db!");
				user = new CalendarUser();
				user.setUserName(loggedIn.getUserName());
				userService.putUser(user);
			}

			loggedIn.setCalendarUser(user);
		}
		return true;
	}
}