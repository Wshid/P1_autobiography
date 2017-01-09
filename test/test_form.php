<html>
    <head>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/carousel.css" rel="stylesheet">
        <link href="css/columns_l4.css" rel="stylesheet">
    </head>
    <body>
        <h1>start</h1>
        <form name="add_block_form" method="post">
            <div class="form-group">
                <label for="label_title" class="col-xs-2 control-label">Text</label>
                <div class="col-xs-10"> <!-- 기존에 사용했던 방식과 다르게 여기선 grid를 이용하여 표현한다 -->
                    <input type="text" name="firstName" class="form-control" placeholder="First Name" required>
                </div>
            </div>
            <div class="form-group">
                <label for="label_subtitle" class="col-xs-2 control-label">Search</label>
                <div class="col-xs-10">
                    <input class="form-control" type="search" placeholder="SubTitle" id="example-search-input"> <!-- value는 실제 입력 값, placeholder는 예시 값(회색) -->
                </div>
            </div>
            <div class="form-group">
                <label for="label_body" class="col-xs-2 control-label">Body</label>
                <div class="col-xs-10">
                    <textarea class="form-control" rows=5 id="body" placeholder="body"></textarea>
                </div>
            </div>
        </form>
        
        <script src="js/vender/jquery-3.1.1.min.js"></script>
        <script src="js/vender/bootstrap.min.js"></script>
        <script src="js/vender/jquery-ui.min.js"></script>
        <!-- Just to make our placeholder images work. Don't actually copy the next line! -->
        <script src="js/holder.js"></script>
        <script src="js/carousel.js"></script>
        <script src="js/vender/jquery.ba-throttle-debounce.min.js"></script>
        <script src="js/vender/jquery.smooth-scroll.min.js"></script>
        <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
        <script src="js/vender/ie10-viewport-bug-workaround.js"></script>
    </body>
</html>