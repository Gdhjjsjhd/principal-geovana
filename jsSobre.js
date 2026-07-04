function abrirCard1(nome) {
    document.getElementById("modal1").style.display = "flex";
    document.getElementById("container").classList.add("blur");
    document.getElementById("titulo1").innerText = nome;
}

function abrirCard2(nome) {
    document.getElementById("modal2").style.display = "flex";
    document.getElementById("container").classList.add("blur");
    document.getElementById("titulo2").innerText = nome;
}

function abrirCard3(nome) {
    document.getElementById("modal3").style.display = "flex";
    document.getElementById("container").classList.add("blur");
    document.getElementById("titulo3").innerText = nome;
}

function fecharCard1(event) {
    if (event.target.id === "modal1" || event.target.classList.contains("fechar")) {
        document.getElementById("modal1").style.display = "none";
        document.getElementById("container").classList.remove("blur");
    }
}

function fecharCard2(event) {
    if (event.target.id === "modal2" || event.target.classList.contains("fechar")) {
        document.getElementById("modal2").style.display = "none";
        document.getElementById("container").classList.remove("blur");
    }
}

function fecharCard3(event) {
    if (event.target.id === "modal3" || event.target.classList.contains("fechar")) {
        document.getElementById("modal3").style.display = "none";
        document.getElementById("container").classList.remove("blur");
    }
}

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

function pesquisar() {
    const pesquisa = document.getElementById("barraPesquisa").value.toLowerCase().trim();
    const idioma = localStorage.getItem("idioma") || "pt";

    if (pesquisa === "home" || pesquisa === "início" || pesquisa === "inicio") {
        window.location.href = "i.html";
    } else if (
        pesquisa === "desenvolvedores" ||
        pesquisa === "development" ||
        pesquisa === "developers" ||
        pesquisa === "desarrolladores" ||
        pesquisa === "開発者"
    ) {
        window.location.href = "desen.html";
    } else if (pesquisa === "sobre" || pesquisa === "about" || pesquisa === "acerca de" || pesquisa === "概要") {
        window.location.href = "sobre.html";
    } else if (pesquisa === "como jogar" || pesquisa === "how to play" || pesquisa === "cómo jugar" || pesquisa === "遊び方") {
        window.location.href = "comojogar.html";
    } else {
        const mensagem = idioma === "en"
            ? "Page not found"
            : idioma === "es"
                ? "Página no encontrada"
                : idioma === "jp"
                    ? "ページが見つかりません"
                    : "Página não encontrada";

        alert(mensagem);
    }
}

