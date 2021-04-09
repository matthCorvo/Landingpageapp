 

$(document).ready(function(){

    /*Screenshots carousel scripts*/
    $("#screenshot").owlCarousel({
      loop:true,
      autoplay: true,
      margin:30,
      nav: false,
      navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
      responsiveClass:true,
      responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }

    });
    
    /*Testimonial carousel scripts*/
    $("#testimonial").owlCarousel({
        loop:true,
        autoplay: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

    /*Menu bar background color change script*/
    $("#menu-click").click(function(event){
            event.preventDefault();
        });
    $(window).scroll(function(){
       var scrollTop = $(window).scrollTop();
        if(scrollTop>30){
             $("#nav").css("background-color", "#134102");
         }
        else{
        $("#nav").css("background-color", "transparent");
    }
    });

    /*Smoth transition script*/
     // This is a functions that scrolls to #{blah}link
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

});

/*Nav bar script to open*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "20px";
    document.getElementById("main").style.marginLeft = "20px";
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("overlay").style.height = "100%";
    /*document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)";*/            
}
/*Script to close nav bar*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("overlay").style.height = "0%";
}

 