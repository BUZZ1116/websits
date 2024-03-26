console.log("Hi! JavaScript ");
let i = prompt("請輸入暱稱");
if (i == null){
    document.write("你好：訪客");
    document.close();
}
else{
    document.write("你好："+ i);
    document.close();
    
}
