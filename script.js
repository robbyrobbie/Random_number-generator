userGen = document.getElementById('gen1');
userRslt = document.getElementById('genRslt');

userGen.addEventListener('click', () => {
  
  userRslt.textContent = Math.floor(Math.random() * 20000);
});