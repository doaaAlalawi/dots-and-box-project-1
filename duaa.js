

var flag = true;
let player1 = [null, ];
let player2 = [];
let play = [,];
let noRepet =[]

$("line").click(function(e) {
  if ($(this).attr("style") === "stroke: white;") {
    // player 1 ya doaa
    if (flag) {
        $(this).attr("class", "click")
        .attr("style", "stroke: red")
        play.push(this.id)
        flag = !flag
    } 
    // player 2 
    else {
        $(this).attr("class", "click")
        .attr("style", "stroke: green")
        play.push(this.id)
        flag = !flag
    }
    // end of players
    win(play ,noRepet)
  }
});



// score
// let player1 = [null, ];
// let player2 = [];
// let player = [,];

// player
// let yourturn = 0;

//  $("line").click(function(e) {
//       if ($(this).attr("style") === "stroke: white;"){

//       if (yourturn == 0) {
//         $(this).attr("class", "click")
//         .attr("style", "stroke: red")
//         yourturn = 1 

//         // let x = e.target.id
//         // let $x = x.split("_")
//         // let $$x = Number($x[1])
//         play.push(this.id)

//         // play.forEach(element => {
//         //     let x = element
//         //     let $x = x.split("_")
//         //     let $$x = Number($x[1])
//         //     console.log($x[0] )
//         //     console.log(play.includes("X_"+($$x+7)))
//         //     if ($x[0] === "X" && play.includes("X_"+($$x+7)))
//         //     { 
//         //         console.log("=============================================")
//         //         console.log(play)

//         //             if (play.includes("Y_"+$$x)&& play.includes("Y_"+(($$x+1))))
//         //             {
//         //                 alert("yess")
                        
//         //                     console.log("finaly player 1 ")

//         //         }
//                 // else console.log ("it is not x + 7 plyer 1 ")

//             // } else if ($x[0] === "Y"){

//             //     console.log("Y_"+($$x+1))
//             //     console.log(play)

//             //     if (play.includes("Y_"+($$x+1)))
//             //     {
//             //         if (play.includes("X_"+$$x))
//             //         {
//             //             if (play.includes("X_"+($$x+7)))
//             //             {
//             //                 console.log("finaly player yeee")

//             //             } else console.log ("it is not y + 9  plyer 1")
//             //         } else console.log ("it is not y  plyer 1")
//             //     } else console.log ("it is not y + 9 plyer 1")
//     //          }
//     //    });
//     } 
// }
      
//       else {
//           console.log("iiii")
//         $(this)
//           .attr("style", "stroke: blue")
//           .addClass("click");
//         yourturn = 0;
//        // console.log(e.target.id);
//        play.push(this.id) 

//     //    let x = e.target.id
//     //    let $x = x.split("_")
//     //    let $$x = Number($x[1])

//     //    play.forEach(element => {
//     //        if ($x[0] === "Y")
//     //        {
//     //         console.log("Y_"+($$x+1))
//     //         console.log(play)

//     //            if (play.includes("Y_"+($$x+1)))
//     //            {
//     //                if (play.includes("X_"+$$x))
//     //                {
//     //                    if (play.includes("X_"+($$x+7)))
//     //                    {
//     //                        console.log("finaly player yoooo ")

//     //                    } else console.log ("it is not y + 9  plyer 2")
//     //                } else console.log ("it is not x  plyer 2")
//     //            } else console.log ("it is not y + 9 plyer 2 ")

//         //    } else if ($x[0] === "X"){
//         //     console.log("X_"+($$x-7))
//         //     console.log(play)

//         //     if (play.includes("X_"+($$x+7)))
//         //     {
//         //         if (play.includes("Y_"+$$x))
//         //         {
//         //             if (play.includes("Y_"+($$x+1)))
//         //             {
//         //                 console.log("finaly player yaaaa")

//         //             } else console.log ("it is not y + 9  plyer 2")
//         //         } else console.log ("it is not y plyer 2 ")

//         //     }else console.log ("it is not x + 7  plyer 2")

//     //         }
//     //   });
       
//     //   }
//     }

//     });
     // console.log($x[0].concat("_"+($$x)))
       // console.log(play)
        // console.log(play.includes("line#"+$x[0].concat("_"+($$x-7))))
        // console.log(play.includes("line#X_1"))
        // console.log(play)
        // console.log("line#"+$x[0].concat("_"+($$x-7)))
        // console.log(play[0].id)  
        
        
        // function isArray ( x, play)
        // {
        //    if (play.indexOf(x) > -1){

        //     console.log(" fainaly ")
        //    }
        //    console.log(play)
        // } 
        // isArray($x[0].concat("_"+($$x-7)),play)

        //=======================================================
