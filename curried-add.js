function curriedAdd(total) {
  let sum = total || 0;
  if (!sum) {
    return sum;
  }
  else {
    let someFunc = function(x) {
      if (x === undefined) {
        return sum;
      }
      else {
        sum += x;
        return someFunc;
      }
    }
    return someFunc;
  };
};

module.exports = { curriedAdd };