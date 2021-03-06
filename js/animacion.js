"use strict"
/**=========================================
 * EVENTO PARA MENU RESPONSIVE
 * ========================================= */
let contador = 1;
document.addEventListener('DOMContentLoaded',function(){
    $('.menu').click(function(){
		if (contador == 1){
			$('.nav-principal').animate({
				left: '0'
			});
            
            contador = 0;
		} else {
			contador = 1;
			$('.nav-principal').animate({
				left: '-100%'
			});
		};
    });
})

/**ANIMACIÓN ENLACE */
/*========= EVENTO PARA ABRIR VENTANA EMERGENTE ==========*/
$(".card__enlace").click(function(){
    $("#idPopup").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup").css("display","none");
})

$(".card__enlace1").click(function(){
    $("#idPopup1").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup1").css("display","none");
})

$(".card__enlace2").click(function(){
    $("#idPopup2").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup2").css("display","none");
})
$(".card__enlace3").click(function(){
    $("#idPopup3").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup3").css("display","none");
})

$(".card__enlace4").click(function(){
    $("#idPopup4").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup4").css("display","none");
})

$(".card__enlace5").click(function(){
    $("#idPopup5").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup5").css("display","none");
})

$(".card__enlace6").click(function(){
    $("#idPopup6").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup6").css("display","none");
})

$(".card__enlace7").click(function(){
    $("#idPopup7").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup7").css("display","none");
})

$(".card__enlace8").click(function(){
    $("#idPopup8").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup8").css("display","none");
})

$(".card__enlace9").click(function(){
    $("#idPopup9").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup9").css("display","none");
})

$(".card__enlace10").click(function(){
    $("#idPopup10").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup10").css("display","none");
})

$(".card__enlace11").click(function(){
    $("#idPopup11").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup11").css("display","none");
})

$(".card__enlace12").click(function(){
    $("#idPopup12").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup12").css("display","none");
})

$(".card__enlace13").click(function(){
    $("#idPopup13").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup13").css("display","none");
})

$(".card__enlace14").click(function(){
    $("#idPopup14").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup14").css("display","none");
})

$(".card__enlace15").click(function(){
    $("#idPopup15").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup15").css("display","none");
})

$(".card__enlace16").click(function(){
    $("#idPopup16").css("display","block");
})
$(".cerrar").click(function(){
    $("#idPopup16").css("display","none");
})

/**============================================
 * EVENTO DE IMAGENES EN PÁGINA NOSOTROS 
 * ============================================*/
let animacion = document.querySelectorAll('.imagen');

window.addEventListener('scroll',function(){
    let sTop = document.documentElement.scrollTop;//El scrollTop es la cantidad de scroll a medida que uno baja
    for (let i = 0; i < animacion.length; i++) {
        let altura = animacion[i].offsetTop; //detección de altura desde la altura de la venta hasta donde esta el elemento
        if(altura - 600 < sTop){
            animacion[i].style.animation = 'mover .7s ease-out';
            animacion[i].style.opacity = 1;
        }
    }
});

/**============================================
 * EVENTO DE TEXTO EN PÁGINA NOSOTROS 
 * ============================================*/
let animado = document.querySelectorAll(".animacion");

window.addEventListener('scroll', function(){
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
            animado[i].style.opacity = 2;
            // animado[i].classList.add('mostrarArriba');
        }
    }
});

/**=============================================
* EVENTO A SLIDER EN EL INDEX
* =============================================*/
var item=["./img/Cilube/cilube1.jpg","./img/Cilube/cilube2.jpg","./img/Cilube/cilube3.jpg","./img/Cilube/cilube4.jpg",
            "./img/Cilube/cilube5.jpg","/img/Cilube/cilube6.jpg","./img/Cilube/cilube7.jpg",
            "./img/Cilube/cilube8.jpg", "./img/Cilube/cilube9.jpg","./img/Cilube/cilube10.jpg"];
var i=0;
function slider(){
   $("#idIMG").attr("src", item[i]);
   i++;
   if(i>=item.length)
    i=0;
    setTimeout(slider,3000);
}
slider();

/**==============================================
 * EVENTO PARA CARD DE PRODUCTOS
 * ==============================================*/
var card = document.getElementsByClassName('card-producto');
for(var i = 0 ; i < card.length ; i++){
    card[i].onmouseover=function(){
        this.style="box-shadow:var(--grisformulario) 1px 2px 21px";
    }
    card[i].onmouseout=function(){
        this.style="box-shadow: none"; 
    }
}

/*=================================================
EVENTO PARA ICONOS
===================================================*/
var iconos = document.getElementsByClassName('icon-tabler');
for(var i = 0 ; i < iconos.length ; i++){
    iconos[i].onmouseover=function(){
        this.style='transform:scale(1.2)';
    }
    iconos[i].onmouseout=function(){
        this.style='transform:scale(1)'; 
    }
}


/*=================================================
NOMBRE DE EMPRESA
===================================================*/

let escritura = str =>{
    let arrayStr = str.split('');
    let i = 0;
    let printStr = setInterval(function () {
       let texto = document.getElementById('nombreEmpresa');
       if(arrayStr[i] === ''){
           texto.innerHTML += arrayStr[i];
           texto.innerHTML += arrayStr[i + 1];
           i +=2;
       }else{
           texto.innerHTML += arrayStr[i];
           i++
       }
       if(i=== arrayStr.length){
           clearInterval(printStr);
       }
   },250);
}
escritura('L.A.V Inversiones');


