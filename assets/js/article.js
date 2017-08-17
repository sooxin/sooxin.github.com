window.onload=function(){
	var i=false;
	var portrait = document.getElementsByClassName("portrait")[0];
var floatingBox = document.getElementsByClassName("sideBarContent")[0];
portrait.onclick=function(){
	if(i=!i){
		floatingBox.style.display="block";
	}else{
		floatingBox.style.display="none";
	}
	
	
};

};
