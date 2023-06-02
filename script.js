
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    shareLink();
})


function shareLink() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: 'https://www.laxmarket.store'
        // url: location.href 
      })
      .then(() => console.log('Lien partagé avec succès'))
      .catch((error) => console.error('Erreur lors du partage :', error));
    } else {
      console.log('API Web Share non prise en charge');
    }
  }