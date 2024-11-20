import { Link } from "react-router-dom";

export function Home(){
  return(
    <div className="bg-black text-white h-full">
      <header className="bg-slate-900 w-screen h-36 flex flex-col justify-center items-center sticky top-0">
        <Link to="/" className="absolute left-5 duration-200 hover:-rotate-45 hover:scale-125">
          <i className="text-3xl bi bi-arrow-left-circle"></i>
        </Link>
        <h1 className="text-3xl">Home</h1>
        <ul className="flex gap-2 mt-3 ">
            <li className="p-5 hover:bg-slate-800 rounded-md cursor-pointer"> <a href="#basic">Básico</a> </li>
            <li className="p-5 hover:bg-slate-800 rounded-md cursor-pointer"> <a href="#medium">Intermediário</a> </li>
            <li className="p-5 hover:bg-slate-800 rounded-md cursor-pointer"> <a href="#advanced">Avançado</a> </li>
        </ul>
      </header>

      <div  className="container flex flex-col gap-10 h-full">
        <section id="basic" className="basic flex gap-5 h-screen px-20 p-5 bg-green-600 justify-center">
            <div className="card h-[530px] bg-blue-600 flex flex-col items-center w-80 p-4 rounded-md transition-all cursor-pointer hover:scale-[1.09]">
              <img width={250} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="card-image" />
              <h3 className="text-center mt-3 text-2xl mb-2 bg-green-700 p-2 w-full">Html5</h3>
              <p className="descrition text-center">
              Neste curso, você aprenderá desde os conceitos básicos até técnicas avançadas para estruturar páginas web incríveis. Com aulas práticas, projetos reais e suporte especializado, você estará preparado para criar interfaces profissionais que impressionam.
              </p>
            </div>

            <div className="card h-[530px] bg-blue-600 flex flex-col items-center w-80 p-4 rounded-md transition-all cursor-pointer hover:scale-[1.09]">
              <img width={250} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="card-image" />
              <h3 className="text-center mt-3 text-2xl mb-2 bg-green-700 p-2 w-full">Html5</h3>
              <p className="descrition text-center">
              Neste curso, você aprenderá desde os conceitos básicos até técnicas avançadas para estruturar páginas web incríveis. Com aulas práticas, projetos reais e suporte especializado, você estará preparado para criar interfaces profissionais que impressionam.
              </p>
            </div>

            <div className="card h-[530px] bg-blue-600 flex flex-col items-center w-80 p-4 rounded-md transition-all cursor-pointer hover:scale-[1.09]">
              <img width={250} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="card-image" />
              <h3 className="text-center mt-3 text-2xl mb-2 bg-green-700 p-2 w-full">Html5</h3>
              <p className="descrition text-center">
              Neste curso, você aprenderá desde os conceitos básicos até técnicas avançadas para estruturar páginas web incríveis. Com aulas práticas, projetos reais e suporte especializado, você estará preparado para criar interfaces profissionais que impressionam.
              </p>
            </div>
        </section>

        <section id="medium" className="medium flex gap-5 h-screen px-20 p-10 bg-violet-800 items-center justify-center">
            <div className="card">
              <img src="" alt="" />
              <h3>ReactJS</h3>
            </div>

            <div className="card">
              <img src="" alt="" />
              <h3>Nextjs</h3>
            </div>

            <div className="card">
              <img src="" alt="" />
              <h3>Angular</h3>
            </div>
        </section>

        <section id="advanced" className="medium flex gap-5 h-screen px-20 p-10 bg-slate-800 items-center justify-center">
            <div className="card">
              <img src="" alt="" />
              <h3>Frontend Responsivo</h3>
            </div>

            <div className="card">
              <img src="" alt="" />
              <h3>Backend Api</h3>
            </div>

            <div className="card">
              <img src="" alt="" />
              <h3>Apps FullStack</h3>
            </div>
        </section>
      </div>
    </div>
  )
}