$(function() {

    // variables
    let colorPicked, height, width, grid;

    grid = $('#pixel-canvas');

    function makeGrid() {
        // clear grid
        grid.children().remove();

        height = $('#input-height').val();
        width = $('#input-width').val();
        // height
        for(let x = 0; x < height; x++){
            grid.append('<tr id="row' + x + '"></tr>');
            // width
            for(let y = 0; y < width; y++){
                $('tr:last').append('<td id="col' + y + '"></td>');
            }
        }
    }

    // call makeGrid
    $('#size-picker').on('submit', function(e) {
        e.preventDefault();
        makeGrid();
    });

    // color selected
    grid.on('click', 'td', function(){
        colorPicked = $('.color-picker').val();
        $(this).css('background-color', colorPicked);
    });
});

