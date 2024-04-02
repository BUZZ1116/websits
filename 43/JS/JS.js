document.write("<h1 style='background-color: lawngreen;text-shadow: 5px 5px 5px black;'>Hello World</h1>");
let i = prompt("請輸入暱稱");
if (i == null){
    document.write("你好：訪客");
    document.close();
}
else{
    document.write("你好："+ i);
    document.close(); 
}

