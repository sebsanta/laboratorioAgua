import * as Yup from 'yup';

export function initialValues(){
    return {
        password: "",
        newPassword:"",
        confirmNewPassword:"",
    };
}

export function validationSchema(){
    return Yup.object({
        password: Yup.string().required("La password es obligatiroa"),
        newPassword: Yup.string().required("La password es obligatoria."),
        confirmNewPassword: Yup.string().required("La password es obligatoria.").oneOf([Yup.ref("newPassword")],"las password deben ser iguales"),
    })
}