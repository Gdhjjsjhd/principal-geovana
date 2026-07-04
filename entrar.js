if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark-mode");
}

const traducoes = {
    pt: {
        lightMode: "Modo Claro", darkMode: "Modo Escuro",
        logoTitulo: "Grafitar ID",
        logoTexto: "Conecte-se ao universo Grafitar.",
        loginTitulo: "Entrar",
        labelEmail: "Email", placeholderEmail: "Digite seu email",
        labelSenha: "Senha", placeholderSenha: "Digite sua senha",
        btnEntrar: "Entrar",
        linkEsqueceu: "Esqueceu sua senha?",
        btnCriar: "Criar Conta",
        beneficiosTitulo: "Vantagens de possuir uma Grafitar ID",
        beneficios: [
            { h3: "☁️ Progresso Salvo",   p: "Salve seu progresso na nuvem e continue jogando em qualquer dispositivo." },
            { h3: "🎨 Personalização",     p: "Sincronize todas as suas roupas, tintas e itens especiais." },
            { h3: "🏆 Rankings",           p: "Compare suas conquistas com jogadores de toda a comunidade." },
            { h3: "🪙 Compras Seguras",    p: "Compre moedas, Passe Premium e itens exclusivos diretamente pelo site." },
        ],
        contaTitulo: "Sua Conta",
        contaLabels: ["Nome", "Nível", "Moedas", "Tintas Desbloqueadas", "Chefes Derrotados", "Passe Premium"],
        contaValores: ["Gabriel", "25", "15.420", "87", "14", "Ativo"],
        btnGerenciar: "Gerenciar Conta",
        segurancaTitulo: "🔒 Segurança da Conta",
        segurancaTexto: "Proteja sua conta ativando a autenticação por email e mantenha seu progresso seguro.",
        footerTitulo: "Grafitar ID",
        footerTexto: "Uma única conta para acessar o jogo, acompanhar estatísticas e realizar compras no site oficial.",
    },
    en: {
        lightMode: "Light Mode", darkMode: "Dark Mode",
        logoTitulo: "Grafitar ID",
        logoTexto: "Connect to the Grafitar universe.",
        loginTitulo: "Log In",
        labelEmail: "Email", placeholderEmail: "Enter your email",
        labelSenha: "Password", placeholderSenha: "Enter your password",
        btnEntrar: "Log In",
        linkEsqueceu: "Forgot your password?",
        btnCriar: "Create Account",
        beneficiosTitulo: "Benefits of having a Grafitar ID",
        beneficios: [
            { h3: "☁️ Saved Progress",  p: "Save your progress in the cloud and keep playing on any device." },
            { h3: "🎨 Customization",   p: "Sync all your clothes, paints and special items." },
            { h3: "🏆 Rankings",        p: "Compare your achievements with players from the entire community." },
            { h3: "🪙 Secure Purchases", p: "Buy coins, Premium Pass and exclusive items directly on the site." },
        ],
        contaTitulo: "Your Account",
        contaLabels: ["Name", "Level", "Coins", "Unlocked Paints", "Bosses Defeated", "Premium Pass"],
        contaValores: ["Gabriel", "25", "15,420", "87", "14", "Active"],
        btnGerenciar: "Manage Account",
        segurancaTitulo: "🔒 Account Security",
        segurancaTexto: "Protect your account by enabling email authentication and keep your progress safe.",
        footerTitulo: "Grafitar ID",
        footerTexto: "A single account to access the game, track statistics and make purchases on the official site.",
    },
    es: {
        lightMode: "Modo Claro", darkMode: "Modo Oscuro",
        logoTitulo: "Grafitar ID",
        logoTexto: "Conéctate al universo Grafitar.",
        loginTitulo: "Entrar",
        labelEmail: "Correo electrónico", placeholderEmail: "Ingresa tu correo",
        labelSenha: "Contraseña", placeholderSenha: "Ingresa tu contraseña",
        btnEntrar: "Entrar",
        linkEsqueceu: "¿Olvidaste tu contraseña?",
        btnCriar: "Crear Cuenta",
        beneficiosTitulo: "Ventajas de tener una Grafitar ID",
        beneficios: [
            { h3: "☁️ Progreso Guardado", p: "Guarda tu progreso en la nube y sigue jugando en cualquier dispositivo." },
            { h3: "🎨 Personalización",   p: "Sincroniza toda tu ropa, pinturas e ítems especiales." },
            { h3: "🏆 Rankings",          p: "Compara tus logros con jugadores de toda la comunidad." },
            { h3: "🪙 Compras Seguras",   p: "Compra monedas, Pase Premium e ítems exclusivos directamente en el sitio." },
        ],
        contaTitulo: "Tu Cuenta",
        contaLabels: ["Nombre", "Nivel", "Monedas", "Pinturas Desbloqueadas", "Jefes Derrotados", "Pase Premium"],
        contaValores: ["Gabriel", "25", "15.420", "87", "14", "Activo"],
        btnGerenciar: "Administrar Cuenta",
        segurancaTitulo: "🔒 Seguridad de la Cuenta",
        segurancaTexto: "Protege tu cuenta activando la autenticación por correo y mantén tu progreso seguro.",
        footerTitulo: "Grafitar ID",
        footerTexto: "Una sola cuenta para acceder al juego, seguir estadísticas y realizar compras en el sitio oficial.",
    },
    jp: {
        lightMode: "ライトモード", darkMode: "ダークモード",
        logoTitulo: "Grafitar ID",
        logoTexto: "Grafitarの世界へようこそ。",
        loginTitulo: "ログイン",
        labelEmail: "メールアドレス", placeholderEmail: "メールを入力してください",
        labelSenha: "パスワード", placeholderSenha: "パスワードを入力してください",
        btnEntrar: "ログイン",
        linkEsqueceu: "パスワードをお忘れですか？",
        btnCriar: "アカウントを作成",
        beneficiosTitulo: "Grafitar IDを持つメリット",
        beneficios: [
            { h3: "☁️ 進捗の保存",     p: "クラウドに進捗を保存し、どのデバイスでも続きを楽しめます。" },
            { h3: "🎨 カスタマイズ",   p: "服・ペイント・特別アイテムをすべて同期できます。" },
            { h3: "🏆 ランキング",     p: "コミュニティ全体のプレイヤーと実績を比較できます。" },
            { h3: "🪙 安全な購入",     p: "コイン、プレミアムパス、限定アイテムをサイトから直接購入できます。" },
        ],
        contaTitulo: "あなたのアカウント",
        contaLabels: ["名前", "レベル", "コイン", "解除済みペイント", "撃破したボス", "プレミアムパス"],
        contaValores: ["Gabriel", "25", "15,420", "87", "14", "有効"],
        btnGerenciar: "アカウント管理",
        segurancaTitulo: "🔒 アカウントのセキュリティ",
        segurancaTexto: "メール認証を有効にしてアカウントを保護し、進捗を安全に保ちましょう。",
        footerTitulo: "Grafitar ID",
        footerTexto: "ゲームへのアクセス、統計の確認、公式サイトでの購入すべてに使える一つのアカウント。",
    }
};

