function parsePromised(json) {
  return new Promise((resolve, reject) => {
    try {
      const result = JSON.parse(json);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

function parsePromisedWrapper(json) {
  return parsePromised(json).catch(error => {
    console.error(error.message);
    throw error;
  });
}

function waitMe() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function waitMeSec(sec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
}

function promiseAll(promises) {
  return Promise.all(promises);
}

function promiseRace(promises) {
  return Promise.race(promises);
}
