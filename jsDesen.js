if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark-mode");
}

const traducoes = {
    pt: {

        noticias: "Notícias", eventos: "Eventos", sobre: "Sobre Nós",
        loja: "Loja", comunidade: "Comunidade", comoJogar: "Como Jogar", entrar: "Entrar",
        footer: "© 2026 Grafitar. Todos os direitos reservados.",
        textoPrincipal:`A ideia surgiu devido às experiências passadas que tivemos com o Idheaton. Um membro do grupo estava pensando em como unir os interesses dos jovens de forma agradável e utilizando um tema que todo o grupo gostava. A partir disso, utilizamos o jogo Pokémon GO como referência. Partindo dele, pensamos em como poderíamos incentivar as pessoas a explorarem a cidade, aprenderem sobre sua história e cultura e, ao mesmo tempo, se divertirem.\n \nFoi então que surgiu a ideia de criar um jogo que utilizasse elementos de exploração e interação com locais reais, permitindo que os jogadores visitassem pontos históricos, artísticos e culturais para completar desafios, conquistar recompensas e adquirir novos conhecimentos. Dessa forma, o projeto busca transformar a cidade em um ambiente de aprendizado dinâmico e envolvente, aproximando os jovens de sua própria comunidade por meio da tecnologia e da gamificação. \n \nAlém de promover a valorização do patrimônio cultural, o jogo também incentiva a atividade física, a socialização entre os participantes e o desenvolvimento do senso de pertencimento à cidade. Nosso objetivo é mostrar que aprender sobre a história e a cultura local pode ser uma experiência divertida, acessível e significativa para todos.`,
  
        secEquipe: "Equipe", secEmpresa: "Empresa", secCanvas: "Canvas", secHistoria: "Nossa História",
        
        lightMode: "Modo Claro", darkMode: "Modo Escuro",

        equipe: [
            { nome: "Gabriel", desc: "CEO e desenvolvedor principal." },
            { nome: "Gustavo", desc: "Responsável por planejamento." },
            { nome: "Miguel",  desc: "Responsável por design." },
            { nome: "Sergio",  desc: "Responsável por marketing." },
            { nome: "Alysson", desc: "Responsável por suporte." },
        ],

        empresa: [
            { titulo: "Missão",  desc: "Incentivar o comércio de rua em Londrina, focando nos jovens, fazendo com que eles descubram mais lojas e assim aumentando o lucro gerado pelo comércio." },
            { titulo: "Visão",   desc: "Visamos alcançar lucro o suficiente para fazer parcerias e expandir o nosso produto ao redor do país e talvez do mundo, até o ponto em que ele estabilize e gere lucro de forma estável." },
            { titulo: "Valores", desc: "Nós acreditamos que com os métodos convencionais seria muito difícil fazer com que os jovens explorem a cidade por conta própria, assim desenvolvemos um app que une as carências do comércio com nosso ideal de espalhar diversão." },
        ],
 
        canvas: [
            { titulo: "Parcerias chaves",      desc: "Lojas em gerais de Londrina, artistas e lojas de tintas como Grafitex." },
            { titulo: "Atividades chaves",     desc: "Criação do aplicativo, buscas por artistas e conversar com os influenciadores." },
            { titulo: "Recursos chaves",       desc: "Pintores e recursos, nós mesmos e programadores para o aplicativo." },
            { titulo: "Proposta de valor",     desc: "A diferença está na presença artística de nosso marketing por meio de grafismos artísticos do comércio por modo de gamificação no nosso aplicativo." },
            { titulo: "Relacionamento",        desc: "Por meio do WhatsApp e outras redes sociais." },
            { titulo: "Canais",                desc: "Parcerias com Influenciadores, conversa pessoalmente com os donos das empresas e publicações em redes sociais." },
            { titulo: "Segmentos de clientes", desc: "Donos do comércio e público em geral." },
            { titulo: "Estrutura de custos",   desc: "Criação do aplicativo, custos gerais dos artistas, campanha de marketing do nosso projeto." },
            { titulo: "Fontes de receitas",    desc: "Aluguel das empresas que contratam a gente e compras de produtos dentro do aplicativo." },
        ],
    },
    en: {
        noticias: "News", eventos: "Events", sobre: "About Us",
        loja: "Store", comunidade: "Community", comoJogar: "How to Play", entrar: "Log In",
        footer: "© 2026 Grafitar. All rights reserved.",
        textoPrincipal:`The idea stemmed from our past experiences with Idheaton. A group member was considering how to bring together the interests of young people in an enjoyable way, using a theme that appealed to the entire group. We drew inspiration from the game Pokémon GO, using it as a starting point to brainstorm ways to encourage people to explore the city, learn about its history and culture, and have fun at the same time.\n \nThat is how the concept of a game incorporating exploration and interaction with real-world locations emerged. It allows players to visit historical, artistic, and cultural sites to complete challenges, earn rewards, and gain new knowledge. In this way, the project seeks to transform the city into a dynamic and engaging learning environment, bringing young people closer to their community through technology and gamification.\n \n Beyond fostering an appreciation for cultural heritage, the game also encourages physical activity, social interaction among participants, and a sense of belonging to the city. Our goal is to demonstrate that learning about local history and culture can be a fun, accessible, and meaningful experience for everyone.`,
        secEquipe: "Team", secEmpresa: "Company", secCanvas: "Canvas", secHistoria: "Our Story",
        lightMode: "Light Mode", darkMode: "Dark Mode",
        equipe: [
            { nome: "Gabriel", desc: "CEO and lead developer." },
            { nome: "Gustavo", desc: "Responsible for planning." },
            { nome: "Miguel",  desc: "Responsible for design." },
            { nome: "Sergio",  desc: "Responsible for marketing." },
            { nome: "Alysson", desc: "Responsible for support." },
        ],
        empresa: [
            { titulo: "Mission", desc: "Encourage street commerce in Londrina, focusing on young people, making them discover more stores and increasing commerce revenue." },
            { titulo: "Vision",  desc: "We aim to reach enough profit to form partnerships and expand our product throughout the country and possibly the world, until it stabilizes and generates steady income." },
            { titulo: "Values",  desc: "We believe conventional methods would make it very hard for young people to explore the city on their own, so we built an app that bridges commerce needs with our goal of spreading fun." },
        ],
        canvas: [
            { titulo: "Key Partnerships",   desc: "General stores in Londrina, artists and paint shops like Grafitex." },
            { titulo: "Key Activities",     desc: "Building the app, finding artists and talking to influencers." },
            { titulo: "Key Resources",      desc: "Painters and resources, ourselves and developers for the app." },
            { titulo: "Value Proposition",  desc: "Our difference lies in the artistic presence of our marketing through artistic graffiti of commerce via gamification in our app." },
            { titulo: "Relationships",      desc: "Through WhatsApp and other social media." },
            { titulo: "Channels",           desc: "Influencer partnerships, direct conversations with business owners and social media posts." },
            { titulo: "Customer Segments",  desc: "Business owners and the general public." },
            { titulo: "Cost Structure",     desc: "App development, general artist costs, marketing campaign for our project." },
            { titulo: "Revenue Streams",    desc: "Business rental fees and in-app product purchases." },
        ],
        
    },
    es: {
        noticias: "Noticias", eventos: "Eventos", sobre: "Sobre Nosotros",
        loja: "Tienda", comunidade: "Comunidad", comoJogar: "Cómo Jugar", entrar: "Entrar",
        textoPrincipal:`La idea surgió de nuestras experiencias previas con Idheaton. Un miembro del grupo reflexionaba sobre cómo aunar los intereses de los jóvenes de una manera amena, empleando una temática que resultara atractiva para todo el grupo. Nos inspiramos en el juego Pokémon GO, utilizándolo como punto de partida para idear formas de animar a las personas a explorar la ciudad, conocer su historia y cultura, y divertirse al mismo tiempo. \n \nAsí nació el concepto de un juego que integra la exploración y la interacción con lugares del mundo real. El juego permite a los participantes visitar sitios históricos, artísticos y culturales para superar desafíos, obtener recompensas y adquirir nuevos conocimientos. De este modo, el proyecto busca transformar la ciudad en un entorno de aprendizaje dinámico y estimulante, acercando a los jóvenes a su comunidad mediante la tecnología y la gamificación.\n \nMás allá de fomentar la valoración del patrimonio cultural, el juego también promueve la actividad física, la interacción social entre los participantes y el sentido de pertenencia a la ciudad. Nuestro objetivo es demostrar que aprender sobre la historia y la cultura locales puede ser una experiencia divertida, accesible y significativa para todos.`,
        footer: "© 2026 Grafitar. Todos los derechos reservados.",
        secEquipe: "Equipo", secEmpresa: "Empresa", secCanvas: "Canvas", secHistoria: "Nuestra Historia",
        lightMode: "Modo Claro", darkMode: "Modo Oscuro",
        equipe: [
            { nome: "Gabriel", desc: "CEO y desarrollador principal." },
            { nome: "Gustavo", desc: "Responsable de planificación." },
            { nome: "Miguel",  desc: "Responsable de diseño." },
            { nome: "Sergio",  desc: "Responsable de marketing." },
            { nome: "Alysson", desc: "Responsable de soporte." },
        ],
        empresa: [
            { titulo: "Misión",  desc: "Incentivar el comercio callejero en Londrina, enfocándose en los jóvenes, haciendo que descubran más tiendas y aumentando las ganancias del comercio." },
            { titulo: "Visión",  desc: "Buscamos ganancias suficientes para asociarnos y expandir nuestro producto por el país y quizás el mundo, hasta que se estabilice y genere ingresos estables." },
            { titulo: "Valores", desc: "Creemos que los métodos convencionales dificultarían que los jóvenes exploren la ciudad solos, por eso creamos una app que une las carencias del comercio con nuestro ideal de difundir diversión." },
        ],
        canvas: [
            { titulo: "Alianzas clave",        desc: "Tiendas en general de Londrina, artistas y tiendas de pinturas como Grafitex." },
            { titulo: "Actividades clave",     desc: "Creación de la app, búsqueda de artistas y conversaciones con influencers." },
            { titulo: "Recursos clave",        desc: "Pintores y recursos, nosotros mismos y programadores para la app." },
            { titulo: "Propuesta de valor",    desc: "La diferencia está en la presencia artística de nuestro marketing mediante grafitis artísticos del comercio a través de la gamificación en nuestra app." },
            { titulo: "Relaciones",            desc: "A través de WhatsApp y otras redes sociales." },
            { titulo: "Canales",               desc: "Alianzas con influencers, conversaciones directas con dueños de negocios y publicaciones en redes sociales." },
            { titulo: "Segmentos de clientes", desc: "Dueños de negocios y público en general." },
            { titulo: "Estructura de costos",  desc: "Creación de la app, costos generales de artistas, campaña de marketing de nuestro proyecto." },
            { titulo: "Fuentes de ingresos",   desc: "Alquiler de las empresas que nos contratan y compras de productos dentro de la app." },
        ],
    },
    jp: {
        noticias: "ニュース", eventos: "イベント", sobre: "私たちについて",
        loja: "ストア", comunidade: "コミュニティ", comoJogar: "遊び方", entrar: "ログイン",
        textoPrincipal:`このアイデアは、私たちが以前参加した「Idheaton（アイドヒートン）」での経験から生まれました。グループのメンバーの一人が、全員の関心を引くテーマを使い、若者の興味・関心を楽しく一つにまとめる方法を模索していたのです。そこで私たちは『Pokémon GO』というゲームに着想を得て、それをヒントに、街を探索し、歴史や文化を学びながら、同時に楽しむための方法を検討し始めました。\n \nこうして、現実世界の場所を巡る探索や交流の要素を盛り込んだゲームというコンセプトが誕生しました。プレイヤーは歴史的・芸術的・文化的なスポットを訪れて課題をクリアし、報酬を獲得しながら、新たな知識を深めることができます。つまりこのプロジェクトは、テクノロジーとゲーミフィケーションの力を活用して街をダイナミックで魅力的な学習の場へと変え、若者と地域社会との結びつきを強めることを目指しているのです。\n \nこのゲームは、単に文化遺産への理解を深めるだけでなく、身体を動かすことや参加者同士の交流を促し、街への愛着や帰属意識を育むことにもつながります。私たちの目標は、地域の歴史や文化を学ぶことが、誰にとっても楽しく、気軽で、意義深い体験になり得ることを示すことです。`,
        footer: "© 2026 Grafitar。無断転載を禁じます。",
        secEquipe: "チーム", secEmpresa: "会社", secCanvas: "キャンバス", secHistoria: "私たちの物語",
        lightMode: "ライトモード", darkMode: "ダークモード",
        equipe: [
            { nome: "Gabriel", desc: "CEOおよびリード開発者。" },
            { nome: "Gustavo", desc: "計画担当。" },
            { nome: "Miguel",  desc: "デザイン担当。" },
            { nome: "Sergio",  desc: "マーケティング担当。" },
            { nome: "Alysson", desc: "サポート担当。" },
        ],
        empresa: [
            { titulo: "ミッション", desc: "ロンドリーナの路上商業を奨励し、若者が新しい店を発見して商業収益を増やすことに焦点を当てます。" },
            { titulo: "ビジョン",   desc: "国内外にパートナーシップを結び製品を拡大するのに十分な利益を目指し、安定した収益を生み出すことを目標とします。" },
            { titulo: "バリュー",   desc: "従来の方法では若者が街を探索することは難しいと考え、商業のニーズと楽しさを広めるという理想を結びつけたアプリを開発しました。" },
        ],
        canvas: [
            { titulo: "主要パートナー",         desc: "ロンドリーナの一般店舗、アーティスト、Grafitexなどの塗料店。" },
            { titulo: "主要活動",               desc: "アプリの開発、アーティストの発掘、インフルエンサーとの対話。" },
            { titulo: "主要リソース",           desc: "画家とリソース、私たち自身、アプリ用のプログラマー。" },
            { titulo: "バリュープロポジション", desc: "アプリ内でのゲーミフィケーションを通じた商業のアーティスティックなグラフィティマーケティングが私たちの強みです。" },
            { titulo: "顧客との関係",           desc: "WhatsAppやその他のSNSを通じて。" },
            { titulo: "チャネル",               desc: "インフルエンサーとのパートナーシップ、ビジネスオーナーとの直接対話、SNS投稿。" },
            { titulo: "顧客セグメント",         desc: "ビジネスオーナーと一般大衆。" },
            { titulo: "コスト構造",             desc: "アプリ開発、アーティストの一般費用、プロジェクトのマーケティングキャンペーン。" },
            { titulo: "収益源",                 desc: "企業のレンタル料とアプリ内製品購入。" },
        ],
    }
};

