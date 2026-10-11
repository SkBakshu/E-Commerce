document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
})

function displayCart(){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");

    let totalBill=0;

    if(cart.length==0){
        cartContent.innerHTML="<p>Your cart is empty, start shopping...</p>"
        totalPrice.innerHTML=""
    }
    else{
        cart.map((v,i)=>{
            totalBill+=(v.price)*90;
            let newElement=document.createElement("div");
            newElement.setAttribute("class","prod-info");
            newElement.innerHTML = `
                <div class="image-prod">
                    <div class="img">
                        <img src="${v.thumbnail}">
                    </div>
                    <div class="details">
                        <h2>${v.title}</h2>
                        <p><strong>Shipping:</strong> ${v.shippingInformation}</p>
                        <p><strong>Warranty:</strong> ${v.warrantyInformation}</p>
                        <p><strong>Stock:</strong> ${v.stock}</p>
                    </div>
                    <div class="action">
                        <h2>₹${Math.round(v.price * 90)}</h2>
                        <button onclick="removeFromCart(${i})">Remove</button>
                    </div>
                </div>
                `;
            cartContent.append(newElement)
            totalPrice.innerHTML=`<p>Total Amount is ${totalBill}</p>`
        })
    }
}
function removeFromCart(i){
    // console.log(i);
    let cart=JSON.parse(localStorage.getItem("cart"));
    cart.splice(i,1)
    localStorage.setItem("cart",JSON.stringify(cart));
    window.location.reload()
}