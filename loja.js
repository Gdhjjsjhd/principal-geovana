if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark-mode");
}

const traducoes = {
    pt: {
        noticias: "Notícias", eventos: "Eventos", sobre: "Sobre Nós",
        loja: "Loja", comunidade: "Comunidade", comoJogar: "Como Jogar", entrar: "Entrar",
        lightMode: "Modo Claro", darkMode: "Modo Escuro",
        footer: "© 2026 Grafitar. Todos os direitos reservados.",
        moeda: "BRL", simbolo: "R$",
        bannerTitulo: "LOJA OFICIAL GRAFITAR",
        bannerTexto: "Desbloqueie conteúdos exclusivos, obtenha vantagens e personalize sua experiência.",
        bannerBtn: "COMPRAR AGORA",
        secOferta: "🔥 Oferta Especial",
        secPremium: "⭐ Passe Premium",
        secVip: "👑 Assinaturas VIP",
        secMoedas: "💎 Pacotes de Moedas",
        secPacotes: "🎁 Pacotes Especiais",
        secEvento: "🏆 Passe de Evento",
        secFaq: "❓ Perguntas Frequentes",
        btnComprar: "Comprar", btnAssinar: "Assinar",
        oferta: {
            titulo: "Pacote Explorador",
            desc: "Passe Premium + 1500 Moedas + Item Exclusivo",
            preco: 24.90
        },
        premium: [
            { titulo: "Passe Cultural Premium", desc: "Missões exclusivas, recompensas extras, itens especiais e progressão acelerada.", preco: 19.90, btn: "Comprar" }
        ],
        vip: [
            { titulo: "VIP Mensal",  desc: "Emblema VIP, moedas semanais, acesso antecipado a eventos.", preco: 14.90,  sufixo: "/mês", btn: "Assinar" },
            { titulo: "VIP Anual",   desc: "Todos os benefícios VIP com desconto exclusivo.",             preco: 119.90, sufixo: "/ano", btn: "Assinar" },
        ],
        moedas: [
            { titulo: "500 Moedas",   preco: 4.90  },
            { titulo: "1.200 Moedas", preco: 9.90  },
            { titulo: "2.500 Moedas", preco: 19.90 },
            { titulo: "7.000 Moedas", preco: 49.90 },
        ],
        pacotes: [
            { titulo: "Pacote Fundador", desc: "Título exclusivo, skin rara e 2.000 moedas.", preco: 29.90, btn: "Comprar" },
            { titulo: "Pacote Urbano",   desc: "Skin exclusiva, spray especial e moedas bônus.", preco: 19.90, btn: "Comprar" },
        ],
        evento: [
            { titulo: "Festival do Grafite 2026", desc: "Recompensas limitadas, desafios especiais e item exclusivo.", preco: 9.90, btn: "Comprar" }
        ],
        faq: [
            { p: "Como recebo meus itens?",  r: "Os itens são enviados automaticamente para sua conta após a confirmação do pagamento." },
            { p: "Posso pedir reembolso?",   r: "Consulte os termos de serviço para verificar as condições." },
        ]
    },
    en: {
        noticias: "News", eventos: "Events", sobre: "About Us",
        loja: "Store", comunidade: "Community", comoJogar: "How to Play", entrar: "Log In",
        lightMode: "Light Mode", darkMode: "Dark Mode",
        footer: "© 2026 Grafitar. All rights reserved.",
        moeda: "USD", simbolo: "$",
        bannerTitulo: "GRAFITAR OFFICIAL STORE",
        bannerTexto: "Unlock exclusive content, get advantages and personalize your experience.",
        bannerBtn: "SHOP NOW",
        secOferta: "🔥 Special Offer",
        secPremium: "⭐ Premium Pass",
        secVip: "👑 VIP Subscriptions",
        secMoedas: "💎 Coin Packages",
        secPacotes: "🎁 Special Bundles",
        secEvento: "🏆 Event Pass",
        secFaq: "❓ Frequently Asked Questions",
        btnComprar: "Buy", btnAssinar: "Subscribe",
        oferta: {
            titulo: "Explorer Bundle",
            desc: "Premium Pass + 1500 Coins + Exclusive Item",
            preco: 4.50
        },
        premium: [
            { titulo: "Cultural Premium Pass", desc: "Exclusive missions, extra rewards, special items and accelerated progression.", preco: 3.60, btn: "Buy" }
        ],
        vip: [
            { titulo: "Monthly VIP", desc: "VIP badge, weekly coins, early access to events.", preco: 2.70,  sufixo: "/mo",  btn: "Subscribe" },
            { titulo: "Annual VIP",  desc: "All VIP benefits with an exclusive discount.",      preco: 21.90, sufixo: "/yr",  btn: "Subscribe" },
        ],
        moedas: [
            { titulo: "500 Coins",   preco: 0.90 },
            { titulo: "1,200 Coins", preco: 1.80 },
            { titulo: "2,500 Coins", preco: 3.60 },
            { titulo: "7,000 Coins", preco: 9.00 },
        ],
        pacotes: [
            { titulo: "Founder Bundle", desc: "Exclusive title, rare skin and 2,000 coins.", preco: 5.40, btn: "Buy" },
            { titulo: "Urban Bundle",   desc: "Exclusive skin, special spray and bonus coins.", preco: 3.60, btn: "Buy" },
        ],
        evento: [
            { titulo: "Graffiti Festival 2026", desc: "Limited rewards, special challenges and exclusive item.", preco: 1.80, btn: "Buy" }
        ],
        faq: [
            { p: "How do I receive my items?", r: "Items are sent automatically to your account after payment confirmation." },
            { p: "Can I request a refund?",    r: "Please check the terms of service for refund conditions." },
        ]
    },
    es: {
        noticias: "Noticias", eventos: "Eventos", sobre: "Sobre Nosotros",
        loja: "Tienda", comunidade: "Comunidad", comoJogar: "Cómo Jugar", entrar: "Entrar",
        lightMode: "Modo Claro", darkMode: "Modo Oscuro",
        footer: "© 2026 Grafitar. Todos los derechos reservados.",
        moeda: "ARS", simbolo: "$",
        bannerTitulo: "TIENDA OFICIAL GRAFITAR",
        bannerTexto: "Desbloquea contenido exclusivo, obtén ventajas y personaliza tu experiencia.",
        bannerBtn: "COMPRAR AHORA",
        secOferta: "🔥 Oferta Especial",
        secPremium: "⭐ Pase Premium",
        secVip: "👑 Suscripciones VIP",
        secMoedas: "💎 Paquetes de Monedas",
        secPacotes: "🎁 Paquetes Especiales",
        secEvento: "🏆 Pase de Evento",
        secFaq: "❓ Preguntas Frecuentes",
        btnComprar: "Comprar", btnAssinar: "Suscribirse",
        oferta: {
            titulo: "Paquete Explorador",
            desc: "Pase Premium + 1500 Monedas + Ítem Exclusivo",
            preco: 24.90
        },
        premium: [
            { titulo: "Pase Cultural Premium", desc: "Misiones exclusivas, recompensas adicionales, ítems especiales y progresión acelerada.", preco: 19.90, btn: "Comprar" }
        ],
        vip: [
            { titulo: "VIP Mensual", desc: "Emblema VIP, monedas semanales, acceso anticipado a eventos.", preco: 14.90,  sufixo: "/mes", btn: "Suscribirse" },
            { titulo: "VIP Anual",   desc: "Todos los beneficios VIP con descuento exclusivo.",            preco: 119.90, sufixo: "/año", btn: "Suscribirse" },
        ],
        moedas: [
            { titulo: "500 Monedas",   preco: 4.90  },
            { titulo: "1.200 Monedas", preco: 9.90  },
            { titulo: "2.500 Monedas", preco: 19.90 },
            { titulo: "7.000 Monedas", preco: 49.90 },
        ],
        pacotes: [
            { titulo: "Paquete Fundador", desc: "Título exclusivo, skin rara y 2.000 monedas.", preco: 29.90, btn: "Comprar" },
            { titulo: "Paquete Urbano",   desc: "Skin exclusiva, spray especial y monedas de bonificación.", preco: 19.90, btn: "Comprar" },
        ],
        evento: [
            { titulo: "Festival del Grafiti 2026", desc: "Recompensas limitadas, desafíos especiales e ítem exclusivo.", preco: 9.90, btn: "Comprar" }
        ],
        faq: [
            { p: "¿Cómo recibo mis ítems?",     r: "Los ítems se envían automáticamente a tu cuenta tras la confirmación del pago." },
            { p: "¿Puedo solicitar un reembolso?", r: "Consulta los términos de servicio para conocer las condiciones." },
        ]
    },
    jp: {
        noticias: "ニュース", eventos: "イベント", sobre: "私たちについて",
        loja: "ストア", comunidade: "コミュニティ", comoJogar: "遊び方", entrar: "ログイン",
        lightMode: "ライトモード", darkMode: "ダークモード",
        footer: "© 2026 Grafitar。無断転載を禁じます。",
        moeda: "JPY", simbolo: "¥",
        bannerTitulo: "GRAFITAR 公式ストア",
        bannerTexto: "限定コンテンツを解除し、特典を獲得し、あなたの体験をカスタマイズしましょう。",
        bannerBtn: "今すぐ購入",
        secOferta: "🔥 特別オファー",
        secPremium: "⭐ プレミアムパス",
        secVip: "👑 VIPサブスクリプション",
        secMoedas: "💎 コインパッケージ",
        secPacotes: "🎁 スペシャルバンドル",
        secEvento: "🏆 イベントパス",
        secFaq: "❓ よくある質問",
        btnComprar: "購入する", btnAssinar: "登録する",
        oferta: {
            titulo: "エクスプローラーバンドル",
            desc: "プレミアムパス + 1500コイン + 限定アイテム",
            preco: 720
        },
        premium: [
            { titulo: "カルチャープレミアムパス", desc: "限定ミッション、追加報酬、特別アイテム、加速された進行。", preco: 580, btn: "購入する" }
        ],
        vip: [
            { titulo: "月額VIP", desc: "VIPバッジ、毎週コイン、イベントへの早期アクセス。", preco: 430,  sufixo: "/月", btn: "登録する" },
            { titulo: "年額VIP", desc: "すべてのVIP特典と限定割引。",                         preco: 3500, sufixo: "/年", btn: "登録する" },
        ],
        moedas: [
            { titulo: "500コイン",   preco: 145 },
            { titulo: "1,200コイン", preco: 290 },
            { titulo: "2,500コイン", preco: 580 },
            { titulo: "7,000コイン", preco: 1450 },
        ],
        pacotes: [
            { titulo: "ファウンダーバンドル", desc: "限定タイトル、レアスキン、2,000コイン。", preco: 870, btn: "購入する" },
            { titulo: "アーバンバンドル",     desc: "限定スキン、特別スプレー、ボーナスコイン。", preco: 580, btn: "購入する" },
        ],
        evento: [
            { titulo: "グラフィティフェスティバル2026", desc: "限定報酬、特別チャレンジ、限定アイテム。", preco: 290, btn: "購入する" }
        ],
        faq: [
            { p: "アイテムはどのように受け取りますか？", r: "支払い確認後、自動的にアカウントに送信されます。" },
            { p: "返金を申請できますか？",               r: "返金条件についてはサービス規約をご確認ください。" },
        ]
    }
};

