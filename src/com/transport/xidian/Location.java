package com.transport.xidian;

public class Location {
	private String pointname;
	private String lng;
	private String lat;
	public String getPointname() {
		return pointname;
	}
	public void setPointname(String pointname) {
		this.pointname = pointname;
	}
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	@Override
	public String toString() {
		return "Location [pointname=" + pointname + ", lng=" + lng + ", lat="
				+ lat + "]";
	}

}
