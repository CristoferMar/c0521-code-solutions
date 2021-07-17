const graduate = credential => {
  return fullName => {
    return `${fullName}, ${credential}`;
  };
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Colic McTippsy'));
console.log(lawSchool('Watched Law&Order'));
