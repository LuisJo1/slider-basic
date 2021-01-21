
// contexto global de como esta implementado
let sliderIndex = 0;

function showSlide(index) {
    let slides = document.querySelectorAll('.slide');
    

    if (index >= slides.length) {
      sliderIndex = 0;
    }

    if (index < 0) {
      sliderIndex = slides.length -1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      
    }

    slides[sliderIndex].style.display = 'block';
    

}

showSlide(sliderIndex)





// logica de los botones

document.querySelector('#arrow-prev').addEventListener('click', ()=> {
  showSlide(--sliderIndex)
})

document.querySelector('#arrow-next').addEventListener('click', ()=> {
  showSlide(++sliderIndex)
})

