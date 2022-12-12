let data = axios
  .get("https://api.hnpwa.com/v0/show/1.json")
  .then(function (response) {
    createCardItem(response);
  })
  .catch(function (error) {
    console.log(error);
  });

function createCardItem(response) {
  let html = "";
  response.data.forEach(function (cardItem) {
    console.log(cardItem);
    var htmlSegment = `<div class="col-md-4 mb-4">
                          <div class="card ">
                            <div class="card-body">
                              <h5 class="card-title">${cardItem.title}</h5>
                              <p class="card-text">
                              ${cardItem.time_ago}
                              </p>
                              <a href=${cardItem.url} target="_blank" class="btn btn-primary">Read More...</a>
                            </div>
                          </div>
                        </div>`;
    html += htmlSegment;
  });
  let container = document.querySelector(".card-desc");
  container.innerHTML = html;
}
