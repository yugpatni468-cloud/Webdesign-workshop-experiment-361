function calculate(){
let n=document.getElementById("subject").value;
let i;
let total=0;
for(i=1;i<=n;i++){
let x=parseFloat(prompt("enter marks of subject"+i));
total+=x;
}
let average=total/n;
let grade;
if(average>=90){
grade="A+";
}
if(average>=80 && average<90){
grade="A";
}else if(average>=70 && average<80){
grade="B";
}else if(average>=60 && average<70){
grade="C";
}else if(average>=40 && average<60){
grade="D";
}else{
grade="Fail";
}
document.getElementById("result").innerHTML="Total Marks: "+total+"<br>Average: "+average+"<br>Grade: "+grade;
}