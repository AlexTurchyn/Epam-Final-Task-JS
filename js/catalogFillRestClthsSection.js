var products = [
    {
        id: 0,
        name: "Boyfriend T-Shirt with Bohemian Print",
        cost: 34.25,
        img: "../img/products/ClourBlock.png"
    },
    {
        id: 1,
        name: "Turtle Neck Jumper in Rib",
        cost: 55.21,
        img: "../img/products/Turtle.png"
    },
    {
        id: 2,
        name: "Only Skinny Jeans",
        cost: 65.50,
        img: "../img/products/SkinnyJeans.png"
    },
    {
        id: 3,
        name: "Boyfriend T-Shirt with Bohemian Print",
        cost: 86.75,
        img: "../img/products/BoyTShirtBohemianPrint.png"
    },
    {
        id: 4,
        name: "With Patchwork Crochet",
        cost: 80.60,
        img: "../img/products/PatchCrochet.png"
    },
    {
        id: 5,
        name: "Monki Festival Kinitted",
        cost: 24.75,
        img: "../img/products/MonkiFestivalKinitted.png"
    },
    {
        id: 6,
        name: "Only Busted Knee Jean",
        cost: 140.50,
        img: "../img/products/Turtle.png"
    },
    {
        id: 7,
        name: "Paul & Joe Sister Jumper with Neon Trims",
        cost: 19.75,
        img: "../img/products/Paul.png"
    },
    {
        id: 8,
        name: "Oversized Cardigan",
        cost: 90.00,
        img: "../img/products/OversizedCardigan.png"
    },
    {
        id: 9,
        name: "Neck Knitted Jumper",
        cost: 76.25,
        img: "../img/products/Turtle.png"
    },
    {
        id: 10,
        name: "levi's Jeans for women",
        cost: 76.25,
        img: "../img/products/LevisBuyersChoice.png"
    },
    {
        id: 11,
        name: "Boyfriend T-Shirt with Bohemian Print",
        cost: 34.25,
        img: "../img/products/BoyTShirtBohemianPrint.png"
    },
    {
        id: 12,
        name: "Turtle Neck Jumper in Rib",
        cost: 55.21,
        img: "../img/products/Turtle.png"
    },
    {
        id: 13,
        name: "Only Skinny Jeans",
        cost: 65.50,
        img: "../img/products/SkinnyJeans.png"
    },
    {
        id: 14,
        name: "Boyfriend T-Shirt with Bohemian Print",
        cost: 86.75,
        img: "../img/products/BoyTShirtBohemianPrint.png"
    }
];

function renderProduct(props) {

    let product = document.createElement("div");
    product.id = props.id;
    product.classList.add("ProductCell");
    product.innerHTML = `
        <div id="ProductCell-Img">
            <img src=${props.img} alt="" class="HomepagePhoto">
            <div class="ProductCell-ImgWrapper"><a href="../item.html" class="_a">View Item</a></div>
        </div>
        <div class="ProductCell-Def">
            <p class="ProductCell-Name">${props.name}</p>
            <p style="text-align: center">&pound;${props.cost.toFixed(2)}</p>
        </div>
    `
    return product;
}

let catalog = document.getElementById("catalog");
var n = catalog.getAttribute("data-countImg");counter = 0;
while(counter < n) {
    let prod = renderProduct(products[counter]);
    catalog.appendChild(prod);
    counter++;
}

let infSection = document.createElement("div");
    infSection.classList.add("Catalog-InformationOnPage");
    infSection.innerHTML = `
    <p class="InformationOnPage-Upper">Last weekend <span style="color:#f14a58; letter-spacing: 0.72px;"> extra 50% </span>
        off on all reduced boots and shoulder bags</p>
    <p class="InformationOnPage-Lower">This offer is valid in-store and online. Prices displayd reflect this additional discount. 
        This offer ends at 1159 GMT on March 1st 2015</p>`

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
alert(x + ' × ' + y);




if(x < 768) {
    catalog.insertBefore(infSection, catalog.children[2])
}
if(x >= 768 && x < 1024) {
    catalog.insertBefore(infSection, catalog.children[3])
}
if(x >= 1024) {
    catalog.insertBefore(infSection, catalog.children[4])
}




// 
// n = 14;
// counter = 2;
// while(counter <= n) {
//     let prod = renderProduct(products[counter]);
    
//     console.log(prod);
//     if(counter==2&&counter==3) {prod.classList.add("w375-reverse");}
//     if(counter == 2) {prod.classList.add("w768");}
//     if(counter == 1) {prod.classList.add("w1024");}
//     catalog.appendChild(prod);
//     counter++;
// }
