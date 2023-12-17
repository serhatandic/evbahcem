export const createURLFriendlyString = (str: string) => {
	// Replace Turkish characters with English equivalents
	const turkishToEnglish = str
		.replace(/ğ/g, 'g')
		.replace(/Ğ/g, 'G')
		.replace(/ç/g, 'c')
		.replace(/Ç/g, 'C')
		.replace(/ş/g, 's')
		.replace(/Ş/g, 'S')
		.replace(/ı/g, 'i')
		.replace(/İ/g, 'I')
		.replace(/ö/g, 'o')
		.replace(/Ö/g, 'O')
		.replace(/ü/g, 'u')
		.replace(/Ü/g, 'U');

	// Remove special characters and replace with space
	const cleanedString = turkishToEnglish.replace(/[^a-zA-Z0-9 ]/g, ' ');

	// Trim any leading or trailing spaces and replace spaces with hyphens
	const urlFriendlyString = cleanedString
		.trim()
		.replace(/\s+/g, '-')
		.toLowerCase();

	return urlFriendlyString;
};
