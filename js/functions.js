
//dron-box parallax
var pContainerHeight = document.querySelector('.dron-box').offsetHeight;
 
window.addEventListener('scroll', function (){
    var wScroll = this.pageYOffset;
    if(wScroll <= pContainerHeight){
       
        document.querySelector('.logo').style.
        transform = 'translate(0px, '+ wScroll / 2 + '%)';
      
       
        document.querySelector('.birds').style.
        transform = 'translate(0px, '+ wScroll /3 +'%)';
 
    document.querySelector('.drone').style.
      transform = 'translate(0px, -'+ wScroll /4.5 +'%)';
 
    }
    
    // about-me
    
    var figures = document.querySelectorAll('.about-me .about-group');

  function showPic(i) {
    setTimeout(function(){
      figures[i].classList.add('is-showing');
    }, (700 * (Math.exp(i * 0.14)) - 700));
  }

  if(wScroll > document.querySelector('.about-me').scrollHeight + document.body.scrollTop - (window.innerHeight / 1.2)) {

    for(var i = 0; i < figures.length; i++) {
      showPic(i);
    }

  }
    
    
    
})
