window.onload = function () {

var showtime = document.querySelector(".timer");//倒數顯示區域
var pressStart = document.querySelector(".countbtn");//開始倒數的按鈕
var d = document.querySelector(".memobtn");//key入事項後按+記取
var memo =document.querySelector(".addInmemo");//ul的classname
var data = JSON.parse(localStorage.getItem("dataList"))||[];//資料庫

pressStart.addEventListener('click',count,false);//監聽開始到數按鈕
d.addEventListener('click',addData,false);//監聽記取事項的按鈕
memo.addEventListener('click',toggleDone,false);
updateList(data);//執行更新頁面,如此一來就算重新整理畫面後.介面一樣會顯示localstorage所儲存的畫面


function count(){
 var minute =24;
 var second =60; 
 var myvar = setInterval(timing,1000);
 	function timing(){
 		showtime.innerHTML= minute+":"+second;
 		second-=1;
 		if(second==0){
 		minute-=1;
 		second=60;
 		}else if(minute==0 && second==1){
 		alert("Time is up!")
 		}else if(minute==-1){
 		clearInterval(myvar);
 		showtime.innerHTML='';
 	}
 }
}

function addData(e){
	e.preventDefault();
	var txt=document.querySelector(".writein").value;
	var todo={
		content:txt
	}
	data.push(todo);
	localStorage.setItem('dataList',JSON.stringify(data));
	updateList(data);//要再寫一個更新介面的funtion叫做updateList
}

function updateList(items){
	var str='';
	var len= items.length;
	for(var i=0;i<len;i++){
		str+= `<li class="second-color f-small">
					<a href="#" data-index=`+i+`>X
					</a><img src="img/26025.png" class="img-set" alt="">`+items[i].content+`<div class="clearfix"></div></li>`;
		}
memo.innerHTML=str;
}

function toggleDone(e){
	e.preventDefault();
	if(e.target.nodeName !=='A'){return};
	var index = e.target.dataset.index;
	data.splice(index,1);
	localStorage.setItem('dataList',JSON.stringify(data));
	updateList(data);
}	
}


