var request = require('request');
var moment = require('moment');

export function loadInternetTime() {
	return new Promise(function(resolve, reject) {
		request('http://nist.time.gov/actualtime.cgi?lzbc=siqm9b', function(error, response, body) {
			if(error) {
				reject(' Error in loadInternetTime function ')
			}
			if (!error && response.statusCode == 200) {
	             var parseString = require('xml2js').parseString;
	             var xml = body
	             parseString(xml, function (err, result) {
	                 var formatTime = result.timestamp.$.time / 1000.0;
	                 var date = moment(formatTime);
	                 global.time = new Date(date.format()).getTime()
									 //console.log(global.time);
									 resolve({result: true})
							 });
	         }
		})
	})
}

export function timeInterval(miliSecond, fun) {
	setInterval(function() {
		fun();
	}, miliSecond)
}
