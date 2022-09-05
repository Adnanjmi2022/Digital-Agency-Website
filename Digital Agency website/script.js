
    const menuClose = document.querySelectorAll(".toggler")
    const navlink = document.querySelectorAll(".navbar-link")
    const header = document.querySelector(".header")
    const navbar = document.querySelector(".navbar")
    const overlay = document.querySelector(".overlay")
    const cardAction = document.querySelectorAll(".card-action")
   
 
     
    function togglebar(elem, type, callback){
        if(elem.length > 1){
            for(let i = 0; i < elem.length; i++){
                elem[i].addEventListener(type,callback)
            }
        }
        else{
            elem.addEventListener(type, callback)
        }

    }

    const openBtn = function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    }
    togglebar(menuClose, "click", openBtn);


    const togglelink = function(){
        navbar.classList.remove("active")
        overlay.classList.remove("active")

    }
    togglebar(navlink, "click", togglelink)

    const headerActive = function(){
        if(window.scrollY > 100){
            header.classList.add("active");
        }
        else{
            header.classList.remove("active");
        }
    }

    togglebar(window, "scroll", headerActive)

    const cardOpen = function(){
        this.classList.toggle("active")
    } 
    togglebar(cardAction, "click", cardOpen)

   

   

   
    
    