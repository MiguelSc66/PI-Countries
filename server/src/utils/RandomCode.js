// Esta funcion genera un codigo aleatorio de tres letras
const generateRandomCode = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      code += alphabet[randomIndex];
    }
    console.log(code);
    return code;
  };
generateRandomCode()

module.exports = {generateRandomCode}