 let val=document.getElementById("clock");
 let date=document.getElementById("date");
    function showTime()
    {
        let now = new Date();
       let hour= now.getHours();
       let minutes= now.getMinutes();
       let seconds= now.getSeconds();
       let day=now.getDate();
       let month=now.getMonth()+1;
       let year=now.getFullYear();
       if(hour<10)
       {
          hour="0"+hour;
       }
       if(minutes<10)
       {
        minutes="0"+minutes;
       }
       if(seconds<10)
       {
        seconds="0"+seconds;
       }
       if(day<10)
       {
        day="0"+day;
       }
       if(month<10)
       {
        month="0"+month;
       }
    let amPm;
     if(hour==0)
    {
      hour=12; 
      amPm="AM";
    }
    else if(hour==12)
    {

      amPm="PM";
    }
 else if(hour>12)
{
      hour=hour-12;
   amPm="PM";
    
}
else
{
     amPm="AM"
}
     val.innerText = hour + ":" + minutes + ":" + seconds +" "+ amPm;
       date.innerText=day+"-"+month+"-"+year;
    }
    showTime();
    setInterval(showTime,1000);