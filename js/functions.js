var pContainerHeight = document.querySelector('.dron-box').offsetHeight;

window.addEventListener('scroll', function(){

  var wScroll = this.pageYOffset;

  if (wScroll <= pContainerHeight) {

    document.querySelector('.logo').style.
      transform = 'translate(0px, '+ wScroll /2 +'%)';

    document.querySelector('.birds').style.
      transform = 'translate(0px, '+ wScroll /4 +'%)';

    document.querySelector('.drone').style.
      transform = 'translate(0px, -'+ wScroll /40 +'%)';

  }