function trocarIdioma(idioma) {
    const t = traducoes[idioma] || traducoes.pt;


    document.getElementById("linkNoticias").textContent  = t.noticias;
    document.getElementById("linkEventos").textContent   = t.eventos;
    document.getElementById("linkSobre").textContent     = t.sobre;
    document.getElementById("linkLoja").textContent      = t.loja;
    document.getElementById("linkComunidade").textContent = t.comunidade;
    document.getElementById("linkComoJogar").textContent = t.comoJogar;
    document.getElementById("linkEntrar").textContent    = t.entrar;

  
    document.querySelector("footer p").textContent = t.footer;

   
    document.getElementById("lightModeBtn").textContent = t.lightMode;
    document.getElementById("darkModeBtn").textContent  = t.darkMode;


    const titulos = document.querySelectorAll(".section-title");
    if (titulos[0]) titulos[0].textContent = t.secEquipe;
    if (titulos[1]) titulos[1].textContent = t.secEmpresa;
    if (titulos[2]) titulos[2].textContent = t.secCanvas;
    if (titulos[3]) titulos[3].textContent = t.secHistoria;

    const historia = document.getElementById("textoHistoria");
        if (historia) historia.innerText = t.textoPrincipal;

  
    const cardsEquipe = document.querySelectorAll("section:nth-of-type(1) .card");
    cardsEquipe.forEach((card, i) => {
        const m = t.equipe[i];
        if (!m) return;
        const p = card.querySelector("p");
        if (p) p.textContent = m.nome;
        card.onclick = () => abrirModal(m.nome, m.desc);
    });

   
    const cardsEmpresa = document.querySelectorAll("section:nth-of-type(2) .card");
    cardsEmpresa.forEach((card, i) => {
        const m = t.empresa[i];
        if (!m) return;
        card.textContent = m.titulo;
        card.onclick = () => abrirModal(m.titulo, m.desc);
    });


    const cardsCanvas = document.querySelectorAll(".canvas-grid .card");
    cardsCanvas.forEach((card, i) => {
        const m = t.canvas[i];
        if (!m) return;
        card.textContent = m.titulo;
        card.onclick = () => abrirModal(m.titulo, m.desc);
    });

    localStorage.setItem("idioma", idioma);
}

