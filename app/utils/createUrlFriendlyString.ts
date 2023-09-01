export const createURLFriendlyString = (str: string) => {
	// Remove special characters and replace with space
	const cleanedString = str.replace(/[^a-zA-Z0-9 ]/g, ' ');

	// Trim any leading or trailing spaces and replace spaces with hyphens
	const urlFriendlyString = cleanedString
		.trim()
		.replace(/\s+/g, '-')
		.toLowerCase();

	return urlFriendlyString;
};
