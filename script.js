const input = document.getElementById("input");
const output = document.getElementById("output");

const senhaCorreta = "CYBER2025"; // 🔑 aqui você define a senha

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const valor = input.value.trim();

        //Comando "sudo" Irá revela a senha
        if (valor === "sudo apt senha") {
            output.innerText += "\n>>> Senha vazada.\n>>> Senha: CYBER2025";
        }
        
        //Senha correta será acesso concedido
        else if (valor === senhaCorreta) {
            output.innerText += "\n\n>>> Acesso concedido.\n>>> Invadindo o banco de dados...\n";
            setTimeout(() => {
                output.innerText += "\n>>> SELECT * FROM cursos_TI WHERE ativo = 1;";
            }, 1000);
            setTimeout(() => {
                output.innerText += "\n>>> Conexão estabelecida.";
            }, 2000);
            setTimeout(() => {
                output.innerText += "\n>>> 3 registros encontrados.\n";
                output.innerText += "\n[1] Curso: Análise e Desenvolvimento de Sistemas | Duração: 3 anos";
                output.innerText += "\n[2] Curso: Ciências da Computação | Duração: 4 anos";
                output.innerText += "\n[3] Curso: Cybersegurança | Duração: 3 anos\n";
            }, 3000);
            setTimeout(() => {
                output.innerText += "\n>>> Deseja acessar mais detalhes de um curso? Digite o número [1-3]";
            }, 4000);
        } 
        
        //Usuário escolhe o curso para obter informações
        else if (valor === "1") {
            output.innerText += "\n\n>>> Detalhes do curso ADS:\n- Foco: Desenvolvimento de sistemas e softwares\n- Tecnologias: Python, Java, SQL, Web\n- Mercado: Desenvolvedor full-stack, analista de sistemas\n";
        }else if (valor === "2") {
            output.innerText += "\n\n>>> Detalhes de Ciências da Computação:\n- Foco: Projetar, arquitetar e manter softwares complexos\n- Tecnologias: UML, DevOps, Java, C#, Python\n- Mercado: Engenheiro de software, arquiteto de sistemas, analista de dados\n";
        }else if (valor === "3") {
            output.innerText += "\n\n>>> Detalhes de Cybersegurança:\n- Foco: Proteção de redes, sistemas e dados\n- Tecnologias: Pentest, criptografia, firewalls, SIEM\n- Mercado: Analista SOC, consultor de segurança, ethical hacker\n";
        }

        //Senha errada
        else {
            output.innerText += "\n>>> Intrusão detectada. Tente novamente.";
        }

        input.value = "";
    }
});