const capital_letters = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
const letters_accents = "áéíóúý";

const isEmptyTextAlert = (text) => {
  if (text === "" || text === " ") {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Debe ingresar texto para encriptar.",
      showConfirmButton: false,
      timer: 1600,
    });
  }
};

const isThereCapitalLetters = (text) => {
  if (capital_letters.indexOf(text.charAt(i), 0) != -1 ||
    letters_accents.indexOf(text.charAt(i), 0) != -1) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "No se permite mayúsculas o acentos.",
      showConfirmButton: false,
      timer: 1600,
    });
    return true;
  }
  return false;
}

const setCryptoStatus = (encryptedText) => {
  document.querySelector(".img-person").style.display = "none";
  document.querySelector(".img-frame").style.display = "none";
  document.querySelector(".right-form").style.display = "flex";
  document.querySelector(".btn-copy").style.display = "flex";
  document.querySelector(".right-form").innerHTML = encryptedText;
  document.getElementById("input-text").value = "";
}

const encrypt = () => {
  let text = document.getElementById("input-text").value;
  isEmptyTextAlert(text);
  for (i = 0; i < text.length; i++) {
    if (isThereCapitalLetters(text)) {
      break;
    } else {
      let encryptedText = text;
      const encryptValues = [/e/gi, /i/gi, /a/gi, /o/gi, /u/gi];
      const keys = ["enter", "imes", "ai", "ober", "ufat"];
      for (let i = 0; i < keys.length; i++) {
        encryptedText = encryptedText.replace(encryptValues[i], keys[i]);
      }
      setCryptoStatus(encryptedText);
    }
  }
};

const desencrypt = () => {
  let text = document.getElementById("input-text").value;
  isEmptyTextAlert(text);
  for (i = 0; i < text.length; i++) {
    if (isThereCapitalLetters(text)) {
      break;
    } else {
      let encryptedText = text;
      const desencryptValues = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g];
      const keys = ["e", "i", "a", "o", "u"];
      for (let i = 0; i < keys.length; i++) {
        encryptedText = encryptedText.replace(desencryptValues[i], keys[i]);
      }
      setCryptoStatus(encryptedText);
    }
  }
}

const copy = () => {
  let container = document.getElementById("out-text");
  container.select();
  document.execCommand("copy");
  document.getElementById("input-text").focus();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Texto copiado correctamente.",
    showConfirmButton: false,
    timer: 1500,
  });
};
