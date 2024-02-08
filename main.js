// define fundo da imagem de perfil
const profilePicBackdrop = document.getElementById("profile-pic-backdrop");
const profilePicPath = document.getElementById("profile-pic").src;

profilePicBackdrop.style.backgroundImage = `url('${profilePicPath}')`;

// verifica o estado do cartão e atualiza visibilidade do verso
let cardFacingForwards = true;

updtCardDisplay();

function updtCardDisplay(delay) {
  if (cardFacingForwards) {
    document.getElementById("back-card").style.display = "none";
  } else {
    setTimeout(() => {
      document.getElementById("back-card").style.display = "block";
    }, delay);
  }
  console.log;
}

// gatilho para virar o cartão
document.getElementById("dropdown-btn").addEventListener("click", () => {
  const card = document.querySelector("main");
  const animDuration = 0.4;

  card.style.animation = `flip ${animDuration}s linear 1 backwards`;

  // reseta animação após finalizar
  setTimeout(() => {
    card.style.animation = "none";
  }, animDuration * 1000);

  // verifica estado do cartão e insere o oposto
  if (cardFacingForwards) {
    cardFacingForwards = false;
  } else {
    cardFacingForwards = true;
  }

  // o parâmetro da função é metade da duração da animação, após conversão para ms
  // isso faz com que o efeito do cartão virar se torne mais aparente
  updtCardDisplay((animDuration * 1000) / 2);
});