function abrirModal(titulo, texto) {
    document.getElementById("modalTitulo").textContent = titulo;
    document.getElementById("modalTexto").textContent  = texto;
    document.getElementById("modal").classList.add("aberto");
}

function fecharModal() {
    document.getElementById("modal").classList.remove("aberto");
}

document.addEventListener("DOMContentLoaded", () => {
    trocarIdioma(localStorage.getItem("idioma") || "pt");


    document.getElementById("modal").addEventListener("click", (e) => {
        if (e.target.id === "modal") fecharModal();
    });


    const toggleBtn = document.getElementById("toggleBtn");
    const menu3     = document.getElementById("menu3");

    toggleBtn.addEventListener("click", () => menu3.classList.toggle("hidden"));

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".container1")) menu3.classList.add("hidden");
    });

    document.getElementById("lightModeBtn").addEventListener("click", () => {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("tema", "light");
        menu3.classList.add("hidden");
    });
    document.getElementById("darkModeBtn").addEventListener("click", () => {
        document.body.classList.add("dark-mode");
        localStorage.setItem("tema", "dark");
        menu3.classList.add("hidden");
    });

    document.getElementById("pt").addEventListener("click", () => { trocarIdioma("pt"); menu3.classList.add("hidden"); });
    document.getElementById("us").addEventListener("click", () => { trocarIdioma("en"); menu3.classList.add("hidden"); });
    document.getElementById("es").addEventListener("click", () => { trocarIdioma("es"); menu3.classList.add("hidden"); });
    document.getElementById("jp").addEventListener("click", () => { trocarIdioma("jp"); menu3.classList.add("hidden"); });
});