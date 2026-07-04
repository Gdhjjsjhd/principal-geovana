if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark-mode");
}

const traducoes = {
    pt: {
        noticias: "Notícias", eventos: "Eventos", sobre: "Sobre Nós",
        loja: "Loja", comunidade: "Comunidade", comoJogar: "Como Jogar", entrar: "Entrar",
        lightMode: "Modo Claro", darkMode: "Modo Escuro",
        footer: "© 2026 Grafitar. Todos os direitos reservados.",
        titulo: "Como Jogar",
        intro: "O Grafitar é um jogo de exploração urbana que conecta cultura, arte e comércio local de forma interativa. Inspirado em experiências de localização em tempo real, o jogo incentiva os jogadores a conhecerem novos locais, valorizarem a arte urbana e descobrirem pontos de interesse espalhados pela cidade.",
        secoes: [
            {
                h2: "🏪 Lojas Parceiras",
                ps: [
                    "Empresas e estabelecimentos podem se tornar parceiros do Grafitar ao disponibilizar espaços para a criação de grafites artísticos relacionados aos seus produtos, serviços ou identidade visual.",
                    "Além de contribuir para a valorização da arte urbana, essa iniciativa torna as fachadas mais atrativas para visitantes e clientes, ao mesmo tempo em que oferece visibilidade para artistas locais e fortalece a conexão entre cultura e comércio."
                ]
            },
            {
                h2: "🗺️ Explore a Cidade",
                ps: [
                    "O mapa do Grafitar funciona de maneira semelhante a um sistema de navegação urbana. Ao caminhar pela cidade, os jogadores podem localizar estabelecimentos parceiros, pontos culturais e atrações turísticas cadastradas na plataforma.",
                    "Quando um jogador permanece próximo de um ponto registrado por pelo menos 30 segundos, ele recebe moedas virtuais como recompensa pela exploração."
                ]
            },
            {
                h2: "🪙 Ganhe Recompensas",
                ps: ["As moedas obtidas durante a exploração podem ser utilizadas dentro do jogo para personalizar seu personagem e aprimorar sua experiência."],
                lista: ["Novas roupas e acessórios", "Skins exclusivas", "Tintas especiais", "Itens colecionáveis", "Equipamentos personalizados"]
            },
            {
                h2: "🎨 Construa Sua Identidade",
                ps: ["Conforme avança em sua jornada, o jogador desbloqueia novas opções de customização, permitindo criar um personagem único e representar seu próprio estilo artístico."]
            },
            {
                h2: "⚔️ Enfrente Chefes Históricos",
                ps: [
                    "Além da exploração, o Grafitar conta com desafios especiais localizados em pontos turísticos de Londrina.",
                    "Nesses locais, os jogadores poderão enfrentar chefes exclusivos inspirados na história, cultura e identidade da cidade, conquistando recompensas raras e avançando em sua trajetória dentro do jogo."
                ]
            },
            {
                h2: "🏆 Evolua e Entre para o Ranking",
                ps: [
                    "Ao coletar moedas, desbloquear tintas, visitar novos locais e derrotar chefes, os jogadores acumulam experiência e podem disputar posições nos rankings da comunidade.",
                    "Mostre seu progresso, compare suas conquistas com outros jogadores e torne-se uma referência dentro do universo Grafitar."
                ]
            },
        ]
    },
    en: {
        noticias: "News", eventos: "Events", sobre: "About Us",
        loja: "Store", comunidade: "Community", comoJogar: "How to Play", entrar: "Log In",
        lightMode: "Light Mode", darkMode: "Dark Mode",
        footer: "© 2026 Grafitar. All rights reserved.",
        titulo: "How to Play",
        intro: "Grafitar is an urban exploration game that connects culture, art and local commerce in an interactive way. Inspired by real-time location experiences, the game encourages players to discover new places, appreciate urban art and find points of interest scattered across the city.",
        secoes: [
            {
                h2: "🏪 Partner Stores",
                ps: [
                    "Businesses and establishments can become Grafitar partners by making spaces available for the creation of artistic graffiti related to their products, services or visual identity.",
                    "In addition to contributing to the appreciation of urban art, this initiative makes storefronts more attractive to visitors and customers, while offering visibility to local artists and strengthening the connection between culture and commerce."
                ]
            },
            {
                h2: "🗺️ Explore the City",
                ps: [
                    "The Grafitar map works similarly to an urban navigation system. While walking through the city, players can locate partner establishments, cultural spots and tourist attractions registered on the platform.",
                    "When a player stays near a registered point for at least 30 seconds, they receive virtual coins as a reward for exploring."
                ]
            },
            {
                h2: "🪙 Earn Rewards",
                ps: ["The coins earned during exploration can be used in the game to customize your character and enhance your experience."],
                lista: ["New clothes and accessories", "Exclusive skins", "Special paints", "Collectible items", "Custom equipment"]
            },
            {
                h2: "🎨 Build Your Identity",
                ps: ["As you progress through your journey, you unlock new customization options, allowing you to create a unique character and express your own artistic style."]
            },
            {
                h2: "⚔️ Face Historical Bosses",
                ps: [
                    "Beyond exploration, Grafitar features special challenges located at tourist spots in Londrina.",
                    "In these locations, players can face exclusive bosses inspired by the history, culture and identity of the city, earning rare rewards and advancing in their journey."
                ]
            },
            {
                h2: "🏆 Level Up and Join the Rankings",
                ps: [
                    "By collecting coins, unlocking paints, visiting new places and defeating bosses, players accumulate experience and can compete for positions in the community rankings.",
                    "Show your progress, compare your achievements with other players and become a reference in the Grafitar universe."
                ]
            },
        ]
    },
    es: {
        noticias: "Noticias", eventos: "Eventos", sobre: "Sobre Nosotros",
        loja: "Tienda", comunidade: "Comunidad", comoJogar: "Cómo Jugar", entrar: "Entrar",
        lightMode: "Modo Claro", darkMode: "Modo Oscuro",
        footer: "© 2026 Grafitar. Todos los derechos reservados.",
        titulo: "Cómo Jugar",
        intro: "Grafitar es un juego de exploración urbana que conecta cultura, arte y comercio local de forma interactiva. Inspirado en experiencias de localización en tiempo real, el juego anima a los jugadores a conocer nuevos lugares, valorar el arte urbano y descubrir puntos de interés por toda la ciudad.",
        secoes: [
            {
                h2: "🏪 Tiendas Asociadas",
                ps: [
                    "Empresas y establecimientos pueden convertirse en socios de Grafitar al poner a disposición espacios para la creación de grafitis artísticos relacionados con sus productos, servicios o identidad visual.",
                    "Además de contribuir a la valoración del arte urbano, esta iniciativa hace que las fachadas sean más atractivas para visitantes y clientes, al mismo tiempo que ofrece visibilidad a artistas locales y fortalece la conexión entre cultura y comercio."
                ]
            },
            {
                h2: "🗺️ Explora la Ciudad",
                ps: [
                    "El mapa de Grafitar funciona de manera similar a un sistema de navegación urbana. Al caminar por la ciudad, los jugadores pueden localizar establecimientos asociados, puntos culturales y atracciones turísticas registradas en la plataforma.",
                    "Cuando un jugador permanece cerca de un punto registrado durante al menos 30 segundos, recibe monedas virtuales como recompensa por la exploración."
                ]
            },
            {
                h2: "🪙 Gana Recompensas",
                ps: ["Las monedas obtenidas durante la exploración se pueden usar dentro del juego para personalizar tu personaje y mejorar tu experiencia."],
                lista: ["Ropa y accesorios nuevos", "Skins exclusivas", "Pinturas especiales", "Ítems coleccionables", "Equipamiento personalizado"]
            },
            {
                h2: "🎨 Construye Tu Identidad",
                ps: ["A medida que avanzas en tu aventura, desbloqueas nuevas opciones de personalización, lo que te permite crear un personaje único y representar tu propio estilo artístico."]
            },
            {
                h2: "⚔️ Enfrenta a los Jefes Históricos",
                ps: [
                    "Además de la exploración, Grafitar cuenta con desafíos especiales ubicados en puntos turísticos de Londrina.",
                    "En estos lugares, los jugadores podrán enfrentarse a jefes exclusivos inspirados en la historia, cultura e identidad de la ciudad, ganando recompensas raras y avanzando en su trayectoria."
                ]
            },
            {
                h2: "🏆 Evoluciona y Entra en el Ranking",
                ps: [
                    "Al recolectar monedas, desbloquear pinturas, visitar nuevos lugares y derrotar jefes, los jugadores acumulan experiencia y pueden competir por posiciones en los rankings de la comunidad.",
                    "Muestra tu progreso, compara tus logros con otros jugadores y conviértete en una referencia dentro del universo Grafitar."
                ]
            },
        ]
    },
    jp: {
        noticias: "ニュース", eventos: "イベント", sobre: "私たちについて",
        loja: "ストア", comunidade: "コミュニティ", comoJogar: "遊び方", entrar: "ログイン",
        lightMode: "ライトモード", darkMode: "ダークモード",
        footer: "© 2026 Grafitar。無断転載を禁じます。",
        titulo: "遊び方",
        intro: "Grafitarは、文化・アート・地域商業をインタラクティブにつなぐ都市探索ゲームです。リアルタイムの位置情報体験にインスパイアされており、プレイヤーが新しい場所を発見し、ストリートアートを楽しみ、街中に散らばるスポットを探索することを促します。",
        secoes: [
            {
                h2: "🏪 パートナーショップ",
                ps: [
                    "企業や店舗は、自社の商品・サービス・ブランドイメージに関連したアーティスティックなグラフィティを描くスペースを提供することで、Grafitarのパートナーになれます。",
                    "ストリートアートの価値を高めるだけでなく、店舗の外観を訪問者や顧客にとってより魅力的にし、地元アーティストへの注目度を高め、文化と商業のつながりを強化します。"
                ]
            },
            {
                h2: "🗺️ 街を探索しよう",
                ps: [
                    "Grafitarのマップは都市ナビゲーションシステムに似た仕組みです。街を歩きながら、パートナー店舗、文化スポット、観光名所をプラットフォーム上で見つけることができます。",
                    "登録スポットの近くに30秒以上いると、探索の報酬としてバーチャルコインを受け取れます。"
                ]
            },
            {
                h2: "🪙 報酬をゲットしよう",
                ps: ["探索で得たコインはゲーム内でキャラクターのカスタマイズや体験の向上に使えます。"],
                lista: ["新しい服やアクセサリー", "限定スキン", "特別なペイント", "コレクターズアイテム", "カスタム装備"]
            },
            {
                h2: "🎨 自分だけのキャラクターを作ろう",
                ps: ["旅が進むにつれて新しいカスタマイズオプションが解放され、唯一無二のキャラクターを作り、自分のアートスタイルを表現できます。"]
            },
            {
                h2: "⚔️ 歴史的なボスに挑もう",
                ps: [
                    "探索だけでなく、Grafitarにはロンドリーナの観光スポットに設置された特別なチャレンジがあります。",
                    "これらの場所では、街の歴史・文化・アイデンティティにインスパイアされた限定ボスと戦い、レアな報酬を獲得しながら冒険を進めることができます。"
                ]
            },
            {
                h2: "🏆 レベルアップしてランキングに挑もう",
                ps: [
                    "コインを集め、ペイントを解除し、新しい場所を訪れ、ボスを倒すことで経験値を積み、コミュニティランキングの上位を目指せます。",
                    "自分の進捗を見せて、他のプレイヤーと成果を比較し、Grafitarの世界での存在感を示しましょう。"
                ]
            },
        ]
    }
};

