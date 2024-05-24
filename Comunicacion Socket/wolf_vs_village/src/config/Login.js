import { Axios, endpoints } from "./config";

export async function LoginService(dataUser, fun_PM){
    return await Axios.get(endpoints.Login, dataUser)
        .then( _ => fun_PM("END")) 
        .catch( _ => fun_PM("ERROR"));
}