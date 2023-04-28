//--------------------Ex1-----------------
{
  let a = {
    a1: [{ x: 1, y: 2 }],
  };
  let b = a.a1;
  let c = a.a1[0];

  a.a1 = [{ x: 3, y: 4 }];
  console.log(c);
  /*b=[{ x: 1, y: 2 }]*/

  /*c={x : 1, y: 2}*/
}

//------------------Ex2-------------------
{
  let a = [];
  let b = { x: 1, y: 2 };
  a.push(b);
  b.y = 5;
  b = { x: 10, y: 15 };
  console.log(a);
  /* a= [{ x: 1, y: 5 }]*/
}

//------------------Ex3-------------------
{
  let a = [];
  let b = a;
  a.push({ x: 1, y: 1 });
  a.push({ x: 2, y: 2 });
  b = b.filter((i) => i.x > 1);
  b[0].y = 10;
  /* a= [{ x: 1, y: 1 },{ x: 2, y: 10 }]*/
}

//------------------Ex4-------------------
{
  let a = [];
  let b = [];
  let c = { x: 1 };
  let d = { x: 2 };
  a.push(d);
  a.push(c);
  b.push(c);
  a[1].x = 10;

  //b= [{x:10}]
  //c= { x:10 }
}

//------------------Ex5-----------------
{
  let a = {
    m: 1,
  };
  let b = {
    m: 2,
  };
  let c = {
    x: a,
    y: b,
    z: {
      t: b,
    },
  };

  a.m = 5;
  b.m = 10;
  /*c = {
        x: {m: 5},
        y: {m: 10},
        z: {
            t: {m: 10}
        }
    } *//*  */

  c.z.t = {};
  c.z.t.b = 100;
  /*b= {m: 10}*/
  /*c.y ={m: 10}*/
}
