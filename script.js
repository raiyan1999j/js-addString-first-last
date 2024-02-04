function mypen(){
    var a = document.getElementById('demo1').value;
    var b = a.slice(a.length -3,a.length);
    var c = b + a + b;
    document.getElementById('demo').innerHTML=c;
}