/*=====================================
AGRILINK RWANDA
Homepage JavaScript
=====================================*/
/*=====================================
MOBILE MENU
=====================================*/
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
/*=====================================
BACK TO TOP BUTTON
=====================================*/
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } 
    else {
        topBtn.style.display = "none";
    }
});
if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
/*=====================================
STICKY NAVBAR SHADOW
=====================================*/
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
    }
    else {
        navbar.style.boxShadow = "none";
    }
});
/*=====================================
SMOOTH SCROLL FOR LINKS
=====================================*/
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
/*=====================================
SIMPLE SCROLL REVEAL
=====================================*/
const revealItems = document.querySelectorAll(
    ".category-card, .product-card, .why-card, .stat-box .animate-on-scroll"
);
function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;
    revealItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if (top < trigger) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
}
revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".6s ease";
});
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
/*=====================================
ADVANCED SEARCH VALIDATION
=====================================*/
const searchForm = document.querySelector(".advanced-search form");
if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
        const keyword = this.querySelector("input").value.trim();
        if (keyword === "") {
            e.preventDefault();
            alert("Please enter a product, seller or district.");
        }
    });
}
/*=====================================
ACTIVE NAVIGATION
=====================================*/
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navItems.forEach(link => {
        const href = link.getAttribute("href");
        if (href === "#" + current) {
            link.classList.add("active");
        }
        });
});
/*=====================================
HERO BUTTON EFFECT
=====================================*/
const heroButtons = document.querySelectorAll(".hero .btn");
heroButtons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px) scale(1.03)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });
});
/*=====================================
    SAMPLE SELLERS
=====================================*/

const sellers = [
    {
    id:1,
    name:"Green Farm",
    image:"../images/profiles/Profile_avatar.png",
    rating:4.8,
    location:"Huye District",
    joined:"January 2024",
    description:"Green Farm specializes in supplying high-quality fresh vegetables, beans, maize and fruits directly from local farmers. The seller is committed to delivering fresh and affordable agricultural products throughout Rwanda."
    },
    {
    id:2,
    name:"Sunrise Farmers",
    image:"../images/profiles/Profile_avatar.png",
    rating:4.6,
    location:"Musanze District",
    joined:"March 2023",
    description:"Sunrise Farmers provides potatoes, carrots, onions and other fresh produce harvested from Northern Province."
    },
    {
    id:3,
    name:"Kigali Fresh",
    image:"../images/profiles/Profile_avatar.png",
    rating:4.9,
    location:"Gasabo District",
    joined:"June 2022",
    description:"Kigali Fresh supplies fruits and vegetables to homes, restaurants and hotels with reliable delivery services."
    }
];
/*=====================================
    SAMPLE PRODUCTS
=====================================*/

