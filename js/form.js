function calc() {
	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;
	var res = document.querySelector('.result');
	var r = n1 * n2;

	res.innerHTML = r;

	console.log(r);
}

function div() {
	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;
	var res = document.querySelector('.result');
	var r = n1 / n2;

	res.innerHTML = r;
	
	console.log(r);
}
function plus() {
	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;
	var res = document.querySelector('.result');
	var r = n1 + n2;

	res.innerHTML = r;
	
	console.log(r);
}
function minus() {
	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;
	var res = document.querySelector('.result');
	var r = n1 - n2;

	res.innerHTML = r;
	
	console.log(r);
}