const traducoesSobre = {
    pt: {
        home: "Home",
        desenvolvimento: "Desenvolvimento",
        sobre: "Sobre",
        comoJogar: "Como Jogar",
        pesquisar: "Pesquisar...",
        footer: "© 2026 Grafitar. Todos os direitos reservados.",
        lightMode: "Modo Claro",
        darkMode: "Modo Escuro",
        ingles: "Inglês",
        portugues: "Português",
        espanhol: "Espanhol",
        japones: "Japonês",
        card1: "Missão",
        card2: "Visão",
        card3: "Valores",
        modal1: "incentivar o comércio de rua em londrina, focando nos jovens, fazendo com que eles descubram mais lojas e assim aumentando o lucro gerado pelo comércio.",
        modal2: "Visamos alcançar lucro o suficiente para fazer parcerias e expandir o nosso produto ao redor do país e talvez do mundo, até o ponto em que ele estabilize e gere lucro de forma estável.",
        modal3: "Nós acreditamos que com os métodos convencionais seria muito difícil fazer com que os jovens explorem a cidade por conta própria, assim desenvolvemos um app que une as carências do comércio com nosso ideal de espalhar diversão."
    },
    en: {
        home: "Home",
        desenvolvimento: "Development",
        sobre: "About",
        comoJogar: "How to Play",
        pesquisar: "Search...",
        footer: "© 2026 Grafitar. All rights reserved.",
        lightMode: "Light Mode",
        darkMode: "Dark Mode",
        ingles: "English",
        portugues: "Portuguese",
        espanhol: "Spanish",
        japones: "Japanese",
        card1: "Mission",
        card2: "Vision",
        card3: "Values",
        modal1: "Encourage street commerce in Londrina, focusing on youth so they discover more stores and increase local business revenue.",
        modal2: "We aim to achieve enough profit to form partnerships and expand our product around the country and possibly the world, until it stabilizes and generates steady revenue.",
        modal3: "We believe conventional methods make it hard for young people to explore the city on their own, so we developed an app that connects local commerce needs with our idea of spreading fun."
    },
    es: {
        home: "Inicio",
        desenvolvimento: "Desarrollo",
        sobre: "Acerca de",
        comoJogar: "Cómo jugar",
        pesquisar: "Buscar...",
        footer: "© 2026 Grafitar. Todos los derechos reservados.",
        lightMode: "Modo claro",
        darkMode: "Modo oscuro",
        ingles: "Inglés",
        portugues: "Portugués",
        espanhol: "Español",
        japones: "Japonés",
        card1: "Misión",
        card2: "Visión",
        card3: "Valores",
        modal1: "Fomentar el comercio callejero en Londrina, enfocándose en los jóvenes para que descubran más tiendas y aumenten los ingresos del comercio local.",
        modal2: "Nuestra meta es conseguir suficiente lucro para formar alianzas y expandir nuestro producto por todo el país y, posiblemente, por el mundo, hasta que se estabilice y genere ingresos de forma constante.",
        modal3: "Creemos que los métodos convencionales dificultan que los jóvenes exploren la ciudad por sí mismos, por eso desarrollamos una aplicación que une las necesidades del comercio con nuestra idea de transmitir diversión."
    },
    jp: {
        home: "ホーム",
        desenvolvimento: "開発",
        sobre: "概要",
        comoJogar: "遊び方",
        pesquisar: "検索...",
        footer: "© 2026 Grafitar。無断転載を禁じます。",
        lightMode: "ライトモード",
        darkMode: "ダークモード",
        ingles: "英語",
        portugues: "ポルトガル語",
        espanhol: "スペイン語",
        japones: "日本語",
        card1: "使命",
        card2: "ビジョン",
        card3: "価値観",
        modal1: "ロンドリーナのストリートコマースを盛り上げ、若者に焦点を当ててより多くの店舗を発見させ、地域商業の売上を増やします。",
        modal2: "私たちは、提携を築き、製品を国内だけでなく世界へ広げるために十分な利益を得ることを目指し、安定して収益を生み出せるまで成長させたいと考えています。",
        modal3: "私たちは、従来の方法では若者が自分たちで街を探検することが難しいと考え、商業のニーズと、楽しさを広めたいという私たちの理想を結びつけるアプリを開発しました。"
    }
};

function aplicarTexto(id, texto) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.textContent = texto;
    }
}

function atualizarMenuNavegacao(idioma) {
    const traducao = traducoesSobre[idioma] || traducoesSobre.pt;

    aplicarTexto("linkHome", traducao.home);
    aplicarTexto("linkDesenvolvimento", traducao.desenvolvimento);
    aplicarTexto("linkSobre", traducao.sobre);
    aplicarTexto("linkComoJogar", traducao.comoJogar);

    const linksDoMenu = document.querySelectorAll("header .menu a");
    if (linksDoMenu.length >= 4) {
        linksDoMenu[0].textContent = traducao.home;
        linksDoMenu[1].textContent = traducao.desenvolvimento;
        linksDoMenu[2].textContent = traducao.sobre;
        linksDoMenu[3].textContent = traducao.comoJogar;
    }
}

function atualizarTextoControles(idioma) {
    const traducao = traducoesSobre[idioma] || traducoesSobre.pt;
    const barraPesquisa = document.getElementById("barraPesquisa");
    if (barraPesquisa) {
        barraPesquisa.placeholder = traducao.pesquisar;
    }

    const footer = document.querySelector("footer p");
    if (footer) {
        footer.textContent = traducao.footer;
    }

    const lightModeBtn = document.getElementById("lightModeBtn");
    if (lightModeBtn) {
        lightModeBtn.textContent = traducao.lightMode;
    }

    const darkModeBtn = document.getElementById("darkModeBtn");
    if (darkModeBtn) {
        darkModeBtn.textContent = traducao.darkMode;
    }
}

