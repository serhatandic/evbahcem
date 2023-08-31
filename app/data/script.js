const fs = require('fs');

// Function to add the 'image' property to each section
const addImageProperty = (data) => {
	for (let entry of Object.values(data)) {
		entry.wikipedia = [
			{
				title: '',
				url: '',
			},
		];
	}
	return data;
};

// Read the JSON file
fs.readFile('./data.json', 'utf8', (err, fileContents) => {
	if (err) {
		console.error('Error reading the file:', err);
		return;
	}

	// Parse the JSON content
	const data = JSON.parse(fileContents);

	// Update the data by adding the 'image' property
	const updatedData = addImageProperty(data);

	// Stringify the updated JSON data
	const updatedFileContents = JSON.stringify(updatedData, null, 2);

	// Write the updated content back to the file
	fs.writeFile('./data.json', updatedFileContents, (err) => {
		if (err) {
			console.error('Error writing the file:', err);
		} else {
			console.log('File updated successfully.');
		}
	});
});
