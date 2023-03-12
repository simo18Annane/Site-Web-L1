function date(){
    var date = new Date();
    document.getElementById("date").innerHTML = date;
  }
  var a=0;
var b=0;
var c=0;
var x=0;
var y=0;
var z=0;
var v=0;
var valeur;
function voter(){
    v=v+1;
    if(document.getElementById("final1").checked)
      {a=a+1;}
    if(document.getElementById("final2").checked)
      {b=b+1;}
    if(document.getElementById("final3").checked)
      {c=c+1;}
    x=parseInt((a*100)/v);
    y=parseInt((b*100)/v);
    z=parseInt((c*100)/v);
    document.getElementById("statistic").innerHTML = "final 2015 :" + x+"%" + "<br>" + "final 2011 :" + y+"%" + "<br>" + "final 2009 :" + z+"%";
    document.getElementById("nbvote").innerHTML = v + "votes";
    if(x>y && x>z)
      {document.getElementById("video").innerHTML = "<embed src='../media/video2015.mp4'>";}
    if(y>x && y>z)
      {document.getElementById("video").innerHTML = "<embed src='../media/video2011.mp4'>";}
    if(z>x && z>y)
      {document.getElementById("video").innerHTML = "<embed src='../media/video2009.mp4'>";}
}
var n=0;
var r=0;
var s=0;
var b1=0;
var b2=0;
var b3=0;
var v1=0;
var valeur1;
function voter1(){
  v1=v1+1;
  if(document.getElementById("but1").checked)
    {n=n+1;}
  if(document.getElementById("but2").checked)
    {r=r+1;}
  if(document.getElementById("but3").checked)
    {s=s+1;}
  b1=parseInt((n*100)/v1);
  b2=parseInt((r*100)/v1);
  b3=parseInt((s*100)/v1);
  document.getElementById("statistic1").innerHTML = "messi(3-0 bayern) :" + b1+"%" + "<br>" + "roberto(6-1 psg) :" + b2+"%" + "<br>" + "messi(3-0 liverpool) :" + b3+"%";
  document.getElementById("nbvote1").innerHTML = v1 + "votes";
  if(b1>b2 && b1>b3)
    {document.getElementById("video1").innerHTML = "<embed src='../media/messi.mp4'>";}
  if(b2>b1 && b2>b3)
    {document.getElementById("video1").innerHTML = "<embed src='../media/roberto.mp4'>";}
  if(b3>b1 && b3>b2)
    {document.getElementById("video1").innerHTML = "<embed src='../media/messi1.mp4'>";}
}
function vbarca() {
  var canevas = document.getElementById('canevas');
  if (canevas.getContext) {
    var ctx = canevas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
    var c = document.getElementById("canevas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Visca Barca",80,130);
  }
}