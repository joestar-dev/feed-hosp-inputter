const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('test resolve promise with delay');
    // resolve({
    //   name: 'jojo',
    //   surname: 'joestar'
    // });
    reject('this is test error');
  }, 5000);
});

promise.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log('error ', error);
});