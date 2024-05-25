export const Basic_Problem_Manager = {
  status: "OK",
  type_error: ""
};

function userValid(user){
  const userHaveSpace = /\s/.test(user);

  return !!user & !userHaveSpace;
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
        !!password;
}

function emailValid(email){
  return !!email && email.includes('@');
}

export function problem_manager(state) {
  if (!userValid(state.user)) return {status: "ERROR",  type_error: "user"};
  else if (!emailValid(state.email)) return {status: "ERROR",  type_error: "email"};
  else if (!passwordValid(state.password)) return {status: "ERROR",  type_error: "password"};
  else return {status: "CONNECTION",  type_error: ""};
}