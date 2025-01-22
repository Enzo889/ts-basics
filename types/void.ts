// se utiliza para indicar que una funcion no devuelve nada o debe estar vacia

(() => {
  function callBatman(): void {
    return;
  }

  const callSuperman = (): void => {
    return;
  };

  const a = callBatman();
  const b = callSuperman();

  console.log(a, b);
})();
