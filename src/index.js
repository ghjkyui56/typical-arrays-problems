
exports.min = function min (array) {
  if (typeof array === 'undefined'){
    return 0;
  } else if (array.length < 1){
    return 0;
  }
  let t = array[0];
  for(let i = 1; i<array.length;i++){
    if (array[i]<t){
      t = array[i];
    }
  }
  return t;
}

exports.max = function max (array) {
  if (typeof array === 'undefined'){
    return 0;
  } else if (array.length < 1){
    return 0;
  }
  if (array.length === 0){
    return 0;
  }
  let t = 0;
  for(let i = 0; i<array.length;i++){
    if (array[i]>t){
      t = array[i];
    }
  }
  return t;
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined'){
    return 0;
  } else if (array.length < 1){
    return 0;
  }
  let t = 0;
  for(let i = 0; i<array.length;i++){
    t = t + array[i];
  }
  t = t / (array.length);
  return t;
}
