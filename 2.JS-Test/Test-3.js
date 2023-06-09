/*EX1*/
{
  let x = {};
  let a = [];
  let b = [];
  let c = [b, a];
  let d = {
    myArray: a,
    myString: "hello",
  };
  d.myArray.push(x);
  c = c.filter((i) => i == d.myArray);
  c[0][0].value = "hello";
  console.log(c);
  //a = [{value: 'hello'}]
  //c=[[{value: 'hello}]]
  //d.myArray == c[0] => true
  //x.value == d.myString? => true
  //how many objects? => 2
}

/*EX2*/
// array.length chỉ độ dài của mảng
{
  let value;
  let ar = [1, 2, 3, 4, 5];
  if (ar.filter((i) => i > 3).length >= 3) {
    value = 1;
  } else {
    value = ar.length;
  }
  console.log(value);
  //value= 5

  let b = ar.map((i) => {
    return {
      k: i * 10,
    };
  });

  /*b=[{k:10}, {k:20}, {k:30}, {k:40}, {k:50}]*/

  b = b.map((i) => {
    return i.k;
  });
  console.log(b);
  /*b=[10, 20, 30, 40, 50]*/
}

/*EX3*/
{
  let ar = [1, 2, 3, 4, 5];
  let b = ar.map((i) => {
    if (i >= 2) {
      return i * 2;
    } else {
      return i - 1;
    }
  });
  let c = ar.map((i) => {
    return {
      e: i,
    };
  });
  /*b= [0, 4, 6, 8, 10]*/
  /*c= [{e:1}, {e:2}, {e:3}, {e:4}, {e:5}]*/

  let b1 = b.find((i) => i == 4);
  /*b1 = 4 */

  b1 = 10;
  /*b= [0, 4, 6, 8, 10]*/

  let c1 = c.find((i) => i.e == 4);
  //c1={e:4}
  c1.e = 20;
  /*c= [{e:1}, {e:2}, {e:3}, {e:20}, {e:5}]*/
  c1 = 20;
  /*c= [{e:1}, {e:2}, {e:3}, {e:20}, {e:5}]*/
}
