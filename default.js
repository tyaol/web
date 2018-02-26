/*時計*/
function set(num) {
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function Clock() {
   var nowTime = new Date();
   var nowHour = set( nowTime.getHours() );
   var nowMin  = set( nowTime.getMinutes() );
   var nowSec  = set( nowTime.getSeconds() );
   var msg =  + nowHour + ":" + nowMin + ":" + nowSec + "";
   document.getElementById("RealtimeClockArea").innerHTML = msg;
}
setInterval('Clock()',1000);
