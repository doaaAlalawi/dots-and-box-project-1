
$("#game").hide();
$("#StartButton").click(function () {
    $("#startPage").hide();
     $("#game").show();
});

var svg = d3
  .select("#game")
  .append("svg")
  .attr("width", 800)
  .attr("height", 800)
 
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
      .attr("class" , "te")
   lineIdx ++;
  }
  lineIdx++;
}
// drow the virtical line
for (let i = 1; i <7; i++) {
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
      .attr("class" , "te")
    lineIdy++;
  }

}
// drow the circle
for (let i = 1; i < 8; i++) {
  for (let j = 1; j < 8; j++) {
    svg
      .append("circle")
      .attr("cx", 100 * j)
      .attr("cy", 100 * i)
      .attr("r", 7)
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
  if ($(this).attr("style") === "stroke: bisque;") {
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
                    boxL("green" ,"G", l)
                    player1.push(element)
                }
                else
                {
                    boxL("red" , "R",l)

                    player2.push(element)
                }
                noRepet.push(x)
                flag = !flag
            }
        }
    }
    })
}

function boxL (x,y,l)
 {  
// console.log(l.id)
// console.log(d3.select("#".concat(l.id)).attr("x1"))
//console.log("y1 = "+d3.select("#".concat(l.id)).att("y1"))

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

    //console.log(y)
    // console.log(odd)
    svg.append("text")
    .style("font-size","34px")
    .attr("x",(xline+10))
    .attr("y",(yline+35))
    .text(y)
    .style("fill",x)
}


// reset button 
$("#ResetButton").click(function () {
    play.forEach(element => {
      d3.select("#".concat(element)).attr("style", "stroke: bisque")
    });
});


// to check the final winner 
play.forEach(element => {
    if ($(element).attr("style") != "stroke: bisque;")
    winner ()
});
function finalWinner ()
{
    if (player1.length > player2.length)
    Swal.fire({
        type: "‘success’",
        title: "player1 win",
        showConfirmButton: false,
        timer: 1500
    });
     else {
        Swal.fire({
            type: "‘success’",
            title: "player2 win",
            showConfirmButton: false,
            timer: 1500
        });
     }
}

var svg2 = d3
  .select("#score")
  .append("svg2")
  .attr("width", 500)
  .attr("height", 500)

  svg2 
  .append ("text")
  


