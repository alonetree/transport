var jsonString,jsonTopchoice;
window.onload= function(){
	jsonString = document.getElementById("result").innerText;
	jsonTopchoice = eval(jsonString);
	
}

function changeRecommend()//点击推荐路线，执行的function
{
	json = eval("(jsonTopchoice.N_N_recommand)");
	jsonStrategy = eval("(json.strategy)");
	document.getElementById("sumTotalFee").innerText = jsonStrategy.total;
	document.getElementById("changeRecommend").style.backgroundColor = '#99ffff';
	document.getElementById("changeMincost").style.backgroundColor = '#ffffff';
	document.getElementById("changeMintime").style.backgroundColor = '#ffffff';
	document.getElementById("getButton").style.backgroundColor = '#ffffff';
	document.getElementById("sendButton").style.backgroundColor = '#ffffff';
	document.getElementById("getButton").setAttribute("onclick","PickupOnclick(RecommendOnclick())");//
	document.getElementById("sendButton").setAttribute("onclick","DeliveryOnclick(RecommendOnclick())");
	document.getElementById("getButton").setAttribute("name","getButton");
	document.getElementById("sendButton").setAttribute("name","sendButton");
}

function changeMincost()
{
	json = eval("(jsonTopchoice.N_N_min_cost)");
	jsonStrategy = eval("(json.strategy)");
	document.getElementById("sumTotalFee").innerText = jsonStrategy.total;
	document.getElementById("changeRecommend").style.backgroundColor = '#ffffff';
	document.getElementById("changeMincost").style.backgroundColor = '#99ffff';
	document.getElementById("changeMintime").style.backgroundColor = '#ffffff';
	document.getElementById("getButton").style.backgroundColor = '#ffffff';
	document.getElementById("sendButton").style.backgroundColor = '#ffffff';
	document.getElementById("getButton").setAttribute("onclick","PickupOnclick(Min_costOnclick())");
	document.getElementById("sendButton").setAttribute("onclick","DeliveryOnclick(Min_costOnclick())");
	document.getElementById("getButton").setAttribute("name","getButton");
	document.getElementById("sendButton").setAttribute("name","sendButton");
}

function changeMintime()
{
	json = eval("(jsonTopchoice.N_N_min_time)");
	jsonStrategy = eval("(json.strategy)");
	document.getElementById("sumTotalFee").innerText = jsonStrategy.total;
	document.getElementById("changeRecommend").style.backgroundColor = '#ffffff';
	document.getElementById("changeMincost").style.backgroundColor = '#ffffff';
	document.getElementById("changeMintime").style.backgroundColor = '#99ffff';
	document.getElementById("getButton").style.backgroundColor = '#ffffff';
	document.getElementById("sendButton").style.backgroundColor = '#ffffff';
	document.getElementById("getButton").setAttribute("onclick","PickupOnclick(Min_timeOnclick())");
	document.getElementById("sendButton").setAttribute("onclick","DeliveryOnclick(Min_timeOnclick())");
	document.getElementById("getButton").setAttribute("name","getButton");
	document.getElementById("sendButton").setAttribute("name","sendButton");

}	

function Min_costOnclick()
{
	jsonStrategyLine = eval("(jsonStrategy.line)");		
	var sigNodeln = new Array();
	var tArray = new Array();   
	for(var i=0; i<jsonStrategyLine.length ;i++){
		jsonStrategyLineLinenode = eval("(jsonStrategyLine[i].linenode)");
		var sigNodeld = new Array();
		for(var j=0; j<jsonStrategyLineLinenode.length;j++){
			sigNodeld[j] = jsonStrategyLineLinenode[j].lng_lat;		
		}
		tArray[i]=new Array();    
		tArray[i]=sigNodeld;       
	}
	var map = new BMap.Map("allmap");
	map.centerAndZoom(new BMap.Point(108.95479, 34.264919), 12);
	map.enableScrollWheelZoom(true);
	return tArray;
}

function Min_timeOnclick()
{
	jsonStrategyLine = eval("(jsonStrategy.line)");		
	var sigNodeln = new Array();
	var tArray = new Array();   
	for(var i=0; i<jsonStrategyLine.length ;i++){
		jsonStrategyLineLinenode = eval("(jsonStrategyLine[i].linenode)");
		var sigNodeld = new Array();
		for(var j=0; j<jsonStrategyLineLinenode.length;j++){
			sigNodeld[j] = jsonStrategyLineLinenode[j].lng_lat;		
		}
		tArray[i]=new Array();    
		tArray[i]=sigNodeld;       
	}
	var map = new BMap.Map("allmap");
	map.centerAndZoom(new BMap.Point(108.95479, 34.264919), 12);
	map.enableScrollWheelZoom(true);
	return tArray;
}


