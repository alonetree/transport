package com.transport.xidian;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
@WebServlet(name = "QueryDataDemo", value = {"/QueryData"})
public class QueryData extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String requestId = request.getParameter("REQUESTID");
		response.setHeader("Content-Type", "text/html;charset=utf-8");
		// System.out.println(requestId);
		MySQLCURD query = new MySQLCURD();
		OutputStream os = response.getOutputStream();
		query.read(requestId, os);
		os.close();
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
