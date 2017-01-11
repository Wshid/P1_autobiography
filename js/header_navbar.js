$(function(){
    $window=$(window);
    $.ajax({
        url:'lib/is_login.php',
        type:'get',
        data:{'name':''},
        success:function(button_string){
            console.log("header_navbar.js ajax success");
            load_header(button_string);
        },
        error:function(request, status, error){
        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
    
    function load_header(button_string){
      var $header_prepend=$('.header_navbar_prepend');
      var menu_link=[['Block', 'block.php'], ['Chart', 'chart.php'], ['Word', 'word.php']];
      var headerText=
          '<div class="navbar-wrapper">'+
            '<div class="container">'+
              '<nav class="navbar navbar-inverse navbar-static-top">'+
                '<div class="container">'+
                  '<div class="navbar-header">'+
                    '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'+
                      '<span class="sr-only">Toggle navigation</span>'+
                      '<span class="icon-bar"></span>'+
                      '<span class="icon-bar"></span>'+
                      '<span class="icon-bar"></span>'+
                    '</button>'+
                    '<a class="navbar-brand" href="carousel.php">AutoBiography</a>'+
                  '</div>'+
                  '<div id="navbar" class="navbar-collapse collapse"><!-- id="navbar" -->'+
                    '<ul class="nav navbar-nav">'+
                      '<li><a href="'+menu_link[0][1]+'">'+menu_link[0][0]+'</a></li>'+
                      '<li><a href="'+menu_link[1][1]+'">'+menu_link[1][0]+'</a></li>'+
                      '<li><a href="'+menu_link[2][1]+'">'+menu_link[2][0]+'</a></li>'+
                      '<li class="dropdown">'+
                        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>'+
                        '<ul class="dropdown-menu" role="menu">'+
                          '<li><a href="#">Action</a></li>'+
                          '<li><a href="#">Another action</a></li>'+
                          '<li><a href="#">Something else here</a></li>'+
                          '<li class="divider"></li>'+
                          '<li class="dropdown-header">Nav header</li>'+
                          '<li><a href="#">Separated link</a></li>'+
                          '<li><a href="#">One more separated link</a></li>'+
                       '</ul>'+
                      '</li>'+
                    '</ul>'+
                    '<ul class="signinCheck">'+
                     button_string+
                    '</ul>'+
                  '</div>'+
                '</div>'+
              '</nav>'+
      
           '</div>'+
          '</div>';
          
          $header_prepend.prepend($(headerText));
          
          fixed_header(); // fixed_header를 만들기 위한 함수
    }
    
    function fixed_header(){
      $('.navbar-wrapper').each(function(){
        var $window=$(window),
            $header=$(this),
            $navbarclass=$header.find('#navbar'),
            $headerClone=$header.contents().clone(),
            $headerCloneContainer=$('<div class="fixed-header"></div>'),
            threshold=$header.offset().top+$header.outerHeight();
            $headerCloneContainer.append($headerClone);
            $headerCloneContainer.appendTo('body');
            //console.log("NAVBAR");
            //console.log($(this).width());
         
            $window.on('scroll', $.throttle(1000/15, function(){
              if($window.scrollTop()>threshold){
                $headerCloneContainer.addClass('visible');
                $navbarclass.attr('id', 'not_navbar'); // navbar id를 변경함으로써 navbar-collapse 변경
              }else{
                $headerCloneContainer.removeClass('visible');
                $navbarclass.attr('id', 'navbar');
              }
            
            resizing();
          }));
      });
    }
    
    $window.resize(resizing);

    function resizing(){ // resizing을 해야지 가운데 정렬이 됨
        var navbarSize=$('.navbar-wrapper').width();
        $('.fixed-header').width(navbarSize);        
    }
    
});