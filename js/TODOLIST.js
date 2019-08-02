var plusmemo = document.querySelector(".memobtn");//按鈕加入memo
var memo = document.querySelector(".waitToDo");//ul顯示todolist
var data=JSON.parse(localStorage.getItem("listData"))||[];


plusmemo.addEventListener('click',addData,false);
memo.addEventListener('click',toggleDown,false);
updateList(data);//更新介面

function addData(e){
	e.preventDefault(e);
	var memotxt = document.querySelector(".writein").value;
	var todo={
		content:memotxt
	}
	data.push(todo);
	localStorage.setItem("listData",JSON.stringify(data));
	updateList(data);
}

function updateList(items){
	var str='';
	var len =items.length;
	for(var i=0;i<len;i++){
		str+=`<li class="context-color"><a href="#" data-index=`+i+`>X</a>`+items[i].content+`</li>`;
	}
	memo.innerHTML=str;
}

function toggleDown(e){
	e.preventDefault();
	if(e.target.nodeName !=='A'){return};
	var index = e.target.dataset.index;
	data.splice(data,1);
	localStorage.setItem("listData",JSON.stringify(data));
	updateList(data);
}


