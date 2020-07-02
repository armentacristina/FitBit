/*
 * Entry point for the watch app
 */

console.log("App code started");
import document from "document";

let mybutton = document.getElementById("mybutton");
mybutton.onactivate = function(evt) {
  console.log("CLICKED!");
}