var calculate = document.getElementById('calculate');

function displayTable(multiple) {
	
	var table = document.getElementById('multiplicationTable');
	var tr = document.createElement('tr');
	
	if(table.hasChildNodes(tr)) {
		table.innerHTML = '';
	}
	
	// Create the first table row of headers
	table.appendChild(tr);
	table.firstElementChild.appendChild(document.createElement('th')).innerHTML = '&nbsp;';
	
	for( var i = 1; i <= multiple; i++ ) {
		var th = document.createElement('th');
		var multipleFactor = document.createTextNode(i);
		
		th.appendChild(multipleFactor);
		table.firstElementChild.appendChild(th);
	}
	
	// Create each subsequent table row
	for( var j = 1; j <= multiple; j++ ) {
		var tr = document.createElement('tr');
		var th = document.createElement('th');
		var multipleFactor = document.createTextNode(j);
		th.appendChild(multipleFactor);
		tr.appendChild(th);
		
		for( var k = 1; k <= multiple; k++ ) {
			var td = document.createElement('td');
			var factor = document.createTextNode(j * k);
			td.appendChild(factor);
			tr.appendChild(td);
			table.appendChild(tr);
		}
	}
	
//	var dataCells = Array.from(document.getElementsByTagName('td'));
//	
//	for(var i = 0; i < dataCells.length; i++) {
//		var data = dataCells[i].innerHTML;
////		data = parseInt(data);
//		if(parseInt(data) % 2 == 0) {
////			console.log(data);
//			dataCells[i].style.backgroundColor = '#a47e3c';
//		} else {
//			dataCells[i].style.backgroundColor = '#f2f';
//		}
//	}
	
//	console.log(dataCells);
	
	var dataCells = Array.from(document.getElementsByTagName('tr'));
	
	for(var i = 1; i < dataCells.length; i++) {
		var data = dataCells[i].firstChild.innerHTML;
		var childrenNodes = dataCells[i].children;

		if(parseInt(data) % 2 == 0) {
			for(var j = 1; j < childrenNodes.length; j++) {
				if(j % 2 == 0) {
					childrenNodes[j].style.backgroundColor = '#b94a48';
				} else {
					childrenNodes[j].style.backgroundColor = '#d59392';
				}
			}
		} else {
			for(var j = 1; j < childrenNodes.length; j++) {
				if(j % 2 == 0) {
					childrenNodes[j].style.backgroundColor = '#d59392';
				} else {
					childrenNodes[j].style.backgroundColor = '#b94a48';
				}
			}
		}
	}
}

// Generate a table as soon as the page loads 
// with a multiplication factor of 10
displayTable(10);

// Add click event, when user enters a number in 
// the input field and clicks the button, a table
// will generate with the multiplication factors 
// of the input number
calculate.addEventListener('click', function(e) {
	e.preventDefault();
	var multiple = document.getElementById('multiple').value;
	
	displayTable(multiple);
});