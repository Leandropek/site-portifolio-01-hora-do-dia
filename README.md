# Exibição de Data e Hora com Atualização Dinâmica

Este projeto exibe a data atual e atualiza dinamicamente o horário na página, alterando a aparência com base no período do dia.

## Funcionalidades

### Exibição da Data Atual
- Mostra a data atual no formato detalhado:  
  **"Manhã de Segunda-feira, 08 de janeiro de 2025."**
- O período do dia é determinado com base no horário:
  - **Manhã:** 6h às 11h59
  - **Tarde:** 12h às 17h59
  - **Noite:** 18h às 5h59
- A data é inserida automaticamente em um elemento com a classe `.info-texto` no momento em que a página é carregada.

### Atualização Dinâmica do Horário
- Exibe o horário atual no formato **HH:MM:SS**, atualizando a cada segundo.
- A aparência da página muda dinamicamente com base no período do dia:
  - **Manhã:** Exibe uma imagem e altera o fundo para um tom azul claro.
  - **Tarde:** Exibe uma imagem e altera o fundo para um tom alaranjado.
  - **Noite:** Exibe uma imagem e altera o fundo para um tom azul escuro.

## Tecnologias Utilizadas
- **HTML:** Estrutura da página.
- **CSS:** Estilização e mudança dinâmica do fundo.
- **JavaScript:** Lógica de exibição de data, hora e manipulação do DOM.
