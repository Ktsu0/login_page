export function footerIcons() {
  const github = document.getElementById('btnGithub');
  const whatsapp = document.getElementById('btnWhatsapp');
  const instagram = document.getElementById('btnInstagram');

  if (!github || !whatsapp || !instagram) return;

  function openGithub() {
    window.open('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWA95xyqlA7IbQCxAHEgWODhG3ufcsf_RmLw&s', '_blank');
  }

  function openWhatsapp() {
    window.open('https://media.tenor.com/ZSrJrkIg5gcAAAAM/horse-cavalo.gif', '_blank');
  }

  function openInstagram() {
    window.open('https://media.tenor.com/_cGcYYBVOr8AAAAM/vegeta-dance-fortnite-vegeta.gif', '_blank');
  }

  github.addEventListener('click', openGithub);
  whatsapp.addEventListener('click', openWhatsapp);
  instagram.addEventListener('click', openInstagram);

  return () => {
    github.removeEventListener('click', openGithub);
    whatsapp.removeEventListener('click', openWhatsapp);
    instagram.removeEventListener('click', openInstagram);
  };
}
