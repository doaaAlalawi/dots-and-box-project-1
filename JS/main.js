$("#game").hide();
$("#StartButton").click(function() {
  $("#startPage").hide();
  $("#game").show();
});

$("#ResetButton").click(function() {
     document.location.reload(true);
});


var svg = d3
  .select("#game")
  .append("svg")
  .attr("width", 800)
  .attr("height", 800);

let CiecleId = 1;
let lineIdx = 1;
let lineIdy = 1;

// drow the horizental line
for (let i = 1; i < 8; i++) {
  for (let j = 1; j < 7; j++) {
    svg
      .append("line") // attach a line
      .style("stroke", "bisque") // colour the line
      .attr("x1", 100 * j) // x position of the first end of the line
      .attr("y1", 100 * i) // y position of the first end of the line
      .attr("x2", 100 * j + 100) // x position of the second end of the line
      .attr("y2", 100 * i)
      .attr("stroke-width", 7)
      .attr("id", "X_" + lineIdx)
      .attr("class", "te");
    lineIdx++;
  }
  lineIdx++;
}
// drow the virtical line
for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 8; j++) {
    svg
      .append("line") // attach a line
      .style("stroke", "bisque") // colour the line
      .attr("x1", 100 * j) // x position of the first end of the line
      .attr("y1", 100 * i) // y position of the first end of the line
      .attr("x2", 100 * j) // x position of the second end of the line
      .attr("y2", 100 * i + 100)
      .attr("stroke-width", 7)
      .attr("id", "Y_" + lineIdy)
      .attr("class", "te");
    lineIdy++;
  }
}
// drow the circle
for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 8; j++) {
    svg
      .append("circle")
      .attr("cx", 100 * j)
      .attr("cy", 100 * i)
      .attr("r", 7)
      .style("fill", "#666666")
      .attr("id", CiecleId);
    CiecleId++;
  }
}

var flag = true;
let play = [];
let noRepet = [];
let scoreplyer1 = 0
let scoreplyer2 = 0
let box = 0 

$("line").click(function(e) {
  if ($(this).attr("style") === "stroke: bisque;") {
    // player 1 
    if (flag) {
      $(this)
        .attr("class", "click")
        .attr("style", "stroke: #df9696");
      play.push(this.id);
      flag = !flag;
    }
    // player 2
    else {
      $(this)
        .attr("class", "click")
        .attr("style", "stroke: #996666");
      play.push(this.id);
      flag = !flag;
    }
    // end of players
    win(play, noRepet);
  }
});

function win(play, noRepet) {
  play.forEach(element => {
    let x = element;
    let $x = x.split("_");
    let $$x = Number($x[1]);
    if (!noRepet.includes(x)) {
      if ($x[0] === "X" && play.includes("X_" + ($$x + 7))) {
        if (play.includes("Y_" + $$x) && play.includes("Y_" + ($$x + 1))) {
          var xaxis = $(`#${x}`).attr("x1")
          var yaxis = $(`#${x}`).attr("y1")

          svg
            .append("text")
            .style("font-size", "40px")
            .attr("x", Number(xaxis) + 22)
            .attr("y", Number(yaxis )+ 58)
            .text( function(){ let color = flag ? "℘2" : "℘1"
            flag ? scoreplyer2++ : scoreplyer1++
            $('#score2').text(scoreplyer2)
            $('#score1').text(scoreplyer1)
            return color })
            .style("fill", function(){ let color = flag ? "#996666" : "#df9696"
            return color });
          noRepet.push(x);
          box++
          flag = !flag;
        }
      }
    }
    if (box == 30)
    {
         if(scoreplyer2 > scoreplyer1)
    Swal.fire({
      type: "‘success’",
      title: "player 2 won",
      showConfirmButton: false,
      timer: 1500
    });
  else if(scoreplyer2 < scoreplyer1){
    Swal.fire({
      type: "‘success’",
      title: "player 1 won",
      showConfirmButton: false,
      timer: 1500
    });
  }
    else 
    {
        Swal.fire({
            type: "‘success’",
            title: "evenness",
            showConfirmButton: false,
            timer: 1500
          });
    }
  }
    
    });  
  
}
