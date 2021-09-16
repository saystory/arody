$(document).ready(function(){
    /* 배경박스 애니메이션*/
    $('.bg-box li:nth-child(1)').delay(600).animate({'width':'1'},800);
    $('.bg-box li:nth-child(2)').delay(700).animate({'width':'1'},800);
    $('.bg-box li:nth-child(3)').delay(800).animate({'width':'1'},800);
    $('.bg-box li:nth-child(4)').delay(900).animate({'width':'1'},800);

    /* vegas */
    $('body').vegas({
        slides:
        [                    
            { 
                src:'imgs/main-bg1.jpg', 
                video:
                {
                    src:'media/galaxy_1.mp4',
                    loop:true,
                    mute:true
                }
            },
            { 
                src:'imgs/main-bg2.jpg', 
                video:
                {
                    src:'media/galaxy_2.mp4',
                    loop:true,
                    mute:true
                }
            },
            { 
                src:'imgs/main-bg3.jpg', 
                video:
                {
                    src:'media/galaxy_3.mp4',
                    loop:true,
                    mute:true
                }
            },
            { 
                src:'imgs/main-bg4.jpg', 
                video:
                {
                    src:'media/galaxy_4.mp4',
                    loop:true,
                    mute:true
                }
            }
        ], delay:5000
    });    

    /* 트리거 버튼 */
    /*$('#trigger').hover(function(){
        $('#trigger > span:nth-child(1)').css('width','65%');
        $('#trigger > span:nth-child(2)').css('width','100%');
        $('#trigger > span:nth-child(3)').css('width','65%');
    },function(){
        $('#trigger > span:nth-child(1)').css('width','100%');
        $('#trigger > span:nth-child(2)').css('width','65%');
        $('#trigger > span:nth-child(3)').css('width','100%');
    });*/

    /* 트리거 버튼 모션 */
    $('#trigger').hover(function(){
        $('#trigger > span:nth-child(1)').css('top',9);
        
        $('#trigger > span:nth-child(3)').css('bottom',9);
    },function(){
        $('#trigger > span:nth-child(1)').css('top',0);
        
        $('#trigger > span:nth-child(3)').css('bottom',0);
    });


});