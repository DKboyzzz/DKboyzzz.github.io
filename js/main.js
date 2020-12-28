//VLOG
function VLOG(){
  return change_video("VLOG");
}
//Trailer
function Trailer(){
  return change_video("Trailer");
}

//change_function
function change_video (current_id) {
  if(current_id === "VLOG"){
    document.getElementById(current_id).style.display= "inline-block" ;
    document.getElementById("Trailer").style.display= "none";

  }
  if(current_id === "Trailer"){
    document.getElementById(current_id).style.display= "inline-block";
    document.getElementById("VLOG").style.display= "none";

  }

}
