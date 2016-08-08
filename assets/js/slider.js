var h3Array=["Boost Up Your","Organize Your","Fly To your"];
var h1Array=["Local Business","Global Business","Intergalactic Business"];
var btnArray=["contact us","how to","realy"];

var h3Source = document.getElementsByTagName("h3")[0];
var h1Source = document.getElementsByTagName("h1")[0];
var btnSource = document.getElementsByTagName("button")[1];

h3Source.innerHTML=h3Array[0];
h1Source.innerHTML=h1Array[0];
btnSource.innerHTML=btnArray[0];

var count = 0;

function next(){
  count++;
  h3Source.innerHTML=h3Array[1];
  h1Source.innerHTML=h1Array[1];
  btnSource.innerHTML=btnArray[1];
}
