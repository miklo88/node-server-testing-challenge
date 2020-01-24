test("a placeholder test", done => {
  expect(2 + 2).toBe(4);
  done();
});

// can use async promise as well. jest knows to finish the promise and continue with finishing the test.
// test("a placeholder test", async () => {
//     expect(2 + 2).toBe(4);
//   });
