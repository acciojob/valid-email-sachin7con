function validEmail(str) {
  //your JS code here.
	let flag = false; 
	if(str.length<5){
		flag = false;
	}else if(str.charAt(0) === "@" || str.charAt(0) === "." || str.charAt(str.length-1) === "." || str.charAt(str.length-1) === "@"){
		flag =  false;
	}else if(str.includes("@") && str.includes(".")){
		flag = true;
	}else{
		flag = false;
	}
	return flag;
}


// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
