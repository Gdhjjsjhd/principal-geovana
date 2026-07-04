if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark-mode");
}

const traducoesEventos = {
    pt: {
        noticias: "Notícias",
        menuEventos: "Eventos",
        sobre: "Sobre Nós",
        loja: "Loja",
        comunidade: "Comunidade",
        comoJogar: "Como Jogar",
        entrar: "Entrar",

        tabTodos: "Todos",
        tabAtivos: "Ativos",
        tabEmBreve: "Em breve",
        tabFinalizados: "Finalizados",

        lightMode: "Modo Claro",
        darkMode: "Modo Escuro",

        footer: "© 2026 Grafitar. Todos os direitos reservados.",

        status: {
            ativo: "ATIVO",
            breve: "EM BREVE",
            finalizado: "FINALIZADO"
        },

        listaEventos: [
            {
                titulo: "Caçada Cultural",
                texto: "Explore pontos históricos e ganhe moedas especiais durante o evento.",
                btn: "Participar"
            },
            {
                titulo: "Grafite Urbano",
                texto: "Crie artes pelo mapa e desbloqueie skins exclusivas.",
                btn: "Participar"
            },
            {
                titulo: "Desafio Noturno",
                texto: "Eventos especiais durante a noite com recompensas raras.",
                btn: "Em breve"
            },
            {
                titulo: "Primeira Exposição",
                texto: "Evento inicial do Grafitar com artes da comunidade.",
                btn: "Ver resultado"
            }
        ]
    }
};

function trocarIdioma(idioma) {
    const t = traducoesEventos[idioma] || traducoesEventos.pt;

    const navIds = [
        "linkNoticias",
        "linkEventos",
        "linkSobre",
        "linkLoja",
        "linkComunidade",
        "linkComoJogar",
        "linkEntrar"
    ];

    const navChaves = [
        "noticias",
        "menuEventos",
        "sobre",
        "loja",
        "comunidade",
        "comoJogar",
        "entrar"
    ];

    navIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) el.textContent = t[navChaves[i]];
    });

    const tabs = [
        t.tabTodos,
        t.tabAtivos,
        t.tabEmBreve,
        t.tabFinalizados
    ];

    document.querySelectorAll(".tab").forEach((tab, i) => {
        if (tabs[i]) tab.textContent = tabs[i];
    });

    document.querySelectorAll(".card").forEach((card, i) => {
        const ev = t.listaEventos[i];
        if (!ev) return;

        card.querySelector("h3").textContent = ev.titulo;
        card.querySelector("p").textContent = ev.texto;
        card.querySelector("button").textContent = ev.btn;

        const status = card.querySelector(".status");
        if (status) {
            if (status.classList.contains("ativo")) status.textContent = t.status.ativo;
            if (status.classList.contains("breve")) status.textContent = t.status.breve;
            if (status.classList.contains("finalizado")) status.textContent = t.status.finalizado;
        }
    });

    const footer = document.getElementById("footerTexto");
    if (footer) footer.textContent = t.footer;

    localStorage.setItem("idioma", idioma);
}

document.addEventListener("DOMContentLoaded", () => {
    trocarIdioma(localStorage.getItem("idioma") || "pt");

    const toggleBtn = document.getElementById("toggleBtn");
    const menu3 = document.getElementById("menu3");

    toggleBtn.addEventListener("click", () => {
        menu3.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest("#container1")) {
            menu3.classList.add("hidden");
        }
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

    const filtroParaClasse = {
        todos: null,
        ativos: "ativo",
        breve: "breve",
        finalizados: "finalizado"
    };

    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".tab").forEach(t => {
                t.classList.remove("ativo");
            });

            tab.classList.add("ativo");

            const filtro = tab.dataset.filtro;

            document.querySelectorAll(".card").forEach(card => {
                if (filtro === "todos") {
                    card.style.display = "flex";
                } else {
                    card.style.display = card.classList.contains(filtroParaClasse[filtro])
                        ? "flex"
                        : "none";
                }
            });
        });
    });
});