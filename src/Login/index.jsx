import { Link } from "react-router-dom";

export function Login(){
  return(
    <div className="w-[300px] bg-slate-800 h-96 rounded-md p-5">
        <form className="flex flex-col gap-8">
          <h1 className="text-white text-3xl text-center">Login</h1>
          <input className="w-full p-2 rounded-md" type="text" placeholder="E-amil" />
          <input className="w-full p-2 rounded-md" type="password" placeholder="*********" />
          <div className="btn-group">
            <Link to="/home">
              <button className="bg-violet-800 p-2 rounded-md w-full text-white text-1xl">Entrar</button>
            </Link>
          </div>

          <div className="link-group flex text-white justify-between">
            <p className="cursor-pointer p-2 px-3 rounded-md hover:bg-violet-800">Cadastra-se</p>
            <p className="cursor-pointer p-2 rounded-md hover:bg-violet-800"> Esqueceu a senha</p>
          </div>
        </form>
    </div>
  )
}