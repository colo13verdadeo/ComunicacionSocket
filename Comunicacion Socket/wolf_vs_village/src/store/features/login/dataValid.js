export const Basic_Problem_Manager = {
    status: "OK",
    type_error: ""
  };

function userValid(user){
    const userHaveSpace = /\s/.test(user);
  
    return !!user & !userHaveSpace;
  }
  
function passwordValid(password){
    return !!password;
}

export function problem_manager(state) {
    if (!userValid(state.user)) return {status: "ERROR",  type_error: "user"};
    else if (!passwordValid(state.password)) return {status: "ERROR",  type_error: "password"};
    else return Basic_Problem_Manager;
}