var values1a = [30];
var value1a = 0;
var values1b = [70];
var value1b = 0;


var xValues = []; //will get Quality Metrix labels

var yValues = []; //will get Dataset labels

var zValues = []; //will get Dataset values



var z5 = []; //Dataset array for Dataset A
var z5om = 7;
var z5com = 78;
var z5qaa = 95;
var z5tcc = 99;

var z6 = []; //Dataset array for Dataset B
var z6om = 68;
var z6com = 51;
var z6qaa = 70;
var z6tcc = 36;

var z7 = []; //Dataset array for Dataset C
var z7om = 92;
var z7com = 5;
var z7qaa = 45;
var z7tcc = 78;

// predefine color gradients to choose from
var colorscaleValue = [

	[0, '#dddddd'],

	[0.4, '#dddddd'],

	[0.7, '#dddddd'],

	[1, '#dddddd']

];
var colorscaleValue1 = [


	[0, '#c9461c'],

	[0.4, '#e86b21'],

	[0.7, '#f7bb32'],

	[1, '#6ba316']

];

var colorscaleValue2 = [

	[0, '#ffffcc'],

	[0.4, '#c7e9b4'],

	[0.7, '#41b6c4'],

	[1, '#1d91c0']

];

var colorscaleValue3 = [

	[0, '#f7f7f7'],

	[0.4, '#bdbdbd'],

	[0.7, '#969696'],

	[1, '#737373']

];

//seperate values from the data variable for better access
var map = {

	x: xValues,

	y: yValues,

	z: zValues,

	type: 'heatmap',

	colorscale: colorscaleValue,

	showscale: true

};

var data = [map];

var layout = {
	annotations: [],
	xaxis: {
		ticks: '',
		side: 'buttom',
	},
	yaxis: {
		ticks: '',
		ticksuffix: ' ',
	}
};

var checked = '';

//add a checked-effect to the gradient buttons by changing css style
function colorchange(b) {

	if (b.className == "btn-hm btn-1") {

		if (checked.style != undefined) {

			checked.style.background = "";
			checked.style.boxShadow = "0px 1px 2px ";
			checked = "";
			map.colorscale = colorscaleValue1;
			b.style.boxShadow = "-1px -1px 2px ";
			b.style.background = "#dddddd";
			checked = b;

		} else {

			map.colorscale = colorscaleValue1;
			b.style.boxShadow = "-1px -1px 2px ";
			b.style.background = "#dddddd";
			checked = b;

		}
	}
	if (b.className == "btn-hm btn-2") {

		if (checked.style != undefined) {

			checked.style.background = "";
			checked.style.boxShadow = "0px 1px 2px ";
			checked = "";
			map.colorscale = colorscaleValue2;
			b.style.boxShadow = "-1px -1px 2px ";
			b.style.background = "#dddddd";
			checked = b;

		} else {

			map.colorscale = colorscaleValue2;
			b.style.boxShadow = "-1px -1px 2px ";
			b.style.background = "#dddddd";
			checked = b;

		}
	}
	if (b.className == "btn-hm btn-3") {

		if (checked.style != undefined) {

			checked.style.background = "";
			checked.style.boxShadow = "0px 1px 2px ";
			checked = "";
			map.colorscale = colorscaleValue3;
			b.style.boxShadow = "-1px -1px 2px ";
			b.style.background = "#dddddd";
			checked = b;

		} else {

			map.colorscale = colorscaleValue3;
			b.style.boxShadow = "-1px -1px 2px ";
			b.style.background = "#dddddd";
			checked = b;

		}
	}
	Plotly.newPlot('myDiv', data, layout);
}


// get slider values
function rangevalue() {

	values1a.push(document.getElementById("range-1a").value);
	values1b.push(document.getElementById("range-1b").value);


	if (values1a.length > 2) {
		values1a.splice(0, 1);

	}
	if (values1a[values1a.length - 1] != values1a[values1a.length - 2]) {
		value1a = values1a[values1a.length - 1];
		console.log(value1a);


	}
	if (values1b.length > 2) {
		values1b.splice(0, 1);

	}
	if (values1b[values1b.length - 1] != values1b[values1b.length - 2]) {
		value1b = values1b[values1b.length - 1];
		console.log(value1b);
	}

return value1a;
}




