// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Após refatoração
const openCloseGeneratorButton = document.querySelector(
  "#open-generate-password"
);
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");


// Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };
  
  const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  
  const getNumber = () => {
    return Math.floor(Math.random() * 11).toString();
  };
  
  const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%^&*";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };
  
  const generatePassword = (
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  ) => {
    let password = "";
  
    const passwordLength = lengthInput.value;
  