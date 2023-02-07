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
  createCardView(myJSON);
};

const createCardView = (json) => {
  const cardHTML = `
    <div class="card  text-center border-0" style="width: 18rem">
      <img src="${json.imgPath}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${json.name}</h5>
        <a
          href="#"
          class="btn btn-primary btn-lg border-0 btn-rounded"
          id="add-btn"
        >
          AÑADIR
        </a>
      </div>
    </div>
 `;

  const cardDisplayArea = document.getElementById("card-view");
  cardDisplayArea.innerHTML = cardHTML;
};
