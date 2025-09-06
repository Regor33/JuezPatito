import { useForm } from "react-hook-form"

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ mode: "onChange" })

    const onSubmit = (data) => {
        // aca seria donde se deveria enviar los datos al bacckend o al API
        console.log(data)
        reset()
    }



    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 flex flex-col gap-4 lg:gap-5 max-w-[500px] mx-auto" //cambio aca en gap-6 por gap-5 
        >
            <div>
                <input type="text"
                    {...register("username", {
                        required: "El nombre de usuario es requerido",
                        minLength: {
                            value: 3,
                            message: "El minimo es de 3 caracteres"
                        },
                        maxLength: {
                            value: 16,
                            message: "El maximo es de 16 caracteres"
                        }

                    })}
                    autoComplete="username"
                    name="username"
                    placeholder="Nombre de usuario"

                    className={`p-2 outline-2 rounded focus:outline-blue-400 w-full ${errors.username
                            ? "border-red-400 outline-red-400 focus:outline-red-400"
                            : ""
                        }`}
                />
                {
                    errors.username && (
                        <p className="text-red-500 text-sm mt-2 ml-2">{errors.username.message}</p>
                    )
                }
            </div>

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
                    className={`p-2 outline-2 rounded focus:outline-blue-400 w-full ${errors.email
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
                    {...register("password", {
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
                    className={`p-2 outline-2 rounded focus:outline-blue-400 w-full ${errors.password
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

            <button className="bg-black text-white py-3.5 font-bold mb-4 
            hover:scale-[1.07] transition-transform cursor-pointer rounded text-[1.2rem]"
                type="submit"
            >Iniciar Secion</button>

        </form>
    )
}

export default Register