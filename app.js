document.addEventListener('DOMContentLoaded', function () {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        const carouselInner = document.getElementById('carouselInner');
        const carouselIndicators = document.getElementById('carouselIndicators');
  
        data.forEach((product, index) => {
          const slide = document.createElement('div');
          slide.className = 'carousel-item' + (index === 0 ? ' active' : '');
  
          const img = document.createElement('img');
          img.src = product.image;
          img.className = 'd-block w-100';
          img.style.maxHeight = '500px'; 
          img.style.maxWidth = '500px'; 

          const caption = document.createElement('div');
          caption.className = 'carousel-caption d-none d-md-block';
          caption.innerHTML = `
            <h5>${product.title}</h5>
            <p>${product.description}</p>
          `;
  
          slide.appendChild(img);
          slide.appendChild(caption);
          carouselInner.appendChild(slide);
  
          const indicator = document.createElement('button');
          indicator.type = 'button';
          indicator.setAttribute('data-mdb-target', '#carouselBasicExample');
          indicator.setAttribute('data-mdb-slide-to', index.toString());
          indicator.setAttribute('aria-label', `Slide ${index + 1}`);
          indicator.className = index === 0 ? 'active' : '';
          carouselIndicators.appendChild(indicator);
        });
      })
      .catch(error => console.error('Error:', error));
  });
