<%@page pageEncoding="utf-8" contentType="text/html; charset=utf-8" %>
<!DOCTYPE html>
<html>
 <head>
    <title>多取多送</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=eYf9sA6yVTFHlh9ytU4a0EYY"></script>
	<script type="text/javascript" src="/Transport/js/transport.js"></script>
	<style type="text/css">
		p{margin-top:30px;margin-left:10px;}
		p1{margin-left:10px;}
	</style>
  </head>
  <body bgcolor="lightblue">
	<button style="width:100px;height:30px;"  disabled="disabled">多取多送</button>
	<button style="width:100px;height:30px;" onclick="window.location.href='index.jsp'">返回</button><br/>
	<p>
		<button style="width:100px;height:30px;" id="changeRecommend" onclick="changeRecommend()">推荐路线</button>
		<button style="width:100px;height:30px;" id="changeMincost" onclick="changeMincost()">最低费用</button>
		<button style="width:100px;height:30px;" id="changeMintime" onclick="changeMintime()">最少时间</button><br/>
		<div>
			<div style="width:33%;height:800px;overflow:auto; float:left">
				<p1>总费用:
					<span id = "sumTotalFee"></span>
				</p1><br/>
				<p1>
					<button style="width:100px;height:30px;" id ="getButton" name ="getButton" >取货</button>
					<button style="width:100px;height:30px;" id = "sendButton" name = "sendButton" >送货</button>
				</p1><br/>
				<div style = "margin-left:10px">
					<span id = "quhuoFee"></span>
					<span id = "quhuoFeeNumber"></span>  
					<span id = "songhuoFee"></span>
					<span id = "songhuoFeeNumber"></span>
				</div>
				<div id = "d0" style = "margin-left:10px">
				</div>
				<div id = "d1" style = "margin-left:10px">
				</div>
			</div>
			<div style="width:67%;height:550px;float:right" >
				<div id="allmap"  style="width:100%;height:700px;border:#ccc solid 1px;"class="img "></div>
			</div>	
		</div>
		<span id="result" hidden>(<%=request.getParameter("result")%>)</span>
	</p>
  </body>
</html>