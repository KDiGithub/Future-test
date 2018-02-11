$('.clr').click(function() {
        $('.clr').removeClass('active'); 
        $(this).addClass('active');
    });

$('.commMore').click(function() {
        $('.dots').toggle(); 
        $('.more').toggle();
        if($('.commMore').text()=="скрыть")
        {
            $('.commMore').text("прочитать полностью");
            $('.commMore').removeClass('up');
        }
        else
        {
            $('.commMore').text("скрыть");
            $('.commMore').addClass('up');
        }
    });