import * as Yup from "yup";

export function initialValues(){
    return{
        rotulo: "",
        numero:"",
        tipo:"",
        apariencia:"",
        volumen:"",
        alcalinidad:"",
        dureza:"",
        comentarios:"",
    }
}

    export function validationSchema(){
        return Yup.object({
            rotulo: Yup.string().required("Ingresar el rótulo es obligatorio"),
            numero: Yup.string().required("Ingresar el número de muestra es obligatorio"),
            tipo: Yup.string().required("Ingresar el tipo de muestra es obligatorio"),
            apariencia: Yup.string().required("Ingresar descripción es obligatorio"),
            volumen: Yup.string().required("Ingresar el volumen es obligatorio"),
            alcalinidad: Yup.string().required("Ingresar la alcalinidad es obligatorio"),
            dureza: Yup.string().required("Ingresar la dureza es obligatorio"),
            comentarios: Yup.string().required("Ingresar comentarios es obligatorio"),
        })
    }
