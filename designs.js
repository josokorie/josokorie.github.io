let height, width, color, reset;
// Select color input
color = $('#colorPicker');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // reset pixel canvas
  $("#pixelCanvas").html("");
  // Select size input
  height = $("#inputHeight").val();
  width = $("#inputWeight").val();
  //loop to add table cells and rows according to user input
  for (let x = 0; x < height; x++) {
    $('#pixelCanvas').append('<tr></tr>');
  }
  for (let y = 0; y < width; y++) {
    $('#pixelCanvas tr').each(function () {
      $(this).append('<td></td>');
    });
  }
}

//change tr & td background color to color input value when the mousedown/mousemove event fires
$(document).on("mousedown", "tr td", function () {
  let colorValue = color.val();
  $(this).css('background-color', colorValue);
  $('tr td').bind("mousemove", function () {
    let colorValue = color.val();
    $(this).css('background-color', colorValue);
  }).mouseup(function() {
    $('td').unbind('mousemove');
  });
  $('tr td').on('dblclick',function () {
    $(this).css('background-color', "#FFFFFF")
  })
});

//clear pixelCanvas
reset = $("#pixelCanvas").html();
function backUp() {
    $("#pixelCanvas").html(reset);
}
