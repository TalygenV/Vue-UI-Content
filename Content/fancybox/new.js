// JavaScript Document
$(document).ready(function () {
    /*
    *   Examples - images
    */

    $("a#example1").fancybox({
      'autoDimensions': false,
		        'width': 800,
		        'height': 640
    });

    $("a[rel=example_group]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    }); 
});

