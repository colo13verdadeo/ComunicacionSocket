function userValid(user){
    const userHaveSpace = /\s/.test(user);
  
    return user & !userHaveSpace;
  }
  
function passwordValid(password){
    const passwordHaveSpecialCharacters = /\W/.test(password);
    const passwordHaveSpace = /\s/.test(password);
    const passwordHaveUpperCaseAndLowerCase = /^(?=.*[A-Z])(?=.*[a-z])/.test(password);
    const passwordHaveNumber = /[1-9]/.test(password);
    
    return passwordHaveSpecialCharacters && 
          passwordHaveUpperCaseAndLowerCase &&
          !passwordHaveSpace &&
          passwordHaveNumber &&
          password;
}

function verifyEmail(email){
    return email && email.includes('@');
  }

export function validData(user, password, email) {
    return userValid(user) && 
        passwordValid(password) && 
        verifyEmail(email);
}