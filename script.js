function page1animation(){
    var tl=gsap.timeline();

tl.from("nav h4 ,nav button ,nav h1",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.15
})
tl.from(".center-part-1 h1",{
    x:-200,
    opacity:0,
    duration:0.5    
}, "-=0.3")
tl.from(".center-part-1 p",{
    x:-200,
    opacity:0,
    duration:0.4,
    
})
tl.from(".center-part-1 button",{
    opacity:0,
    duration:0.8,

    
})

tl.from(".center-part-2 img",{  
    opacity:0, 
    duration:1,
    x:200
}, "-=0.7")
tl.from(".section-bottom img",{
    y:30,
    opacity:0,
    duration:0.6,
    stagger:0.15,
})
 
}

 

 var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section-2",
        start:"top 50%",
        scrub:2,
        scroller:"body",
        end:"top 0",
        
    }
 })
 tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})

tl2.from(" .elem.line1.left ",{
x:-300,
opacity:0,
duration:1
},"anime")
tl2.from(" .elem.line1.right ",{
    x:300,
    opacity:0,
    duration:1,
    duration:1 
},"anime")

tl2.from(" .elem.line2.left ",{
    x:-300,
    opacity:0,
    duration:1
    },"anime2")
    tl2.from(" .elem.line2.right ",{
        x:300,
        opacity:0,
        duration:1,
        duration:1 
    },"anime2")