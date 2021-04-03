/* Background 1 Opacity */
    function bg1Opacity () {
        if (this.scrollY > this.innerHeight / 5 ) {
            document.getElementById("backGround1").classList.add('bg1-opacity')
        } else 
        {
            document.getElementById("backGround1").classList.remove('bg1-opacity')
        }
    }

    

    window.addEventListener("scroll", bg1Opacity)
    /* Nav Active */
    function navActive () {
        if (this.scrollY > this.innerHeight / 10 ) {
            document.getElementById("nav").classList.add('nav-active')
        } else 

        {
            document.getElementById("nav").classList.remove('nav-active')
        }
    }
    
    window.addEventListener("scroll", navActive)
    /* Background 2 Set */
    function backgroundSet () {
        if (this.scrollY > this.innerHeight / 5) {
            document.getElementById("backGround2").classList.add('background2-active')
        } else 
        {
            document.getElementById("backGround2").classList.remove('background2-active')
        }
    }
    
    window.addEventListener("scroll", backgroundSet)

    


    /* Background 2 Opacity  */


    function bg2Opacity () {
        if (this.scrollY > this.innerHeight / 0.9 ) {
            document.getElementById("backGround2").classList.add('bg2-opacity')
        } else 
        {
            document.getElementById("backGround2").classList.remove('bg2-opacity')
        }
    }

    window.addEventListener("scroll", bg2Opacity)


    /* Background 3 Set */


    function background3Set () {
        if (this.scrollY > this.innerHeight / 5) {
            document.getElementById("backGround3").classList.add('background3-active')
        } else 
        {
            document.getElementById("backGround3").classList.remove('background3-active')
        }
    }
    
    window.addEventListener("scroll", background3Set)

    
    /* Background 2 Opacity  */


    function bg3Opacity () {
        if (this.scrollY > this.innerHeight / 0.9 ) {
            document.getElementById("backGround3").classList.add('bg3-opacity')
        } else 
        {
            document.getElementById("backGround3").classList.remove('bg3-opacity')
        }
    }

    window.addEventListener("scroll", bg3Opacity)



    /* Background 4  */

    // Teach Variables

    var backgroundOnclickT = document.getElementById("Teach") ;
    var colorChangeT = document.getElementById("colorchnageT") ;




        backgroundOnclickT.onclick = function () {
            "use strict"
            backgroundOnclickT.classList.add("TeachBackground");
            document.getElementById("colorchangeT").classList.add("onclickteach") ;
            document.getElementById("disableImages").classList.add("hiddenImagesS") ;
            document.getElementById("servTeach").classList.remove("servTeach");
            document.getElementById("servTeach").classList.add("servteachActive");
            backgroundOnclickS.classList.remove("StudentBackground");
            colorChangeS.classList.remove("onclickStudent");
     
         

            }
            // Student 

            var backgroundOnclickS  = document.getElementById("Students") ;
            var colorChangeS = document.getElementById("colorChangeS");

            backgroundOnclickS.onclick = function () {
                "use strict"
                backgroundOnclickS.classList.add("StudentBackground");
                colorChangeS.classList.add("onclickStudent");
                document.getElementById("Teach").classList.remove("TeachBackground");
                document.getElementById("colorchangeT").classList.remove("onclickteach");
                document.getElementById("servTeach").classList.add("servTeach");
                document.getElementById("servTeach").classList.remove("servteachActive");
                document.getElementById("disableImages").classList.remove("hiddenImagesS") ;          
            }


            
       


        
        
    
