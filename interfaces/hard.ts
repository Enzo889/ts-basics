(() => {
  interface Client {
    name: string;
    age: number;
    adress?: Adress;
  }

  interface Adress {
    street: string;
    city: string;
    state: string;
    zip: number;
    getNewCity: (city: string) => string; // se pueden poner metodos en las interfaces pero por lo generar para implementar metodos que se van a usar en varios lugares de la aplicacion y que se van a reutilizar se suelen usar las clases. las interfaces son mas para definir tipos de datos
  }

  const client: Client = {
    name: "John Doe",
    age: 30,
    adress: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zip: 62701,
      getNewCity(city) {
        return city;
      },
    },
  };

  const client2: Client = {
    name: "Jane Doe",
    age: 25,
  };

  console.log(client2.name, client.age, client.adress?.city);

  console.log(client.adress?.getNewCity("Chicago") || "No city was provided");

  console.log(client.adress?.getNewCity("Detroit") || "No city was provided");
})();
