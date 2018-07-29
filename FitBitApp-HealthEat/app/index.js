import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import * as fs from "fs";
import document from "document";

//Reading JSON File Content
let json_object  = fs.readFileSync("/mnt/assets/resources/Food_1.json", "json");
// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element

  var k = 1;

const Color = document.getElementById("Color");
const Score = document.getElementById("Score");
const FoodName = document.getElementById("FoodName");

function update(){
    //Reading JSON File Content
  let json_object  = fs.readFileSync("/mnt/assets/resources/Food_"+ k +".json", "json");

  Color.text = json_object.Color;
  Score.text = json_object.Score;
  FoodName.text = json_object.FoodName;
   
}

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  
  update();
}


//Variable for moving up the file variable k

document.onkeypress = function(e) {


  //console.log("Key pressed: " + e.key);
    // console.log(k);
  
  if(e.key === "up" && k>1) {
    k--;
     console.log(k);
  }
  
  if(e.key === "down" && k<3) {
    k++;
    console.log(k);

  }
  
  update();
   
}