const products = [

    {
        id: 1,

        name: "Fresh Beans",

        category: "Potatoes",

        price: 850,

        quantity: "250 Kg",

        district: "Huye",

        sellerId: 1,

        seller: "Green Farm",

        rating: 4.8,

        image: "../images/products/beans/beans1.jpg"

    },

    {
        id: 2,

        name: "Maize",

        category: "Potatoes",

        price: 700,

        quantity: "500 Kg",

        district: "Musanze",

        sellerId: 1,

        seller: "Green Farm",

        rating: 4.6,

        image: "../images/products/maize/maize1.jpg"

    },

    {

        id: 3,

        name: "Colocasia",

        category: "Potatoes",

        price: 1200,

        quantity: "320 Kg",

        district: "Kirehe",

        sellerId: 1,

        seller: "Green Farm",

        rating: 4.9,

        image: "../images/products/colocasia/colocasia5.jpg"

    },

    {
        id: 4,

        name: "Irish Potatoes",

        category: "Potatoes",

        price: 500,

        quantity: "600 Kg",

        district: "Rubavu",

        sellerId: 1,

        seller: "Green Farm",

        rating: 4.7,

        image: "../images/products/potatoes/potatoes1.jpg"

    },

    {
        id: 5,

        name: "Cassava",

        category: "Potatoes",

        price: 450,

        quantity: "700 Kg",

        district: "Gisagara",

        sellerId: 2,

        seller: "Sunrise Farmers",

        rating: 4.5,

        image: "../images/products/cassava/cassava1.jpg"

    },

    {
        id: 6,

        name: "Sweet Potatoes",

        category: "Potatoes",

        price: 550,

        quantity: "450 Kg",

        district: "Muhanga",

        sellerId: 2,

        seller: "Sunrise Farmers",

        rating: 4.7,

        image: "../images/products/sweet-potatoes/sweet-potatoes2.jpg"

    },

    {
        id: 7,

        name: "Soybeans",

        category: "Potatoes",

        price: 350,

        quantity: "900 Kg",

        district: "Rulindo",

        sellerId: 2,

        seller: "Sunrise Farmers",

        rating: 4.6,

        image: "../images/products/soybeans/soybeans1.jpg"

    },

    {
        id: 8,

        name: "Peas",

        category: "Peas",

        price: 1300,

        quantity: "200 Kg",

        district: "Bugesera",

        sellerId: 2,

        seller: "Sunrise Farmers",

        rating: 4.8,

        image: "../images/products/peas/peas1.jpg"

    },

    {
        id: 9,

        name: "Cooking Bananas",

        category: "Cooking Bananas",

        price: 600,

        quantity: "180 Kg",

        district: "Nyagatare",

        sellerId: 3,

        seller: "Kigali Fresh",

        rating: 4.5,

        image: "../images/products/cooking-banana/cooking-banana3.jpg"

    },

    {
        id: 10,

        name: "Peanuts",

        category: "Peanuts",

        price: 800,

        quantity: "300 Kg",

        district: "Karongi",

        sellerId: 3,

        seller: "Kigali Fresh",

        rating: 4.9,

        image: "../images/products/peanuts/peanuts2.jpg"

    },

    {
        id: 11,

        name: "Oranges",

        category: "Fruits",

        price: 650,

        quantity: "350 Kg",

        district: "Ngoma",

        sellerId: 3,

        seller: "Kigali Fresh",

        rating: 4.7,

        image: "../images/products/fruits/oranges/oranges1.jpg"

    },

    {
        id: 12,

        name: "Cabbages",

        category: "Vegetables",

        price: 400,

        quantity: "500 Kg",

        district: "Burera",

        sellerId: 3,

        seller: "Kigali Fresh",

        rating: 4.6,

        image: "../images/products/vegetables/cabbages/cabbages1.jpg"

    }

];

/*=====================================
    PRODUCT PAGINATION
=====================================*/

const productsGrid = document.getElementById("productsGrid");

const pagination = document.getElementById("pagination");

const productsPerPage = 6;

let currentPage = 1;



/*=====================================
    DISPLAY PRODUCTS
=====================================*/

