// Add Product Page Button
document.getElementById("add_more_product").addEventListener("click", () => {
  location.href = "./index.html";
});

// Accesing DataBase
var arr = JSON.parse(window.localStorage.getItem("products"));

arr.forEach((el) => {
  var mainDiv = document.getElementById("all_products");

  var wrapper = document.createElement("div");
  var type = document.createElement("p");

  var desc = document.createElement("p");

  var price = document.createElement("p");

  var image = document.createElement("img");

  var remove = document.createElement('button')
  remove.addEventListener('click',(el)=>{
    el.target.parentElement.remove()
    
})
//   Giving Values
  image.src = el.image;
  type.innerText = el.type;
  desc.innerText = '" '+el.desc+' "';
  price.innerText = '₹'+ el.price;
  remove.textContent = 'Remove'
  // Classes and Ids
  wrapper.classList.add("Product_wrapper");
  image.classList.add("img");
  remove.id = 'remove_product'
//   Appending Data
  wrapper.append(image, type, desc, price,remove);
  mainDiv.append(wrapper);
});

