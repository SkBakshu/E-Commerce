let product=[];

function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json()
    }).then((v)=>{
        console.log(v.products);
        product=v.products;

        localStorage.setItem("allproducts",JSON.stringify(product));
        displayProduct(product)
    });
}
function displayProduct(prod){
    // console.log(prod);
    
    let output="";
    prod.map((val)=>{
        output +=`
        <main class="product-card">
            <div class="image"><img src="${val.thumbnail}"></div>
            <div class="card-details">
                <h3>${val.title}</h3>
                <div class="details">
                    <span class="rating"><b>Rating : ${val.rating}</b></span>
                    <span class="price"><b>₹${Math.round(val.price * 90)}</b></span>
                </div>
                <div class="stock">
                    <b>In Stock : ${val.stock}</b>
                    <button onclick="viewMore(${val.id})"><b>Details</b></button>
                </div>
            </div>
        </main>`
    });
    document.getElementById("productContainer").innerHTML=output;
}

fetchData();

document.getElementById("searchProduct").addEventListener("input",(e)=>{
    let searchTerm=e.target.value.toLowerCase();
    let filteredProduct=product.filter((v)=>{
        return (
            v.title.toLowerCase().includes(searchTerm) || v.category.toLowerCase().includes(searchTerm)
        );
    });

    displayProduct(filteredProduct);
});
function viewMore(id){
    // console.log(id);
    localStorage.setItem("productid",id)
    window.location.href="../Details/details.html"
    
}