function trocarIdioma(idioma) {
    const t = traducoes[idioma] || traducoes.pt;


    document.getElementById("lightModeBtn").textContent = t.lightMode;
    document.getElementById("darkModeBtn").textContent  = t.darkMode;


    document.querySelector(".logo-area h1").textContent = t.logoTitulo;
    document.querySelector(".logo-area p").textContent  = t.logoTexto;


    document.querySelector(".login-box h2").textContent = t.loginTitulo;
    const labels = document.querySelectorAll(".login-box label");
    if (labels[0]) labels[0].textContent = t.labelEmail;
    if (labels[1]) labels[1].textContent = t.labelSenha;
    const inputs = document.querySelectorAll(".login-box input");
    if (inputs[0]) inputs[0].placeholder = t.placeholderEmail;
    if (inputs[1]) inputs[1].placeholder = t.placeholderSenha;
    document.querySelector(".login-box form button").textContent = t.btnEntrar;
    document.querySelector(".login-box a").textContent           = t.linkEsqueceu;
    document.querySelector(".login-box > button").textContent    = t.btnCriar;


    document.querySelector(".beneficios h2").textContent = t.beneficiosTitulo;
    const benDivs = document.querySelectorAll(".beneficios > div");
    benDivs.forEach((div, i) => {
        const b = t.beneficios[i];
        if (!b) return;
        div.querySelector("h3").textContent = b.h3;
        div.querySelector("p").textContent  = b.p;
    });


    document.querySelector(".conta-demo h2").textContent     = t.contaTitulo;
    document.querySelector(".conta-demo button").textContent = t.btnGerenciar;
    const ps = document.querySelectorAll(".conta-demo p");
    ps.forEach((p, i) => {
        if (t.contaLabels[i] === undefined) return;
        p.innerHTML = `<strong>${t.contaLabels[i]}:</strong> ${t.contaValores[i]}`;
    });

  
    document.querySelector(".seguranca h2").textContent = t.segurancaTitulo;
    document.querySelector(".seguranca p").textContent  = t.segurancaTexto;


    document.querySelector("footer h3").textContent = t.footerTitulo;
    document.querySelector("footer p").textContent  = t.footerTexto;

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

const darkModeBtn = document.getElementById("darkModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");
const usBtn = document.getElementById("us");
const ptBtn = document.getElementById("pt");
const esBtn = document.getElementById("es");
const jpBtn = document.getElementById("jp");

const btn = document.getElementById("toggleBtn");
const menu3 = document.getElementById("menu3");

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
            trocarIdioma("en");
            menu3.classList.add("hidden");
        });
    }

    if (ptBtn) {
        ptBtn.addEventListener("click", () => {
            trocarIdioma("pt");
            menu3.classList.add("hidden");
        });
    }

    if (esBtn) {
        esBtn.addEventListener("click", () => {
            trocarIdioma("es");
            menu3.classList.add("hidden");
        });
    }

    if (jpBtn) {
        jpBtn.addEventListener("click", () => {
            trocarIdioma("jp");
            menu3.classList.add("hidden");
        });
    }
}

const idiomaSalvo = localStorage.getItem("idioma");
if (document.getElementById("linkHome")) {
    trocarIdioma(idiomaSalvo || "pt");
}

const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "dark") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}