function formatarPreco(preco, t) {
    if (t.moeda === "JPY") {
        return `${t.simbolo}${Math.round(preco).toLocaleString("ja-JP")}`;
    }
    if (t.moeda === "USD") {
        return `${t.simbolo}${preco.toFixed(2)}`;
    }

    return `${t.simbolo} ${preco.toFixed(2).replace(".", ",")}`;
}

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


    document.querySelector(".banner-texto h1").textContent      = t.bannerTitulo;
    document.querySelector(".banner-texto p").textContent       = t.bannerTexto;
    document.querySelector(".banner-texto button").textContent  = t.bannerBtn;


    const secTitulos = document.querySelectorAll(".oferta-dia h2, .categoria h2, .faq h2");
    const chavesSec = ["secOferta","secPremium","secVip","secMoedas","secPacotes","secEvento","secFaq"];
    secTitulos.forEach((el, i) => { if (chavesSec[i]) el.textContent = t[chavesSec[i]]; });


    const oc = document.querySelector(".oferta-card");
    if (oc) {
        oc.querySelector("h3").textContent   = t.oferta.titulo;
        oc.querySelector("p").textContent    = t.oferta.desc;
        oc.querySelector("span").textContent = formatarPreco(t.oferta.preco, t);
        oc.querySelector("button").textContent = t.btnComprar;
    }


    function atualizarCards(secao, lista) {
        const section = document.querySelector(`.categoria[data-secao="${secao}"]`);
        if (!section) return;
        const cards = section.querySelectorAll(".card");
        cards.forEach((card, i) => {
            const item = lista[i];
            if (!item) return;
            const h3  = card.querySelector("h3");
            const p   = card.querySelector("p");
            const sp  = card.querySelector("span");
            const btn = card.querySelector("button");
            if (h3)  h3.textContent  = item.titulo;
            if (p && item.desc) p.textContent = item.desc;
            if (sp)  sp.textContent  = formatarPreco(item.preco, t) + (item.sufixo || "");
            if (btn) btn.textContent = item.btn || t.btnComprar;
        });
    }

    atualizarCards("premium", t.premium);
    atualizarCards("vip",     t.vip);
    atualizarCards("moedas",  t.moedas);
    atualizarCards("pacotes", t.pacotes);
    atualizarCards("evento",  t.evento);


    const perguntas = document.querySelectorAll(".pergunta");
    t.faq.forEach((item, i) => {
        if (!perguntas[i]) return;
        perguntas[i].querySelector("h3").textContent = item.p;
        perguntas[i].querySelector("p").textContent  = item.r;
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