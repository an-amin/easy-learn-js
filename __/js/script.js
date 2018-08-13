$(document).ready(function(){
	/*********************************************
	 * INITIALIZE IDE
	 *********************************************
	 */
	$console = 
	`<div class="btn-group pull-right"> \n 
		<button title="Copy" class="copyBtn btn btn-sm btn-default" data-toggle="tooltip"><span class="glyphicon glyphicon-copy"></span></button> \n 
		<button title="Run" class="runBtn btn btn-sm btn-default" data-toggle="tooltip"><span class="glyphicon glyphicon-play"></span></button> \n 
	</div>`;
	$('.console').html($console);

	$('.IDE').each(function(index ){
		$(this).children('xmp').hide() ;
		$source = $(this).children('xmp').html() ;
		$prism = $(this).children('pre').children('code').html('<xmp>'+$source+'</xmp>');

	} );
	
	$('button.copyBtn').on('click',function(){
		$x=$(this).parent().parent().siblings('xmp').html();
		copyToClipboard($x);
	})

	$('button.runBtn').on('click',function(){
		$x=$(this).parent().parent().siblings('xmp').html();
		runJSinNewWindow($x);
	})
	/*********************************************
	 * INITIALIZE IDE
	 *********************************************
	 */
	
	$nav_items = 
	`<ul class="pager"> \n
		\t <li class="previous"><a href="${encodeURI($navs.previous.href)}" data-toggle="tooltip" title="${$navs.previous.title}"><span aria-hidden="true">&larr;</span> Previous</a></li> \n
		\t <li><a href="../index.html#${encodeURI($navs.index)}" data-toggle="tooltip" title="go to INDEX"><span class="glyphicon glyphicon-list"></span> Index</a></li> \n
		\t <li class="next"><a href="${encodeURI($navs.next.href)}" data-toggle="tooltip" title="${$navs.next.title}">Next <span aria-hidden="true">&rarr;</span></a></li> \n
	</ul> \n`;
	$('nav').html($nav_items);
	

	function autoWIndow(msg='done!',t=500){
		var w = window.open('','','width=50%,height=50%');
		w.document.write(msg);
		w.focus();
		setTimeout(function(){w.close();}, t);
	}
	
	function runJSinNewWindow(code){
		var w = window.open('','','width=500,height=300');
		w.document.write(code);
		w.focus();
	}

	function copyToClipboard(elem){
		prompt('press CTRL + C to copy',elem);
	}
	
	$('[data-toggle="tooltip"]').tooltip();
	
});