
const urls = 'http://localhost:3000/products';

function getData(x) {
  axios.get(urls).then((response) => {
    let productsWomen = response.data;

    var contents = productsWomen[x-1].map((item) => {
        return `
                      <div class="card-group">
                          <div class="card">
                              <a href="#1"><img class="card-img-top" src="${item.url}"></a>
                              <div class="add-card">
                                  <p class="add-to-card">Add to Wishlist</p>
                                  <div>
                                      <span></span>
                                      <span></span>
                                  </div>
                              </div>
                              <div class="card-body">
                                  <a href="#1">${item.name}</a>
                                  <a href="#1">${item.author}</a>
                                  <p>${item.price}</p>
                              </div>
                          </div>
                      </div>
                  `;
    });

    document.getElementById("productsWomen").innerHTML = contents.join(" ");
  });
}


let pagination = document.querySelectorAll('.nav-pagination .pagination .page-item');
pagination.forEach(item => {
    item.addEventListener('click', ()=> {
        for(let i = 0; i < pagination.length; i++) {
            pagination[i].classList.remove('active');
        }
        item.classList.add('active');
        let page = item.textContent;
        getData(page);
    });
});

document.getElementById('women').addEventListener('click', getData(1));