function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

function getFactorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  return !(rect1.left + rect1.width < rect2.left || 
           rect2.left + rect2.width < rect1.left || 
           rect1.top + rect1.height < rect2.top || 
           rect2.top + rect2.height < rect1.top);
}

function isInsideCircle(circle, point) {
  const distance = Math.sqrt(
    Math.pow(point.x - circle.center.x, 2) + 
    Math.pow(point.y - circle.center.y, 2)
  );
  return distance < circle.radius;
}

function findFirstSingleChar(str) {
  const charCount = {};
  
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  return `${startBracket}${start}, ${end}${endBracket}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  const reversed = parseInt(
    Math.abs(num).toString().split('').reverse().join('')
  );
  return num < 0 ? -reversed : reversed;
}

function isCreditCardNumber(ccn) {
  const str = ccn.toString();
  let sum = 0;
  let isSecond = false;
  
  for (let i = str.length - 1; i >= 0; i--) {
    let digit = parseInt(str[i], 10);
    
    if (isSecond) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isSecond = !isSecond;
  }
  
  return sum % 10 === 0;
}

function getDigitalRoot(num) {
  let n = num;
  while (n >= 10) {
    n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }
  return n;
}

function isBracketsBalanced(str) {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>'
  };
  
  for (const char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (!last || brackets[last] !== char) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) return '';
  
  const firstPath = pathes[0].split('/');
  
  for (let i = 0; i < firstPath.length; i++) {
    for (let j = 1; j < pathes.length; j++) {
      const currentPath = pathes[j].split('/');
      if (firstPath[i] !== currentPath[i]) {
        return firstPath.slice(0, i).join('/') + (i > 0 ? '/' : '');
      }
    }
  }
  
  return firstPath.join('/') + '/';
}

function getMatrixProduct(m1, m2) {
  const result = [];
  const rows1 = m1.length;
  const cols1 = m1[0].length;
  const cols2 = m2[0].length;
  
  for (let i = 0; i < rows1; i++) {
    result[i] = [];
    for (let j = 0; j < cols2; j++) {
      let sum = 0;
      for (let k = 0; k < cols1; k++) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }
  
  return result;
}

function evaluateTicTacToePosition(position) {
  const lines = [
    [position[0][0], position[0][1], position[0][2]],
    [position[1][0], position[1][1], position[1][2]],
    [position[2][0], position[2][1], position[2][2]],
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    [position[0][0], position[1][1], position[2][2]],
    [position[0][2], position[1][1], position[2][0]]
  ];
  
  for (const line of lines) {
    if (line[0] && line[0] === line[1] && line[1] === line[2]) {
      return line[0];
    }
  }
  
  return undefined;
}
