import { useForm } from "react-hook-form"

import { useNavigate } from "react-router-dom" ///

const Login = () => {
    const navigate = useNavigate() // NUEVO

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    }= useForm({mode: "OnChange"}) // OnChange esto es para que se haga las validaciones en tiempo real

    const onSubmit = (data) => {
        console.log(data)
        // aca tiene que venir el if que controle para verificar si es el usuario correcto
        navigate("/residente")
        reset()
    }




    return (
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-4 lg:gap-6 max-w-[500px] mx-auto">
            <div>
                <input 
                {...register("email", {
                    required: "El correo electronico es requerido",
                    pattern: {
                        value: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/,
                        message: "Correo electronico invalido"
                    },
                    minLength: {
                        value: 3,
                        message: "Minimo 3 caracteres"
                    },
                    maxLength: {
                        value: 40,
                        message: "Maximo 40 caracteres"
                    }
                })}
                //type="email"   // esto si lo sacas te quita la alerta del navegador de tipo email
                placeholder="Correo electronico" 
                name="email"
                autoComplete="email"
                className={`p-2 outline-2 rounded focus:outline-blue-400 w-full ${
                    errors.email
                    ? "border-red-400 outline-red-400 focus:outline-red-400"
                    : ""
                }`}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-2 ml-2">{errors.email.message}</p>
                )}
            </div>

            <div>
                <input 
                {...register("password",{
                    required: "La cotraseña es obligatiria (6 y 20 caracteres)",
                    /*pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "Cotrasena invalida"
                    },*/
                    minLength: {
                        value: 6,
                        message: "Minimo 6 caracteres"
                    },
                    maxLength: {
                        value: 20,
                        message: "Maximo 20 caracteres"
                    },
                    ///////////////////
                    validate: {
                        hasLower: (value) =>
                            /[a-z]/.test(value) || "Debe contener al menos una minúscula",
                        hasUpper: (value) =>
                            /[A-Z]/.test(value) || "Debe contener al menos una mayúscula",
                        hasNumber: (value) =>
                            /[0-9]/.test(value) || "Debe contener al menos un número",
                        hasSpecial: (value) =>
                            /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(value) || "Debe contener al menos un carácter especial (@$!%*?&)"
                    }

                })}

                type="password" 
                placeholder="Cotraseña"
                name="password"
                autoComplete="current-password"
                className={`p-2 outline-2 rounded focus:outline-blue-400 w-full ${
                    errors.password
                    ? "border-red-400 outline-red-400 focus:outline-red-400"
                    : ""
                }`}
                />

                {
                    errors.password && (
                        <p className="text-red-500 text-sm mt-2 ml-2">{errors.password.message}</p>
                    )
                }
            </div>

            <button className="bg-black text-white py-2 font-bold"
            type="submit"
            >Iniciar Secion</button>

        </form>
    )
}

export default Login