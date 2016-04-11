package com.transport.xidian;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings({"serial"})
@WebServlet(name = "testVersion", value = {"/calculate"}, loadOnStartup = 1)
public class Transport extends HttpServlet {
	ExecutorService exec = Executors.newCachedThreadPool();

	public void destroy() {
		exec.shutdownNow();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String content = request.getParameter("content");
		String REQUESTID = new RandomGUID().toString();
		String rawFilePath = this.getServletContext().getRealPath(
				"/" + REQUESTID + ".json");
		File fileRaw = new File(rawFilePath);
		if (!fileRaw.exists()) {
			fileRaw.createNewFile();
		}
		BufferedWriter writerRaw = new BufferedWriter(new FileWriter(fileRaw));
		writerRaw.write(content);
		writerRaw.close();
		MySQLCURD insert = new MySQLCURD();
		insert.addRaw(REQUESTID, content, rawFilePath);
		response.setContentType("text/html;charset=utf-8");
		response.getWriter().print(REQUESTID);
		/***********************************************************************/
		// String tempFilePath = this.getServletContext().getRealPath(
		// "/" + REQUESTID + "-temp.txt");
		// File fileTemp = new File(tempFilePath);
		//

		// if (!fileTemp.exists()) {
		// fileTemp.createNewFile();
		// }

		// BufferedWriter writerNew = new BufferedWriter(new
		// FileWriter(fileTemp));

		// List<Location> locationList = ParseJson.getList(content);
		// DistanceAndTimeBean dat = new DistanceAndTimeBean();
		// int size = locationList.size();
		// for (int i = 0; i < size; i++) {
		// for (int j = 1; j < size; j++) {
		// if (i == j)
		// continue;
		// Location origin = locationList.get(i);
		// Location destination = locationList.get(j);
		// dat.setOriginNum(origin.getPointname());
		// dat.setDestNum(destination.getPointname());
		// dat.setOrigin(origin.getLng() + "," + origin.getLat());
		// dat.setDest(destination.getLng() + "," + destination.getLat());
		// System.out.println(dat.getOrigin());
		// System.out.println(dat.getDest());
		// origin = null;
		// destination = null;
		// BaiduAPIUtil.getDistanceAndTimeBean(dat);
		// System.out.println(dat.getDistance());
		// writerNew.write(dat.toString());
		// }
		// }
		// writerNew.close();
		// try {
		// Compute compute = new Compute();
		// Object[] resultFilePath = compute
		// .main(1, rawFilePath, tempFilePath);
		// System.out.println(resultFilePath[0]);
		// } catch (MWException e) {
		// e.printStackTrace();
		// }
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		this.doGet(request, response);
	}

	@Override
	public void init() {
		exec.execute(new TaskDispatchThread((short) 1));
	}
}
