package com.transport.xidian;

import java.util.HashMap;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

public class XMLUtil {
	public static Map<String, Integer> parseWithDom4j(String xmlData) {
		Document doc = null;
		Map<String, Integer> m = new HashMap<String, Integer>();

		try {
			doc = DocumentHelper.parseText(xmlData);
		} catch (DocumentException e) {
			System.out.println("XML file error!");
		}
		Element root = doc.getRootElement();
		m.put("status", Integer.parseInt(root.elementText("status")));
		Element ele = root.element("result").element("elements");
		Element distance = ele.element("distance");
		Element duration = ele.element("duration");
		m.put("distance", Integer.parseInt(distance.elementText("value")));
		m.put("needTime", Integer.parseInt(duration.elementText("value")));
		xmlData = null;
		return m;
	}
}