//add data to the Dataset arrays and x-axis labels depending on selected Quality Metric buttons
function chooseQ(c) {
	
	if (document.getElementById("om").checked &&
		(z5.includes(z5om) == false && z6.includes(z6om) == false && z7.includes(z7om) == false)) {

		layout.annotations = [];
		z5.push(z5om);
		z6.push(z6om);
		z7.push(z7om);
		xValues.push('Omission');

	} else if (document.getElementById("om").checked == false &&
		(z5.includes(z5om) == true && z6.includes(z6om) == true && z7.includes(z7om) == true)) {

		layout.annotations = [];
		var del1 = z5.indexOf(z5om);
		var del2 = z6.indexOf(z6om);
		var del3 = z7.indexOf(z7om);
		var del4 = xValues.indexOf('Omission');

		z5.splice(del1, 1);
		z6.splice(del2, 1);
		z7.splice(del3, 1);
		xValues.splice(del4, 1)

	} else if (document.getElementById("com").checked &&
		(z5.includes(z5com) == false && z6.includes(z6com) == false && z7.includes(z7com) == false)) {

		layout.annotations = [];
		z5.push(z5com);
		z6.push(z6com);
		z7.push(z7com);
		xValues.push('Commission');

	} else if (document.getElementById("com").checked == false &&
		(z5.includes(z5com) == true && z6.includes(z6com) == true && z7.includes(z7com) == true)) {

		layout.annotations = [];
		var del1 = z5.indexOf(z5com);
		var del2 = z6.indexOf(z6com);
		var del3 = z7.indexOf(z7com);
		var del4 = xValues.indexOf('Commission');

		z5.splice(del1, 1);
		z6.splice(del2, 1);
		z7.splice(del3, 1);
		xValues.splice(del4, 1)

	} else if (document.getElementById("qaa").checked &&
		(z5.includes(z5qaa) == false && z6.includes(z6qaa) == false && z7.includes(z7qaa) == false)) {

		layout.annotations = [];
		z5.push(z5qaa);
		z6.push(z6qaa);
		z7.push(z7qaa);
		xValues.push('Quant. attr. accuracy');

	} else if (document.getElementById("qaa").checked == false &&
		(z5.includes(z5qaa) == true && z6.includes(z6qaa) == true && z7.includes(z7qaa) == true)) {

		layout.annotations = [];
		var del1 = z5.indexOf(z5qaa);
		var del2 = z6.indexOf(z6qaa);
		var del3 = z7.indexOf(z7qaa);
		var del4 = xValues.indexOf('Quant. attr. accuracy');

		z5.splice(del1, 1);
		z6.splice(del2, 1);
		z7.splice(del3, 1);
		xValues.splice(del4, 1)

	} else if (document.getElementById("tcc").checked &&
		(z5.includes(z5tcc) == false && z6.includes(z6tcc) == false && z7.includes(z7tcc) == false)) {

		layout.annotations = [];
		z5.push(z5tcc);
		z6.push(z6tcc);
		z7.push(z7tcc);
		xValues.push('Them. class. correctness');

	} else if (document.getElementById("tcc").checked == false &&
		(z5.includes(z5tcc) == true && z6.includes(z6tcc) == true && z7.includes(z7tcc) == true)) {

		layout.annotations = [];
		var del1 = z5.indexOf(z5tcc);
		var del2 = z6.indexOf(z6tcc);
		var del3 = z7.indexOf(z7tcc);
		var del4 = xValues.indexOf('Them. class. correctness');

		z5.splice(del1, 1);
		z6.splice(del2, 1);
		z7.splice(del3, 1);
		xValues.splice(del4, 1)

	} for (var i = 0; i < yValues.length; i++) {

		for (var j = 0; j < xValues.length; j++) {

			var result = {

				x: xValues[j],

				y: yValues[i],

				text: zValues[i][j],

				showarrow: false,

				font: {
					color: 'black'
				}

			};

			if (result.text != null) {
				result.text = zValues[i][j];
				layout.annotations.push(result);
			}
		}
	}
	Plotly.newPlot('myDiv', data, layout);
}

//add Dataset arrays and y-axis labels to the chart depending on checked Dataset buttons
function chooseD(e) {

	if (document.getElementById("l5").checked && zValues.includes(z5) == false) {

		layout.annotations = [];
		yValues.push('Dataset A');
		zValues.push(z5);

	} else if (document.getElementById("l5").checked == false && zValues.includes(z5) == true) {

		layout.annotations = [];
		var del1 = yValues.indexOf('Dataset A');
		var del2 = zValues.indexOf(z5);
		yValues.splice(del1, 1);
		zValues.splice(del2, 1);

	} else if (document.getElementById("l6").checked && zValues.includes(z6) == false) {

		layout.annotations = [];
		yValues.push('Dataset B');
		zValues.push(z6);

	} else if (document.getElementById("l6").checked == false && zValues.includes(z6) == true) {

		layout.annotations = [];
		var del1 = yValues.indexOf('Dataset B');
		var del2 = zValues.indexOf(z6);
		yValues.splice(del1, 1);
		zValues.splice(del2, 1);

	} else if (document.getElementById("l7").checked && zValues.includes(z7) == false) {

		layout.annotations = [];
		yValues.push('Dataset C');
		zValues.push(z7);

	} else if (document.getElementById("l7").checked == false && zValues.includes(z7) == true) {

		layout.annotations = [];
		var del1 = yValues.indexOf('Dataset C');
		var del2 = zValues.indexOf(z7);
		yValues.splice(del1, 1);
		zValues.splice(del2, 1);

	}

	for (var i = 0; i < yValues.length; i++) {

		for (var j = 0; j < xValues.length; j++) {

			var result = {

				x: xValues[j],

				y: yValues[i],

				text: zValues[i][j],

				showarrow: false,

				font: {

					color: 'black'

				}

			};

			if (result.text != null) {
				result.text = zValues[i][j];
				layout.annotations.push(result);

			}
		}
	}

	Plotly.newPlot('myDiv', data, layout);

}
