package com.transport.xidian;

public class DistanceAndTimeBean {
	private int status;
	private String originNum;
	private String destNum;
	private String origin;
	private String dest;
	private int distance;
	private int needTime;

	public String getOriginNum() {
		return originNum;
	}

	public void setOriginNum(String originNum) {
		this.originNum = originNum;
	}

	public String getDestNum() {
		return destNum;
	}

	public void setDestNum(String destNum) {
		this.destNum = destNum;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getDistance() {
		return distance;
	}

	public void setDistance(int distance) {
		this.distance = distance;
	}

	public int getNeedTime() {
		return needTime;
	}

	public void setNeedTime(int needTime) {
		this.needTime = needTime;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getDest() {
		return dest;
	}

	public void setDest(String dest) {
		this.dest = dest;
	}

	@Override
	public String toString() {
		return originNum + " " + destNum + " " + distance + " " + needTime
				+ "\r\n";
	}

}
