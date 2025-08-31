const input = document.getElementById("input");
const output = document.getElementById("output");
const asciiUnimar = document.getElementById("ascii-unimar");

const senhaCorreta = "CYBER2025";
let verbose = false;

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

// Função para imprimir saída instantânea (sem animação)
function printOutput(text) {
    output.innerHTML += text + "<br>";
    output.scrollTop = output.scrollHeight;
}

// Função para mostrar o ASCII art
function printAscii() {
    asciiUnimar.style.display = "block";
}

// Função para esconder o ASCII art
function hideAscii() {
    asciiUnimar.style.display = "none";
}

window.onload = async () => {
    hideAscii();
    await typeText(">>> Bem-vindo ao Sistema da Unimar [CYBER SECURITY MODE]");
    await typeText(">>> Insira para acessar o sistema sua senha:\n");
    await typeText(">>> Dica: Use os comandos disponíveis para interagir.\n");
};

input.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
        const valor = input.value.trim();

        // Comandos extras
        if (valor === "help") {
            printOutput("Comandos disponíveis:");
            printOutput(" clear, sudo apt senha, verbose on/off, unimar-info, ls, cat alunos.txt, ping unimar.br, help");
        } else if (valor === "clear") {
            output.innerHTML = "";
            hideAscii();
        } else if (valor === "sudo apt senha") {
            printOutput(">>> Senha vazada.<br>>> Senha: CYBER2025");
        } else if (valor === "verbose on") {
            verbose = true;
            printOutput(">>> Modo VERBOSE ativado. Saídas mais detalhadas.");
        } else if (valor === "verbose off") {
            verbose = false;
            printOutput(">>> Modo VERBOSE desativado.");
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
            await typeText(">>> 3 registros encontrados.\n");
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
