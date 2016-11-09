var helper_methods = (function(){

	// Methods used to handle with numbers
	var number = {
		formatNumber: function(number){
			// Validate if argument is a number
			if (typeof number !== 'number') {
				throw "Received argument is not a 'number. Typeof argument: " + typeof number;
			};

			// dbfore get the digits before the decimal separator
			var dbefore = number.toString().split('.')[0];
			// dbfore get the digits after the decimal separator
			var dafter = number.toString().split('.')[1];
			
			// Check if the number is a negative number
			if (number.toString().split('.')[0].indexOf('-') != -1) {
				dbefore = dbefore.replace('-','');
			};

			// Example: 15 > 15,00
			if (dafter === undefined) {
				dafter = '00';
			// Example: 15.1 > 15,10	
			} else if (dafter.length === 1) {
				dafter = dafter + '0';
			// Example: 15.1515 > 15,15
			} else if (dafter.length > 2) {
				dafter = dafter[0].toString() + dafter[1].toString();
			};

			if (dbefore.length > 3) {
				switch(dbefore.length) {
					// Example: 1515.15 > 1.515,15
					case 4:
						var string = dbefore[0]+'.'+dbefore[1]+dbefore[2]+dbefore[3]+','+dafter;
						break;
					// Example: 15151.15 > 15.151,15
					case 5:
						var string = dbefore[0]+dbefore[1]+'.'+dbefore[2]+dbefore[3]+dbefore[4]+','+dafter;
						break;
					// Example: 151515.15 > 151.515,15
					case 6:
						var string = dbefore[0]+dbefore[1]+dbefore[2]+'.'+dbefore[3]+dbefore[4]+dbefore[5]+','+dafter;
						break;
					// Example: 1515151.15 > 1.515.151,15
					case 7:
						var string = dbefore[0]+'.'+dbefore[1]+dbefore[2]+dbefore[3]+'.'+dbefore[4]+dbefore[5]+dbefore[6]+','+dafter;
						break;
					// Example: 15151515.15 > 15.151.515,15
					case 8:
						var string = dbefore[0]+dbefore[1]+'.'+dbefore[2]+dbefore[3]+dbefore[4]+'.'+dbefore[5]+dbefore[6]+dbefore[7]+','+dafter;
						break;
				}
			} else {
				// Example: 1.51 > 1,51
				// Example: 15.15 > 15,15
				// Example: 151.51 > 151,15
				
				// Check if the number is a negative number
				if (number.toString().split('.')[0].indexOf('-') != -1) {
					var string = '-'+dbefore+','+dafter;
				} else {
					var string = dbefore+','+dafter;
				};
			};
			return string;
		},
		moneyToFloat: function(element){
			// Validate if argument is a string or a object
			if (typeof element !== 'object' || typeof element === 'string') {
				throw "Received argument is not a 'object' or a 'string. Typeof argument: " + typeof element;
			};

			// Check if argument is not an array of elements like jQuery or document.querySelectorAll()
			if (element.length === undefined && typeof element === 'object') {
				var money = element.textContent.replace('R$','').replace('.','').replace(',','.').trim();
			// Check if argument is an array os elements like jQuery or document.querySelectorAll()
			} else if (element.length !== undefined && typeof element === 'object') {
				var money = element[0].textContent.replace('R$','').replace('.','').replace(',','.').trim();
			// Check if argument is a string
			} else if (typeof element === 'string') {
				var money = element.replace('R$','').replace('.','').replace(',','.').trim();
			};
			var number = parseFloat(money);
			return number;
		}
	};

	var parcels = {
		maxParcels: function(number, min_value_parcel){
			// Check if a number and the minimal value parcel has been passed
			if (number === undefined || min_value_parcel === undefined) {
				throw "A number and a minimal value parcel is required";
			};

			var arr = [];
			for (var i = 1; i <= 12; i++) {
				// Check if the division result of number by parcel is equal or higher than the min_value_parcel and than include on array
				if (number/i >= min_value_parcel) {
					arr.push(i);
				};
			};
			// Return the last position of the array > max parcel
			return arr[arr.length - 1];
		},
		resultParcels: function(number, min_value_parcel){
			var arr = [];
			for (var i = 1; i <= 12; i++) {
				if (number/i >= min_value_parcel) {
					var result = number/i;
					arr.push(result);
				};
			};
			// Same logic of maxParcels but returns the results of the division
			return arr;
		},
		formatedParcels: function(number, min_value_parcel){
			var arr = [];
			for (var i = 1; i <= 12; i++) {
				if (number/i >= min_value_parcel) {
					var result = helper_methods.number.formatNumber(number/i);
					var string = i+'x de R$' + result;
					arr.push(string);
				};
			};
			// Same logic of maxParcels but returns the text informing the parcels and the values. Example: 10x de R$ 515,00
			return arr;
		}
	};

	return {
		number: number,
		parcels: parcels
	};

})();