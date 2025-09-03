let products=[
    {
        id:1,
        name:"شيزر كرتون معلبات دجاج مع البط في الماء طعام للقطط 6x50g",
        price:70.00,
        image:"images/c1.webp",
        category:"cat"
    },
    {
       id:2,
       name:"شيزر جيلي ظرف بالتونا مع سالمن 85جم",
       price:25.00,
       image:"images/c2.webp",
       category:"cat"
    },
    {
        id:3,
        name:"بريت طعام جاف القطط خالي من الحبوب لهضم صحي الديك الرومي والسالمون 2كج",
        price:250.00,
        image:"images/c3.webp",
        category:"cat"
    },
    {
        id:4,
        name:"لايف كات طعام جاف للقطط المعقمة مع سمك السلمون المرقط - 1.5 كجم",
        price:180.00,
        image:"images/c4.jpg",
        category:"cat"
    },
    {
        id:5,
        name:"لايف كات ظرف طعام رطب للقطط فيلية دجاج 70 جم",
        price:50.00,
        image:"images/c5.webp",
        category:"cat"
    },
    {
        id:6,
        name:"وعاء سيراميك للقطط 11×11سم",
        price:90.00,
        image:"images/c6.jpg",
        category:"cat"
    },
    {
        id:7,
        name:"رويالست وعاء طعام 2.5 لتر الوان متنوعة",
        price:150.00,
        image:"images/c7.webp",
        category:"cat"
    },
    {
        id:8,
        name:"سرير للكلاب والقطط 55×55سم",
        price:300.00,
        image:"images/c8.jpg",
        category:"cat"
    },
    {
        id:9,
        name:"لايف دوق طعام رطب للكلاب كبد الدجاج والقلوب 150جم",
        price:70.00,
        image:"images/d1.jpg",
        category:"dog"
    },
    {
        id:10,
        name:"جيم دوق طعام رطب للكلاب الصغيرة اللحم 150جم",
        price:60.00,
        image:"images/d2.jpg",
        category:"dog"
    },
    {
        id:11,
        name:"ابلاوز طعام رطب للكلاب بنكهة الدجاج واللحم البقري مع الأرز بالمرق 156 جرام",
        price:120.00,
        image:"images/d3.webp",
        category:"dog"
    },
    {
        id:12,
        name:"بريت طعام جاف للكلاب للحفاظ عالوزن بالديك الرومي والشوفان 3 كج",
        price:300.00,
        image:"images/d4.jpg",
        category:"dog"
    },
    {
        id:13,
        name:"بريت مكافأة كلاب ارنب و بابايا للعناية بالصحة 150جم",
        price:80.00,
        image:"images/d5.jpg",
        category:"dog"
    },
    {
        id:14,
        name:"وعاء بنقش ستانلس ستيل 0.2 لتر/ø 15 سم",
        price:100.00,
        image:"images/d6.jpg",
        category:"dog"
    },
    {
        id:15,
        name:"مفرش طعام 48×27سم",
        price:80.00,
        image:"images/d7.webp",
        category:"dog"
    },
    {
        id:16,
        name:"لعبة هوت دوق للكلاب 11سم",
        price:80.00,
        image:"images/d8.jpg",
        category:"dog"
    }
]

function displayProducts(productsfilter){
    let prodContainer=document.getElementById("prodContainer");
    prodContainer.innerHTML="";
    for(let i=0;i<productsfilter.length;i++){
        let prodCard=document.createElement("div");
        prodCard.classList.add("prodCard");
        prodCard.innerHTML=`
            <img src="${productsfilter[i].image}" alt="${productsfilter[i].name.slice(0,20)}">
            <div class="px-10">
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <h3>${productsfilter[i].name.slice(0,30)} ...</h3>
            <div class="flex items-center justify-between my-4">
            <p>السعر: ${productsfilter[i].price} ج.م</p>
            <button class="btn-add-to-cart hover:animate-bounce " onclick="addToCart(${productsfilter[i].id})"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
            </div>
        `;
        prodContainer.appendChild(prodCard);
    }
}
let filterButtons=document.querySelectorAll(".filter-btn");
filterButtons.forEach((btn)=>{
    btn.addEventListener("click",function(){
        filterButtons.forEach((button)=>{
            button.classList.remove("active");
        });
        this.classList.add("active");
        let filterValue=this.getAttribute("data-filter");
        let filteredProducts;
        if(filterValue === "all"){
             lessProducts();
        }else{
            filteredProducts=products.filter((prod)=>prod.category === filterValue);
        }
        displayProducts(filteredProducts);
    });
});

function lessProducts(){
    let filteredProducts=products.slice(0,4);
    displayProducts(filteredProducts);
}     
let btnMore=document.querySelector(".btn-more");
btnMore.addEventListener("click",function(){
    displayProducts(products);
    this.style.display="none";
});
document.addEventListener("DOMContentLoaded", function() {
            lessProducts();});

