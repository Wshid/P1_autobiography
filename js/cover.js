    $(function(){
        var $mathead=$(this).find('.masthead-nav'),
            $lists=$mathead.find('li'),
            $inner=$(this).find('.inner.cover'),
            $center=$(this).find('.center');
        console.log($lists);    
        //head.filter(':nth-child(1)').hide(); // css에서 쓰는 방법과는 조금 다르다. filter 함수를 사용해야함
                                        // 근데 왜 1,3,5로 해야 먹히냐..
        //body.hide();
        /* 왜 json파일이 읽혀지지 않을까 ㅠㅠㅠ */
    /*    $.getJSON('json/cover.json', null, function(data){ 
            console.log("aa");
            $.each(data, function(i,item){
                titles.push($(item.title+"").get(0));
                bodies.push($(item.body+"").get(0));
                console.log("a");
            });
        }); */
        $mathead.on('click', 'li', function(index, data){
            //event.preventDefault();
            
            var $this=$(this),
                at=$this.find('a').attr('href'); // 속성값을 가져올때는 #나 .와 같은 인자도 같이 가져옴
            console.log(at);
            if($this.hasClass('active')){
                return;
            }
            $lists.removeClass('active');
            $this.addClass('active');
            
            $center.hide();
            if(at==='#link_home'){ // nth-child의 경우 1부터 인덱스 시작
                $center.filter(':first-child').show();
            }else if(at==="#link_features"){
                $center.filter(':nth-child(2)').show();
            }else{
                $center.filter(':nth-child(3)').show();
            }

        });
    });