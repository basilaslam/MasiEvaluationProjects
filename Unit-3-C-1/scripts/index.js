//store the products array in localstorage as "products"
// Database
var arr = JSON.parse(window.localStorage.getItem('products'))||[]
// creating Product Model
function Product(type,Description,price,img){
    this.type = type;
    this.desc = Description;
    this.price = price
    this.image = img
}

document.getElementById('add_product').addEventListener('click', (el)=>{
    el.preventDefault;
    var form = document.getElementById('products')
    var type = form.type.value
    var desc = form.desc.value
    var price = form.price.value
    var image = form.image.value

    var newProduct = new Product(type,desc,price,image)
    arr.push(newProduct)

    localStorage.setItem('products',JSON.stringify(arr))
    console.log(newProduct);
    window.reload()
})

document.getElementById('show_products').addEventListener('click',()=>{
    location.href = './inventory.html'
})