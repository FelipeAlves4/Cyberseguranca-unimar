const input = document.getElementById("input");
const output = document.getElementById("output");
const asciiUnimar = document.getElementById("ascii-unimar");

const senhaCorreta = "CYBER2025";
let verbose = false;


let matrixInterval;

function startMatrix() {
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";

    const letters = "UNIMAR2025";
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = Array.from({ length: columns }).map(() => 1);

    matrixInterval = setInterval(() => {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }, 33);
}

function stopMatrix() {
    const canvas = document.getElementById("matrix");
    canvas.style.display = "none";
    clearInterval(matrixInterval);
}


// Função para simular digitação lenta
function typeText(text, delay = 30) {
    return new Promise(resolve => {
        let i = 0;
        const interval = setInterval(() => {
            const formattedText = text[i]
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/\n/g, "<br>");
            output.innerHTML += formattedText;
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                output.innerHTML += "<br>";
                output.scrollTop = output.scrollHeight;
                resolve();
            } else {
                output.scrollTop = output.scrollHeight;
            }
        }, delay);
    });
}

//Função para imprimir saida instantanea 
function printOutput(text) {
    output.innerHTML += text + "<br>";
    output.scrollTop = output.scrollHeight;
}

//Função para mostrar o ASCII art
function printAscii() {
    asciiUnimar.style.display = "block";
}

//Função para esconder o ASCII art
function hideAscii() {
    asciiUnimar.style.display = "none";
}

window.onload = async () => {
    hideAscii();
    await typeText(">>> Bem-vindo ao Sistema da Unimar [CYBER SECURITY MODE]");
    await typeText(">>> Insira para acessar o sistema sua senha\n");
    await typeText(">>> Dica: Use os comandos disponíveis para interagir.\n");
};

input.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
        const valor = input.value.trim();

        if (valor === "help") {
            printOutput(">>> Comandos disponíveis no sistema:");
            printOutput("--------------------------------------------------");
            printOutput("help                - Mostra todos os comandos");
            printOutput("clear               - Limpa o terminal");
            printOutput("sudo apt senha      - Descobre e exibe a senha");
            printOutput("verbose on/off      - Ativa ou desativa detalhes extras");
            printOutput("unimar-info         - Mostra informações da UNIMAR");
            printOutput("ls                  - Lista diretórios disponíveis");
            printOutput("cat alunos.txt      - Lista alunos cadastrados");
            printOutput("ping unimar.br      - Simula ping para unimar.br");
            printOutput("matrix              - Ativa efeito Matrix na tela");
            printOutput("stopmatrix          - Para o efeito Matrix");
            printOutput("--------------------------------------------------");
        } else if (valor === "matrix") {
            await typeText("\nIniciando Matrix...\n", 1);
            startMatrix();
        } else if (valor === "stopmatrix") {
            await typeText("Encerrando Matrix...\n", 1);
            stopMatrix();
        } else if (valor === "clear") {
            output.innerHTML = "";
            hideAscii();
        } else if (valor === "sudo apt senha") {
            printOutput(">>> Senha vazada.<br>>> Senha: CYBER2025");
        } else if (valor === "verbose on") {
            verbose = true;
            printOutput(">>> \n Modo VERBOSE ativado. Saídas mais detalhadas.");
        } else if (valor === "verbose off") {
            verbose = false;
            printOutput(">>> \n Modo VERBOSE desativado.");
        } else if (valor === "unimar-info") {
            printOutput(">>> Universidade de Marília - UNIMAR");
            printOutput(">>> Localização: Marília/SP");
            printOutput(">>> Fundação: 1988");
            printOutput(">>> Ranking: Top 10 universidades do interior");
            printOutput(">>> Cursos: Direito, Medicina, TI, Engenharias...");
            if (verbose) {
                printOutput(">>> Infraestrutura: Laboratórios de TI, IoT, IA, Cibersegurança.");
                printOutput(">>> Parcerias internacionais e foco em inovação tecnológica.");
            }
        } else if (valor === "ls") {
            printOutput("Diretórios disponíveis:");
            printOutput(" cursos_TI/   alunos/   professores/   biblioteca/");
        } else if (valor === "cat alunos.txt") {
            printOutput("[1] João Silva - ADS");
            printOutput("[2] Maria Santos - Ciência da Computação");
            printOutput("[3] Felipe Rodrigues - Cybersegurança");
        } else if (valor === "ping unimar.br") {
            printOutput("Enviando pacotes para unimar.br [200.160.2.3]...");
            printOutput("Resposta: tempo=45ms");
            printOutput("Resposta: tempo=47ms");
            printOutput("Resposta: tempo=46ms");
        } else if (valor === senhaCorreta) {
            await typeText("\n>>> Acesso concedido.");
            await typeText(">>> Invadindo o banco de dados...");
            await new Promise(r => setTimeout(r, 1000));

            printAscii();

            await typeText("\n>>> Acesso privilegiado concedido.");
            await typeText(">>> Dados confidenciais carregados do sistema UNIMAR.");
            await typeText("------------------------------------------------------");
            await typeText("- Fundada em: 1988");
            await typeText("- Local: Marília/SP");
            await typeText("- Cursos de destaque: TI, Direito, Medicina, Engenharias");
            await typeText("- Parceiros: Cisco, AWS Academy, IBM SkillsBuild");
            await typeText("------------------------------------------------------");

            await typeText("\n>>> SELECT * FROM cursos_TI WHERE ativo = 1;");
            await new Promise(r => setTimeout(r, 1000));
            await typeText(">>> Conexão estabelecida.");
            await typeText(">>> 4 registros encontrados.\n");
            await typeText("[1] Curso: ADS | Duração: 3 anos");
            await typeText("[2] Curso: Ciências da Computação | Duração: 4 anos");
            await typeText("[3] Curso: Cybersegurança | Duração: 3 anos");
            await typeText("[4] Curso: Inteligência Artificial | Duração: 4 anos");
            await typeText("\n>>> Deseja acessar mais detalhes de um curso? Digite o número [1-4]");
        } else if (valor === "1") {
            await typeText("\n>>> Detalhes do curso ADS:");
            await typeText("- Foco: Desenvolvimento de sistemas e softwares");
            await typeText("- Tecnologias: Python, Java, SQL, Web");
            await typeText("- Mercado: Desenvolvedor full-stack, analista de sistemas");
        } else if (valor === "2") {
            await typeText("\n>>> Detalhes de Ciências da Computação:");
            await typeText("- Foco: Projetar, arquitetar e manter softwares complexos");
            await typeText("- Tecnologias: UML, DevOps, Java, C#, Python");
            await typeText("- Mercado: Engenheiro de software, arquiteto de sistemas, analista de dados");
        } else if (valor === "3") {
            await typeText("\n>>> Detalhes de Cybersegurança:");
            await typeText("- Foco: Proteção de redes, sistemas e dados");
            await typeText("- Tecnologias: Pentest, criptografia, firewalls, SIEM");
            await typeText("- Mercado: Analista SOC, consultor de segurança, ethical hacker");
        } else if (valor === "4") {
            await typeText("\n>>> Detalhes de Inteligência Artificial:");
            await typeText("- Foco: Desenvolvimento de sistemas inteligentes");
            await typeText("- Tecnologias: Machine Learning, Deep Learning, NLP, Python");
            await typeText("- Mercado: Cientista de dados, engenheiro de ML, pesquisador em IA");
        } else {
            await typeText("\n>>> Instrução detectada. Tente novamente.");
        }

        input.value = "";
    }
});
