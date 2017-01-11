$(function(){
    
    var box=$('.row .col-lg-4'),
        duration=1500,
        $window=$(window);
        //currentWidth=$(window).width(),
       // $fixedWrapper=$('.fixed-header .navbar');
    var menu=[['Blocks', 'block.php', 'All contents are managed by the block included some informations!'],
                        ['Charts', 'chart.php', 'Compressed one take Infographic'],
                        ['Word(AutoBio)', 'word.php', 'The perfect essay is made by many trials'],
                        ['Memo', '#', 'The Memo makes man'],
                        ['Profile', '#', 'Managing your personal informations'],
                        ['Blank Title', '#', 'Blank Body']];
    
    
    var carousel=[["This is Sensation!", "Note: If you're viewing this page via a \<code\>file://\<\/code\> URL, the \"next\" and \"previous\" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules."],
                ["Another example headline.", "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."],
                ["One more for good measure.", "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."],
                ["One more for good measure.", "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."],
                ];
    
    /* carousel-caption */ 

   
    $('.carousel-caption').each(function(i, item){
        var titles=$(this).find('h1');
        var bodies=$(this).find('.carouselBody');
        titles.text(carousel[i][0]);
        bodies.text(carousel[i][1]);
    });     
    
    /* blocks-caption */
    $('.columns_l4 .col-lg-4').each(function(i, item){
        var titles=$(this).find('h2'),
            links=$(this).find('a'),
            bodies=$(this).find('.marketingBody');
        titles.text(menu[i][0]);
        links.attr('href', menu[i][1]);
        bodies.text(menu[i][2]);
    });
    
    /* shadow box */    
    box.on('mouseover', function(){
      
      $(this).addClass('box_active');
    })
    .on('mouseleave', function(){
        $(this).removeClass('box_active');
    });

    
    /* back-to-top */
    $('.back-to-top').on('click', function(){
        $.smoothScroll({
            easing:'easeOutExpo',
            speed:1000
        });
    });
});