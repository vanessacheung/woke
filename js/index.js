var mySwiper= new Swiper('.swiper-container', {
	direction:'horizontal',
	loop: true,
    autoplay: 5000,
    pagination : '.swiper-pagination',
    paginationClickable :true,
    preventClicks : false,
    noSwiping : true,
	effect : 'coverflow',
})


 function ajax_push_goods(){
        $.getJSON('http://www.wocoor.com/apii/firstPage.php',function(data){
            if(data.code == 200){
                var list = data.data;
                console.log(list);
                for(var i=0; i<list.length;i++){
                    var html='';
                    html+=`<dl class="good-item" id=${list[i].ID}>
					        <dt class="good-dt"><img class="good-pic" src=${list[i].litpic} /></dt>
					        <dd class="good-dd">
						        <p class="good-p1">${list[i].title}</p>
						        <p class="good-p2">工艺价格:￥${list[i].price}</p>
					        </dd>
			            </dl>`;
                    $('.goods').append(html);
                }
            }else{
                alert(data.message);
            }
        });
    }

ajax_push_goods();
