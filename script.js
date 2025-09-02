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

// Nova função para lidar com comandos
function handleCommand(cmd) {
    cmd = cmd.toLowerCase().trim();

    switch (cmd) {
        case "help":
            return `Comandos disponíveis:

🔹 Informações básicas
whoami            -> Descubra sua identidade no sistema
about             -> Saiba mais sobre o projeto de Cibersegurança
unimar-info       -> Informações oficiais da UNIMAR
career-path       -> Mostra as possíveis carreiras na área
salary-info       -> Média salarial dos profissionais

🔹 Simulação de Cibersegurança
scan unimar.br    -> Simula varredura de portas da UNIMAR
firewall --status -> Mostra status de proteção do firewall
traceroute unimar.br -> Exibe a rota de rede até a UNIMAR
dnslookup unimar.br  -> Faz uma consulta DNS
ping unimar.br    -> Testa a conectividade com a UNIMAR
encrypt <texto>   -> Simula criptografia de um texto
hack-unimar       -> Acesso fictício ao sistema

🔹 Comandos especiais
banner            -> Mostra o banner ASCII da UNIMAR
matrix            -> Ativa o modo Matrix (efeito visual hacker)
stopmatrix        -> Desativa o modo Matrix
clear             -> Limpa a tela
sudo apt senha    -> Descubra a senha de acesso
CYBER2025         -> Desbloqueia o acesso secreto
apply             -> Informações para inscrição no curso

💡 Digite um comando para começar!`;


        case "whoami":
            return "Você é um aprendiz de Cibersegurança! Quer descobrir até onde pode chegar?";

        case "scan unimar.br":
            return `Scanning unimar.br...
[22] SSH - Open
[80] HTTP - Open
[443] HTTPS - Open
>> No curso você vai aprender a fazer testes de vulnerabilidade de forma ética.`;

        case "encrypt minha_senha":
            return `SHA256: 5f4dcc3b5aa765d61d8327deb882cf99
>> Você aprenderá a proteger dados com criptografia.`;

        case "firewall --status":
            return `Firewall ativo: bloqueando 124 tentativas de invasão por segundo
>> Quer aprender a configurar firewalls? Esse é só o começo.`;

        case "traceroute unimar.br":
            return `Rastreando rota para unimar.br...
hop1 192.168.0.1
hop2 100.23.45.67
hop3 200.155.12.34
>> No curso você vai estudar protocolos de rede e como monitorar tráfego.`;

        case "dnslookup unimar.br":
            return `unimar.br -> 200.155.12.34
>> DNS é como a agenda da internet. No curso você aprende como ele pode ser manipulado em ataques.`;

        case "hack-unimar":
            return `ACCESS GRANTED
ACCESS GRANTED
ACCESS GRANTED
>> Na vida real, hacking é sobre proteger, não destruir.
>> No curso você vai aprender o lado ético da força.`;

        case "career-path":
            return `Estágios possíveis:
[1] Analista de Segurança
[2] Pentester
[3] Especialista em Redes
[4] Engenheiro de Cibersegurança
>> Quer trilhar esse caminho? O curso é a porta de entrada.`;

        case "salary-info":
            return `Salários médios:
Analista de Segurança: R$ 5.000 - 7.000
Pentester: R$ 7.000 - 12.000
Engenheiro de Cibersegurança: R$ 10.000+
>> A demanda por profissionais cresce todos os anos.`;


        case "matrix":
            startMatrix();
            return "Iniciando Matrix mode...";

        case "stopmatrix":
            stopMatrix();
            return "Encerrando Matrix mode...";

        case "about":
            return `"Cibersegurança UNIMAR: Aprenda a defender, investigar e proteger o futuro digital."`;

        case "apply":
            return `🚀 Inscreva-se agora no curso de Cibersegurança da UNIMAR e comece sua jornada!`;

        //Comandos originais do seu terminal
        case "clear":
            output.innerHTML = "";
            hideAscii();
            return "";

        case "sudo apt senha":
            return ">>> Senha vazada.<br>>> Senha: CYBER2025";

        case "verbose on":
            verbose = true;
            return ">>> \n Modo VERBOSE ativado. Saídas mais detalhadas.";

        case "verbose off":
            verbose = false;
            return ">>> \n Modo VERBOSE desativado.";

        case "unimar-info":
            let info = [
                ">>> Universidade de Marília - UNIMAR",
                ">>> Localização: Marília/SP",
                ">>> Fundação: 1988",
                ">>> Ranking: Top 10 universidades do interior",
                ">>> Cursos: Direito, Medicina, TI, Engenharias..."
            ];
            if (verbose) {
                info.push(">>> Infraestrutura: Laboratórios de TI, IoT, IA, Cibersegurança.");
                info.push(">>> Parcerias internacionais e foco em inovação tecnológica.");
            }
            return info.join("<br>");

        case "ls":
            return "Diretórios disponíveis:<br> cursos_TI/   alunos/   professores/   biblioteca/";

        case "cat alunos.txt":
            return "[1] João Silva - ADS<br>[2] Maria Santos - Ciência da Computação<br>[3] Felipe Rodrigues - Cybersegurança";

        case "ping unimar.br":
            return "\nEnviando pacotes para unimar.br [200.160.2.3]...<br>Resposta: tempo=45ms<br>Resposta: tempo=47ms<br>Resposta: tempo=46ms";

        // Senha correta
        case senhaCorreta.toLowerCase():
            printAscii();
            return `
>>> Acesso concedido.<br>
>>> Invadindo o banco de dados...<br>
>>> Acesso privilegiado concedido.<br>
>>> Dados confidenciais carregados do sistema UNIMAR.<br>
------------------------------------------------------<br>
- Fundada em: 1988<br>
- Local: Marília/SP<br>
- Cursos de destaque: TI, Direito, Medicina, Engenharias<br>
- Parceiros: Cisco, AWS Academy, IBM SkillsBuild<br>
------------------------------------------------------<br>
>>> SELECT * FROM cursos_TI WHERE ativo = 1;<br>
>>> Conexão estabelecida.<br>
>>> 4 registros encontrados.<br>
[1] Curso: ADS | Duração: 3 anos<br>
[2] Curso: Ciências da Computação | Duração: 4 anos<br>
[3] Curso: Cybersegurança | Duração: 3 anos<br>
[4] Curso: Inteligência Artificial | Duração: 4 anos<br>
>>> Deseja acessar mais detalhes de um curso? Digite o número [1-4]
`;

        case "1":
            return "\n>>> Detalhes do curso ADS:<br>- Foco: Desenvolvimento de sistemas e softwares<br>- Tecnologias: Python, Java, SQL, Web<br>- Mercado: Desenvolvedor full-stack, analista de sistemas";

        case "2":
            return "\n>>> Detalhes de Ciências da Computação:<br>- Foco: Projetar, arquitetar e manter softwares complexos<br>- Tecnologias: UML, DevOps, Java, C#, Python<br>- Mercado: Engenheiro de software, arquiteto de sistemas, analista de dados";

        case "3":
            return "\n>>> Detalhes de Cybersegurança:<br>- Foco: Proteção de redes, sistemas e dados<br>- Tecnologias: Pentest, criptografia, firewalls, SIEM<br>- Mercado: Analista SOC, consultor de segurança, ethical hacker";

        case "4":
            return "\n>>> Detalhes de Inteligência Artificial:<br>- Foco: Desenvolvimento de sistemas inteligentes<br>- Tecnologias: Machine Learning, Deep Learning, NLP, Python<br>- Mercado: Cientista de dados, engenheiro de ML, pesquisador em IA";

        default:
            return `\n>>> Comando não reconhecido: ${cmd}. Digite 'help' para ver os disponíveis.`;
    }
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
        let resposta = handleCommand(valor);

        // Se for vazio (ex: clear), não imprime nada
        if (resposta) {
            // Se for senha correta, imprime com digitação lenta
            if (valor.toLowerCase() === senhaCorreta.toLowerCase()) {
                await typeText(resposta, 1);
            } else {
                printOutput(resposta);
            }
        }

        input.value = "";
    }
});
