document.addEventListener("DOMContentLoaded",()=>{
    let allproducts=JSON.parse(localStorage.getItem("allproducts"));
    let productId=localStorage.getItem("productid");
    let productDetails=document.getElementById("productDetails");
    // console.log(allproducts,productId,productDetails);

    if (allproducts && productId){
        let selectedProduct = allproducts.find((v)=>{
            return v.id == productId;
        });

        if (selectedProduct){
            console.log(selectedProduct);
            
            let price = selectedProduct.price * 90;
            productDetails.innerHTML = `
            <div id="up">
                <div class="img">
                    <img src="${selectedProduct.thumbnail}">
                </div>
                <div id="dets">
                    <h1>${selectedProduct.title}</h1>
                    <p class="brand"><strong>Brand:</strong> ${selectedProduct.brand}</p>
                    <p class="category"><strong>Category:</strong> ${selectedProduct.category}</p>
                    <p class="description"><strong>Description:</strong>${selectedProduct.description}</p>
                    <h2 class="price">Price: ₹ <span id="price_color">${price}</span></h2>
                    <button id="cart">Add to Cart</button>
                    <button id="back">Back to Home</button>
                </div>
            </div>
            <div class="reviews">
                <h2>Customer Reviews</h2>
                <hr>
                ${selectedProduct.reviews.map(review => `
                    <div class="review">
                    <p>${"❤️".repeat(review.rating)}${"🖤".repeat(5-review.rating)}</p>
                    <p>${review.comment}</p>
                    <p>By <strong>${review.reviewerName}</strong> on ${new Date(review.date).toLocaleDateString("en-IN")}</p>
                    <hr>
                    </div>
                `).join("")}
            </div>
            `;
        document.getElementById("back").addEventListener("click",()=>{
            window.location.href="../Home/home.html"
        })

        document.getElementById("cart").addEventListener("click",()=>{
            addProductToCart(selectedProduct)
        })

        }else{
            productDetails.innerHTML= `<p>Product Not available ....</p>`
        }
    }else{
        productDetails.innerHTML="<p>No product found ....</p>"
    }
})
function addProductToCart(product){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Product added Successfully")
}