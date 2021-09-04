const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener("click", () => {
    nav.classList.toggle('active');                     /*setzt nav auf active und zeigt damit versteckten nav an*/
    btn.classList.toggle('active'); 
})