const createJSONfromForm = () => {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const hotness = document.getElementById("hotness").value;
  const imgPath = document.getElementById("img-path").value;

  return {
    name: name,
    description: description,
    price: price,
    hotness: hotness,
    imgPath: imgPath,
  };
};

const convertJSONintoFormatedString = (json) => {
  return `{
    
    name: "${json.name}",
    description: "${json.description}",
    price: ${json.price},
    hotness: ${json.hotness},
    imgPath: "${json.imgPath}",

  };`;
};

const myFunc = () => {
  const myJSON = createJSONfromForm();
  const myInfo = convertJSONintoFormatedString(myJSON);
  const jsonDisplayArea = document.getElementById("json-display-area");
  jsonDisplayArea.innerHTML = myInfo;
};
