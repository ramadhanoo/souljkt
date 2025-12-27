const products = [
  {
    name: "Striped Shirt",
    image: "img/product/product-14.jpg",
    dsc: "NEW",
    imagesList: [
      "img/product/product-14.jpg",
      "img/product/p-14-detail-1.jpg",
      "img/product/p-14-detail-2.jpg",
    ],
    type: "hot-sales",
    oldPrice: 719,
    price: 349,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 110 Length 62</p><p>Fabric: Cotton</p>",
    rating: 0,
    colors: ["default", "Espresso", "Broken White"],
  },
  {
    name: "Beige Ribbon",
    image: "img/product/product-15.jpg",
    dsc: "NEW",
    imagesList: [
      "img/product/product-15.jpg",
      "img/product/p-15-detail-1.jpg",
      "img/product/p-15-detail-2.jpg",
      "img/product/p-15-detail-3.jpg",
    ],
    type: "hot-sales",
    oldPrice: 719,
    price: 349,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 110 Length 62</p><p>Fabric: Cotton</p>",
    rating: 0,
    colors: ["default", "Espresso", "Broken White"],
  },
  {
    name: "Linen Pants (Espresso, Broken White, Black)",
    image: "img/product/p-13-detail-1.jpg",
    dsc: "NEW",
    imagesList: [
      "img/product/p-13-detail-1.jpg",
      "img/product/p-12-detail-1.jpg",
      "img/product/p-13-detail-2.jpg",
      "img/product/p-13-detail-3.jpg",
      "img/product/p-13-detail-4.jpg",
      "img/product/p-13-detail-5.jpg",
      "img/product/p-13-detail-6.jpg",
      "img/product/p-13-detail-7.jpg",
      "img/product/p-13-detail-8.jpg",
      "img/product/p-13-detail-9.jpg",
      "img/product/p-13-detail-10.jpg",
    ],
    type: "hot-sales",
    oldPrice: 719,
    price: 659,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 110 Length 62</p><p>Fabric: Cotton</p>",
    rating: 0,
    colors: ["default", "Espresso", "Broken White"],
  },
  {
    name: "Linen Shirt",
    image: "img/product/product-12.jpg",
    dsc: "NEW",
    imagesList: ["img/product/product-12.jpg", "img/product/p-12-detail-1.jpg"],
    type: "hot-sales",
    oldPrice: 612,
    price: 549,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 110 Length 62</p><p>Fabric: Cotton</p>",
    rating: 0,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Linen Dress",
    image: "img/product/product-11.jpg",
    dsc: "NEW",
    imagesList: [
      "img/product/product-11.jpg",
      "img/product/p-11-detail-1.jpg",
      "img/product/p-11-detail-2.jpg",
      "img/product/p-11-detail-3.jpg",
    ],
    type: "hot-sales",
    oldPrice: 612,
    price: 549,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 110 Length 62</p><p>Fabric: Cotton</p>",
    rating: 0,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Linen Leaf & Floral",
    image: "img/product/product-10.jpg",
    dsc: "NEW",
    imagesList: [
      "img/product/product-10.jpg",
      "img/product/p-10-detail-1.jpg",
      "img/product/p-10-detail-2.jpg",
      "img/product/p-10-detail-3.jpg",
    ],
    type: "hot-sales",
    oldPrice: 512,
    price: 499,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 110 Length 62</p><p>Fabric: Cotton</p>",
    rating: 0,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Linen Rubber",
    image: "img/product/product-9.jpg",
    dsc: "NEW",
    imagesList: [
      "img/product/product-9.jpg",
      "img/product/p-9-detail-1.jpg",
      "img/product/p-9-detail-2.jpg",
      "img/product/p-9-detail-3.jpg",
    ],
    type: "hot-sales",
    oldPrice: 527,
    price: 449,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 110 Length 62</p><p>Fabric: Cotton</p>",
    rating: 0,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Linen Vest",
    image: "img/product/product-8.jpg",
    dsc: "NEW",
    imagesList: [
      "img/product/product-8.jpg",
      "img/product/p-8-detail-1.jpg",
      "img/product/p-8-detail-2.jpg",
      "img/product/p-8-detail-3.jpg",
    ],
    type: "hot-sales",
    oldPrice: 527,
    price: 449,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 110 Length 62</p><p>Fabric: Cotton</p>",
    rating: 0,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Linen Ribbon",
    image: "img/product/product-7.jpg",
    dsc: "NEW",
    imagesList: [
      "img/product/product-7.jpg",
      "img/product/p-7-detail-1.jpg",
      "img/product/p-7-detail-2.jpg",
      "img/product/p-7-detail-3.jpg",
    ],
    type: "hot-sales",
    oldPrice: 514,
    price: 499,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 110 Length 62</p><p>Fabric: Cotton</p>",
    rating: 0,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Terracotta Sleeveless",
    image: "img/product/product-1.jpg",
    dsc: "SOLD OUT",
    imagesList: [
      "img/product/product-1.jpg",
      "img/product/p-1-detail-1.jpg",
      "img/product/p-1-detail-2.jpg",
      "img/product/p-1-detail-3jpg",
    ],
    type: "hot-sales",
    oldPrice: 319,
    price: 259,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 110 Length 62</p><p>Fabric: Cotton</p>",
    rating: 0,
    colors: ["default", "black", "grey"],
  },
  {
    name: "V-Neck Long Sleeve Green",
    image: "img/product/product-2.jpg",
    dsc: "SOLD OUT",
    imagesList: [
      "img/product/product-2.jpg",
      "img/product/p-2-detail-1.jpg",
      "img/product/p-2-detail-2.jpg",
    ],
    type: "new-arrivals",
    price: 329,
    oldPrice: 389,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 112 Length 68</p><p>Fabric: Linen</p>",
    rating: 4,
    colors: ["default", "black", "grey"],
  },
  {
    name: "V-Neck Long Sleeve Navy",
    image: "img/product/product-3.jpg",
    imagesList: [
      "img/product/product-3.jpg",
      "img/product/p-3-detail-1.jpg",
      "img/product/p-3-detail-2.jpg",
    ],
    type: "new-arrivals",
    dsc: "SOLD OUT",
    price: 329,
    oldPrice: 389,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 112 Length 68</p><p>Fabric: Linen</p>",
    rating: 4,
    colors: ["default", "black", "grey"],
  },
  {
    name: "V-Neck Long Sleeve BW",
    image: "img/product/product-4.jpg",
    dsc: "SOLD OUT",
    imagesList: [
      "img/product/product-4.jpg",
      "img/product/p-4-detail-1.jpg",
      "img/product/p-4-detail-2.jpg",
    ],
    type: "new-sales",
    price: 329,
    oldPrice: 389,
    deskripsi:
      "<p>Fit to XL</p> <p>Size: Bust 106 Length 62</p><p>Fabric: Linen</p>",
    rating: 4,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Black Oversized Long Sleeve Shirt",
    dsc: "SOLD OUT",
    image: "img/product/product-5.jpg",
    imagesList: [
      "img/product/product-5.jpg",
      "img/product/p-5-detail-1.jpg",
      "img/product/p-5-detail-2.jpg",
    ],
    type: "new-arrivals",
    deskripsi:
      "<p>Fit to XXL</p> <p>Size: Bust 120 Length 75</p><p>Fabric: Linen</p>",
    oldPrice: 359,
    price: 299,
    rating: 4,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Linen Outer",
    image: "img/product/product-6.jpg",
    dsc: "SOLD OUT",
    imagesList: [
      "img/product/product-6.jpg",
      "img/product/p-6-detail-1.jpg",
      "img/product/p-6-detail-2.jpg",
    ],
    type: "new-sales",
    oldPrice: 419,
    price: 349,
    deskripsi:
      "<p>Fit to XXL</p> <p>Size: Bust 120 Length 75</p><p>Fabric: Linen</p>",
    rating: 4,
    colors: ["default", "black", "grey"],
  },
];

// Fungsi untuk render produk
function renderProducts(products) {
  const container = document.getElementById("product-shop");

  let html = "";
  products.forEach((product, index) => {
    html += `
<div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product__item sale">
<div class="product__item__pic set-bg" style="background-image: url(${product.image});">
                            <span class="label">${product.dsc}</span>
                                    <ul class="product__hover">
                                        <li><a href="#" onClick="goToDetail(event, ${index})"><img src="img/icon/compare.png" alt=""> <span>Detail</span></a>
                                    </ul>
                                </div>
                                <div class="product__item__text">
            <h6>${product.name}</h6>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
            <h5>IDR <s>${product.oldPrice}k</s> ${product.price}k</h5>
                                </div>
                            </div>
                        </div>
  
        `;
  });

  container.innerHTML = html;

  // Jika kamu pakai set-bg dengan JS, bisa aktifkan kembali ini (jika ada implementasinya)
  // $('.set-bg').each(function () {
  //   var bg = $(this).data('setbg');
  //   $(this).css('background-image', 'url(' + bg + ')');
  // });
}

function goToDetail(event, index) {
  event.preventDefault();
  const product = products[index];
  sessionStorage.setItem("productDetail", JSON.stringify(product));
  window.location.href = "shop-details.html";
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
