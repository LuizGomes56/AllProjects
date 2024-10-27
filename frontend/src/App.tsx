import { useEffect, useState } from "react"

const ProgrammingLanguage = "text-green-200 font-semibold";
const AriaLink = "border-b border-b-sky-300 w-fit text-sky-300 pb-1 truncate max-w-full";
const TextParagraph = "dark:text-zinc-300";
const ImageMargin = "my-2";

export default function App() {
    const [isEnglish, setIsEnglish] = useState<boolean>(true);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        document.documentElement.classList.toggle('dark', prefersDarkMode)
        const userLanguage = navigator.language || navigator.languages[0];
        userLanguage.startsWith('pt') ? setIsEnglish(false) : setIsEnglish(true);
    }, [])
    return (
        <>
            <section className="mx-auto max-w-6xl container flex flex-col gap-6 p-4 my-10">
                <h2 className="dark:text-orange-200 font-bold text-2xl">
                    Luiz Gustavo Santana Dias Gomes (26/12/2005, 18)
                </h2>
                <h2 className="dark:text-orange-100 font-semibold text-xl">
                    A lista abaixo contém uma lista de todas as linguagens de programação em que
                    eu publiquei algum projeto na internet, ou que está parcialmente público. Além disso,
                    a lista está organizada em ordem de criação, ou seja, os projetos em JavaScript são os
                    mais antigos, e os em Rust mais recentes.
                </h2>
                <h2 className="dark:text-orange-100 font-semibold text-xl">
                    É importante lembrar que aqui estão listados apenas os projetos pessoais, e os mais
                    relevantes. Projetos muito pequenos, descontinuados ou não finalizados não estão listados.
                </h2>
                <h2 className="dark:text-orange-100 font-semibold text-xl">
                    Última atualização: 27/10/2024
                </h2>
                <h1 className="dark:text-sky-300 font-bold text-2xl">
                    Past projects with JavaScript
                </h1>
                <section className="flex flex-col gap-16">
                    <div className="flex flex-col gap-2">
                        <h2 className="dark:text-green-300 font-bold text-xl">
                            {isEnglish ? "TutorLoL Version 1" : "TutorLoL Versão 1"}
                        </h2>
                        <div className="flex flex-col gap-2 ml-8">
                            <a
                                className={AriaLink}
                                href="https://tutorlol.com">
                                https://tutorlol.com
                            </a>
                            <a
                                className={AriaLink}
                                href="https://tutorlol.com/calculator">
                                https://tutorlol.com/calculator
                            </a>
                            <a
                                className={AriaLink}
                                href="https://tutorlol.com/formulas">
                                https://tutorlol.com/formulas
                            </a>
                            {isEnglish ?
                                <>
                                    <p className={TextParagraph}>
                                        My first and largest project so far, initiated in February 2023, and finished on
                                        November 25, 2023. At that time, I used to play a lot <span className="italic">
                                            League of Legends</span>, and after reaching top #500 in Brazilian region,
                                        I was facing a big problem every single game: I did not have accurate data to
                                        know what item I should use given my game situation, and that's when I decided
                                        to create a calculator for it. I researched and found that <span className="italic">
                                            Riot Games</span> had a public API with the current game in the local machine.
                                    </p>
                                    <p className={TextParagraph}>
                                        Given that, I searched formulas on Wiki, make some of them on my own, using heavy
                                        math, and after a lot of struggle with SQL, databases, HTTP servers, errors, changes
                                        on Riot's API... I finally reached a stable version and published it. It went well
                                        and quickly reached 7000 page views, which made me excited to try to make it faster.
                                        Below, that's how it looked like in the first version published.
                                    </p>
                                    <img
                                        className={ImageMargin}
                                        src="/js_tutorlol_1.png"
                                        alt="">
                                    </img>
                                    <p className={TextParagraph}>
                                        This version included lots of new features, such as changing the colors of the
                                        page, table headers, hide players, text, text-size, font-boldiness,
                                        background-color, background-image, dark and light mode, many in-game
                                        information that are so specific that they become useless most of the time.
                                        Also, it was possible to compare two items and get very specific details of it.
                                        After all, I learned that focusing on features instead of design was not the best
                                        idea. Then for my other projects and remakes I would focus more on making it appealing.
                                    </p>
                                </>
                                :
                                <>
                                    <p className={TextParagraph}>
                                        Meu primeiro e maior projeto até agora, iniciado em Fevereiro de 2023, e
                                        finalizado em 25 de Novembro de 2023. Nessa época, eu jogava muito <span className="italic">
                                            League of Legends</span>, e depois de alcançar o top #500 na região brasileira,
                                        eu estava enfrentando um grande problema todos os jogos: eu não tava sabendo o que
                                        item eu deveria usar, e isso aconteceu quando eu decidiu criar um calculador para
                                        isso. Fiz uma pesquisa e encontrei que <span className="italic">
                                            Riot Games</span> tinha uma API publica com o jogo atual no computador local.
                                    </p>
                                    <p className={TextParagraph}>
                                        Ao longo desta época, eu pesquisei as formulas na Wiki, fiz algumas delas depois
                                        de um grande esforço com SQL, bases de dados, servidores HTTP, erros, alterações
                                        na API do Riot. Então, eu finalmente alcançei uma versão mais robusta e publicei. Ela
                                        passou bem e rapidamente alcançou 7000 visualizacoes, e eu me senti muito animado
                                        para tentar fazer isso mais rapido. A seguir, isso é como ficou no primeiro
                                        versão publicado.
                                    </p>
                                    <img
                                        className={ImageMargin}
                                        src="/js_tutorlol_1.png"
                                        alt="">
                                    </img>
                                    <p className={TextParagraph}>
                                        Essa versão incluiu muitas novas funcoes, como mudar a cor da pagina, cabecalhos
                                        da tabela, ocultar jogadores, texto, tamanho do texto, negrito, cor de fundo,
                                        imagem de fundo, modo claro e escuro, muitas informacoes in-game que se tornaram
                                        pouco util a maioria das vezes. Tambem, era possivel comparar dois itens e obter
                                        detalhes muito especificos dele. Depois disso, eu aprendi que focar em funcoes
                                        ao inves de design foi a melhor ideia. Então para os meus outros projetos e
                                        remakes eu focava mais em fazer isso atraente.
                                    </p>
                                </>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="dark:text-white font-semibold text-xl">
                            {isEnglish ? "Periodic Table Game Version 1" : "Jogo da Tabela Periódica Versão 1"}
                        </h2>
                        <div className="flex flex-col gap-2 ml-8">
                            <a
                                className={AriaLink}
                                href="https://westboca.tutorlol.com/games/periodictable">
                                https://westboca.tutorlol.com/games/periodictable
                            </a>
                            {isEnglish ?
                                <>
                                    <p className={TextParagraph}>Made using <span className={ProgrammingLanguage}>
                                        jQuery, HTML and CSS</span>, and using of a <span className={ProgrammingLanguage}>
                                            JSON</span> file located in the root of the public directory to access and
                                        load the information of the elements within the game. It is available in 3
                                        languages: <span className="text-red-100"> English, Portuguese and
                                            Spanish</span>.
                                    </p>
                                    <p className={TextParagraph}>
                                        The main objective at that time was to teach my friends of how to use <span
                                            className={ProgrammingLanguage}>JavaScript</span> to manipulate HTML elements, and
                                        how to use CSS to change their style. The project lasted for 2 weeks, and I
                                        tried to let them write the code by themselves as much as I could, but I had
                                        to give them instructions nearly all the time.
                                    </p>
                                </>
                                :
                                <>
                                    <p className={TextParagraph}>Feito usando <span className={ProgrammingLanguage}>
                                        jQuery, HTML e CSS</span>, e usando de um <span className={ProgrammingLanguage}>
                                            JSON</span> localizado na raiz do diretório publico para acessar e carregar
                                        as informacoes dos elementos dentro do jogo. Ele esta disponivel em 3
                                        linguagens: <span className="text-red-100"> Ingles, Portugues e Espanhol</span>.
                                    </p>
                                    <p className={TextParagraph}>
                                        O objetivo principal nessa epoca era ensinar meus amigos como usar <span
                                            className={ProgrammingLanguage}>JavaScript</span> para manipular elementos HTML e
                                        como usar CSS para alterar seus estilos. O projeto durou apenas 2 semanas, e eu
                                        tentei incentivá-los a escrever o código por conta própria, mas eu tive que prover
                                        instruções quase que todo o tempo.
                                    </p>
                                </>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="dark:text-white font-semibold text-xl">
                            {isEnglish ? "NextJS - PlanetaHist" : "PlanetaHist - NextJS"}
                        </h2>
                        <div className="flex flex-col gap-2 ml-8">
                            <a
                                className={AriaLink}
                                href="https://westboca.tutorlol.com/history/model.html">
                                https://westboca.tutorlol.com/history/model.html
                            </a>
                            {isEnglish ?
                                <>
                                    <p className={TextParagraph}>
                                        My first attempt of using React, and NextJS to create a website.
                                        At that time, one of my friends, majoring in History was willing
                                        to create a personal website for himself, in which he could write
                                        about some historical events, inspired in TodaMateria. So I created
                                        this project using NextJS because I knew the feature of Slug, in which
                                        the URL would adapt to a given model of the website, and I designed this
                                        model, obviously based on the original website of TodaMateria. The main
                                        goal was to provide him an easy and accessible way to create his website,
                                        without having to use Wix.com or Google Sites. All he had to do was to
                                        write in a form what was the topic, write the paragraphs, title, include
                                        images and so on. This project took only 3 days to finish.
                                    </p>
                                </>
                                :
                                <>
                                    <p className={TextParagraph}>
                                        Minha primeira tentativa de usar React, e NextJS para criar um website.
                                        Aquele tempo, um dos meus amigos, com o curso de Historia, parecia
                                        querer criar um website pessoal para ele, em que ele poderia escrever
                                        sobre alguns eventos históricos, inspirado em TodaMateria. Então eu criei
                                        esse projeto usando NextJS porque eu sei a feature de Slug, na qual
                                        a URL seria adaptada para um dado modelo do website, e eu designei este
                                        modelo, obviamente baseado no website original de TodaMateria. O objetivo
                                        principal era fornecer-lhe uma maneira simples e acessível de criar seu website,
                                        sem ter que usar Wix.com ou Google Sites. Tudo que ele tinha que fazer era escrever
                                        em uma forma que o assunto fosse o tema, escrever as frases, colocar o
                                        titulo, incluir imagens e assim por diante. Esse projeto demorou apenas 3 dias
                                        para ser concluido.
                                    </p>
                                </>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="dark:text-white font-semibold text-xl">
                            {isEnglish ? "Khan Academy Prototype - Cardgame" : "Protótipo do Khan Academy - Jogo de cartas"}
                        </h2>
                        <div className="flex flex-col gap-2 ml-8">
                            <a
                                className={AriaLink}
                                href="https://westboca.tutorlol.com/games/cardgame/test/question.html">
                                https://westboca.tutorlol.com/games/cardgame/test/question.html
                            </a>
                            {isEnglish ?
                                <>
                                    <p className={TextParagraph}>
                                        <span className="font-semibold">This project was finished but not made public. </span>
                                        It was inspired in Khan Academy and Knewton Alta, but with extreme questions. Usually,
                                        when I hear somebody in the United States talking about Khan Academy, they usually
                                        mention it as being extremely easy, and because of that, they won't use. In other hand,
                                        Knewton Alta is not free, despite being very complete and incredibly hard in some of
                                        their assignments. So I decided to create one to myself, regarding topics of Derivatives,
                                        Integrals and Advanced Trigonometry. The link above showcases how the interface looks like.
                                        Today it has about 130 questions in total, of various topics. But I don't think I will make
                                        this project public anytime soon. It is just for practice to my Calculus I and II classes
                                        over the first and second semesters of College. It is important to mention that it was done
                                        using React and introduced me to the concepts of LaTeX mathematical expressions.
                                    </p>
                                </>
                                :
                                <>
                                    <p className={TextParagraph}>
                                        <span className="font-semibold">Esse projeto foi concluido, mas nao foi feito publico. </span>
                                        Ele foi inspirado em Khan Academy e Knewton Alta, mas com perguntas extremamente dificiles.
                                        Normalmente, quando ouvimos alguém nos Estados Unidos falando sobre Khan Academy, eles geralmente
                                        mencionar isso como sendo muito facil, e por isso eles nunca usam. Em outro hand,
                                        Knewton Alta nao e gratuito, mesmo sendo muito completa e muito dificil em alguns dos seus
                                        tarefas. Por isso, eu decidiu criar um para mim, em relação aos assuntos de Derivadas,
                                        Integrais e Trigonometria. O link acima mostra como a interface fica.
                                        Hoje tem 130 questões em total, de diversos temas. Mas não sei se vou fazer este projeto publico
                                        em tempo algum. Ele é apenas para praticar minhas matérias I e II do primeiro e segundo semestres de
                                        College. E importante ressaltar que foi feito usando React e introduzi o meu desenvolvimento
                                        em LaTeX.
                                    </p>
                                </>
                            }
                        </div>
                    </div>
                </section>
                <h1 className="dark:text-sky-300 font-bold text-2xl">
                    TypeScript
                </h1>
                <section className="flex flex-col gap-16">
                    <div className="flex flex-col gap-2">
                        <h2 className="dark:text-purple-400 font-bold text-xl">
                            {isEnglish ? "Remake TutorLoL in" : "Remake TutorLoL em"} TypeScript
                            {isEnglish ? " - Current Version" : " - Versão Atual"}
                        </h2>
                        <div className="flex flex-col gap-2 ml-8">
                            <a
                                className={AriaLink}
                                href="https://front.tutorlol.com">
                                https://front.tutorlol.com
                            </a>
                            {isEnglish ?
                                <>
                                    <p className={TextParagraph}>
                                        This was the first attempt of remaking TutorLoL. TypeScript was choosen because
                                        it effectively guaranteed safety when performing calculations, and avoided
                                        unexpected erros involving strings, NaN and infinite results. In frontend, it used
                                        React, with the framework Vite to compose the interface. It followed the project
                                        structure pattern of NextJS. The code is well optimized, the algorithm was completely
                                        rewritten, and frontend had massive improvements in desing. It was released just to
                                        keep the current users of the main project of TutorLoL JS, and today sum a total of
                                        1000 users and 8750 page views. Can be obtained in Microsoft Store, that distributes
                                        a C# program that contains a webview to the main website, and integrate minor functions.
                                        Below there's a preview of how better the design is, compared to the first version.
                                    </p>
                                    <img
                                        src="/ts_tutorlol_1.png"
                                        className={ImageMargin}
                                        alt=""
                                    />
                                </>
                                :
                                <>
                                    <p className={TextParagraph}>
                                        <span className="font-semibold">Esse foi o primeiro tentativa de remake do TutorLoL.</span>
                                        TypeScript foi escolhido porque ela garante segurança ao realizar calculos, e evita erros
                                        inesperados envolvendo strings, NaN e resultados infinitos. No frontend, foi utilizado React,
                                        com o framework Vite para composicao da interface. Seguiu a estrutura de projeto do NextJS.
                                        O codigo foi bem otimizado, o algoritmo foi completamente reescrito, e o frontend teve melhorias
                                        no desing. Ele foi liberado apenas para manter os usuários atuais do projeto TutorLoL JS, e hoje
                                        sum um total de 1000 usuários e 8750 visualizacoes de pagina. Pode ser obtido na Microsoft Store, que distribui um programa C# que contém uma webview para o site principal, e integra funções menores.
                                        Abaixo tem uma previsão de como o design ficou melhor, comparado a versão inicial.
                                    </p>
                                    <img
                                        src="/ts_tutorlol_1.png"
                                        className={ImageMargin}
                                        alt=""
                                    />
                                </>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="dark:text-purple-400 font-bold text-xl">
                            {isEnglish ? "Remake of Periodic Table Game in" : "Remake do Jogo da Tabela Periódica em"} TypeScript
                            {isEnglish ? " - Current Version" : " - Versão Atual"}
                        </h2>
                        <div className="flex flex-col gap-2 ml-8">
                            <a
                                className={AriaLink}
                                href="https://westboca.tutorlol.com/react/periodictable">
                                https://westboca.tutorlol.com/react/periodictable
                            </a>
                            <a
                                className={AriaLink}
                                href="https://github.com/LuizGomes56/PeriodicTable">
                                https://github.com/LuizGomes56/PeriodicTable
                            </a>
                            {isEnglish ?
                                <>
                                    <p className={TextParagraph}>
                                        Remake of collab Periodic Table Game. Created new game modes, introduced a better design,
                                        new settings and better game experience, as well as mobile adaptations. This project
                                        introduces the best way to memorize the periodic table, which is by transforming it into a game.
                                        Later, it will include a leadboard, in which you can test how good you are compared to other
                                        players within the same gamemode.
                                    </p>
                                    <img
                                        src="/ts_periodic_table_1.png"
                                        alt=""
                                        className={ImageMargin}
                                    />
                                </> : <>
                                    <p className={TextParagraph}>
                                        <span className="font-semibold">Esse foi o primeiro remake do Jogo da Tabela Periódica.</span>
                                        Criado novos modos de jogo, introduzido um melhor desing, novas configurações e melhor experiência de jogo, bem como adptações mobile.
                                        Este projeto introduz o melhor jeito de memorizar a tabela períodica, que consiste em transforma-la em um jogo.
                                        Em seguida, ele inclui um leaderboard, no qual pode testar sua performance com outros jogadores dentro do mesmo modo de jogo.
                                    </p>
                                    <img
                                        src="/ts_periodic_table_1.png"
                                        alt=""
                                        className={ImageMargin}
                                    />
                                </>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="dark:text-purple-400 font-bold text-xl">
                            {isEnglish ? "My Resumé" : "Meu Currículo"}
                        </h2>
                        <div className="flex flex-col gap-2 ml-8">
                            <a
                                className={AriaLink}
                                href="https://westboca.tutorlol.com/resume">
                                https://westboca.tutorlol.com/resume
                            </a>
                            <a
                                className={AriaLink}
                                href="https://github.com/LuizGomes56/Resume">
                                https://github.com/LuizGomes56/Resume
                            </a>
                            {isEnglish ?
                                <>
                                    <p className={TextParagraph}>
                                        Not too much to mention in here, my resume was created in a website using React
                                        instead of using power point or google docs and make it as boring as many other
                                        candidates. It also includes a dark mode!
                                    </p>
                                    <img
                                        className={ImageMargin}
                                        src="/ts_resume_1.png"
                                        alt=""
                                    />
                                </>
                                :
                                <>
                                    <p className={TextParagraph}>
                                        Aqui não tem muito para mencionar, o meu currículo foi criado em um site, usando React,
                                        em vez de usar o power point ou o google docs.
                                        Também inclui um modo escuro!
                                    </p>
                                    <img
                                        className={ImageMargin}
                                        src="/ts_resume_1.png"
                                        alt=""
                                    />
                                </>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="dark:text-purple-400 font-bold text-xl">
                            {isEnglish ? "School assignments" : "Atividades escolares"}
                        </h2>
                        <div className="flex flex-col gap-2 ml-8">
                            <a
                                className={AriaLink}
                                href="https://westboca.tutorlol.com/ENC1101">
                                https://westboca.tutorlol.com/ENC1101
                            </a>
                            {isEnglish ?
                                <>
                                    <p className={TextParagraph}>
                                        Today, most of my school assignments I prefer to write it in a website,
                                        where I can change it anytime I like, and it is faster to write, and I
                                        can include images, videos, audios the way I want them to be, and how
                                        I want my professor's experience to be. It gives me more credibility in
                                        my assignments and reinforce my ability to quickly create websites.
                                        The link includes a hub with references to all of the published assignemnts
                                        for the class ENC1101.
                                    </p>
                                </>
                                :
                                <>
                                    <p className={TextParagraph}>
                                        Hoje, muitas das minhas tarefas escolares preferem escrever-se em um site,
                                        onde eu posso alterar o que quiser, e o site é mais rapido de escrever,
                                        e eu posso incluir imagens, videos, audios, como eu quero, e como eu quero
                                        minha experiência do professor. Ele me da mais credibilidade na minha tarefa
                                        e me da mais habilidade para criar sites rapidamente. O link inclui um hub
                                        com referências para todas as tarefas publicadas para a turma ENC1101.
                                    </p>
                                </>
                            }
                        </div>
                    </div>
                </section>
                <h1 className="dark:text-sky-300 font-bold text-2xl">
                    Rust
                </h1>
                <section className="flex flex-col gap-16">
                    <div className="flex flex-col gap-2">
                        <h2 className="dark:text-green-300 font-bold text-xl">
                            {isEnglish ? "Remake TutorLoL in Rust" : "Remake TutorLoL em Rust"}
                        </h2>
                        <div className="flex flex-col gap-2 ml-8">
                            <a
                                className={AriaLink}
                                href="https://github.com/LuizGomes56/RSRemakeTutorLoL">
                                https://github.com/LuizGomes56/RSRemakeTutorLoL
                            </a>
                            {isEnglish ?
                                <>
                                    <p className={TextParagraph}>
                                        Remake of my largest project using Rust language. Used of Actix to create a
                                        http server, Sea-Orm to fetch data from Postgres dabase assyncronously, and
                                        attempt to use multiple threads to accelerate the execution of the program.
                                        RWLocks used instead of Mutexes to avoid deadlocks. Despite all of this care,
                                        the program still runs slower than its version in TypeScript, and I still did
                                        not find out the reason behind it. This project will also be done using Go to
                                        adress if the same problem will occur, and verify if single-threaded TypeScript
                                        is better optimized to perform the required calculations that other languages
                                        will not do as effectively.
                                    </p>
                                </>
                                :
                                <>
                                    <p className={TextParagraph}>
                                        Remake do meu maior projeto usando o Rust. Usado do Actix para criar um servidor
                                        http, o Sea-Orm para buscar dados da base de dados Postgres assíncronamente e
                                        tentar usar threads paralelas para acelerar o processo de execução do programa.
                                        RWLocks usados em vez de Mutexes para evitar deadlocks. Alem disso, o programa ainda
                                        corre mais lento que a versão em TypeScript, e eu ainda não encontrei o motivo
                                        pelo qual isso ocorre. Este projeto tamém vai ser feito usando Go para conferir se
                                        o mesmo problema ocorre, e verificar se o programa em TypeScript é melhor
                                        otimizado para executar as operações que outros linguagens não conseguem fazerem
                                        efetivamente.
                                    </p>
                                </>
                            }
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}