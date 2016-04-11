package com.transport.xidian;

import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

import org.apache.log4j.Logger;

public class JDBCUtils {
	private static final Logger LOGGER = Logger.getLogger(JDBCUtils.class);
	private static Properties prop = null;
	private static String url = null;
	private static String driver = null;
	private static String username = null;
	private static String password = null;
	private JDBCUtils() {
	}
	static {
		try {
			prop = new Properties();
			String path = JDBCUtils.class.getClassLoader()
					.getResource("config.properties").getPath();
			path = path.replaceAll("%20", " ");
			prop.load(new FileReader(path));
			driver = prop.getProperty("driver");
			url = prop.getProperty("url");
			username = prop.getProperty("username");
			password = prop.getProperty("password");
			Class.forName(driver);
		} catch (Exception e) {
			LOGGER.error("load propetities fail!", e);
		}
	}

	/**
	 * 获取数据库链接
	 * 
	 * @throws ClassNotFoundException
	 * @throws SQLException
	 */
	public static Connection getConn() throws ClassNotFoundException,
			SQLException {
		return DriverManager.getConnection(url, username, password);
	}

	/**
	 * 关闭数据库链接
	 */
	public static void close(ResultSet rs, Statement stat, Connection conn) {

		if (rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				rs = null;
			}
		}
		if (stat != null) {
			try {
				stat.close();
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				stat = null;
			}
		}
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				conn = null;
			}
		}

	}
}
