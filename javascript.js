const offerbox = document.getElementById('offer');
const closebox = document.getElementById('closeOffer');
const loadOffer = document.getElementById('loadBox');

window.onload = function run(){

     setTimeout(() => {
           
      offerbox.style.display="none";
     }, 10000);

     setTimeout(() => {
      
      loadOffer.style.transform='scale(1)';
      
      
     }, 1000);
}

closebox.addEventListener('click',function(){

      offerbox.style.display="none"
      
})

const closeoffer = () =>{

      loadOffer.style.display="none";

}
     


