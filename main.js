// $(document).ready(function(){
// 	$('section[data-type="background"]').each(function(){
// 		var $bgobj = $(this);
// 		$(window).scroll(function(){
// 			var yPos = -($window.scrollTop() / $bgobj.data('speed') )

// 			var coords = '50% ' + yPos + 'px';

// 			$bgobj.css({ backgroundPosition: coords });
// 		})
// 	})
// })

( function( $ ) {

    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            // console.log(data.curTop);
        }
    });
} )( jQuery );
