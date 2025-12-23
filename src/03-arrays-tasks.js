function getSumOfItems(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function getFalsyValuesCount(arr) {
  return arr.filter(item => !Boolean(item)).length;
}

function toStringList(arr) {
  return arr.join(',');
}

function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}

function getIdentityMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0);
    }
    matrix.push(row);
  }
  return matrix;
}

function getIntervalArray(start, end) {
  const length = Math.abs(end - start) + 1;
  const step = start <= end ? 1 : -1;
  return Array.from({ length }, (_, i) => start + i * step);
}

function distinct(arr) {
  return [...new Set(arr)];
}

function group(array, keySelector, valueSelector) {
  return array.reduce((map, item) => {
    const key = keySelector(item);
    const value = valueSelector ? valueSelector(item) : item;
    
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(value);
    
    return map;
  }, new Map());
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function getElementByIndexes(arr, indexes) {
  let result = arr;
  for (const index of indexes) {
    result = result[index];
  }
  return result;
}

function swapHeadAndTail(arr) {
  const middle = Math.floor(arr.length / 2);
  const head = arr.slice(0, middle);
  const tail = arr.slice(-middle);
  
  if (arr.length % 2 === 0) {
    return [...tail, ...head];
  } else {
    return [...tail, arr[middle], ...head];
  }
}