function displayProducts(page){

    productsGrid.innerHTML = "";

    const start = (page - 1) * productsPerPage;

    const end = start + productsPerPage;

    const pageProducts = products.slice(start, end);

    pageProducts.forEach(product => {

        productsGrid.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}" onerror="this.src='../images/products/default.jpg'">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="rating">

                    ⭐ ${product.rating}

                </p>

                <p>

                    <strong>Seller:</strong>

                    ${product.seller}

                </p>

                <p>

                    <strong>District:</strong>

                    ${product.district}

                </p>

                <p>

                    <strong>Available:</strong>

                    ${product.quantity}

                </p>

                <p class="price">

                    RWF ${product.price} / Kg

                </p>

                <a href="product.html?id=${product.id}" class="btn">

                    View Details

                </a>

            </div>

        </div>

        `;

    });

}
function createPagination(){

    pagination.innerHTML = "";

    const totalPages = Math.ceil(products.length / productsPerPage);

    const previous = document.createElement("button");

    previous.textContent = "← Previous";

    previous.disabled = currentPage === 1;

    if(currentPage === 1){
        previous.classList.add("disabledbutton");
    }

    previous.onclick = function(){

        if(currentPage > 1){

            currentPage--;

            displayProducts(currentPage);

            createPagination();
            document.querySelector(".filter-container").scrollIntoView({
                behavior: "smooth"
            });

        }

    };

    pagination.appendChild(previous);

    for(let i = 1; i <= totalPages; i++){

        const button = document.createElement("button");

        button.textContent = i;

        if(i === currentPage){

            button.classList.add("active-page");

        }

        button.onclick = function(){

            currentPage = i;

            displayProducts(currentPage);

            createPagination();
            document.querySelector(".filter-container").scrollIntoView({
                behavior: "smooth"
            });

        };

        pagination.appendChild(button);

    }

    const next = document.createElement("button");

    next.textContent = "Next →";

    next.disabled = currentPage === totalPages;

    if(currentPage === totalPages){
        next.classList.add("disabledbutton");
    }

    next.onclick = function(){

        if(currentPage < totalPages){

            currentPage++;

            displayProducts(currentPage);

            createPagination();
            document.querySelector(".filter-container").scrollIntoView({
                behavior: "smooth"
            });

        }

    };

    pagination.appendChild(next);

}
if(productsGrid && pagination){

    displayProducts(currentPage);

    createPagination();

}
/*=====================================
    PRODUCT FILTER
=====================================*/
const selects = document.querySelectorAll(".filter-container select");

selects.forEach(select => {

    function updateColor() 
    {
        if (select.value === "") {
            select.classList.add("filter-placeholder");
        }

        else
        {
            select.classList.remove("filter-placeholder");
            
        } 
    }

    updateColor();

    select.addEventListener("change", updateColor);

});

/*=====================================
        PRODUCT DETAILS
=====================================*/
const productContainer = document.getElementById("productContainer");
if(productContainer)
{
    const parameters = new URLSearchParams(window.location.search);
    const productId = Number(parameters.get("id"));
    const product = products.find(item => item.id === productId);
    console.log(productId);
    console.log(products);
    console.log(product);
    if(product)
    {
        productContainer.innerHTML = `
        <div class="product-details-grid">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='../images/products/default.jpg'">
                <div class="product-description">
                    <h3>
                    Description
                    </h3>
                    <p>
                        Fresh agricultural product supplied directly by trusted farmers through AgriLink Rwanda.
                    </p>
                </div>
            </div>
            <div class="product-description">
                <h1>
                    ${product.name}
                </h1>
                <p class="rating">
                    ⭐ ${product.rating}
                </p>
                <p class="price">
                    RWF ${product.price} / Kg
                </p>
                <p>
                    <strong>Available:</strong>
                    ${product.quantity}
                </p>
                <p>
                    <strong>Category:</strong>
                    ${product.category}
                </p>
                <p>
                    <strong>District:</strong>
                    ${product.district}
                </p>
                <div class="seller-card">
                    <img src="../images/profiles/seller.jpg" alt="${product.seller}" onerror="this.src='../images/profiles/Profile_avatar.png';">
                    <div class="seller-info">
                        <h3>
                            ${product.seller}
                        </h3>
                        <p>
                            ⭐ ${product.rating}
                        </p>
                        <a href="seller.html?id=${product.sellerId}">View Seller Profile</a>
                    </div>
                </div>
                <div class="delivery-card">
                    <h3> 🚚 Delivery Information </h3>
                    <p> &check; Delivery by AgriLink Rwanda </p>
                    <p> &check; Estimated delivery: 1 - 3 business days </p>
                    <p> &check; Delivery fee will be calculated at checkout 
                </div>
                <div class="quantity-box">
                    <button id="minusBtn">
                        −
                    </button>
                    <input type="number" id="quantity" value="1" min="1">
                    <button id="plusBtn">
                    +
                    </button>
                </div>
                <div class="action-buttons">
                    <button class="btn">
                        Add to Cart
                    </button>
                    <button class="btn buy-now">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
        `;
        /*================================
            QUANTITY CONTORLS
        =================================*/

        const quantityInput = document.getElementById("quantity");
        const minusBtn = document.getElementById("minusBtn");
        const plusBtn = document.getElementById("plusBtn");

        if(quantityInput && minusBtn && plusBtn)
        {
            minusBtn.addEventListener("click", function(){
                let value = parseInt(quantityInput.value);
                if(value > 1)
                {
                    quantityInput.value = value - 1;
                }
            });
            plusBtn.addEventListener("click", function(){
                let value = parseInt(quantityInput.value);
                quantityInput.value = value + 1;
            });
            quantityInput.addEventListener("input", function(){
                if(this.value === "")
                {
                    return;
                }
                if(parseInt(this.value) < 1)
                {
                    this.value = 1;
                }
            });
            quantityInput.addEventListener("blur", function(){
                if(this.value === "" || parseInt(this.value) < 1)
                {
                    this.value = 1;
                }
            });
            
        }
        /*=====================================
            SELLER PRODUCTS
        =====================================*/
        const sellerProducts = document.getElementById("sellerProducts");
        if(product && sellerProducts)
        {
            const sellerHeading = document.querySelector(".seller-products h2");
            sellerHeading.textContent = `More Products From ${product.seller}`;
            const sellerItems = products.filter(item => item.seller === product.seller && item.id !== product.id);
            sellerItems.forEach(item => {
                sellerProducts.innerHTML += `
                    <div class="product-card">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='../images/products/default.jpg'">
                        <div class="product-info">
                            <h3>${item.name}</h3>
                            <p class="price">
                                RWF ${item.price} / Kg
                            </p>
                            <a href="product.html?id=${item.id}" class="btn">
                                View Details
                            </a>
                        </div>
                    </div>
                `;
            });
            const sellerNext = document.getElementById("sellerNext");
            const sellerPrev = document.getElementById("sellerPrev");
            sellerNext.addEventListener("click", function(){
                const firstscard = sellerProducts.querySelector(".product-card");
                if(firstscard)
                {
                    const cardwidth = sellerProducts.querySelector(".product-card").offsetWidth + 100;
                    sellerProducts.scrollBy({
                        left:cardwidth,
                        behavior:"smooth"
                    });
                }
            });
            sellerPrev.addEventListener("click", function(){
                const firstscard = sellerProducts.querySelector(".product-card");
                if(firstscard)
                {
                    const cardwidth = sellerProducts.querySelector(".product-card").offsetWidth + 100;
                    sellerProducts.scrollBy({
                        left:-cardwidth,
                        behavior:"smooth"
                    });
                }
            });
        }
        /*=====================================
            RELATED PRODUCTS
        =====================================*/
        const relatedProducts = document.getElementById("relatedProducts");
        if(product && relatedProducts)
        {
            const relatedItems = products.filter(item => item.category === product.category && item.id !== product.id);
            relatedItems.forEach(item => {
                relatedProducts.innerHTML += `
                    <div class="product-card">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='../images/products/default.jpg'">
                        <div class="product-info">
                            <h3>${item.name}</h3>
                            <p class="price">
                                RWF ${item.price} / Kg
                            </p>
                            <a href="product.html?id=${item.id}" class="btn">
                                View Details
                            </a>
                        </div>
                    </div>
                `;
            });
            const relatedNext = document.getElementById("relatedNext");
            const relatedPrev = document.getElementById("relatedPrev");
            relatedNext.addEventListener("click", function(){
                const firstrcard = relatedProducts.querySelector(".product-card");
                if(firstrcard)
                {
                    const cardwidth = relatedProducts.querySelector(".product-card").offsetWidth + 100;
                    relatedProducts.scrollBy({
                        left:cardwidth,
                        behavior:"smooth"
                    });
                }
            });
            relatedPrev.addEventListener("click", function(){
                const firstrcard = relatedProducts.querySelector(".product-card");
                if(firstrcard)
                {
                    const cardwidth = relatedProducts.querySelector(".product-card").offsetWidth + 100;
                    relatedProducts.scrollBy({
                        left:-cardwidth,
                        behavior:"smooth"
                    });
                }
            });
            
        }
    }

}
/*==========================================
    SELLER INFORMATION
==========================================*/
const sellerName = document.getElementById("sellerName");
if(sellerName)
{
    const parameters = new URLSearchParams(window.location.search);
    const sellerId = Number(parameters.get("id"));
    const seller = sellers.find(item => item.id === sellerId);

    if(seller)
    {
        document.getElementById("sellerImage").src = seller.image;
        document.getElementById("sellerName").textContent = seller.name;
        document.getElementById("sellerRating").textContent = "⭐ " + seller.rating;
        document.getElementById("sellerLocation").textContent = "📍 " + seller.location;
        document.getElementById("sellerJoined").textContent = "📅 " + seller.joined;
        document.getElementById("sellerDescription").textContent = seller.description;
        if(seller && sellerProducts)
        {
            const items = products.filter(product => product.sellerId === seller.id);
            items.forEach(product =>{
                sellerProducts.innerHTML += `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='../images/products/default.jpg';">
                        <div class="product-info">
                            <h3>
                                ${product.name}
                            </h3>
                            <p class"price">
                                RWF ${product.price} / ${product.unit}
                            </p>
                            <a href="product.html?id=${product.id}" class="btn">
                                View Details
                            </a>
                        </div>
                    </div>
                `;
            });
            const sellerPageNext = document.getElementById("sellerPageNext");
            const sellerPagePrev = document.getElementById("sellerPagePrev");
            sellerPageNext.addEventListener("click", function(){
                const firstscard = sellerProducts.querySelector(".product-card");
                if(firstscard)
                {
                    const cardwidth = sellerProducts.querySelector(".product-card").offsetWidth + 100;
                    sellerProducts.scrollBy({
                        left:cardwidth,
                        behavior:"smooth"
                    });
                }
            });
            sellerPagePrev.addEventListener("click", function(){
                const firstscard = sellerProducts.querySelector(".product-card");
                if(firstscard)
                {
                    const cardwidth = sellerProducts.querySelector(".product-card").offsetWidth + 100;
                    sellerProducts.scrollBy({
                        left:-cardwidth,
                        behavior:"smooth"
                    });
                }
            });
        }
    }
}
/*==========================================
    REGISTRATION PAGE
==========================================*/
const currentPage1 = window.location.pathname.split("/").pop();
if(currentPage1 === "register-buyer.html" || currentPage1 === "register-seller.html"){
    const RegisterForm = document.getElementById("RegisterForm");
    if(RegisterForm){
        RegisterForm.addEventListener("submit", function(event){
            event.preventDefault();
            const password = document.getElementById("Password").value;
            const confirmPassword = document.getElementById("ConfirmPassword").value;
            const email = document.getElementById("email");
            const emailPattern = /^[\s@]+@[^\s]+\.[^\s@]+$/;
            const phone = document.getElementById("phone");
            if(!emailPattern.test(email)){
                alert("Please enter a valid email address.");
                return;
            }
            if(password.length < 8){
                alert("Password must contain at least 8 characters.");
                return;
            }
            
            if(password !== confirmPassword){
                alert("Passwords do not match.");
                return;
            }
            alert("Buyer account created successfully!");
            RegisterForm.reset();
        });
    }
    const location = {
        "Kigali":{
            "Gasabo":[
                "Bumbogo",
                "Gatsata",
                "Jabana",
                "Kacyiru",
                "Kimuhurura",
                "Kimironko",
                "Kinyinya",
                "Nduba",
                "Ndera",
                "Remera",
                "Rusororo",
                "Rutunga"
            ],
            "Kicukiro":[
                "Gahanga",
                "Gatenga",
                "Gikondo",
                "Kagarama",
                "Kanombe",
                "Kicukiro",
                "Kigarama",
                "Masaka",
                "Niboyi",
                "Nyarugunga"
            ],
            "Nyarugenge":[
                "Gitega",
                "Kanyinya",
                "Kigali",
                "Kimisagara",
                "Mageragere",
                "Muhima",
                "Nyakabanda",
                "Nyamirambo",
                "Nyarugenge",
                "Rwezamenyo"
            ],
        },
        "Northern Province":{
            "Burera":[],
            "Gakenke":[],
            "Gicumbi":[],
            "Musanze":[],
            "Rulindo":[]
        },
        "Southern Province":{
            "Gisagara":[],
            "Huye":[],
            "Kamonyi":[],
            "Muhanga":[],
            "Nyamagabe":[],
            "Nyanza":[],
            "Nyaruguru":[],
            "Ruhango":[]
        },
        "Eastern Province":{
            "Bugesera":[],
            "Gatsibo":[],
            "Kayonza":[],
            "Kirehe":[],
            "Ngoma":[],
            "Nyagatare":[],
            "Rwamagana":[]
        },
        "Western Province":{
            "Karongi":[],
            "Ngororero":[],
            "Nyabihu":[],
            "Nyamasheke":[],
            "Rubavu":[],
            "Rusizi":[],
            "Rutsiro":[]
        }
    }
};
