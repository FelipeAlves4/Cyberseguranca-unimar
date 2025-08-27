const input = document.getElementById("input");
const output = document.getElementById("output");

const senhaCorreta = "CYBER2025"; // 🔑 aqui você define a senha


input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const valor = input.value.trim();
        if (valor === "sudo apt get senha" ) {
            output.innerText += "\n>>> Senha vazada.\n>>> Senha: CYBER2025 .";
        }
          if (valor === senhaCorreta) {
            output.innerText += "\n\n>>> Acesso concedido.\n>>> Bem-vindo, agente.";
            setTimeout(() => {
                output.innerText += "\n\n>>> [NOVA ÁREA DESBLOQUEADA]: Informações sobre o curso...";
            }, 1000);
        } else {
            output.innerText += "\n>>> Intrusão detectada. Tente novamente.";
        }
        input.value = "";
    }
});

