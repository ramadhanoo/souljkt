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
  ];
  
  // Fungsi untuk render produk
  function renderProducts(products) {
    const container = document.getElementById("product-shop");
  
    let html = "";
    products.forEach((product, index) => {
      html += `
                <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
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
                              <h5>IDR <s>${product.price}k</s> ${product.price}k</h5>
                   
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

  function renderImages() {
    const product = JSON.parse(sessionStorage.getItem('productDetail'));
    const tabContent = document.querySelector(".tab-content");
    tabContent.innerHTML = ""; 
    const imageTabs = document.getElementById("image-tabs");
    product.imagesList.forEach((img, index) => {
      const li = document.createElement("li");
      li.className = "nav-item";
  
      const a = document.createElement("a");
      a.className = "nav-link" + (index === 0 ? " active" : "");
      a.setAttribute("data-toggle", "tab");
      a.setAttribute("href", `#tabs-${index + 1}`);
      a.setAttribute("role", "tab");
  
      const div = document.createElement("div");
      div.className = "product__thumb_detail";
      div.style.backgroundImage = `url(${img})`;

      a.appendChild(div);
      li.appendChild(a);
      imageTabs.appendChild(li);
    });

    product.imagesList.forEach((img, index) => {
        const tabId = `tabs-${index + 1}`;
        const isActive = index === 0 ? "active" : "";
      
        const tabPane = document.createElement("div");
        tabPane.className = `tab-pane ${isActive}`;
        tabPane.id = tabId;
        tabPane.setAttribute("role", "tabpanel");
      
        const picItem = document.createElement("div");
        picItem.className = "product__details__pic__item";
      
        const imgTag = document.createElement("img");
        imgTag.src = img;
        imgTag.alt = "";
      
        picItem.appendChild(imgTag);
      
        // Tambahkan play button hanya di gambar terakhir (opsional)
      
        tabPane.appendChild(picItem);
        tabContent.appendChild(tabPane);
      });
}
  
  function goToDetail(event, index) {
      event.preventDefault();
      const product = products[index];
      sessionStorage.setItem('productDetail', JSON.stringify(product));
      window.location.href = 'shop-details.html';
    }

      
  function directWa(event) {
    event.preventDefault();
    const product = JSON.parse(sessionStorage.getItem('productDetail'));
    const phone = "6281296181928";
    const message = `Halo item ${product.name} ready?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Buka di tab baru seperti target="_blank"
    window.open(url, "_blank");
  }
  
document.addEventListener("DOMContentLoaded", () => renderProducts(products));
document.addEventListener("DOMContentLoaded", () => renderImages());
