function shallowCopy(src) {
  return Object.assign({}, src);
}

function mergeObjects(target, source) {
  return Object.assign({}, target, source);
}

function removeProperties(object, keys) {
  const result = { ...object };
  keys.forEach(key => {
    delete result[key];
  });
  return result;
}

function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function makeImmutable(obj) {
  return Object.freeze(obj);
}

function makeWord(words) {
  return words.map(word => word[0]).join('');
}

function sellTickets(queue) {
  const bills = { 25: 0, 50: 0, 100: 0 };
  
  for (const bill of queue) {
    if (bill === 25) {
      bills[25]++;
    } else if (bill === 50) {
      if (bills[25] > 0) {
        bills[25]--;
        bills[50]++;
      } else {
        return false;
      }
    } else if (bill === 100) {
      if (bills[50] > 0 && bills[25] > 0) {
        bills[50]--;
        bills[25]--;
        bills[100]++;
      } else if (bills[25] >= 3) {
        bills[25] -= 3;
        bills[100]++;
      } else {
        return false;
      }
    }
  }
  
  return true;
}

function getRectangle(width, height) {
  return {
    width,
    height,
    getArea: function() {
      return this.width * this.height;
    },
    getPerimeter: function() {
      return 2 * (this.width + this.height);
    }
  };
}

function getProxy(object) {
  const handler = {
    get(target, prop) {
      if (prop === 'value') {
        return target;
      }
      if (typeof target[prop] === 'function') {
        return target[prop].bind(target);
      }
      return target[prop];
    },
    set() {
      throw new Error('Cannot add new property');
    }
  };
  return new Proxy(object, handler);
}

function getRevProxy(object) {
  const handler = {
    get(target, prop) {
      if (prop === 'value') {
        return target;
      }
      return typeof target[prop] === 'function' ? target[prop].bind(target) : target[prop];
    },
    set() {
      throw new Error('Cannot add new property');
    }
  };
  return new Proxy(object, handler);
}
