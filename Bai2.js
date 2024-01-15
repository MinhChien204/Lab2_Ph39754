function convertToCamelCase(text) {
  const words = text.split('_');
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return camelCaseWords.join('');
}

const inputText = `underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure`;

const lines = inputText.split('\n');
for (const line of lines) {
  const convertedText = convertToCamelCase(line);
  const checkmarks = '✅'.repeat(convertedText.length);
  console.log(`${convertedText} ${checkmarks}`);
}