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

        ctx.fillStyle = "#04d9ff";
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

//Função pra simular digitacão lenta
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

//Funcão para esconder o ASCII art
function hideAscii() {
    asciiUnimar.style.display = "none";
}

//Função dos comandos
function handleCommand(cmd) {
    cmd = cmd.toLowerCase().trim();

    if (cmd === "help") {
        return `\n\n📟 Terminal de Cibersegurança - Comandos disponíveis:

🔹 Informações básicas
whoami       -> Descubra sua identidade no sistema (Quem é você neste mundo hacker?)
about        -> Saiba mais sobre o projeto de Cibersegurança da UNIMAR
unimar-info  -> Informações oficiais da UNIMAR e como o curso pode mudar sua vida
career-path  -> Veja as possíveis carreiras em Cibersegurança (Pentester, Analista, SOC, Forense Digital)
salary-info  -> Descubra quanto ganha um profissional da área 💰
ls           -> Lista diretórios disponíveis (explore o sistema de arquivos!)
cat alunos.txt -> Mostra uma lista fictícia de alunos (quem está aprendendo com você?)

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

🔹 Modo Verbose (informações detalhadas)
verbose         -> Ativa modo verbose com informações técnicas detalhadas 🔍
verbose off     -> Desativa o modo verbose
verbose status  -> Verifica se o modo verbose está ativo

💡 Dica: explore os comandos como se fosse um verdadeiro pentester!
Seu aprendizado começa aqui...\n`;
    } else if (cmd === "whoami") {
        let result = "\nVocê é um aprendiz de Cybersegurança! Quer descobrir até onde pode chegar?\n";
        if (verbose) {
            result += "\n[VERBOSE] Informações do usuário:\n- Nível: Iniciante\n- Permissões: Usuário padrão\n- Sessão ativa: 00:15:32\n- Último login: Hoje 14:30\n- Grupo: estudantes\n";
        }
        return result;
    } else if (cmd === "scan unimar.br") {
        let result = `\nScanning unimar.br...\n[22] SSH - Open\n[80] HTTP - Open\n[443] HTTPS - Open\n`;
        if (verbose) {
            result += `\n[VERBOSE] Detalhes técnicos:\n- Porta 22: SSH versão 2.0, criptografia AES-256\n- Porta 80: Apache 2.4.41, PHP 7.4\n- Porta 443: TLS 1.3, certificado válido\n- Tempo de resposta médio: 45ms\n- Firewall detectado: iptables ativo\n`;
        }
        result += `>> No curso você vai aprender a fazer testes de vulnerabilidade de forma ética.\n`;
        return result;
    } else if (cmd === "encrypt minha_senha") {
        return `SHA256: 5f4dcc3b5aa765d61d8327deb882cf99
>> Você aprenderá a proteger dados com criptografia.\n`;
    } else if (cmd === "firewall --status") {
        let result = `\nFirewall ativo: bloqueando 124 tentativas de invasão por segundo\n`;
        if (verbose) {
            result += `\n[VERBOSE] Configuração detalhada:\n- Regras ativas: 847\n- Logs gerados: 2.3GB/dia\n- Região bloqueada: 15 países\n- Ataques DDoS bloqueados: 23 hoje\n- Uptime: 99.7%\n- Versão: iptables 1.8.7\n`;
        }
        result += `>> Quer aprender a configurar firewalls? Esse é só o começo.`;
        return result;
    } else if (cmd === "traceroute unimar.br") {
        let result = `\nRastreando rota para unimar.br...\nhop1 192.168.0.1\nhop2 100.23.45.67\nhop3 200.155.12.34\n`;
        if (verbose) {
            result += `\n[VERBOSE] Análise de rede:\n- Hop 1: Gateway local (1ms)\n- Hop 2: Provedor regional (15ms)\n- Hop 3: Backbone nacional (45ms)\n- Protocolo: ICMP\n- TTL inicial: 64\n- Pacotes perdidos: 0%\n`;
        }
        result += `\n>> No curso você vai estudar protocolos de rede e como monitorar tráfego.`;
        return result;
    } else if (cmd === "dnslookup unimar.br") {
        let result = `\nunimar.br -> 200.155.12.34\n`;
        if (verbose) {
            result += `\n[VERBOSE] Informações DNS detalhadas:\n- Tipo: A (IPv4)\n- TTL: 3600 segundos\n- Servidor DNS: 8.8.8.8\n- Autoridade: ns1.unimar.br\n- MX Record: mail.unimar.br (prioridade 10)\n- TXT Record: "v=spf1 include:_spf.google.com ~all"\n`;
        }
        result += `\n>> DNS é como a agenda da internet. No curso você aprende como ele pode ser manipulado em ataques.\n`;
        return result;
    } else if (cmd === "hack-unimar") {
        return `\nACCESS GRANTED
ACCESS GRANTED
ACCESS GRANTED\n
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
    }
    else if (cmd === "banner") {
        printAscii();
        return "";
    } else if (cmd === "about") {
        return `"\nCibersegurança UNIMAR: Aprenda a defender, investigar e proteger o futuro digital.\n"`;
    } else if (cmd === "apply") {
        const link = "https://www.unimar.br/vestibular";
        return `\n🚀 Inscreva-se agora no curso de Cibersegurança da UNIMAR e comece sua jornada!\n ${link}`;
    } else if (cmd === "clear") {
        output.innerHTML = "";
        hideAscii();
        return "";
    } else if (cmd === "sudo apt senha") {
        return "\n\n>>> Senha vazada.\n>>> Senha: CYBER2025";
    } else if (cmd === "verbose on" || cmd === "verbose") {
        verbose = true;
        updatePrompt();
        return "\n>>> Modo VERBOSE ativado! 🔍\n>>> Agora você receberá informações detalhadas e técnicas.\n>>> Use 'verbose off' para desativar.";
    } else if (cmd === "verbose off") {
        verbose = false;
        updatePrompt();
        return "\n>>> Modo VERBOSE desativado.\n>>> Retornando ao modo normal.";
    } else if (cmd === "verbose status") {
        return verbose ? "\n>>> Status: VERBOSE ATIVO 🔍" : "\n>>> Status: VERBOSE INATIVO";
    } else if (cmd === "unimar-info") {
        let info = [
            "\n>>> Universidade de Marília - UNIMAR",
            "\n>>> Localização: Marília/SP",
            "\n>>> Fundação: 1988",
            "\n>>> Ranking: Top 10 universidades do interior",
            "\n>>> Cursos: Direito, Medicina, TI, Engenharias...\n"
        ];
        if (verbose) {
            info.push("\n>>> Infraestrutura: Laboratórios de TI, IoT, IA, Cibersegurança.");
            info.push("\n>>> Parcerias internacionais e foco em inovação tecnológica.");
        }
        return info.join("");
    } else if (cmd === "ls") {
        let result = "\nDiretórios disponíveis: \ncursos_TI/   alunos/   professores/   biblioteca/";
        if (verbose) {
            result += "\n\n[VERBOSE] Detalhes dos diretórios:\n- cursos_TI/: 4 subdiretórios, 156 arquivos\n- alunos/: 1.247 registros, 2.3MB\n- professores/: 89 perfis, 1.1MB\n- biblioteca/: 15.432 livros, 2.1TB\n- Permissões: drwxr-xr-x (755)\n- Proprietário: root:root\n";
        }
        return result;
    } else if (cmd === "cat alunos.txt") {
        return `\n
        [1] João Silva - ADS
        [2] Maria Santos - Ciência da Computação
        [3] Felipe Rodrigues - Cybersegurança
        [4] Ana Souza - Engenharia de computação
        [5] Carlos Oliveira - cybersegurança
        [6] Beatriz Lima - Jogos Digitais
        [7] Rafael Gomes - Redes de Computadores
        [8] Luana Fernandes - Segurança da Informação
        [9] Pedro Costa - Ciência da Computação
        [10] Juliana Martins - Inteligência Artificial
        `;
    } else if (cmd === "ping unimar.br") {
        let result = `\nEnviando pacotes para unimar.br [200.160.2.3]...\nResposta: tempo=45ms\nResposta: tempo=47ms\nResposta: tempo=46ms\n`;
        if (verbose) {
            result += `\n[VERBOSE] Estatísticas de ping:\n- Pacotes enviados: 3\n- Pacotes recebidos: 3\n- Perda de pacotes: 0%\n- Tempo mínimo: 45ms\n- Tempo máximo: 47ms\n- Tempo médio: 46ms\n- Tamanho do pacote: 32 bytes\n`;
        }
        return result;
    } else if (cmd === senhaCorreta.toLowerCase()) {
        printAscii();
        return `\n
>>> Acesso concedido.
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

>>> Deseja acessar mais detalhes de um curso? Digite o número [1-4]\n`;
    } else if (cmd === "1") {
        return `
\n>>> Detalhes do curso ADS:
- Foco: Desenvolvimento de sistemas e softwares
- Tecnologias: 
  - Python
  - Java
  - SQL
  - Web
- Mercado: 
  - Desenvolvedor full-stack
  - Analista de sistemas \n
`;
        
    } else if (cmd === "2") {
        return `
>>> Detalhes de Ciências da Computação:
- Foco: Projetar, arquitetar e manter softwares complexos
- Tecnologias: 
  - UML
  - DevOps
  - Java
  - C#
  - Python
- Mercado: 
  - Engenheiro de software
  - Arquiteto de sistemas
  - Analista de dados
`;
    } else if (cmd === "3") {
        return `
\n>>> Detalhes de Cybersegurança:
- Foco: Proteção de redes, sistemas e dados
- Tecnologias: 
  - Pentest
  - Criptografia
  - Firewalls
  - SIEM
- Mercado: 
  - Analista SOC
  - Consultor de segurança
  - Ethical hacker
`;
    } else if (cmd === "4") {
        return `
\n>>> Detalhes de Inteligência Artificial:
- Foco: Desenvolvimento de sistemas inteligentes
- Tecnologias: 
  - Machine Learning
  - Deep Learning
  - NLP
  - Python
- Mercado: 
  - Cientista de dados
  - Engenheiro de Machine Learning
  - Engenheiro de prompts \n
`;
    } else {
        return `\n>>> Comando não reconhecido: ${cmd}. Digite 'help' para ver os disponíveis.`;
    }
}

function updatePrompt() {
    const prompt = document.getElementById("prompt");
    if (verbose) {
        prompt.textContent = "unimar@cyber:~$ [VERBOSE] ";
    } else {
        prompt.textContent = "unimar@cyber:~$ ";
    }
}

window.onload = async () => {
    hideAscii();
    updatePrompt();
    await typeText(">>> Bem-vindo ao Sistema da Unimar [CYBER SECURITY MODE]\n");
    await typeText(">>> Insira para acessar o sistema sua senha\n ");
    await typeText("\n>>> Dica: Use os comandos disponíveis para interagir.");
    await typeText("\n>>> Digite 'verbose' para ativar modo detalhado.");
};

input.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
        const valor = input.value.trim();
        let resposta = handleCommand(valor);

        //Se for vazio, não imprime nada
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
