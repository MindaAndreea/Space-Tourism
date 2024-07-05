async function getData() {
  try {
    const response = await fetch("../data-json/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getData };
