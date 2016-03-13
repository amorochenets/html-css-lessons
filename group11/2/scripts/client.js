var client = {
	regularClient: false,
	vipClien: false,
	orderCount: 0
	}

client.orderCount = 6;
	if (client.orderCount >= 2) {
		client.regularClient = true;
	}
	if (client.regularClient && client.orderCount >= 5) {
		client.vipClien = true;
	}

console.log(client.vipClien);