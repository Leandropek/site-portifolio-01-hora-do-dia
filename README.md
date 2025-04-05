# Exibição Dinâmica de Data e Hora

Este projeto exibe a data atual e atualiza dinamicamente o horário na página, ajustando a aparência com base no período do dia.

## Funcionalidades

### Exibição da Data Atual
- Mostra a data atual em um formato detalhado, como:  
  **"Manhã de Segunda-feira, 08 de janeiro de 2025."**
- Determina o período do dia com base no horário:
  - **Manhã:** 6h às 11h59
  - **Tarde:** 12h às 17h59
  - **Noite:** 18h às 5h59
- Insere automaticamente a data em um elemento com a classe `.info-texto` ao carregar a página.

### Atualização Dinâmica do Horário
- Exibe o horário atual no formato **HH:MM:SS**, com atualização a cada segundo.
- Ajusta dinamicamente a aparência da página com base no período do dia:
  - **Manhã:** Mostra uma imagem e altera o fundo para um tom azul claro.
  - **Tarde:** Mostra uma imagem e altera o fundo para um tom alaranjado.
  - **Noite:** Mostra uma imagem e altera o fundo para um tom azul escuro.

## Tecnologias Utilizadas
- **HTML:** Estruturação da página.
- **CSS:** Estilização e mudanças dinâmicas no fundo.
- **JavaScript:** Lógica para exibição de data, hora e manipulação do DOM.

## Como Executar o Projeto
1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Abra o arquivo `index.html` em um navegador.

## Melhorias Futuras
- Adicionar suporte para diferentes idiomas.
- Implementar testes automatizados para validação da lógica.
- Permitir personalização de temas pelo usuário.

## Capturas de Tela
### Página Inicial
![Página Inicial](assets/img/exemplo.jpg)