function RecommendOnclick(){
	jsonStrategyLine = eval("(jsonStrategy.line)");		
	var sigNodeln = new Array();
	var tArray = new Array();   
	for(var i=0; i<jsonStrategyLine.length ;i++){
		jsonStrategyLineLinenode = eval("(jsonStrategyLine[i].linenode)");
		var sigNodeld = new Array();
		for(var j=0; j<jsonStrategyLineLinenode.length;j++){
			sigNodeld[j] = jsonStrategyLineLinenode[j].lng_lat;		
		}
		tArray[i]=new Array();    
		tArray[i]=sigNodeld;       
	}
	var map = new BMap.Map("allmap");
	map.centerAndZoom(new BMap.Point(108.95479, 34.264919), 12);
	map.enableScrollWheelZoom(true);
	return tArray;
}

	function PickupOnclick(tArray){
	document.getElementById("getButton").style.backgroundColor = '#99ccff';
	document.getElementById("sendButton").style.backgroundColor = '#ffffff';
	if(document.getElementById("getButton").getAttribute("name")=="getButton"){//如果是第一次执行取货操作
		document.getElementById('d1').innerHTML= " "; 
		if(document.getElementById("getButton").getAttribute("onclick")=="PickupOnclick(Min_costOnclick())"){
			json = eval("(jsonTopchoice.N_N_min_cost)");
		}else if(document.getElementById("getButton").getAttribute("onclick")=="PickupOnclick(Min_timeOnclick())"){
			json = eval("(jsonTopchoice.N_N_min_time)");
		}else if(document.getElementById("getButton").getAttribute("onclick")=="PickupOnclick(RecommendOnclick())"){
			json = eval("(jsonTopchoice.N_N_recommand)");
		}else
			alert("ERROR");
		jsonStrategy = eval("(json.strategy)");
		jsonStrategyLine = eval("(jsonStrategy.line)");
		var freight = new Array;
		for(var i=0; i<jsonStrategyLine.length; i++){
			freight[i] = jsonStrategyLine[i].freight;
		}
		document.getElementById('quhuoFee').style.display="block";
		document.getElementById('quhuoFeeNumber').style.display="block";
		document.getElementById('quhuoFee').innerText="取货费用：";
		document.getElementById('quhuoFeeNumber').innerText = freight[0];
		document.getElementById('songhuoFee').style.display="none";
		document.getElementById('songhuoFeeNumber').style.display="none";
		var carValue = new Array();
		var tArrayCar = new Array();   
		for(var i=0; i<jsonStrategyLine.length ;i++){
			jsonStrategyLineLinenode = eval("(jsonStrategyLine[i].linenode)");
			var carValue = new Array();
			for(var j=0; j<jsonStrategyLineLinenode.length;j++){
				carValue[j] = jsonStrategyLineLinenode[j].vehicle;
			}
			tArrayCar[i]=new Array();    //声明二维，每一个一维数组里面的一个元素都是一个数组；
			tArrayCar[i]=carValue; 
		}		
		var sigNodeln = new Array();
		var tArrayValue = new Array();   
		for(var i=0; i<jsonStrategyLine.length ;i++){
			jsonStrategyLineLinenode = eval("(jsonStrategyLine[i].linenode)");
			var sigNodeld = new Array();
			for(var j=0; j<jsonStrategyLineLinenode.length;j++){
				sigNodeld[j] = jsonStrategyLineLinenode[j].value;
			}
			tArrayValue[i]=new Array();    //声明二维，每一个一维数组里面的一个元素都是一个数组；
			tArrayValue[i]=sigNodeld; 
		}		
		for(var i=0; i<tArrayValue[0].length;i++){	
			autoCreateCheckBox(i);//调用复选框动态生成
			autocreateCar(tArrayCar[0][i]);
			autocreate(tArrayValue[0][i]);
		}
		var map = new BMap.Map("allmap");
		map.centerAndZoom(new BMap.Point(108.95479, 34.264919), 12);
		map.enableScrollWheelZoom(true);
		for(var i = 0; i<tArray[0].length;i++){	
			var tt = tArray[0][i].length;
			var p1 = new BMap.Point(tArray[0][i][0][0],tArray[0][i][0][1]);
			var p2 = new BMap.Point(tArray[0][i][tt-1][0],tArray[0][i][tt-1][1]);
			var pa = new Array();
			for(var j = 0; j<tt-2;j++){
				pa[j] = new BMap.Point(tArray[0][i][j+1][0],tArray[0][i][j+1][1]);
			}
			var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
			driving.search(p1,p2,{waypoints:pa});//waypoints表示途经点
		}
			document.getElementById("getButton").setAttribute("name","getButton1");
	
	}
	else{
		var map = new BMap.Map("allmap");
		map.centerAndZoom(new BMap.Point(108.95479, 34.264919), 12);
		map.enableScrollWheelZoom(true);
		for(var i = 0; i<tArray[0].length;i++){	
			if(document.getElementById("checkbox"+i).checked){
				var tt = tArray[0][i].length;
				var p1 = new BMap.Point(tArray[0][i][0][0],tArray[0][i][0][1]);
				var p2 = new BMap.Point(tArray[0][i][tt-1][0],tArray[0][i][tt-1][1]);
				var pa = new Array();
				for(var j = 0; j<tt-2;j++){
					pa[j] = new BMap.Point(tArray[0][i][j+1][0],tArray[0][i][j+1][1]);
				}
				var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
				driving.search(p1,p2,{waypoints:pa});//waypoints表示途经点
			}
					
		}
	}	
	document.getElementById("sendButton").setAttribute("name","sendButton");//当用户点击取货后，直接点击送货，要将sendButton的name置为sendButton,使其进入DeliveryOnclick(tArray)的if语句中
}

