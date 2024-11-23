let a = false;

const promise1 = Promise.resolve("i am promise 1");

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    if (!a) {
      res("i am promise 2");
    } else {
      rej("i am error");
    }
  }, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

//
// Promise.all([promise1, promise2])

//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// ///
// Promise.allSettled([promise1, promise2])

//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

////
Promise.race([promise1, promise2])

  .then((res) => console.log(res))
  .catch((err) => console.log(err));
