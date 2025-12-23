function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getStringLength(value) {
  return value.length;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function getFirstChar(value) {
  return value[0];
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function repeatString(value, count) {
  return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

function unbracketTag(str) {
  return str.slice(1, -1);
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function extractEmails(str) {
  return str.split(';');
}

function getRectangleString(width, height) {
  const topBottom = '─'.repeat(width - 2);
  const middle = ' '.repeat(width - 2);
  let result = `┌${topBottom}┐\n`;
  
  for (let i = 0; i < height - 2; i++) {
    result += `│${middle}│\n`;
  }
  
  if (height > 1) {
    result += `└${topBottom}┘\n`;
  }
  
  return result;
}

function encodeToRot13(str) {
  const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    const index = input.indexOf(str[i]);
    result += index !== -1 ? output[index] : str[i];
  }
  
  return result;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function calculateBalance(book) {
  const lines = book.split('\n').filter(line => line.trim() !== '');
  const originalBalance = parseFloat(lines[0]);
  let balance = originalBalance;
  let totalExpense = 0;
  const result = [`Original Balance: ${originalBalance.toFixed(2)}`];
  
  for (let i = 1; i < lines.length; i++) {
    const match = lines[i].match(/(\d+) ([^0-9]+) (\d+\.\d+)/);
    if (match) {
      const expense = parseFloat(match[3]);
      totalExpense += expense;
      balance -= expense;
      result.push(`${match[1]} ${match[2]} ${expense.toFixed(2)} Balance ${balance.toFixed(2)}`);
    }
  }
  
  result.push(`Total expense  ${totalExpense.toFixed(2)}`);
  result.push(`Average expense  ${(totalExpense / (lines.length - 1)).toFixed(2)}`);
  
  return result.join('\n');
}
