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

const score = document.getElementById("score");
const foodName = document.getElementById("foodName");
const glutenFree = document.getElementById("glutenFree");
const brainHealth = document.getElementById("brainHealth");
const automaticDoNotEat = document.getElementById("automaticDoNotEat");
const isCarcinogenic = document.getElementById("isCarcinogenic");


function update(){
    //Reading JSON File Content
  let json_object  = fs.readFileSync("/mnt/assets/resources/Food_"+ k +".json", "json");

  score.text = json_object.score;
  foodName.text = json_object.foodName;
  
   if(json_object.glutenFree === true) {
  glutenFree.text = "Gluten Free: ✅";//"Gluten Free: " + json_object.glutenFree;
  }
   else {
     glutenFree.text = "Gluten Free: ❌";
   }
  
//   //Brain Healthy Conditional
if(json_object.brainHealth === true) {
   brainHealth.text = "Healthy for Brain: ✅";
 }
 else {
  brainHealth.text = "Healthy for Brain: ❌";
}
  
//   //Automatic Do Not Eat Food Conditional
if(json_object.automaticDoNotEat === true) {
   automaticDoNotEat.text = "Unhealthy Food: ✅";
 }
else {
    automaticDoNotEat.text = "Unhealthy Food: ❌";
 }
  
if(json_object.isCarcinogenic === true) {
  isCarcinogenic.text = "Carcinogenic: ✅";
}
  else {
    isCarcinogenic.text = "Carcinogenic: ❌";
  }
 
   
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
  
  if(e.key === "down" && k<4) {
    k++;
    console.log(k);

  }
  
  update();
   
}


