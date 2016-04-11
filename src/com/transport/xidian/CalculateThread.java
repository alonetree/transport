package com.transport.xidian;

import org.apache.log4j.Logger;

import com.mathworks.toolbox.javabuilder.MWArray;
import com.mathworks.toolbox.javabuilder.MWException;
import com.optimize.xidian.Compute;

public class CalculateThread implements Runnable {
	private final static Logger LOGGER = Logger.getLogger(MySQLCURD.class);

	private String RequestId, fpath;
	public CalculateThread(String RequestId, String fpath) {
		this.RequestId = RequestId;
		this.fpath = fpath;
	}

	@Override
	public void run() {
		Object[] resultPath = null;
		Compute compute = null;
		try {
			compute = new Compute();
			resultPath = compute.main(1, fpath, "adsfasdf");
			TaskDispatchThread.cal.addResult(resultPath[0].toString(),
					RequestId);
		} catch (MWException e) {
			LOGGER.error("calculateThread error!", e);
		} finally {
			MWArray.disposeArray(resultPath);;
			if (compute != null)
				compute.dispose();
		}
	}
}
