/*EX1*/
{
  let o1 = {};
  let o2 = o1;
  o1.x = 5;
  //o2?

  let a = o1.x;
  let b = a;
  a = 10;
  //b = 5

  let c = [1, 2, 3];
  let e = 1;
  let d = c.map((i) => {
    e++;
    return {
      x: i * e,
    };
  });
  /*d = [{x: 2}, {x: 6}, {x: 12}]*/

  c.forEach((i) => {
    i = i + 1;
  });
  /*c = [1, 2, 3]*/
  d.forEach((i) => {
    i.x = i.x + 1;
  });

  /*d = [{x: 3}, {x: 7}, {x: 13}]*/
  d.forEach((i) => {
    i = [];
  });

  //d= ??
}

/*EX2*/
//
{
  function createObject(number) {
    return {
      value: number,
    };
  }
  function createObject2(number) {
    if (number > 1) {
      return number;
    }
    return 0;
  }

  let x = createObject(2);
  let a = [1, 2, 3, 4].map((i) => {
    return createObject(i + 1);
  });
  let b = [1, 2, 3, 4].map((i) => {
    createObject(i + 2);
    return i;
  });

  /*a = [{value: 2}, {value: 3}, {value: 4}, {value: 5}]*/
  /*b = [1, 2, 3, 4]*/

  let a1 = a.find((i) => i.value == 2);
  //a1 == x? -> true

  a1.value = 99;
  /*a1 = {value: 99}*/
  /*x = {value: 2}*/

  a1 = {};

  /*a = [{value: 99}, {value: 3}, {value: 4}, {value: 5}]*/
  let c = b
    .filter((i) => true)
    .filter((i) => i > 1)
    .map(createObject2);

  /*c = [2, 3, 4]*/
}

/*EX3*/
{
  let a = "hello world";
  a.replace("hello", "hi");
  //a = "hello world"
  let b = a.replace("hi", "hu");
  //b = "hello world"

  let c = b.includes("hu");
  //c => false
}
/*EX4*/
{
  let result = 0;
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    result += element;
  }
  //result = 55

  result = 0;
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    result += element;
    if (i == 5) {
      break;
    }
    if ((i = 6)) {
      break;
    }
  }
  //result?

  result = 0;
  for (let i = 0; i < a.length; i = i + 2) {
    const element = a[i];
    result += element;
  }
  //result = 25

  result = 0;
  while (result < 10) {
    result += 2;
  }
  //result = 10

  do {
    result -= 1;
  } while (result > 10);
  //result = 9

  while (result < 20) {
    result += 1;
    if (result == 15) {
      break;
    }
  }
  //result = 15
}
