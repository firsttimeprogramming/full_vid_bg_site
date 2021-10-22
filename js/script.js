document.addEventListener("DOMContentLoaded", function(){

    document.body.addEventListener("touchstart", play_video);

    function play_video(){
        const video = document.getElementById('vid');
        if(video.playing){

        }
        else{
            video.play();
        }
    }

})