"use strict"
/**============= EVENTO MENÚ ============== */
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


/**=============================================
* EVENTO A SLIDER EN EL INDEX
* =============================================*/
var item=["./img/Cilube/cilube1.jpg","./img/Cilube/cilube2.jpg","./img/Cilube/cilube3.jpg","./img/Cilube/cilube4.jpg",
            "./img/Cilube/cilube5.jpg","/img/Cilube/cilube6.jpg","./img/Cilube/cilube7.jpg",
            "./img/Cilube/cilube8.jpg", "./img/Cilube/cilube9.jpg","./img/Cilube/cilube10.jpg"];
var i=0;
function slider1(){
   $("#idIMG").attr("src", item[i]);
   i++;
   if(i>=item.length)i=0;
   estado=setTimeout(slider1,3000);
}
slider1();

//ASIGNADO EVENTO A CIRCULOS
// $(".bolita").click(function(){
//     //Obtiene valor de enlace donde se ejecuta el click
//     var num;
//     num=$(this).text();
//     //Muestra imagen segun número
//     $("#idIMG").attr("src",item[num-1]);
// })

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

/**ANIMACIÓN CONTÁCTENOS*/ 
// setInterval (BlinkIt, 800);
//     var color = "white";
//     function BlinkIt () {
//         var blink = document.getElementById ("idContactenos");
//         color = (color == "var(--grisclaro)")? "var(--azul)" : "var(--grisclaro)";
//         blink.style.color = color;
//         blink.style.fontFamily= 'Newsreader', 'serif';
//     }

/**ANIMACIÓN NOSOTROS */


/**ANIMACIÓN PRODUCTOS*/
var card = document.getElementsByClassName('card-producto');
for(var i = 0 ; i < card.length ; i++){
    card[i].onmouseover=function(){
        this.style="box-shadow:var(--grisformulario) 1px 2px 21px";
    }
    card[i].onmouseout=function(){
        this.style="box-shadow: none"; 
    }
}

/*ANIMACIÓN DE ICONOS*/
var iconos = document.getElementsByClassName('icon-tabler');
for(var i = 0 ; i < iconos.length ; i++){
    iconos[i].onmouseover=function(){
        this.style='transform:scale(1.2)';
    }
    iconos[i].onmouseout=function(){
        this.style='transform:scale(1)'; 
    }
}

/**=============================================
* EVENTO FEHA Y HORA
n =  new Date();
y = n.getFullYear();
p = n.getMonth()+1;
d = n.getDate();
h = n.getHours();
m = n.getMinutes();
var tiempo="Hrs.";
var mes=(p<10)?'0'+p:p;
var minuto=(m<10)?'0'+m:m;
var hora=(h<10)?'0'+h:h;
document.getElementById("fechaHora").innerText = "Fecha de ingreso : "+d+"/"+mes+"/"+y+"\nHora de ingreso : "+hora+":"+minuto+" "+tiempo;
* =============================================*/
