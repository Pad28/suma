window.onload = () => {
	const button = document.getElementById('button');
	button.addEventListener('click', () => {
		let valor1 = parseInt(document.getElementById('number1').value);
		let valor2 = parseInt(document.getElementById('number2').value);
		let suma = valor1 + valor2;
		console.log(`La suma de ${valor1} + ${valor2} es ${suma}`);
		
		alert(`EL resultado de sumar ${valor1} + ${valor2} es ${suma}`)
		location.reload()
	})
}
