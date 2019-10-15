var svg = d3
  .select("body")
  .append("svg")
  .attr("width", 800)
  .attr("height", 700)
 

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
   lineIdx ++;
  }
  lineIdx++;
}
// drow the virtical line
for (let i = 1; i < 8; i++) {
  for (let j = 1; j < 8; j++) {
    svg
      .append("line") // attach a line
      .style("stroke", "white") // colour the line
      .attr("x1", 50 * j) // x position of the first end of the line
      .attr("y1", 50 * i) // y position of the first end of the line
      .attr("x2", 50 * j) // x position of the second end of the line
      .attr("y2", 50 * i + 50)
      .attr("stroke-width", 4)
      .attr("id", "Y_" + lineIdy)
      .attr("class" , "te")
    lineIdy++;
  }

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
}

var flag = true;
let player1 = [];
let player2 = [];
let play = [];
let noRepet =[];
let L 

$("line").click(function(e) {
  if ($(this).attr("style") === "stroke: white;") {
    // player 1 ya doaa
    if (flag) {
        $(this).attr("class", "click")
        .attr("style", "stroke: red")
        play.push(this.id)
        flag = !flag
        L = this
    } 
    // player 2 
    else {
        $(this).attr("class", "click")
        .attr("style", "stroke: green")
        play.push(this.id)
        flag = !flag
    }
    // end of players
    win(play ,noRepet,L)
  }
});

function win (play , noRepet , l)  {
    play.forEach ( element => {
        let x = element
        let $x = x.split("_")
        let $$x = Number($x[1])
       if (!noRepet.includes(x)){
        if ($x[0] === "X" && play.includes("X_"+($$x+7)))
        { 
            if (play.includes("Y_"+$$x) && play.includes("Y_"+(($$x+1))))
            { 
                if (flag){
                    winner("green" ,"G", l)
                    player1.push(element)
                }
                else 
                {
                    console.log(" red")
                    winner("red" , "R",l)
                    player2.push(element)
                }
               // flag? : 
                noRepet.push(x)
                flag = !flag
            }
        }
    }
    })
}

function winner (x,y,l)
{  
    // console.log(l)
    // console.log("x1 = "+d3.select("#".concat(l.id)).attr("x1"))
    // console.log("y1 = "+d3.select("#".concat(l.id)).attr("y1"))
    let xline = Number(d3.select("#".concat(l.id)).attr("x1"))
    let yline = Number(d3.select("#".concat(l.id)).attr("y1"))
    // console.log(xline+10)
    // console.log(yline+35)

    // var odd = 0 
    // function u (){
    //     let x = l.id
    //     let $x = x.split("_")
    //     let $$x = Number($x[1])
    //     if (!$$x % 2 == 0 ) odd = yline+35
        
    // } u ()
    // console.log(odd)
    svg.append("text")
    .style("font-size","34px")
    .attr("x",(xline+10))
    .attr("y",yline+35)
    .text(y)
    .style("fill",x)
}
