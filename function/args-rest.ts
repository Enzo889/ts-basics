(() => {
  const fullName = (firstName: string, ...lastNames: string[]): string => {
    return `${firstName} ${lastNames.join(" ")}`;
  };

  const name = fullName("Tony", "Stark", "Iron Man");
  const name2 = fullName("Tony", "Stark", "Iron Man", "Hulk");
  const name3 = fullName("Tony");

  console.log({ name, name2, name3 });
})();
