const productmain=document.querySelector(".product-main");
const productprofile=document.querySelector(".product-profile");
const imge=document.querySelector(".product-imge");
const buy=document.querySelector(".product-buy-cart");
const imgbuy=document.querySelector(".product-buy-imge");
const imgbuy1=document.querySelector(".product-buy-imge1");
const imgbuy2=document.querySelector(".product-buy-imge2");
const imgbuy3=document.querySelector(".product-buy-imge3");
const text=document.querySelector(".product-text");
const price=document.querySelector(".product-buy-price");
const textbuy=document.querySelector(".product-buy-text1");
const afterimg=document.querySelector(".product-after-img");
const after=document.querySelector(".product-after");
const exitweb=document.querySelector(".head-program-logoexit");

var listcandy =JSON.parse(localStorage.getItem('listProduct'));

function add(){
    imge.src=imgbuy.src;
    price.innerHTML="_________________";
    text.innerHTML="Candy of the same type";
    textbuy.innerHTML=listcandy[0].text;
}
function add1(){
    imge.src=imgbuy1.src;
    price.innerHTML="_________________";
    text.innerHTML="Candy of the same type";
    textbuy.innerHTML=listcandy[1].text;
}
function add2(){
    imge.src=imgbuy2.src;
    price.innerHTML="_________________";
    text.innerHTML="Candy of the same type";
    textbuy.innerHTML=listcandy[2].text;
}
function add3(){
    imge.src=imgbuy3.src;
    price.innerHTML="_________________";
    text.innerHTML="Candy of the same type";
    textbuy.innerHTML=listcandy[3].text;
}


function focusProduct(e){
    productmain.classList.add("close");
    productprofile.classList.remove("close");
    parentBtn = e.parentElement;
    var a = parentBtn.querySelector(".imageProduct img").src;
    var b = parentBtn.querySelector(".InformProduct .name").innerText;
    var c = parentBtn.querySelector(".InformProduct .price").innerText;
    imge.src=a;
    text.innerHTML=b;
    price.innerHTML=c;

    var list1=[ imgbuy, imgbuy1, imgbuy2, imgbuy3];
    var list2=new Array();
    var d,e;
    var t=0;
    for(var i=0;i<listcandy.length;i++){ 
        if(listcandy[i].name==b)
        {
           d=listcandy[i].type;
        }
       }
          
     for(var i=0;i<listcandy.length;i++){ 
        if(listcandy[i].type==d)
        {
        list2[t]=listcandy[i].image;
        t++;
        }
        else{
            list2[i]=0;
        }
        
        }
    for(var i=0;i<list1.length;i++){
       if(list2[i]!=undefined)
        list1[i].src=list2[i];
    }
    var j=0;
    for(var i=0;i<listcandy.length;i++){ 
        if(listcandy[i].name==b)
           if(i+8<listcandy.length){
            j=i;
           }
           else
           {
            j=i-8;

           }
    }
    console.log(j);
            for(var i = j; i < j+8 ; i++){
                var tag=document.createElement("div");
                tag.classList.add("product-sp");
                tag.innerHTML=`<div> 
                                    <div class="productsp" onclick=" page_scroll2top(this)" >
                                    <img class="product-sp-img" src=${listcandy[i+1].image}>
                                    </div>
                                    <div class="product-sp-text">
                                    <h4 class="name-sp">${listcandy[i+1].name}</h4>
                                    <span class="price-sp">${listcandy[i+1].price}$</span>
                                    </div>
                                    <div class="btn1" onclick="addcart()">
                                    <button class="btn-icon1">
                                        <ti class="ti-shopping-cart-full"></ti>
                                    </button>
                                    <div class="mess-btn">
                                        <span>Thêm vào giỏ</span>
                                    </div>
                                    
                                
                                </div>`
                document.getElementById("parentItem1").append(tag);
    
}  
// xoa phan tu trong parentItem1

    exitweb.addEventListener("click",()=>{
    productmain.classList.remove("close");
    productprofile.classList.add("close");
    var cha=document.getElementById("parentItem1");
        if(cha.hasChildNodes()){
            while (cha.childNodes.length>=1) {
                cha.removeChild(cha.firstChild);
                
            }
        }
    })
    buy.addEventListener("click",()=>{

        

        
    })

//set open img in product
imge.addEventListener("click",()=>{
    after.classList.remove("close");
    imge.classList.add("close");
    var afterimge = document.querySelector(".product-imge").src;
    afterimg.src=afterimge;  
})
after.addEventListener("click",()=>{
    after.classList.add("close");
    imge.classList.remove("close");
})
}
//quay lai dau trang thay doi trinh chi

function page_scroll2top(z){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        parentBtn1 = z.parentElement;
        var a1 = parentBtn1.querySelector(".productsp img").src;
        var b1 = parentBtn1.querySelector(".product-sp-text .name-sp").innerText;
        var c1 = parentBtn1.querySelector(".product-sp-text .price-sp").innerText;
        imge.src=a1;
        text.innerHTML=b1;
        price.innerHTML=c1;
        for(var i=0;i<listcandy.length;i++)
        {
            if(listcandy[i].name==b1)
            {
            
                textbuy.innerHTML=listcandy[i].text;
            }
        }
        
        
   }

   function addcart(){
    var imges = imge.src;
    var names = text.innerText;
    var prices =price.innerText;
    addProduct(imges, names, prices,1);

}
  