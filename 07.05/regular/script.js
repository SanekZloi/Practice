/*
var re = /8|(\+7)\s?\d{3}[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}/;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);

var str = "+7 904-123-45-67";
var res = str.match(re);
console.log(res);
*/

/*
var ip = /((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)/;
var ipstr1 = prompt();

var res = ipstr1.match(ip);
alert(res[0]);
*/


var mas = ['https://google.ru', 'https://ya.ru', 'https://mail.ru'];
var count;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var p = open(mas[getRandomInt(3)], 'Поисковая система', 'width = 400, height = 400, resizeble = no');


p.moveTo(300,500);
p.resizeTo(1000,1000);

function clowWindows()
{
	p.close();
}

setTimeout(clowWindows, 5000);



