package com.transport.xidian;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;

public class MySQLCURD {
	private final static Logger LOGGER = Logger.getLogger(MySQLCURD.class);

	public void addStatus(String requstid) {
		Connection conn = null;
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			conn = JDBCUtils.getConn();
			String sql = "update transportinfo set CALCULATE=1 where REQUESTID=requestid ";
			st = conn.prepareStatement(sql);
			st.executeUpdate();
		} catch (Exception e) {
			LOGGER.error("addStatus syntax error!", e);
		} finally {
			JDBCUtils.close(rs, st, conn);;
		}
	}

	public void addRaw(String requestid, String rawdata, String rawPath) {
		Connection conn = null;
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			conn = JDBCUtils.getConn();
			String sql = "insert into transportinfo(REQUESTID,RAWDATA,RAWPATH) values(?,?,?)";
			st = conn.prepareStatement(sql);
			st.setString(1, requestid);
			st.setString(2, rawdata);
			st.setString(3, rawPath);
			st.executeUpdate();
		} catch (Exception e) {
			LOGGER.error("addRaw syntax or connection error!", e);
		} finally {
			JDBCUtils.close(rs, st, conn);;
		}
	}

	public void addResult(String path, String requestid) {
		Connection conn = null;
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			conn = JDBCUtils.getConn();
			String sql = "update transportinfo set RESULTDATA=?,RESULTPATH=?,COMPLETE=? where REQUESTID=requestid ";
			st = conn.prepareStatement(sql);
			File file = new File(path);
			FileInputStream fis = new FileInputStream(file);
			st.setBinaryStream(1, fis, (int) file.length());
			st.setString(2, path);
			st.setInt(3, 1);
			st.executeUpdate();
			fis.close();
		} catch (Exception e) {
			LOGGER.error("addResult syntax or connection error!", e);
		} finally {
			JDBCUtils.close(rs, st, conn);;
		}
	}

	public void read(String REQUESTID, OutputStream out) {
		Connection conn = null;
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			conn = JDBCUtils.getConn();
			String sql = "select RESULTDATA from transportinfo where REQUESTID=? and COMPLETE=1";
			st = conn.prepareStatement(sql);
			st.setString(1, REQUESTID);
			rs = st.executeQuery();
			if (rs.next()) {
				InputStream in = rs.getBinaryStream("RESULTDATA");
				int len = 0;
				byte buffer[] = new byte[1024];
				while ((len = in.read(buffer)) > 0) {
					out.write(buffer, 0, len);
				}
				in.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				out.close();
			} catch (IOException e) {
				LOGGER.error("read1 syntax or connection error!", e);
			}
			JDBCUtils.close(rs, st, conn);;
		}
	}

	public Map<String, String> read() {
		Connection conn = null;
		PreparedStatement st = null;
		ResultSet rs = null;
		Map<String, String> result = new HashMap<String, String>();
		try {
			conn = JDBCUtils.getConn();
			String sql = "select REQUESTID,RAWPATH from transportinfo where CALCULATE=0";
			st = conn.prepareStatement(sql);
			rs = st.executeQuery();
			while (rs.next()) {
				result.put(rs.getString("REQUESTID"), rs.getString("RAWPATH"));
			}
		} catch (Exception e) {
			LOGGER.error("read2 syntax or connection error!", e);
		} finally {
			JDBCUtils.close(rs, st, conn);;
		}
		return result;
	}
}