function atualizarConteudoSobre(idioma) {
    const traducao = traducoesSobre[idioma] || traducoesSobre.pt;

    const cards = document.querySelectorAll(".container .card");
    if (cards.length >= 3) {
        cards[0].textContent = traducao.card1;
        cards[1].textContent = traducao.card2;
        cards[2].textContent = traducao.card3;
    }

    document.getElementById("titulo1").textContent = traducao.card1;
    document.getElementById("titulo2").textContent = traducao.card2;
    document.getElementById("titulo3").textContent = traducao.card3;

    const modal1p = document.querySelector("#modal1 .modal-content p");
    const modal2p = document.querySelector("#modal2 .modal-content p");
    const modal3p = document.querySelector("#modal3 .modal-content p");

    if (modal1p) modal1p.textContent = traducao.modal1;
    if (modal2p) modal2p.textContent = traducao.modal2;
    if (modal3p) modal3p.textContent = traducao.modal3;
}

function configurarSelecaoIdioma(idioma) {
    const sel = document.getElementById("idioma");
    if (!sel) return;

    sel.innerHTML = "";
    const opcoes = [
        { value: "pt", label: "Português" },
        { value: "en", label: "English" },
        { value: "es", label: "Español" },
        { value: "jp", label: "日本語" }
    ];

    opcoes.forEach((opcao) => {
        const option = document.createElement("option");
        option.value = opcao.value;
        option.textContent = opcao.label;
        sel.appendChild(option);
    });

    sel.value = idioma;
}

function aplicarIdiomaSobre(lang) {
    const idiomaAtual = traducoesSobre[lang] ? lang : "pt";

    atualizarMenuNavegacao(idiomaAtual);
    atualizarTextoControles(idiomaAtual);
    atualizarConteudoSobre(idiomaAtual);
    configurarSelecaoIdioma(idiomaAtual);

    localStorage.setItem("idioma", idiomaAtual);
}

document.addEventListener("DOMContentLoaded", () => {
    const sel = document.getElementById("idioma");
    const darkModeBtn = document.getElementById("darkModeBtn");
    const lightModeBtn = document.getElementById("lightModeBtn");
    const usBtn = document.getElementById("us");
    const ptBtn = document.getElementById("pt");
    const esBtn = document.getElementById("es");
    const jpBtn = document.getElementById("jp");
    const btn = document.getElementById("toggleBtn");
    const menu3 = document.getElementById("menu3");

    if (sel) {
        sel.addEventListener("change", () => aplicarIdiomaSobre(sel.value));
    }

    if (btn && menu3) {
        btn.addEventListener("click", () => {
            menu3.classList.toggle("hidden");
        });
    }

    if (menu3) {
        if (darkModeBtn) {
            darkModeBtn.addEventListener("click", () => {
                document.body.classList.add("dark-mode");
                localStorage.setItem("tema", "dark");
                menu3.classList.add("hidden");
            });
        }

        if (lightModeBtn) {
            lightModeBtn.addEventListener("click", () => {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("tema", "light");
                menu3.classList.add("hidden");
            });
        }

        if (usBtn) {
            usBtn.addEventListener("click", () => {
                aplicarIdiomaSobre("en");
                menu3.classList.add("hidden");
            });
        }

        if (ptBtn) {
            ptBtn.addEventListener("click", () => {
                aplicarIdiomaSobre("pt");
                menu3.classList.add("hidden");
            });
        }

        if (esBtn) {
            esBtn.addEventListener("click", () => {
                aplicarIdiomaSobre("es");
                menu3.classList.add("hidden");
            });
        }

        if (jpBtn) {
            jpBtn.addEventListener("click", () => {
                aplicarIdiomaSobre("jp");
                menu3.classList.add("hidden");
            });
        }
    }

    const idiomaSalvo = localStorage.getItem("idioma") || "pt";
    aplicarIdiomaSobre(idiomaSalvo);

    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});