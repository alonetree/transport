<%@page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>sendMsg</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript">
var num;
var requestId = "";
function sendOk(temp){
	alert("发送成功");
	var RawContent = $("#content1").val();
	if(RawContent != ""){
		$.post("/Transport/calculate",{content: RawContent},
			function(data){
					if(data != ""){
						requestId = data;
				 	}
			}
		);
	}
	num = self.setInterval("request()",1000*60*1);
}

function request(){
	if(requestId != ""){
		$.get("/Transport/QueryData",{REQUESTID: requestId},
			function(data){
					if(data != ""){
						$("#content2").val(data);
				 		clearInterval(num);
				 	}
			}
		);
	}
}
</script>
</head>
<body>
	<div class="place">
    	<span>位置</span>
    	<ul class="placeul">
    		<li>主页</li>
    		<li>传送和接收数据</li>
    	</ul>
    </div>
    
    <div class="formbody">
    	<div> 
    		<div class="itab">
  				<ul> 
    				<li><a href="#tab1" class="selected">发送数据</a></li> 
  				</ul>
    		</div> 
        </div>
        
  		<div class="tabson">
    		<ul class="forminfo">
    			<li>
    			  <label>数据内容<strong>*</strong></label>
    			  <textarea id="content1" class="textinput" rows="2" cols="20"></textarea>
    			</li>
    			<li><label>&nbsp;</label>
                <input type="button" class="btn" id="send" value="发送" onClick="sendOk('.tip');"/></li>
    		</ul>     
    	</div>
    	
        <br/><br/><br/>
        <div> 
    		<div class="itab">
  				<ul> 
    				<li><a href="#tab1" class="selected">接收数据</a></li> 
  				</ul>
    		</div> 
        </div>
        
  		<div class="tabson">
  		  <form action="/Transport/view.jsp" method="post">
    		<ul class="forminfo">
   			  <li><label>接收到的数据<b>*</b></label>
    			<textarea id="content2" name="result" class="textinput" rows="2" cols="20"></textarea>
    			</li>
    			<li><label>&nbsp;</label>
                <input type="submit" class="btn" id="broadcast" value="可视化" /></li>
    		</ul>
    	  </form>    
    	</div>
    </div>
</body>
</html>