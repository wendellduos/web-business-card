// define fundo da imagem de perfil
const profilePicBackdrop = document.getElementById("profile-pic-backdrop");
const profilePicPath = document.getElementById("profile-pic").src;

profilePicBackdrop.style.backgroundImage = `url('${profilePicPath}')`;
