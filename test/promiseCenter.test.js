import * as promiseCenter from '../src/promiseCenter';

describe('promise center', () => {
  const value1 = 'test value1';
  const value2 = 'test value2';
  const key = 'kk';
  let testPromise1;
  let testPromise2;
  let testRejectPromise1;

  beforeEach(() => {
    testPromise1 = Promise.resolve(value1);
    testPromise2 = Promise.resolve(value2);
    testRejectPromise1 = Promise.reject(value1);
  });

  afterEach(() => {
    testPromise1 = null;
    testPromise2 = null;
    testRejectPromise1 = null;
  });

  it('set a rejected promise', (done) => {
    const promise1 = promiseCenter.getPromise(key);
    promiseCenter.setPromise(key, testRejectPromise1);
    promise1
      .then(() => {
        done();
      })
      .catch((v) => {
        expect(v).toBe(value1);
        done();
      });
  });

  it('setPromise and getPromise', (done) => {
    promiseCenter.setPromise(key, testPromise1);
    const promise = promiseCenter.getPromise(key);
    promise.then((v) => {
      expect(v).toBe(value1);
      done();
    });
  });

  it('getPromise and setPromise', (done) => {
    const promise = promiseCenter.getPromise(key);
    promiseCenter.setPromise(key, testPromise1);
    promise.then((v) => {
      expect(v).toBe(value1);
      done();
    });
  });

  it('setPromise setPromise getPromise', (done) => {
    promiseCenter.setPromise(key, testPromise1);
    promiseCenter.setPromise(key, testPromise2);
    const promise = promiseCenter.getPromise(key);
    promise.then((v) => {
      expect(v).toBe(value2);
      done();
    });
  });

  it('getPromise setPromise getPromise', (done) => {
    promiseCenter.getPromise(key);
    promiseCenter.setPromise(key, testPromise1);
    const promise2 = promiseCenter.getPromise(key);
    promise2.then((v) => {
      expect(v).toBe(value1);
      done();
    });
  });

  it('getPromise setPromise setPromise getPromise', (done) => {
    promiseCenter.getPromise(key);
    promiseCenter.setPromise(key, testPromise1);
    promiseCenter.setPromise(key, testPromise2);
    const promise2 = promiseCenter.getPromise(key);
    promise2.then((v) => {
      expect(v).toBe(value2);
      done();
    });
  });
});