function DeliveryOnclick(tArray){
	//alert(document.getElementById("sendButton").getAttribute("onclick"));
	document.getElementById("getButton").style.backgroundColor = '#ffffff';
	document.getElementById("sendButton").style.backgroundColor = '#99ccff';
	if(document.getElementById("sendButton").getAttribute("name")=="sendButton"){
		document.getElementById('d1').innerHTML= " "; 
		if(document.getElementById("getButton").getAttribute("onclick")=="PickupOnclick(Min_costOnclick())"){
			json = eval("(jsonTopchoice.N_N_min_cost)");
			//alert("sss");
		}else if(document.getElementById("getButton").getAttribute("onclick")=="PickupOnclick(Min_timeOnclick())"){
			json = eval("(jsonTopchoice.N_N_min_time)");
		}else if(document.getElementById("getButton").getAttribute("onclick")=="PickupOnclick(RecommendOnclick())"){
			json = eval("(jsonTopchoice.N_N_recommand)");
		}else
			alert("ERROR");
		jsonStrategy = eval("(json.strategy)");
		jsonStrategyLine = eval("(jsonStrategy.line)");
		var carValue = new Array();
		var tArrayCar = new Array();   
		for(var i=0; i<jsonStrategyLine.length ;i++){
			jsonStrategyLineLinenode = eval("(jsonStrategyLine[i].linenode)");
			var carValue = new Array();
			for(var j=0; j<jsonStrategyLineLinenode.length;j++){
				carValue[j] = jsonStrategyLineLinenode[j].vehicle;
			}
		tArrayCar[i]=new Array();    //声明二维，每一个一维数组里面的一个元素都是一个数组；
		tArrayCar[i]=carValue; 
		}		
		var freight = new Array;
		for(var i=0; i<jsonStrategyLine.length; i++){
			freight[i] = jsonStrategyLine[i].freight;
		}
		document.getElementById('songhuoFee').style.display="block";
		document.getElementById('songhuoFeeNumber').style.display="block";
		document.getElementById('songhuoFee').innerText="送货费用：";
		document.getElementById('songhuoFeeNumber').innerText = freight[1];
		document.getElementById('quhuoFee').style.display="none";
		document.getElementById('quhuoFeeNumber').style.display="none";
		var sigNodeln = new Array();
		var tArrayValue = new Array();   
		for(var i=0; i<jsonStrategyLine.length ;i++){
			jsonStrategyLineLinenode = eval("(jsonStrategyLine[i].linenode)");
			var sigNodeld = new Array();
			for(var j=0; j<jsonStrategyLineLinenode.length;j++){
					sigNodeld[j] = jsonStrategyLineLinenode[j].value;
			}
		tArrayValue[i]=new Array();    //声明二维，每一个一维数组里面的一个元素都是一个数组；
		tArrayValue[i]=sigNodeld; 
		}			
		for(var i=0; i<tArrayValue[1].length;i++){
			autoCreateCheckBox(i);
			autocreateCar(tArrayCar[1][i]);
			autocreate(tArrayValue[1][i]);
		}
		var map = new BMap.Map("allmap");
		map.centerAndZoom(new BMap.Point(108.95479, 34.264919), 12);
		map.enableScrollWheelZoom(true);
		for(var i = 0; i<tArray[1].length;i++){
			var tt = tArray[1][i].length;
			var p1 = new BMap.Point(tArray[1][i][0][0],tArray[1][i][0][1]);
			var p2 = new BMap.Point(tArray[1][i][tt-1][0],tArray[1][i][tt-1][1]);
			var pa = new Array();
			for(var j = 0; j<tt-2;j++){
				pa[j] = new BMap.Point(tArray[1][i][j+1][0],tArray[1][i][j+1][1]);
			}
			var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
			driving.search(p1,p2,{waypoints:pa});//waypoints表示途经点	
		}
		document.getElementById("sendButton").setAttribute("name","sendButton1");
	}
	else{
	    //alert("mmm");
		var map = new BMap.Map("allmap");
		map.centerAndZoom(new BMap.Point(108.95479, 34.264919), 12);
		map.enableScrollWheelZoom(true);
		for(var i = 0; i<tArray[1].length;i++){
			if(document.getElementById("checkbox"+i).checked){
				var tt = tArray[1][i].length;
				var p1 = new BMap.Point(tArray[1][i][0][0],tArray[1][i][0][1]);
				var p2 = new BMap.Point(tArray[1][i][tt-1][0],tArray[1][i][tt-1][1]);
				var pa = new Array();
				for(var j = 0; j<tt-2;j++){
					pa[j] = new BMap.Point(tArray[1][i][j+1][0],tArray[1][i][j+1][1]);
				}
				var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
				driving.search(p1,p2,{waypoints:pa});//waypoints表示途经点
			}
		}
	}
	document.getElementById("getButton").setAttribute("name","getButton");
}

