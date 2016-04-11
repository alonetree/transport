package com.transport.xidian;

import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class TaskDispatchThread implements Runnable {

	boolean stop = false;
	final static MySQLCURD cal = new MySQLCURD();
	private ExecutorService exec = null;
	private short ThreadNum;

	public TaskDispatchThread() throws InterruptedException {
		this((short) 10);
		TimeUnit.MILLISECONDS.sleep(500);
	}

	public TaskDispatchThread(short num) {
		super();
		ThreadNum = num;
		exec = Executors.newFixedThreadPool(ThreadNum);
	}

	@Override
	public void run() {
		try {
			while (!stop && !Thread.interrupted()) {
				Map<String, String> m = cal.read();
				if (m.size() == 0) {
					Thread.sleep(1000 * 10);
					continue;
				}
				for (String key : m.keySet()) {
					exec.execute(new CalculateThread(key, m.get(key)));
					cal.addStatus(key);
				}
			}
		} catch (InterruptedException e1) {
			exec.shutdownNow();
		}
	}

	public void setStop() {
		this.stop = true;
	}
}
