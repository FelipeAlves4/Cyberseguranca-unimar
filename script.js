const input = document.getElementById("input");
const output = document.getElementById("output");

const senhaCorreta = "CYBER2025";

//Função para simular digitação lenta
function typeText(text, delay = 30) {
    return new Promise(resolve => {
        let i = 0;
        const interval = setInterval(() => {
            // Substitui caracteres especiais para manter a formatação
            const formattedText = text[i]
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/\n/g, "<br>");

            output.innerHTML += formattedText; // Usa innerHTML para preservar formatação
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                output.innerHTML += "<br>"; // Adiciona quebra de linha no final
                resolve();
            }
        }, delay);
    });
}

input.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
        const valor = input.value.trim();

        //Comando "sudo" revela a senha
        if (valor === "sudo apt senha") {
            await typeText("\n>>> Senha vazada.\n>>> Senha: CYBER2025");
        }

        //Limpa a tela
        else if (valor === "clear") {
            output.innerText = "";
        }

        //Senha correta -> acesso concedido
        else if (valor === senhaCorreta) {
            await typeText("\n>>> Acesso concedido.");
            await typeText(">>> Invadindo o banco de dados...");
            await new Promise(r => setTimeout(r, 1000));
            await typeText(">>> SELECT * FROM cursos_TI WHERE ativo = 1;");
            await new Promise(r => setTimeout(r, 1000));
            await typeText(">>> Conexão estabelecida.");
            await new Promise(r => setTimeout(r, 1000));
            await typeText(">>> 3 registros encontrados.\n");
            await typeText("[1] Curso: Análise e Desenvolvimento de Sistemas | Duração: 3 anos");
            await typeText("[2] Curso: Ciências da Computação | Duração: 4 anos");
            await typeText("[3] Curso: Cybersegurança | Duração: 3 anos");
            await typeText("[4] Curso: Inteligência Artificial | Duração: 4 anos");
            await typeText("\n>>> Deseja acessar mais detalhes de um curso? Digite o número [1-4]");
        }

        //Usuário escolhe o curso
        else if (valor === "1") {
            await typeText("\n>>> Detalhes do curso ADS:");
            await typeText("- Foco: Desenvolvimento de sistemas e softwares");
            await typeText("- Tecnologias: Python, Java, SQL, Web");
            await typeText("- Mercado: Desenvolvedor full-stack, analista de sistemas");
        }
        else if (valor === "2") {
            await typeText("\n>>> Detalhes de Ciências da Computação:");
            await typeText("- Foco: Projetar, arquitetar e manter softwares complexos");
            await typeText("- Tecnologias: UML, DevOps, Java, C#, Python");
            await typeText("- Mercado: Engenheiro de software, arquiteto de sistemas, analista de dados");
        }
        else if (valor === "3") {
            await typeText("\n>>> Detalhes de Cybersegurança:");
            await typeText("- Foco: Proteção de redes, sistemas e dados");
            await typeText("- Tecnologias: Pentest, criptografia, firewalls, SIEM");
            await typeText("- Mercado: Analista SOC, consultor de segurança, ethical hacker");
        }
        else if (valor === "4"){
            await typeText("\n>>> Detalhes de Inteligência Artificial:");
            await typeText("\n - Foco: Desenvolvimento de sistemas inteligentes");
            await typeText("\n - Tecnologias: Machine Learning, Deep Learning, NLP, Python");
            await typeText("\n - Mercado: Cientista de dados, engenheiro de ML, pesquisador em IA");

        }
        //Senha errada
        else {
            await typeText("\n>>> Intrusão detectada. Tente novamente.");
        }

        input.value = "";
    }
});
