function taskA(a, b, cb) {
    setTimeout(() => {
      const res = a + b;
      cb(res);
    }, 2000);
  }
  
  function taskB(a, cb) {
    setTimeout(() => {
      const res = a * 2;
      cb(res);
    }, 2000);
  }
  
  function taskC(a, cb) {
    setTimeout(() => {
      const res = a * -1;
      cb(res);
    }, 2000);
  }
  
  taskA(1, 2, (res_a) => {
    taskB(res_a, (res_b) => {
      taskC(res_b, (res_c) => {
        console.log("taskC Result : ", res_c);
      });
    });
  });