function autoCreateCheckBox(i){
	var check = document.createElement("input");
	check.setAttribute("type","checkbox");
	check.setAttribute("id","checkbox"+i);
	check.setAttribute("name","checkbox1");
	check.setAttribute("value","checkbox1");
	check.setAttribute("checked","checked");
	var label = document.createElement("label");
	label.innerHTML="线路"+(i+1);
	document.getElementById("d1").appendChild(check);
	document.getElementById("d1").appendChild(label);
}
		
function autocreateCar(carArr){
	var m;
	if(carArr ==1){
		m="小型";
	}else if(carArr ==2){
		m="中型";
	}else if(carArr ==3){
		m="大型";
	}
	var table=document.createElement("table");
	//获取行数值
	var line=1;
	//获取列数值
	var list=2;
	var tr=document.createElement("tr");
	var td=document.createElement("td");
	td.innerHTML = "车型：";
	tr.appendChild(td);
	var td=document.createElement("td");
	td.innerHTML = m;
	tr.appendChild(td);
	table.appendChild(tr); 
	document.getElementById("d1").appendChild(table);
}
	
	function autocreate(tArrayLineLinenode){
	//创建table表格
	var table=document.createElement("table");
	table.setAttribute("border","1px");
	table.setAttribute("cellspacing","0px");
	table.setAttribute("style","border-collapse:collapse");
	table.setAttribute("bordercolor","#000000");
	table.setAttribute("width","300px");
	//获取行数值
	var line=tArrayLineLinenode.length+1;
	//获取列数值
	var list=3;
	{
	var tr=document.createElement("tr");
	var td=document.createElement("td");
	td.innerHTML = "序号";
	td.setAttribute("style","text-align:center;");
	tr.appendChild(td);
	var td=document.createElement("td");
	td.innerHTML = "类型";
	td.setAttribute("style","text-align:center;");
	tr.appendChild(td);
	var td=document.createElement("td");
	td.innerHTML = "地址";
	td.setAttribute("style","text-align:center;");
	tr.appendChild(td);
	table.appendChild(tr); 
	}
	for(var i=2;i<=line;i++){
		var tr=document.createElement("tr");
		
		var td=document.createElement("td");
		td.innerHTML = i-1;
		td.setAttribute("style","text-align:center;");
		tr.appendChild(td);
		
		var td=document.createElement("td");
		if(i == 2){
			td.innerHTML = "起点";
		}
		else if(i == line){
			td.innerHTML = "终点";
		}else{
			td.innerHTML = "途经";
		}
		td.setAttribute("style","text-align:center;");
		tr.appendChild(td);
		
		var td=document.createElement("td");
		td.innerHTML = tArrayLineLinenode[i-2];
		td.setAttribute("style","text-align:center;");
		tr.appendChild(td);
		
		table.appendChild(tr); 
	}
	document.getElementById("d1").appendChild(table);
}