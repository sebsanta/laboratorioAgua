import * as Yup from "yup";

export function initialValues(){
    return {
        email:"",
        password:"",
        repeatPassword:"",
    }
}

export function validationSchema(){
    return Yup.object({
        email: Yup.string().email("El email no es correcto.").required("El email es obligatorio."),
        password: Yup.string().required("La password es obligatoria."),
        repeatPassword: Yup.string().required("La password es obligatoria").oneOf([Yup.ref("password")],"Las password deben ser iguales."),
    })
}

export function loginValues(){
    return {
        email:"",
        password:"",
    }
}

export function validationLogin(){
    return Yup.object({
        email: Yup.string().email("El email no es correcto.").required("El email es obligatorio."),
        password: Yup.string().required("La password es obligatoria."),
    })
}