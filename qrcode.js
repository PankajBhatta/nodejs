
const QRCode = require('qrcode')


let data = {
	name:"pankaj bhatta",
	age:22,
	department:"BCA",
	id:"192019"
}
// Converting the data into String format
let stringdata = JSON.stringify(data)

// Print the QR code to terminal
QRCode.toString(stringdata,{type:'terminal'},
					function (err, QRcode) {

	if(err) return console.log("error occurred")

	// Printing the generated code
	console.log(QRcode)
})



// Converting the data into base64
QRCode.toDataURL(stringdata, function (err, code) {
	if(err) return console.log("error occurred")

	// Printing the code 
	console.log(code)
})
