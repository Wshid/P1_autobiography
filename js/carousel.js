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
    
    
    var carousel=[["This is Sensation!", "This Page helps you to easily write your autobiography arranging your life from past to future and submitting your attraction side to the company or other organizations."],
                ["Blocks", "Blocks are fundamental data based on your Autobiography. Please input a memory piece of the flow life. It is based on to be realize the dream, and determine your direction to go forward improvement yourself."],
                ["Chart", "This section provide some informations filtered same the direction. Take a glance many blocks related each tags. It helps you to write the Autobiography."],
                ["Words", "Write your Autobiography. This is effective for your life with using the blocks."],
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