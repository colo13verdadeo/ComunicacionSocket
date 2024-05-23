function userValid(user){
    const userHaveSpace = /\s/.test(user);
  
    return user & !userHaveSpace;
  }
  
function passwordValid(password){
    return password;
}

export function validData(user, password) {
    return userValid(user) && passwordValid(password);
}