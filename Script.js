
const lightbox = document.getElementById('lightbox');
const viewBtn = document.getElementById('viewBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const closeBtn = document.getElementById('closeBtn');

function openLightbox(){
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
viewBtn.addEventListener('click',()=>document.getElementById('gallery').scrollIntoView());
fullscreenBtn.addEventListener('click',openLightbox);
closeBtn.addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox) closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeLightbox()});
