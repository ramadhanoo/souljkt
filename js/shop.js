const products = [
  {
    name: "Soul Limited Terracotta Sleeveless",
    image: "img/product/product-1.jpg",
    imagesList: [
      "img/product/product-1.jpg",
      "img/product/p-1-detail-1.jpg",
      "img/product/p-1-detail-2.jpg",
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
    name: "Soul Limited V-Neck Long Sleeve Green",
    image: "img/product/product-2.jpg",
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
    name: "Soul Limited V-Neck Long Sleeve Navy",
    image: "img/product/product-3.jpg",
    imagesList: [
      "img/product/product-3.jpg",
      "img/product/p-3-detail-1.jpg",
      "img/product/p-3-detail-2.jpg",
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
    name: "Soul Limited V-Neck Long Sleeve BW",
    image: "img/product/product-4.jpg",
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
    name: "Soul Limited Black Oversized Long Sleeve Shirt",
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
    name: "Soul Limited White Outer",
    image: "img/product/product-6.jpg",
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
                            <span class="label">Limited</span>
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
