var
	sum = 9000,
	discount = 15,
	orderSum = 80223,
	orderDisctount = 0,
	message = '',
	payThreeMonths = true,
	freeDelivery,
	discountForFreand = 0;
	vipClient = true;

if (payThreeMonths) {
	message = payThreeMonths ? 'Discount for your friend is 5%' : '';
	console.log('Your discount is ' + discount + '%. Sum for pay is ' + (sum - ((sum * discount) / 100)) + 'UAH. '+message);
	
};

if (!vipClient) {
	if (orderSum >= 600 && orderSum < 1000) {
		orderDisctount = 2;
	} else if (orderSum >= 1000 && orderSum < 2000) {
		orderDisctount = 5;
	} else if (orderSum >= 2000) {
		orderDisctount = 7;
	} else message = 'For discount order goods more then 600 UAH.';

} else {
	orderDisctount = 15;
	if (orderSum >= 2000) {
		message = 'Now you are the Gold Card Holder';
	};
}
orderSum -= orderSum * orderDisctount / 100;
console.log('Order Sum with discount is ' + orderSum + 'UAH. Your discount is ' + orderDisctount + '% ' + message);
freeDelivery = orderSum >= 1000 ? true : false;
console.log('Free Delivery is ' + freeDelivery);
message = vipClient ? 'Delivery required goods to current shop' : 'We don\'t have this goods';
console.log(message);