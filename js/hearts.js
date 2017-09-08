var audio = new Audio('audio/hbd.mp3');
var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    var r_num1 = Math.floor(Math.random() * 40) + 1;
    var r_left1 = Math.floor(Math.random() * 100) + 1;
    var r_bg1 = Math.floor(Math.random() * 25) + 100;
    var r_time1 = Math.floor(Math.random() * 5) + 7;

    //hide000WebhostFooter();
    // var names = ["Mona", "Monti", "Chiku", "Asmi", "Asmita"]
    // var name = names[Math.floor(Math.random()*(names.length-1))]
    if(!checkTime()){
        $('.bg_heart').css("visibility", "hidden");
        $('.countdownmain').css("visibility", "visible");
        // console.log("It's not a good time, sorry :(")
    }else{
        $('.bg_heart').css("visibility", "visible");
        $('.countdownmain').css("visibility", "hidden");
        if(audio.currentTime == 0 || audio.ended)
            audio.play();
        $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

        $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

        var hbdTexts = ["Happyyy b'dayyy", "Shubho Jonmoh din!", "Happyyy b'dayyy"]
        var hbdText = hbdTexts[Math.floor(Math.random()*(hbdTexts.length-1))]

        $('.bg_heart').append("<div class='heart-text' style='width: 90px;height: 68px;left:" + r_left1 + "%;-webkit-animation:love " + r_time1 + "s ease;-moz-animation:love " + r_time1 + "s ease;-ms-animation:love " + r_time1 + "s ease;animation:love " + r_time1 + "s ease; text-align: center; color: #ffffff'><div class='hbd-text'><p style=\"z-index: 1000; position:absolute;\">" + hbdText +"</p></div></div>");


        // $('.bg_heart').append("<div class='heart-text' style='width: 28px;height: 28px;left:" + (r_left1 + r_num1) + "%;-webkit-animation:love " + (r_time1 + 5) + "s ease;-moz-animation:love " + (r_time1 + 5) + "s ease;-ms-animation:love " + (r_time1 + 5) + "s ease;animation:love " + (r_time1 + 5) + "s ease; text-align: center; color: #ffffff'><div class='hbd-text'><p style=\"z-index: 1000; position:absolute;\">"+name+"</p></div></div>");

        var detachElement = function() {
            var top = $(this).css("top").replace(/[^-\d\.]/g, '');
            var width = $(this).css("width").replace(/[^-\d\.]/g, '');
            if (top <= -100 || width >= 150) {
                $(this).detach();
            }
        };
        $('.heart-text').each(detachElement);
        $('.heart').each(detachElement);
    }
}, 500);



function checkTime(){
    var date = new Date($.now());
    if(date.getTime() >= end.getTime() && date.getTime() <= animEndTime.getTime())
        return true;
    return false;
}