function trocarIdioma(idioma) {
    const t = traducoes[idioma] || traducoes.pt;


    document.getElementById("linkNoticias").textContent   = t.noticias;
    document.getElementById("linkEventos").textContent    = t.eventos;
    document.getElementById("linkSobre").textContent      = t.sobre;
    document.getElementById("linkLoja").textContent       = t.loja;
    document.getElementById("linkComunidade").textContent = t.comunidade;
    document.getElementById("linkComoJogar").textContent  = t.comoJogar;
    document.getElementById("linkEntrar").textContent     = t.entrar;


    document.getElementById("lightModeBtn").textContent = t.lightMode;
    document.getElementById("darkModeBtn").textContent  = t.darkMode;


    document.querySelector("footer p").textContent = t.footer;


    const secao = document.querySelector(".como-jogar");
    secao.querySelector("h1").textContent = t.titulo;


    secao.querySelector("p").textContent = t.intro;


    const h2s = secao.querySelectorAll("h2");
    h2s.forEach((h2, i) => {
        const s = t.secoes[i];
        if (!s) return;
        h2.textContent = s.h2;


        let el = h2.nextElementSibling;
        let pIdx = 0;
        while (el && el.tagName !== "H2") {
            if (el.tagName === "P" && s.ps[pIdx] !== undefined) {
                el.textContent = s.ps[pIdx];
                pIdx++;
            }
            if (el.tagName === "UL" && s.lista) {
                const lis = el.querySelectorAll("li");
                lis.forEach((li, j) => {
                    if (s.lista[j]) li.textContent = s.lista[j];
                });
            }
            el = el.nextElementSibling;
        }
    });

    localStorage.setItem("idioma", idioma);
}

document.addEventListener("DOMContentLoaded", () => {
    trocarIdioma(localStorage.getItem("idioma") || "pt");

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