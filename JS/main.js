var svg = d3
  .select("body")
  .append("svg")
  .attr("width", 800)
  .attr("height", 700);

let CiecleId = 1;
let lineIdx = 1;
let lineIdy = 1;

// drow the horizental line
for (let i = 1; i <= 8; i++) {
  for (let j = 1; j < 7; j++) {
    svg
      .append("line") // attach a line
      .style("stroke", "white") // colour the line
      .attr("x1", 50 * j) // x position of the first end of the line
      .attr("y1", 50 * i) // y position of the first end of the line
      .attr("x2", 50 * j + 50) // x position of the second end of the line
      .attr("y2", 50 * i)
      .attr("stroke-width", 4)
      .attr("id", "X_" + lineIdx)
      .attr("class" , "te")
    lineIdx++;
  }
  lineIdx++;
}
// drow the virtical line
for (let i = 1; i < 8; i++) {
  for (let j = 1; j < 8; j++) {
    svg
      .append("line") // attach a line
      .style("stroke", "white") // colour the line
      .attr("x1", 50 * i) // x position of the first end of the line
      .attr("y1", 50 * j) // y position of the first end of the line
      .attr("x2", 50 * i) // x position of the second end of the line
      .attr("y2", 50 * j + 50)
      .attr("stroke-width", 4)
      .attr("id", "Y_" + lineIdy)
      .attr("class" , "te")
    lineIdy++;
  }

  lineIdy++;
}
// drow the circle
for (let i = 1; i <= 8; i++) {
  for (let j = 1; j < 8; j++) {
    svg
      .append("circle")
      .attr("cx", 50 * j)
      .attr("cy", 50 * i)
      .attr("r", 5)
      .style("fill", "purple")
      .attr("id", CiecleId)
      
    CiecleId++;
  }
  CiecleId++;
}

// score
let player1 = [];
let player2 = [];
let play = [];

// player
let yourturn = 0;
    $("line").click(function(e) {
      if ($(this).attr("style") === "stroke: white;"){
      if (yourturn == 0) {
        $(this).attr("class", "click")
          .attr("style", "stroke: red")
        yourturn = 1 
        console.log(e.target.id);     
          for (var i = 0 ; i < play.length ; i++)
          {
           if (this !== play[i])
            {
                play.push(this) 
            }
          }
         
 
     } 
      
      else {
        $(this)
          .attr("style", "stroke: blue")
          .addClass("click");
        yourturn = 0;
        console.log(e.target.id);
        for (var i = 0 ; i < play.length ; i++)
        {
           if (this !== play[i])
            {
                play.push(this) 
            }
        }
      }
    }
    console.log(play.length)
    });




function score()
{

}
score();

