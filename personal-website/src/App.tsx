import './App.css';

function App() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/fundo.jpg')" }}
      >
        {/* Overlay escuro com blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Container principal */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl px-6">
          {/* Texto */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="font-extrabold text-3xl md:text-5xl text-orange-300">
              Quer transformar seu corpo e sua performance?
            </h2>
            <p className="font-medium text-lg md:text-xl text-gray-200 drop-shadow">
              Treine comigo e alcance seus objetivos de forma segura e eficiente. São anos de
              experiência, centenas de alunos satisfeitos e resultados reais: ganho de massa
              muscular, emagrecimento, melhora no desempenho esportivo, saúde e qualidade de vida.
            </p>

            {/* Botões de ação */}
            {/* levam pra outra section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contato"
                className="px-6 py-3 bg-orange-600 hover:bg-black hover:text-orange-300 text-black font-semibold shadow-lg transition"
              >
                Comece Agora
              </a>
              <a
                href="#sobre"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl shadow-lg transition"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          {/* Imagem do personal */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/ezequiel.png"
              alt="Foto do personal"
              className="rounded-full max-w-xs md:max-w-sm shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section id="sobre" className="bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Sobre Mim</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Sou personal trainer com anos de experiência ajudando pessoas a alcançarem seus
            objetivos. Já acompanhei centenas de alunos em jornadas de emagrecimento, ganho de massa
            muscular e melhora da performance esportiva. Meu foco é entregar resultados de forma
            segura, eficaz e personalizada para cada aluno.
          </p>

          {/* Diferenciais em grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/5 p-6 rounded-2xl shadow-lg hover:bg-white/10 transition">
              <h3 className="font-bold text-xl mb-2">Experiência</h3>
              <p className="text-gray-400">+5 anos atuando com acompanhamento personalizado.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl shadow-lg hover:bg-white/10 transition">
              <h3 className="font-bold text-xl mb-2">Resultados</h3>
              <p className="text-gray-400">Centenas de alunos satisfeitos com evolução real.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl shadow-lg hover:bg-white/10 transition">
              <h3 className="font-bold text-xl mb-2">Treino Personalizado</h3>
              <p className="text-gray-400">
                Cada aluno recebe um plano único, de acordo com seus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contato" className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Entre em Contato</h2>
          <p className="text-lg text-gray-300">
            Quer começar sua transformação? Fale comigo agora mesmo:
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <a
              href="https://wa.me/5591999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-2xl font-semibold shadow-lg transition"
            >
              WhatsApp
            </a>
            <a
              href="mailto:bybybyby@exemplo.com"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl font-semibold shadow-lg transition"
            >
              E-mail
            </a>
          </div>

          {/* Opcional: formulário */}
          <form className="mt-12 space-y-4 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none"
            />
            <textarea
              placeholder="Sua mensagem"
              rows="4"
              className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-2xl font-bold shadow-lg transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
