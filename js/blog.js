let current = 0;
let imagenes = new Array();
let data = null;
 
$(document).ready(function() {
    var numImages = 6;
    if (numImages <= 3) {
        $('.right-arrow').css('display', 'none');
        $('.left-arrow').css('display', 'none');
    }
 
    $('.left-arrow').on('click',function() {
        if (current > 0) {
            current = current - 1;
        } else {
            current = numImages - 3;
        }
 
        $(".carrusel").animate({"left": -($('#product_'+current).position().left)}, 500);
 
        return false;
    });
 
    $('.left-arrow').on('hover', function() {
        $(this).css('opacity','0.5');
    }, function() {
        $(this).css('opacity','1');
    });
 
    $('.right-arrow').on('hover', function() {
        $(this).css('opacity','0.5');
    }, function() {
        $(this).css('opacity','1');
    });
 
    $('.right-arrow').on('click', function() {
        if (numImages > current + 3) {
            current = current+1;
        } else {
            current = 0;
        }
 
        $(".carrusel").animate({"left": -($('#product_'+current).position().left)}, 600);
 
        return false;
    });
 });


 getImages();
 async function getImages() {
     const res = await fetch('https://dood-azell-giveaway-api.herokuapp.com/urbk-us-blog');        
     data = await res.json();
     for (let i = 0; i < data.length; i++) {         
         document.querySelector('.carrusel').insertAdjacentHTML(
             'afterbegin',
             `<div class="product" id="product_${i}">
             <img src="${data[i].url}"  class="noticia" onclick="noticia(${i})" />
                <div class="fecha">
                    ${data[i].showDate}
                </div>
             </div>`
           )
     }
     noticia(0);
 }
 function noticia(id) {    
    const contI = document.getElementById('contentImage');
     contI.src = data[id].url
     const title = document.getElementById('title');
     title.textContent  = data[id].tittle;
     const content = document.getElementById('content');
     content.textContent  = data[id].desc;
     const fecha = document.getElementById('fecha');
     fecha.textContent  = data[id].showDate;
 }