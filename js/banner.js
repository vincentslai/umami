var pageTop, bannerMain, yPos, smallTopLogo;
    function yScroll(){
        pageTop = document.getElementById('head');
        yPos = window.pageYOffset;
        
        if(yPos >250){
            pageTop.style.height = "200px";
            pageTop.style.paddingTop = "0px";
            
        } else {
            pageTop.style.height = "235px";
            pageTop.style.paddingTop = "0px";
        }
    }
    
    window.addEventListener("scroll", yScroll);