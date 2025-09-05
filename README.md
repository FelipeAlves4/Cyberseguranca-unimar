# 🛡️ Curso de Cybersegurança - Unimar

Um site interativo e moderno para apresentar o curso de Cybersegurança da Universidade de Marília (Unimar), desenvolvido com tecnologias web modernas e uma experiência de usuário imersiva.

## 🚀 Características

- **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **Tema Cyberpunk**: Visual moderno com cores neon e efeitos futuristas
- **Terminal Interativo**: Simulação de terminal com comandos de cybersegurança
- **Animações CSS**: Efeitos visuais e transições suaves
- **Performance Otimizada**: Carregamento rápido e experiência fluida

## 📁 Estrutura do Projeto

```
Cyber/
├── index.html          # Página principal do curso
├── terminal.html       # Terminal interativo
├── style.css          # Estilos da página principal
├── terminal.css       # Estilos do terminal
├── terminal.js        # Lógica do terminal interativo
├── script.js          # JavaScript da página principal
├── imagens/           # Assets visuais
│   ├── logo.svg
│   ├── cyberseguranca.webp
│   ├── Unimar-laptop.png
│   └── ...
├── README.md
└── LICENSE
```

## 🎯 Funcionalidades

### Página Principal (`index.html`)
- **Seção Principal**: Apresentação impactante com call-to-action
- **Sobre o Curso**: Informações gerais sobre o programa
- **Conteúdo do Curso**: Disciplinas e áreas de atuação
- **Diferenciais**: Parcerias e infraestrutura da Unimar
- **Design Responsivo**: Adaptação para todos os dispositivos

### Terminal Interativo (`terminal.html`)
- **Simulação de Terminal**: Interface de linha de comando
- **Comandos de Cybersegurança**: Comandos educativos sobre segurança
- **Efeito Matrix**: Animação de fundo inspirada no filme
- **ASCII Art**: Logo da Unimar em arte ASCII
- **Sistema de Help**: Lista de comandos disponíveis

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com Flexbox, Grid e animações
- **JavaScript (ES6+)**: Interatividade e funcionalidades dinâmicas
- **Canvas API**: Efeitos visuais e animações
- **Responsive Design**: Mobile-first approach

## 🎨 Design System

### Cores
- **Primária**: `#04d9ff` (Cyan neon)
- **Secundária**: `#00aaff` (Azul neon)
- **Fundo**: `#000000` (Preto)
- **Texto**: `#ffffff` / `#e0e0e0` (Branco/Cinza claro)

### Tipografia
- **Títulos**: Monospace (estilo terminal)
- **Corpo**: Arial (legibilidade)

### Efeitos
- **Gradientes**: Transições suaves entre cores
- **Backdrop Filter**: Efeito de vidro fosco
- **Box Shadow**: Sombras com cores neon
- **Transform**: Animações de hover e transição

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/cyberseguranca-unimar.git
   cd cyberseguranca-unimar
   ```

2. **Abra no navegador**:
   - Abra o arquivo `index.html` em qualquer navegador moderno
   - Ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```

3. **Acesse**:
   - Página principal: `http://localhost:8000`
   - Terminal: `http://localhost:8000/terminal.html`

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e é totalmente responsivo:

- **Desktop**: Layout completo com todos os efeitos
- **Tablet**: Adaptação de espaçamentos e tamanhos
- **Mobile**: Interface otimizada para touch

## 🎮 Terminal Interativo

O terminal inclui comandos educativos sobre cybersegurança:

- `help` - Lista todos os comandos disponíveis
- `about` - Informações sobre o curso
- `skills` - Habilidades desenvolvidas
- `careers` - Áreas de atuação
- `clear` - Limpa o terminal
- E mais...

## 🔧 Personalização

### Modificar Cores
Edite as variáveis CSS no arquivo `style.css`:
```css
:root {
  --primary-color: #04d9ff;
  --secondary-color: #00aaff;
  --background-color: #000000;
}
```

### Adicionar Comandos
Edite o arquivo `terminal.js` para adicionar novos comandos:
```javascript
const commands = {
  'novo-comando': 'Descrição do comando',
  // ...
};
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

- **Universidade de Marília (Unimar)**
- **Website**: [oficial.unimar.br](https://oficial.unimar.br)
- **Vestibular**: [oficial.unimar.br/vestibular](https://oficial.unimar.br/vestibular)

## 🙏 Agradecimentos

- Equipe de desenvolvimento da Unimar
- Comunidade de cybersegurança
- Contribuidores do projeto

---

**Desenvolvido com ❤️ para a Universidade de Marília**

*Proteja o futuro digital e transforme sua carreira!*