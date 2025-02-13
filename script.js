function getFormvalue() {
	let fn = document.querySelector("input[name=fname]").value
	let ln = document.querySelector("input[name=lname]").value
	alert(`${fn} ${ln}`)
}

