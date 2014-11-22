package no.saiboten.drumcalendar.utils;

import java.util.HashMap;
import java.util.Map;

public class Statistics {

	private String id;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Map<Long, Boolean> getActivatedDays() {
		return activatedDays;
	}

	public void setActivatedDays(Map<Long, Boolean> activatedDays) {
		this.activatedDays = activatedDays;
	}

	public Map<Long, OneDayStat> getDayMap() {
		return dayMap;
	}

	public void setDayMap(Map<Long, OneDayStat> dayMap) {
		this.dayMap = dayMap;
	}

	private Map<Long, Boolean> activatedDays;

	private Map<Long, OneDayStat> dayMap;

	public Statistics() {
		activatedDays = new HashMap<Long, Boolean>();
		dayMap = new HashMap<Long, OneDayStat>();

		id = "mysingleton";
	}

}
