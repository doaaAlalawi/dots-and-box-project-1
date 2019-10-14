var svg = d3.select("body").append("svg")
.attr("width", 800)
.attr("height", 700)

let CiecleId = 1 
let lineId = 1

// drow the circle 
for (let i = 1 ; i <= 8; i++ ) {
    for (let j = 1;j<8;j++) {
         svg.append("circle")
    .attr("cx", 50*j)
    .attr("cy", 50*i)
    .attr("r", 5).
    style("fill", "purple")
    .attr("id", CiecleId)
    CiecleId ++
    } 
    CiecleId ++
}

// drow the horizental line
for (let i = 1 ; i <= 8; i++ ) {
    for (let j = 1;j<7;j++) {
      svg.append("line")          // attach a line
    .style("stroke", "white")  // colour the line
    .attr("x1", 50*j)     // x position of the first end of the line
    .attr("y1", 50*i)      // y position of the first end of the line
    .attr("x2", 50*j+50)     // x position of the second end of the line
    .attr("y2", 50*i)
    .attr("id", lineId)
    lineId ++
    } 
    lineId ++ 
}

// drow the virtical line
for (let i = 1 ; i < 8; i++ ) {
    for (let j = 1;j<8;j++) {
      svg.append("line")          // attach a line
    .style("stroke", "white")  // colour the line
    .attr("x1", 50*i)     // x position of the first end of the line
    .attr("y1", 50*j)      // y position of the first end of the line
    .attr("x2", 50*i)     // x position of the second end of the line
    .attr("y2", 50*j+50)
    .attr("id" , lineId);

    lineId ++
    } 

    lineId ++ 
}


$( "line" ).click(function() {
    $(this).attr("style" ,"stroke: red" )
      });

      $( "line" ).click(function() {
        $(this).attr("style" ,"stroke: blue" )
          });