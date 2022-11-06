function a() {
  const newOption = { ...cur };
  if (e.target.name !== "option_price") {
    newOption[e.target.name] = e.target.value;

    return newOption;
  }

  if (e.target.value === "") {
    newOption[e.target.name] = 0;
    return newOption;
  }
  newOption[e.target.name] = parseInt(e.target.v
}
