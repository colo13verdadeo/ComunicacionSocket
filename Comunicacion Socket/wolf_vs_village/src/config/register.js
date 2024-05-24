import { Axios, endpoints } from "./config"

export async function RegisterService(dataUser, fun_PM){
    return await Axios.post(endpoints.Register, dataUser)
        .then( _ => fun_PM("END")) 
        .catch( _ => fun_PM("ERROR"));
}