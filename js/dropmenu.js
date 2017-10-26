var displayStatus=0;
function opennav(){
	var menu_drop = document.getElementById("menu_drop");
	
	
	if(displayStatus==0){
		displayStatus+=1
		menu_drop.style.display="block";
	}else if(displayStatus==1){
		
		displayStatus=0;
		menu_drop.style.display="none"
	}

}
