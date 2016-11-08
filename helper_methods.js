var helper_methods = (function(){

	var number = {
		formatNumber: function(number,round){
			if (round) {
				number = number.toFixed(2);
				number = parseFloat(number);
			};
			var dbefore = number.toString().split('.')[0];
			var dafter = number.toString().split('.')[1];
			if (dafter === undefined) {
				dafter = '00';
			} else if (dafter.length === 1) {
				dafter = dafter + '0';
			} else if (dafter.length > 2) {
				dafter = dafter[0].toString() + dafter[1].toString();
			};

			if (dbefore.length > 3) {
				switch(dbefore.length) {
					case 4:
						var string = dbefore[0]+'.'+dbefore[1]+dbefore[2]+dbefore[3]+','+dafter;
						break;
					case 5:
						var string = dbefore[0]+dbefore[1]+'.'+dbefore[2]+dbefore[3]+dbefore[4]+','+dafter;
						break;
					case 6:
						var string = dbefore[0]+dbefore[1]+dbefore[2]+'.'+dbefore[3]+dbefore[4]+dbefore[5]+','+dafter;
						break;
					case 7:
						var string = dbefore[0]+'.'+dbefore[1]+dbefore[2]+dbefore[3]+'.'+dbefore[4]+dbefore[5]+dbefore[6]+','+dafter;
						break;
					case 8:
						var string = dbefore[0]+dbefore[1]+'.'+dbefore[2]+dbefore[3]+dbefore[4]+'.'+dbefore[5]+dbefore[6]+dbefore[7]+','+dafter;
						break;
				}
			} else {
				var string = dbefore+','+dafter;
			};
			return string;
		},
		moneyToFloat: function(element){
			if (element.length === undefined && typeof element === 'object') {
			var money = element.textContent.replace('R$','').replace('.','').replace(',','.').trim();
			} else if (element.length !== undefined && typeof element === 'object') {
				var money = element[0].textContent.replace('R$','').replace('.','').replace(',','.').trim();
			} else if (typeof element === 'string') {
				var money = element.replace('R$','').replace('.','').replace(',','.').trim();
			}
			var number = parseFloat(money);
			return number;
		}
	};

	var parcels = {
		max_parcels: function(number, min_value_parcel){
			var arr = [];
			for (var i = 1; i <= 12; i++) {
				if (number/i >= min_value_parcel) {
					arr.push(i);
				};
			};
			return arr[arr.length - 1];
		},
		result_parcels: function(number, min_value_parcel){
			var arr = [];
			for (var i = 1; i <= 12; i++) {
				if (number/i >= min_value_parcel) {
					var result = number/i;
					arr.push(result);
				};
			};
			return arr;
		},
		formated_parcels: function(number, min_value_parcel){
			var arr = [];
			for (var i = 1; i <= 12; i++) {
				if (number/i >= min_value_parcel) {
					var result = formatNumber(number/i);
					var string = i+'x de R$' + result;
					arr.push(string);
				};
			};
			return arr;
		}
	};

	return {
		number: number,
		parcels: parcels
	};

})();