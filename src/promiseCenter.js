const promiseCenter = {};

const createPendingPromiseObject = () => {
  let resolve, reject;
  const promise = new Promise((r1, r2) => {
    resolve = r1;
    reject = r2;
  });
  return {resolve, reject, promise, pending: true};
};

const createPromiseObject = (value) => ({
  promise: value,
});

export const getPromise = (key) => {
  if (!promiseCenter[key]) {
    promiseCenter[key] = createPendingPromiseObject();
  }
  return promiseCenter[key].promise;
};

export const setPromise = (key, value) => {
  if (promiseCenter[key] && promiseCenter[key].pending) {
    promiseCenter[key].resolve(value);
    promiseCenter[key].reject(value);
    promiseCenter[key].pending = false;
  } else {
    promiseCenter[key] = createPromiseObject(value);
  }
};
