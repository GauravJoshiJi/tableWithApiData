fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData);
    let tableData = "";
    objectData.map((values, key) => {
      //tableData = `<h1>${values.title}</h1>`
      tableData += `<tr>         
      <td>${key + 1}</td>
      <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.price}</td>
      <td><img src="${values.image}"/></td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  });
