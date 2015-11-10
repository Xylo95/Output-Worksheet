<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#truefalse').on("tap",function(){
    	var m8 = random();
		alert(m8);
		navigator.notification.beep(2);
		
 	});                       
	
	function random() {
		return !Math.round(Math.random());
	}
});