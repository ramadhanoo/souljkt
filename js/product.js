const products = [
  {
    name: "Soul Limited Terracotta",
    image: "img/product/product-1.jpg",
    imagesList: ["img/product/product-1.jpg", "img/product/p-1-detail-1.jpg", "img/product/p-1-detail-2.jpg"],
    type: "hot-sales",
    price: 259,
    oldPrice: 319,
    rating: 0,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Soul Limited V-Neck Green",
    image: "img/product/product-2.jpg",
    imagesList: ["img/product/product-2.jpg", "img/product/p-2-detail-1.jpg", "img/product/p-2-detail-2.jpg"],
    type: "new-arrivals",
    price: 329,
    oldPrice: 389,
    rating: 4,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Soul Limited V-Neck Navy",
    image: "img/product/product-3.jpg",
    imagesList: ["img/product/product-3.jpg", "img/product/p-3-detail-1.jpg", "img/product/p-3-detail-2.jpg"],
    type: "new-arrivals",
    price: 329,
    oldPrice: 389,
    rating: 4,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Soul Limited V-Neck BW",
    image: "img/product/product-4.jpg",
    imagesList: ["img/product/product-4.jpg", "img/product/p-4-detail-1.jpg", "img/product/p-4-detail-2.jpg"],
    type: "new-sales",
    price: 329,
    oldPrice: 389,
    rating: 4,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Soul Limited Outer",
    image: "img/product/product-5.jpg",
    imagesList: ["img/product/product-5.jpg", "img/product/p-5-detail-1.jpg", "img/product/p-5-detail-2.jpg"],
    type: "new-arrivals",
    price: 299,
    oldPrice: 359,
    rating: 4,
    colors: ["default", "black", "grey"],
  },
  {
    name: "Soul Limited Oversized",
    image: "img/product/product-6.jpg",
    imagesList: ["img/product/product-6.jpg", "img/product/p-6-detail-1.jpg", "img/product/p-6-detail-2.jpg"],
    type: "new-sales",
    price: 299,
    oldPrice: 359,
    rating: 4,
    colors: ["default", "black", "grey"],
  },
];

// Fungsi untuk render produk
function renderProducts(products) {
  const container = document.getElementById("product-container");

  let html = "";
  products.forEach((product, index) => {
    html += `
                <div class="col-lg-3 col-md-6 col-sm-6 mix ${product.type}">
                    <div class="product__item sale">
                        <div class="product__item__pic set-bg" style="background-image: url(${product.image});">
                            <span class="label">Sale</span>
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
                                <i class="fa fa-star-o"></i>
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
  sessionStorage.setItem('productDetail', JSON.stringify(product));
  window.location.href = 'shop-details.html';
}

function directTerracota(event) {
  event.preventDefault();
  const phone = "6281296181928";
  const message = `Halo item Soul Limited Terracotta ready?`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Buka di tab baru seperti target="_blank"
  window.open(url, "_blank");
}

function directTerracotaOuter(event) {
  event.preventDefault();
  const phone = "6281296181928";
  const message = `Halo item Soul Limited Terracotta + Outter putih ready?`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Buka di tab baru seperti target="_blank"
  window.open(url, "_blank");
}

function directaOuterHitam(event) {
  event.preventDefault();
  const phone = "6281296181928";
  const message = `Halo item Soul Limited Outter hitam?`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Buka di tab baru seperti target="_blank"
  window.open(url, "_blank");
}

function directOuterPutih(event) {
  event.preventDefault();
  const phone = "6281296181928";
  const message = `Halo item Soul Limited Outter putih?`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Buka di tab baru seperti target="_blank"
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => renderProducts(products));
