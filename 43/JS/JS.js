document.write("<h1 style='background-color: lawngreen;text-shadow: 5px 5px 5px black;'<h1>BMI值計算器</h1>");
let i = prompt("請輸入身高");
let j = prompt("請輸入體重");
let x =j/(i*i);
if (i == null || j == null){
    document.write("");
    document.close();
}
else{
    alert("身高 "+i+" 公尺，體重"+j+"公斤你的BMI："+x+"");
if (x <=18.5){
    document.write("BMI體重過輕");
}else if(x <=24){
    document.write("BMI正常範圍");
}else{
document.write("BMI異常範圍");
}
   
    document.close(); 
}
