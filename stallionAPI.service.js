const axios = require('axios').default;
const fs = require('fs');

const API_URI = 'https://ship.stallionexpress.ca/api/v3';
const API_TOKEN = 'ZkmSAnZR1VQIqvL1H9Un1KbqIfdubxmX2Zz2IwG9IlzeMZSav2kZyNrzml9F';

module.exports = {
	async downloadShipmentLabel(shipmentId) {
		await axios.get(`${API_URI}/shipments/${shipmentId}`, {
			headers: {
				'Authorization': `Bearer ${API_TOKEN}`,
				'accept': 'application/json'
			}
		}).then(res => {
			const labelData = Buffer.from(res.data.label, "base64");
			fs.writeFile(`labels/${shipmentId}.pdf`, labelData, (err) => {
				if (err) throw err;
				console.log('The file has been saved!');
			});
		});
	}
}	