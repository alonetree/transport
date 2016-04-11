package com.transport.xidian;

import java.io.IOException;
import java.util.Map;

import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class BaiduAPIUtil {

	public static DistanceAndTimeBean getDistanceAndTimeBean(
			DistanceAndTimeBean dat) {
		String url = httpUrl(dat.getOrigin(), dat.getDest());
		CloseableHttpClient client = HttpClients.createDefault();
		HttpGet httpget = new HttpGet(url);
		CloseableHttpResponse response = null;
		try {
			response = client.execute(httpget);
			HttpEntity entity = response.getEntity();
			if (entity != null) {
				Map<String, Integer> m = XMLUtil.parseWithDom4j(EntityUtils
						.toString(entity));
				dat.setDistance(m.get("distance"));
				dat.setNeedTime(m.get("needTime"));
				dat.setStatus(m.get("status"));
				m = null;
				entity = null;
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
		} finally {
			try {
				response.close();
			} catch (IOException e) {
			}
		}
		return dat;
	}

	private static String httpUrl(String origin, String dest) {
		String url = new String(
				"http://api.map.baidu.com/direction/v1/routematrix?");
		url += "origins=" + origin + "&" + "destinations=" + dest + "&"
				+ "ak=FvzF0FzcQxsiuNstiEg4tRry";
		return url;
	}
}
