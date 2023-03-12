function date(){
    var date = new Date();
    document.getElementById("date").innerHTML = date;
  }

var a=prompt("entrer votre nom");
var b=prompt("entrer votre prenom");
function remplir(){
    document.getElementById("fname").value=a;
    document.getElementById("lname").value=b;
}
function dessiner() {
    var canevas = document.getElementById('canvas');
    if (canevas.getContext){
        var rectangle = new Path2D();
        rectangle.rect(10, 10, 50, 50);
        ctx.stroke(rectangle);
    }
}