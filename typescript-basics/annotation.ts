//if the typescript itself define the variable type then inference other wise annotation
let annotation = (a: number, b: string) => {
  return a + b;
};
let callAnnotation = annotation(5, "hari");
