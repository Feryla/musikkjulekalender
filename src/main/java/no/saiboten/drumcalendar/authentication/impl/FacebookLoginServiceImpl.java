package no.saiboten.drumcalendar.authentication.impl;

import no.saiboten.drumcalendar.authentication.FacebookLoginService;
import no.saiboten.drumcalendar.user.LoggedInRequestHolder;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.UserOperations;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
import org.springframework.stereotype.Service;

@Service
public class FacebookLoginServiceImpl implements FacebookLoginService {

    private Logger logger = LoggerFactory.getLogger(FacebookLoginServiceImpl.class);
    
	private LoggedInRequestHolder loggedInRequestHolder;

	@Autowired
	public FacebookLoginServiceImpl(LoggedInRequestHolder loggedInRequestHolder) {
		this.loggedInRequestHolder = loggedInRequestHolder;
	}

	@Override
	public boolean login(String accessToken) {
		boolean success = false;
		
		if(loggedInRequestHolder.isLoggedIn()) {
			logger.info("User is already logged in. No need to do anything");
			success = true;
		}
		else {
			Facebook facebook = new FacebookTemplate(accessToken);
			UserOperations userOperations = facebook.userOperations();

			String username = userOperations.getUserProfile().getEmail();
			if(StringUtils.isNotEmpty(username)) {
				logger.debug("Facebook Username: " + username);
				loggedInRequestHolder.setUserName(username);
				loggedInRequestHolder.setLoggedIn(true);
				success = true;
			}
			else {
				logger.warn("Facebook Username is empty! Something has gone wrong ...");
			}
		}
		
		
		return success;
	}

}