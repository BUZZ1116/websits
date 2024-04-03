document.write("<h1 style='background-color: lawngreen;text-shadow: 5px 5px 5px black;'<h1>BMI值計算器</h1>");
let i = prompt("請輸入身高 (公尺)");
let j = prompt("請輸入體重 (公斤)");
let x =j/(i*i);
let msg = "身高 "+i+" 公尺，體重"+j+"公斤，你的BMI："+x+"";
if (i == null || j == null){
    document.write("");
    document.close();
}
else{
    alert(msg);
if (x <=18.5){
    document.write("<h2>BMI體重過輕<\h2>");
}else if(x <=24){
    document.write("<h2>BMI正常範圍<\h2>");
}else{
document.write("<h2>BMI異常範圍<\h2>");
}
document.write(msg); 
    document.close(); 
}
