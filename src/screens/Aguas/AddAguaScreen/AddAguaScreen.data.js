import * as Yup from 'yup';


export function initialValues(){
    return{
        rotulo:'',
        numero:'',
        tipo:'',
        region:"",
        ciudad:"",
        comuna:"",
        direccion: "",
        apariencia:"",
        volumen:"",
        alcalinidad:"",
        dureza:"",
        comentarios:"",
        location:null,
        images: []
    };
}

export function validationSchema(){
    return Yup.object({
        rotulo: Yup.string().required("Ingresar el rótulo es obligatorio"),
        numero: Yup.string().required("Ingresar el número de muestra es obligatorio"),
        tipo: Yup.string().required("Ingresar el tipo de muestra es obligatorio"),
        region: Yup.string().required("Ingresar región es obligatorio"),
        ciudad: Yup.string().required("Ingresar ciudad es obligatorio"),
        comuna: Yup.string().required("Ingresar comuna es obligatorio"),
        direccion: Yup.string().required("Ingresar dirección es obligatoria"),
        apariencia: Yup.string().required("Ingresar descripción es obligatorio"),
        volumen: Yup.string().required("Ingresar el volumen es obligatorio"),
        alcalinidad: Yup.string().required("Ingresar la alcalinidad es obligatorio"),
        dureza: Yup.string().required("Ingresar la dureza es obligatorio"),
        comentarios: Yup.string().required("Ingresar comentarios es obligatorio"),
        location: Yup.object().required("La geolocalización es requerida"),
        images: Yup.array().min(1, "Se requiere seleccionar una imagen como mínimo").required("Ingresar una imagen"),
    })
}