package com.transport.xidian;

import java.util.ArrayList;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class ParseJson {

	public static ArrayList<Location> getList(String jsonStr) {
		ArrayList<Location> locationList = new ArrayList<Location>();

		JSONObject jsonObject = JSONObject.fromObject(jsonStr);
		JSONArray jsonArray = JSONArray.fromObject(jsonObject.get("points"));
		for (int i = 0; i < jsonArray.size(); i++) {
			JSONObject jsonObject2 = (JSONObject) jsonArray.get(i);
			Location location = new Location();
			location.setPointname(jsonObject2.getString("pointname"));
			location.setLat(jsonObject2.getString("lat"));
			location.setLng(jsonObject2.getString("lng"));
			locationList.add(location);

		}
		return locationList;
	}
}
