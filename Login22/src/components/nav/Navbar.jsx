//<div class="bg-[#ff5733] text-white p-4">Fondo naranja personalizado</div>
//<div class="text-[rgb(123,45,67)]">Texto con RGB</div>
//<div class="bg-[hsl(200,100%,50%)]">Fondo en HSL</div>

import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <header className="mb-8">
            <div className="py-8 flex justify-center items-center gap-4"> 
                <Link to={"/register"} className="bg-black text-white font-semibold py-4 px-3 
                border hover:scale-[1.1] transition-transform cursor-pointer rounded">Crear cuenta</Link>
                <div className="divider">|</div>
                <Link to={"/login"} className="font-semibold py-4 px-2 
                border hover:scale-[1.1] transition-transform cursor-pointer rounded">Iniciar Secion</Link>
            </div>

            <nav className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                        <summary>Parent</summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                            <li><a>Link 1</a></li>
                            <li><a>Link 2</a></li>
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar