$(function(){
  function tabA(tabTit,on,tabCon){
  	$(tabCon+">div:first").show();
		$(tabCon+">div:not(:first)").hide();
		$(tabCon).each(function(){
			$(tabCon+">div").eq(0).show();
		});
		$(tabTit).each(function(){
			$(tabTit +">ul>li>a").eq(0).addClass(on);
		});
		$(tabTit +">ul>li").hover(function(){
			$(this).find("a").addClass(on).end().siblings().find("a").removeClass(on);
			var index = $(tabTit +">ul>li").index(this);
			$(tabCon+">div").eq(index).show().siblings().hide();
		});
	}
	tabA(".info-nav","on-tab",".info-box");
	
  function tabN(tabTit,on,tabCon){
		//$(tabCon+">div:not(:first)").hide();
		$(tabCon).each(function(){
			$(tabCon+">div").eq(0).show();
		});
		$(tabTit).each(function(){
			$(tabTit +">ul>li").eq(0).addClass(on);
		});
		$(tabTit +">ul>li").hover(function(){
			$(this).addClass(on).siblings().removeClass(on);
			var index = $(tabTit +">ul>li").index(this);
			$(tabCon+">div").eq(index).show().siblings().hide();
		});
	}
	tabN(".title","on-tab",".body");
});
