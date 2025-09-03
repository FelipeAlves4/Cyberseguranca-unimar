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
                .replace(/>/g, "&gt;");
            output.innerHTML += formattedText;
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                output.innerHTML += "";
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
    output.innerHTML += text + "";
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

//Função para lidar com cada comando
function handleCommand(cmd) {
    cmd = cmd.toLowerCase().trim();

    if (cmd === "help") {
        return `\n📟 Terminal de Cibersegurança - Comandos disponíveis:

🔹 Informações básicas
whoami       -> Descubra sua identidade no sistema (Quem é você neste mundo hacker?)
about        -> Saiba mais sobre o projeto de Cibersegurança da UNIMAR
unimar-info  -> Informações oficiais da UNIMAR e como o curso pode mudar sua vida
career-path  -> Veja as possíveis carreiras em Cibersegurança (Pentester, Analista, SOC, Forense Digital)
salary-info  -> Descubra quanto ganha um profissional da área 💰

🔹 Simulação de Cibersegurança
scan unimar.br       -> Simula uma varredura de portas da UNIMAR (como os hackers fazem!)
firewall --status    -> Mostra o status de proteção do firewall (defesa ativa 🚨)
traceroute unimar.br -> Exibe a rota de rede até a UNIMAR (entenda o caminho dos pacotes)
dnslookup unimar.br  -> Consulta DNS (descubra informações escondidas na web)
ping unimar.br       -> Testa conectividade (se a UNIMAR responde rápido, você também pode!)
encrypt <texto>      -> Simula criptografia de um texto (fundamento da segurança digital 🔐)
hack-unimar          -> Acesso fictício ao sistema... será que você consegue? 😏

🔹 Comandos especiais
banner          -> Mostra o banner ASCII da UNIMAR
matrix          -> Ativa o modo Matrix (efeito visual hacker 👾)
stopmatrix      -> Desativa o modo Matrix
clear           -> Limpa a tela
sudo apt senha  -> Tente descobrir a senha de administrador
CYBER2025       -> Desbloqueia um acesso secreto com mensagem motivadora 🔑
apply           -> Descubra como se inscrever no curso de Cibersegurança da UNIMAR 🚀

💡 Dica: explore os comandos como se fosse um verdadeiro pentester!
Seu aprendizado começa aqui...`;
    } else if (cmd === "whoami") {
        return "Você é um aprendiz de Cibersegurança! Quer descobrir até onde pode chegar?";
    } else if (cmd === "scan unimar.br") {
        return `Scanning unimar.br...
[22] SSH - Open
[80] HTTP - Open
[443] HTTPS - Open
>> No curso você vai aprender a fazer testes de vulnerabilidade de forma ética.`;
    } else if (cmd === "encrypt minha_senha") {
        return `SHA256: 5f4dcc3b5aa765d61d8327deb882cf99
>> Você aprenderá a proteger dados com criptografia.`;
    } else if (cmd === "firewall --status") {
        return `Firewall ativo: bloqueando 124 tentativas de invasão por segundo
>> Quer aprender a configurar firewalls? Esse é só o começo.`;
    } else if (cmd === "traceroute unimar.br") {
        return `\nRastreando rota para unimar.br...
hop1 192.168.0.1
hop2 100.23.45.67
hop3 200.155.12.34\n
>> No curso você vai estudar protocolos de rede e como monitorar tráfego.`;
    } else if (cmd === "dnslookup unimar.br") {
        return `unimar.br -> 200.155.12.34
>> DNS é como a agenda da internet. No curso você aprende como ele pode ser manipulado em ataques.`;
    } else if (cmd === "hack-unimar") {
        return `\nACCESS GRANTED
ACCESS GRANTED
ACCESS GRANTED
>> Na vida real, hacking é sobre proteger, não destruir.
>> No curso você vai aprender o lado ético da força.\n`;
    } else if (cmd === "career-path") {
        return `\nEstágios possíveis:
[1] Analista de Segurança
[2] Pentester
[3] Especialista em Redes
[4] Engenheiro de Cibersegurança
>> Quer trilhar esse caminho? O curso é a porta de entrada.\n`;
    } else if (cmd === "salary-info") {
        return `\nSalários médios:
Analista de Segurança: R$ 5.000 - 7.000
Pentester: R$ 7.000 - 12.000
Engenheiro de Cibersegurança: R$ 10.000+
>> A demanda por profissionais cresce todos os anos.\n`;
    } else if (cmd === "matrix") {
        startMatrix();
        return "\nIniciando Matrix mode...";
    } else if (cmd === "stopmatrix") {
        stopMatrix();
        return "\nEncerrando Matrix mode...";
    } else if (cmd === "about") {
        return `"\nCibersegurança UNIMAR: Aprenda a defender, investigar e proteger o futuro digital.\n"`;
    } else if (cmd === "apply") {
        return `\n🚀 Inscreva-se agora no curso de Cibersegurança da UNIMAR e comece sua jornada!\n`;
    } else if (cmd === "clear") {
        output.innerHTML = "";
        hideAscii();
        return "";
    } else if (cmd === "sudo apt senha") {
        return "\n\n>>> Senha vazada.\n>>> Senha: CYBER2025";
    } else if (cmd === "verbose on") {
        verbose = true;
        return ">>> \n Modo VERBOSE ativado. Saídas mais detalhadas.";
    } else if (cmd === "verbose off") {
        verbose = false;
        return ">>> \n Modo VERBOSE desativado.";
    } else if (cmd === "unimar-info") {
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
        return info.join("");
    } else if (cmd === "ls") {
        return "Diretórios disponíveis: cursos_TI/   alunos/   professores/   biblioteca/";
    } else if (cmd === "cat alunos.txt") {
        return `\n
        [1] João Silva - ADS
        [2] Maria Santos - Ciência da Computação
        [3] Felipe Rodrigues - Cybersegurança
        [4] Ana Souza - Engenharia de Software
        [5] Carlos Oliveira - Sistemas de Informação
        [6] Beatriz Lima - Banco de Dados
        [7] Rafael Gomes - Redes de Computadores
        [8] Luana Fernandes - Segurança da Informação
        [9] Pedro Costa - DevOps
        [10] Juliana Martins - Inteligência Artificial
        `;
    } else if (cmd === "ping unimar.br") {
        return "\nEnviando pacotes para unimar.br [200.160.2.3]...Resposta: tempo=45msResposta: tempo=47msResposta: tempo=46ms";
    } else if (cmd === senhaCorreta.toLowerCase()) {
        printAscii();
        return `
re>>> Acesso concedido.
>>> Invadindo o banco de dados...
>>> Acesso privilegiado concedido.
>>> Dados confidenciais carregados do sistema UNIMAR.
------------------------------------------------------
- Fundada em: 1988
- Local: Marília/SP
- Cursos de destaque: TI, Direito, Medicina, Engenharias
- Parceiros: Cisco, AWS Academy, IBM SkillsBuild
------------------------------------------------------
>>> SELECT * FROM cursos_TI WHERE ativo = 1;
>>> Conexão estabelecida.
>>> 4 registros encontrados.

[1] Curso: ADS | Duração: 3 anos
[2] Curso: Ciências da Computação | Duração: 4 anos
[3] Curso: Cybersegurança | Duração: 3 anos
[4] Curso: Inteligência Artificial | Duração: 4 anos

>>> Deseja acessar mais detalhes de um curso? Digite o número [1-4]
`;
    } else if (cmd === "1") {
        return "\n>>> Detalhes do curso ADS:- Foco: Desenvolvimento de sistemas e softwares- Tecnologias: Python, Java, SQL, Web- Mercado: Desenvolvedor full-stack, analista de sistemas";
    } else if (cmd === "2") {
        return "\n>>> Detalhes de Ciências da Computação:- Foco: Projetar, arquitetar e manter softwares complexos- Tecnologias: UML, DevOps, Java, C#, Python- Mercado: Engenheiro de software, arquiteto de sistemas, analista de dados";
    } else if (cmd === "3") {
        return "\n>>> Detalhes de Cybersegurança:- Foco: Proteção de redes, sistemas e dados- Tecnologias: Pentest, criptografia, firewalls, SIEM- Mercado: Analista SOC, consultor de segurança, ethical hacker";
    } else if (cmd === "4") {
        return "\n>>> Detalhes de Inteligência Artificial:- Foco: Desenvolvimento de sistemas inteligentes- Tecnologias: Machine Learning, Deep Learning, NLP, Python- Mercado: Cientista de dados, engenheiro de ML, pesquisador em IA";
    } else {
        return `\n>>> Comando não reconhecido: ${cmd}. Digite 'help' para ver os disponíveis.`;
    }
}

window.onload = async () => {
    hideAscii();
    await typeText(">>> Bem-vindo ao Sistema da Unimar [CYBER SECURITY MODE]\n");
    await typeText(">>> Insira para acessar o sistema sua senha\n ");
    await typeText("\n>>> Dica: Use os comandos disponíveis para interagir.");
};

input.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
        const valor = input.value.trim();
        let resposta = handleCommand(valor);

        //Se for vazio (ex: clear), não imprime nada
        if (resposta) {
            //Se for senha correta, imprime com digitação lenta
            if (valor.toLowerCase() === senhaCorreta.toLowerCase()) {
                await typeText(resposta, 1);
            } else {
                printOutput(resposta);
            }
        }

        input.value = "";
    }
});
