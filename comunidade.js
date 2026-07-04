if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark-mode");
}

const traducoes = {
    pt: {
        noticias: "Notícias", eventos: "Eventos", sobre: "Sobre Nós",
        loja: "Loja", comunidade: "Comunidade", comoJogar: "Como Jogar", entrar: "Entrar",
        lightMode: "Modo Claro", darkMode: "Modo Escuro",
        footer: "© 2026 Grafitar - Todos os direitos reservados.",
        bannerTitulo: "Comunidade Grafitar",
        tituloRanking: "🏆 Rankings Mundiais",
        tituloEstatisticas: "📊 Estatísticas da Comunidade",

        thPosicao: "Posição", thJogador: "Jogador", thConquista: "Conquista",

        rankings: [
            {
                titulo: "🎨 Mais Tintas Desbloqueadas",
                coluna: "Tintas",
                dados: [
                    { pos: "🥇 1", jogador: "StreetKing",    valor: "2.547" },
                    { pos: "🥈 2", jogador: "GrafiteiroBR",  valor: "2.430" },
                    { pos: "🥉 3", jogador: "SprayMaster",   valor: "2.180" },
                ]
            },
            {
                titulo: "💀 Chefes Derrotados",
                coluna: "Chefes",
                dados: [
                    { pos: "🥇 1", jogador: "DarkPaint",  valor: "312" },
                    { pos: "🥈 2", jogador: "ArtHunter",  valor: "295" },
                    { pos: "🥉 3", jogador: "UrbanKing",  valor: "278" },
                ]
            },
            {
                titulo: "🪙 Moedas Coletadas",
                coluna: "Moedas",
                dados: [
                    { pos: "🥇 1", jogador: "GoldSpray",   valor: "1.250.000" },
                    { pos: "🥈 2", jogador: "MasterArt",   valor: "1.100.000" },
                    { pos: "🥉 3", jogador: "PixelPaint",  valor: "980.000" },
                ]
            },
        ],

        stats: [
            { titulo: "Jogadores Registrados", numero: "124.582" },
            { titulo: "Grafites Descobertos",  numero: "2.481"   },
            { titulo: "Chefes Derrotados",     numero: "57.391"  },
            { titulo: "Moedas Coletadas",      numero: "89M"     },
        ],

        semana: {
            titulo: "⭐ Jogador da Semana",
            jogador: "GrafiteiroBR",
            conquista: "Primeiro jogador a desbloquear todos os grafites históricos de Londrina."
        }
    },
    en: {
        noticias: "News", eventos: "Events", sobre: "About Us",
        loja: "Store", comunidade: "Community", comoJogar: "How to Play", entrar: "Log In",
        lightMode: "Light Mode", darkMode: "Dark Mode",
        footer: "© 2026 Grafitar - All rights reserved.",
        bannerTitulo: "Grafitar Community",
        tituloRanking: "🏆 World Rankings",
        tituloEstatisticas: "📊 Community Statistics",
        thPosicao: "Position", thJogador: "Player", thConquista: "Achievement",
        rankings: [
            {
                titulo: "🎨 Most Paints Unlocked",
                coluna: "Paints",
                dados: [
                    { pos: "🥇 1", jogador: "StreetKing",   valor: "2,547" },
                    { pos: "🥈 2", jogador: "GrafiteiroBR", valor: "2,430" },
                    { pos: "🥉 3", jogador: "SprayMaster",  valor: "2,180" },
                ]
            },
            {
                titulo: "💀 Bosses Defeated",
                coluna: "Bosses",
                dados: [
                    { pos: "🥇 1", jogador: "DarkPaint", valor: "312" },
                    { pos: "🥈 2", jogador: "ArtHunter", valor: "295" },
                    { pos: "🥉 3", jogador: "UrbanKing", valor: "278" },
                ]
            },
            {
                titulo: "🪙 Coins Collected",
                coluna: "Coins",
                dados: [
                    { pos: "🥇 1", jogador: "GoldSpray",  valor: "1,250,000" },
                    { pos: "🥈 2", jogador: "MasterArt",  valor: "1,100,000" },
                    { pos: "🥉 3", jogador: "PixelPaint", valor: "980,000"   },
                ]
            },
        ],
        stats: [
            { titulo: "Registered Players",    numero: "124,582" },
            { titulo: "Graffiti Discovered",   numero: "2,481"   },
            { titulo: "Bosses Defeated",       numero: "57,391"  },
            { titulo: "Coins Collected",       numero: "89M"     },
        ],
        semana: {
            titulo: "⭐ Player of the Week",
            jogador: "GrafiteiroBR",
            conquista: "First player to unlock all historical graffiti in Londrina."
        }
    },
    es: {
        noticias: "Noticias", eventos: "Eventos", sobre: "Sobre Nosotros",
        loja: "Tienda", comunidade: "Comunidad", comoJogar: "Cómo Jugar", entrar: "Entrar",
        lightMode: "Modo Claro", darkMode: "Modo Oscuro",
        footer: "© 2026 Grafitar - Todos los derechos reservados.",
        bannerTitulo: "Comunidad Grafitar",
        tituloRanking: "🏆 Rankings Mundiales",
        tituloEstatisticas: "📊 Estadísticas de la Comunidad",
        thPosicao: "Posición", thJogador: "Jugador", thConquista: "Logro",
        rankings: [
            {
                titulo: "🎨 Más Pinturas Desbloqueadas",
                coluna: "Pinturas",
                dados: [
                    { pos: "🥇 1", jogador: "StreetKing",   valor: "2.547" },
                    { pos: "🥈 2", jogador: "GrafiteiroBR", valor: "2.430" },
                    { pos: "🥉 3", jogador: "SprayMaster",  valor: "2.180" },
                ]
            },
            {
                titulo: "💀 Jefes Derrotados",
                coluna: "Jefes",
                dados: [
                    { pos: "🥇 1", jogador: "DarkPaint", valor: "312" },
                    { pos: "🥈 2", jogador: "ArtHunter", valor: "295" },
                    { pos: "🥉 3", jogador: "UrbanKing", valor: "278" },
                ]
            },
            {
                titulo: "🪙 Monedas Recolectadas",
                coluna: "Monedas",
                dados: [
                    { pos: "🥇 1", jogador: "GoldSpray",  valor: "1.250.000" },
                    { pos: "🥈 2", jogador: "MasterArt",  valor: "1.100.000" },
                    { pos: "🥉 3", jogador: "PixelPaint", valor: "980.000"   },
                ]
            },
        ],
        stats: [
            { titulo: "Jugadores Registrados",  numero: "124.582" },
            { titulo: "Grafitis Descubiertos",  numero: "2.481"   },
            { titulo: "Jefes Derrotados",       numero: "57.391"  },
            { titulo: "Monedas Recolectadas",   numero: "89M"     },
        ],
        semana: {
            titulo: "⭐ Jugador de la Semana",
            jogador: "GrafiteiroBR",
            conquista: "Primer jugador en desbloquear todos los grafitis históricos de Londrina."
        }
    },
    jp: {
        noticias: "ニュース", eventos: "イベント", sobre: "私たちについて",
        loja: "ストア", comunidade: "コミュニティ", comoJogar: "遊び方", entrar: "ログイン",
        lightMode: "ライトモード", darkMode: "ダークモード",
        footer: "© 2026 Grafitar - 無断転載を禁じます。",
        bannerTitulo: "Grafitar コミュニティ",
        tituloRanking: "🏆 ワールドランキング",
        tituloEstatisticas: "📊 コミュニティ統計",
        thPosicao: "順位", thJogador: "プレイヤー", thConquista: "実績",
        rankings: [
            {
                titulo: "🎨 アンロックペイント数",
                coluna: "ペイント",
                dados: [
                    { pos: "🥇 1", jogador: "StreetKing",   valor: "2,547" },
                    { pos: "🥈 2", jogador: "GrafiteiroBR", valor: "2,430" },
                    { pos: "🥉 3", jogador: "SprayMaster",  valor: "2,180" },
                ]
            },
            {
                titulo: "💀 ボス撃破数",
                coluna: "ボス",
                dados: [
                    { pos: "🥇 1", jogador: "DarkPaint", valor: "312" },
                    { pos: "🥈 2", jogador: "ArtHunter", valor: "295" },
                    { pos: "🥉 3", jogador: "UrbanKing", valor: "278" },
                ]
            },
            {
                titulo: "🪙 獲得コイン数",
                coluna: "コイン",
                dados: [
                    { pos: "🥇 1", jogador: "GoldSpray",  valor: "1,250,000" },
                    { pos: "🥈 2", jogador: "MasterArt",  valor: "1,100,000" },
                    { pos: "🥉 3", jogador: "PixelPaint", valor: "980,000"   },
                ]
            },
        ],
        stats: [
            { titulo: "登録プレイヤー数",     numero: "124,582" },
            { titulo: "発見されたグラフィティ", numero: "2,481"  },
            { titulo: "ボス撃破数",           numero: "57,391"  },
            { titulo: "獲得コイン数",         numero: "89M"     },
        ],
        semana: {
            titulo: "⭐ 今週のプレイヤー",
            jogador: "GrafiteiroBR",
            conquista: "ロンドリーナのすべての歴史的グラフィティをアンロックした最初のプレイヤー。"
        }
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

    document.querySelector("footer").textContent = t.footer;

    document.querySelector(".banner h1").textContent = t.bannerTitulo;


    const titulos = document.querySelectorAll(".titulo");
    if (titulos[0]) titulos[0].textContent = t.tituloRanking;
    if (titulos[1]) titulos[1].textContent = t.tituloEstatisticas;


    const rankingEls = document.querySelectorAll(".ranking:not(:last-of-type)");
    rankingEls.forEach((el, i) => {
        const r = t.rankings[i];
        if (!r) return;
        el.querySelector("h2").textContent = r.titulo;
        const ths = el.querySelectorAll("th");
        if (ths[0]) ths[0].textContent = t.thPosicao;
        if (ths[1]) ths[1].textContent = t.thJogador;
        if (ths[2]) ths[2].textContent = r.coluna;
        const trs = el.querySelectorAll("tr:not(:first-child)");
        trs.forEach((tr, j) => {
            const d = r.dados[j];
            if (!d) return;
            const tds = tr.querySelectorAll("td");
            if (tds[0]) tds[0].textContent = d.pos;
            if (tds[1]) tds[1].textContent = d.jogador;
            if (tds[2]) tds[2].textContent = d.valor;
        });
    });


    const cards = document.querySelectorAll(".cards .card");
    cards.forEach((card, i) => {
        const s = t.stats[i];
        if (!s) return;
        card.querySelector("h3").textContent          = s.titulo;
        card.querySelector(".numero").textContent     = s.numero;
    });


    const semanaEl = document.querySelector(".ranking:last-of-type");
    if (semanaEl) {
        semanaEl.querySelector("h2").textContent = t.semana.titulo;
        const ths = semanaEl.querySelectorAll("th");
        if (ths[0]) ths[0].textContent = t.thJogador;
        if (ths[1]) ths[1].textContent = t.thConquista;
        const tds = semanaEl.querySelectorAll("td");
        if (tds[0]) tds[0].textContent = t.semana.jogador;
        if (tds[1]) tds[1].textContent = t.semana.conquista;
    }

    localStorage.setItem("idioma", idioma);
}

document.addEventListener("DOMContentLoaded", () => {
    trocarIdioma(localStorage.getItem("idioma") || "pt");

    const toggleBtn = document.getElementById("toggleBtn");
    const menu3     = document.getElementById("menu3");

    toggleBtn.addEventListener("click", () => menu3.classList.toggle("hidden"));

    document.addEventListener("click", (e) => {
        if (!e.target.closest("#container1")) menu3.classList.add("hidden");
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