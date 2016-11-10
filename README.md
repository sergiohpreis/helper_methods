# Helper Methods

A simple library that contains some methods that I frequently use on the development

The `helper_methods` object is organized as below: 

* `numbers`  
Methods used to handle with numbers
* `parcels`  
Methods used to handle with parcels (*frequently on ecommerces*)

## How to use:

### formatNumber (number)
Type: `number`.
   
Transform a number on a formatted number.  

*number:* Number to format, need to be `typeof number`. 

Example:

```javascript
helper_methods.number.formatNumber(15987.54);
// return 15.987,54. Typeof: String
```

### moneyToFloat (money)
Type: `string` or `object`.
   
Transform a string or object that contains a string with money on float number.

*money:* Money to format, need to be `typeof string` or `typeof object`.

Example: 
```html
<html>
	<body>
		<span class="value">R$ 15.987,54</span>
	</body>
</html>
```

```javascript
helper_methods.number.moneyToFloat('15.987,54');
helper_methods.number.moneyToFloat(document.querySelector('.value'));
helper_methods.number.moneyToFloat(document.querySelectorAll('.value'));
helper_methods.number.moneyToFloat($('.value')); //jQuery
// return 15987.54. Typeof: Number
```

### maxParcels (number, minValueParcel)
Type: `number`.
   
Return the max number of parcels based on a minimal parcel value.

*number*: Number to parcel, need to be `typeof number`.  
*minValueParcel*: Minimal value of the parcel, need to be `typeof number`.

```javascript
helper_methods.parcels.maxParcels(50, 5);
// return 10. Typeof: Number
```

### resultParcels (number, minValueParcel)
Type: `number`.
   
Return an array with the parcel values

*number*: Number to parcel, need to be `typeof number`.  
*minValueParcel*: Minimal value of the parcel, need to be `typeof number`.

```javascript
helper_methods.parcels.resultParcels(50, 5);
// return [50, 25, 16.666666666666668, 12.5, 10, 8.333333333333334, 7.142857142857143, 6.25, 5.555555555555555, 5]. Typeof: Object
```

### formatedParcels (number, minValueParcel [, text])
Type: `number`.
   
Return an array with the parcel values on a formated string.

*number*: Number to parcel, need to be `typeof number`.  
*minValueParcel*: Minimal value of the parcel, need to be `typeof number`.  
*text*: String that contains the custom text to return on array. Use `$1` to parcel and `$2` to value

```javascript
helper_methods.parcels.formatedParcels(50, 5);
// return ["1x de R$50,00", "2x de R$25,00", "3x de R$16,66", "4x de R$12,50", "5x de R$10,00", "6x de R$8,33", "7x de R$7,14", "8x de R$6,25", "9x de R$5,55", "10x de R$5,00"]. Typeof: Object

helper_methods.parcels.formatedParcels(50, 5, 'Em até $1 de $2 sem juros');
// return ["Em até 1x de R$50,00 sem juros", "Em até 2x de R$25,00 sem juros", "Em até 3x de R$16,66 sem juros", "Em até 4x de R$12,50 sem juros", "Em até 5x de R$10,00 sem juros", "Em até 6x de R$8,33 sem juros", "Em até 7x de R$7,14 sem juros", "Em até 8x de R$6,25 sem juros", "Em até 9x de R$5,55 sem juros", "Em até 10x de R$5,00 sem juros"]. Typeof: Object

helper_methods.parcels.formatedParcels(50, 5, 'Em até <strong>$1</strong> de <span class="value">$2</span> sem juros');
// return ["Em até <strong>1x</strong> de <span class="value">R$50,00</span> sem juros", "Em até <strong>2x</strong> de <span class="value">R$25,00</span> sem juros", "Em até <strong>3x</strong> de <span class="value">R$16,66</span> sem juros", "Em até <strong>4x</strong> de <span class="value">R$12,50</span> sem juros", "Em até <strong>5x</strong> de <span class="value">R$10,00</span> sem juros", "Em até <strong>6x</strong> de <span class="value">R$8,33</span> sem juros", "Em até <strong>7x</strong> de <span class="value">R$7,14</span> sem juros", "Em até <strong>8x</strong> de <span class="value">R$6,25</span> sem juros", "Em até <strong>9x</strong> de <span class="value">R$5,55</span> sem juros", "Em até <strong>10x</strong> de <span class="value">R$5,00</span> sem juros"]. Typeof: Object
```