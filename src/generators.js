export function* gen1() { 
  yield 1;
  yield 2;
  yield 3;
};

export function* gen2() { 
  let var1 = yield 2;
  yield var1;
};