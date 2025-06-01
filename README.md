# Relógio Interativo

## Sobre o Projeto

O "Relógio Interativo" é uma aplicação web front-end que exibe a data e a hora atuais de forma dinâmica e visualmente atraente. O projeto demonstra o uso de HTML, CSS e JavaScript para criar uma interface de usuário interativa que muda sua aparência conforme o período do dia.

## Funcionalidades Principais

*   **Hero Section Dinâmica:** Um cabeçalho de destaque apresentando o título do projeto, uma breve descrição e um botão de call-to-action ("Descubra a Hora"). Inclui uma imagem de fundo temática com uma sobreposição escura para melhor contraste e animações sutis de entrada para os elementos textuais.
*   **Data Detalhada por Período:**
    *   Exibição da data atual formatada, incluindo o dia da semana, dia do mês, mês, ano e o período do dia (Manhã, Tarde, Noite). Exemplo: **"Manhã de Segunda-feira, 08 de janeiro de 2025."**
    *   O período do dia é determinado da seguinte forma:
        *   **Manhã:** 6h00 às 11h59
        *   **Tarde:** 12h00 às 17h59
        *   **Noite:** 18h00 às 5h59
*   **Relógio Analógico:**
    *   Apresenta um relógio analógico clássico com ponteiros de horas, minutos e segundos que se movem e atualizam em tempo real.
*   **Relógio Digital e Tema Dinâmico:**
    *   Exibe o horário atual no formato digital **HH:MM:SS**, com atualização a cada segundo.
    *   A aparência geral da página (imagem principal e cor de fundo) se ajusta dinamicamente com base no período do dia:
        *   **Manhã:** Imagem diurna e fundo em tom azul claro.
        *   **Tarde:** Imagem vespertina e fundo em tom alaranjado.
        *   **Noite:** Imagem noturna e fundo em tom azul escuro.
*   **Formulário de Contato no Rodapé:**
    *   Inclui um formulário de contato no rodapé da página com os campos: Nome, Email, Assunto e Mensagem.
    *   O formulário possui um design com tema escuro (fundo preto) para se integrar ao rodapé.
    *   A submissão do formulário utiliza a funcionalidade `mailto:`, que tenta abrir o cliente de email padrão do usuário (requer configuração do email de destino no HTML).

## Tecnologias Utilizadas

*   **HTML5:** Para a estruturação semântica da página.
*   **CSS3:** Para estilização, layout responsivo e animações.
    *   Utiliza **Flexbox** para alinhamento e distribuição de espaço.
    *   Emprega **CSS Custom Properties** (Variáveis CSS) para gerenciamento de temas e fontes.
*   **JavaScript (ES6+):** Para toda a lógica interativa, incluindo:
    *   Manipulação do DOM (Document Object Model).
    *   Cálculo e atualização de data e hora.
    *   Controle dos relógios analógico e digital.
    *   Mudança dinâmica de estilos e imagens.

## Como Executar o Projeto

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/Leandropek/Exibicao_Dinamica_Data_E_Hora_Interativa.git
    # (Por favor, verifique se esta é a URL correta do seu repositório)
    ```
2.  **Navegue até o diretório do projeto (após clonar):**
    ```bash
    cd Exibicao_Dinamica_Data_E_Hora_Interativa
    # (Ou o nome da pasta que foi criada)
    ```
3.  **Abra o arquivo `index.html` em seu navegador de preferência.**

## Estrutura do Projeto (Simplificada)

```
.
├── assets/
│   ├── img/      # Imagens do projeto (dia, noite, tarde, ícones de relógio)
│   └── style/    # Arquivos CSS (modularizados por componente/seção)
│       ├── analogico.css
│       ├── cabecalho.css
│       ├── digital.css
│       ├── formulario.css
│       ├── index.css     # CSS principal, importa os demais
│       ├── momento.css
│       └── secao.css
├── js/
│   └── script.js # Lógica principal em JavaScript
├── index.html    # Arquivo HTML principal
└── README.md     # Este arquivo
```

## Melhorias Futuras (Sugestões)

*   Adicionar suporte para internacionalização (diferentes idiomas).
*   Implementar testes automatizados para validar a lógica dos relógios e da data.
*   Permitir personalização de temas visuais pelo usuário.
*   Integrar o formulário de contato com um backend ou serviço de terceiros para processamento de envios (além do `mailto:`).
```
