import Link from 'next/link'

function Home() {
  return (
    <body>
      <div>
        <h1>Equipe Decola</h1>
        <h3>Bem vindo ao Decola</h3>
        <p>somos uma empres que decola os seus negócios.</p>
      </div>
      <button>
        <Link href="/marketing">
          <a>Acessar o Marketing</a>
        </Link>
      </button>
      <div>
        <button>
          <Link href="/tecnologia">
            <a>Acessar a Tecnologia</a>
          </Link>
        </button>
      </div>
    </body>
  )
}

export default Home
