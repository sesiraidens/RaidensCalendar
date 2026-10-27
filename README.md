<div align="center">

<img src="https://sesiraidens.github.io/portifolio/assets/logo_color-aNRVU26Y.png" alt="Logo RAIDENS" width="140">

# Raidens Calendar

**Calendário de eventos da equipe RAIDENS: leve, responsivo e sem dependências**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Sem dependências](https://img.shields.io/badge/depend%C3%AAncias-nenhuma-2EA043?style=flat-square)

[Sobre](#sobre) · [Telas](#telas) · [Funcionalidades](#funcionalidades) · [Como usar](#como-usar) · [Estrutura](#estrutura)

</div>

---

## Sobre

O **Raidens Calendar** organiza treinos, reuniões e datas de competição da equipe em uma visão mensal simples. Ele roda inteiro no navegador, em HTML, CSS e JavaScript puros: não precisa de servidor, build nem instalação. Os eventos ficam salvos no `localStorage`, então continuam lá quando você fecha e abre a página.

## Telas

<table>
  <tr>
    <td align="center" width="33%"><b>Pre-loader</b></td>
    <td align="center" width="33%"><b>Visão mensal</b></td>
    <td align="center" width="33%"><b>Novo evento</b></td>
  </tr>
  <tr>
    <td><img src="assets/PreLoader.png" alt="Pre-loader com a logo RAIDENS"></td>
    <td><img src="assets/TelaDoSite.png" alt="Calendário na visão mensal"></td>
    <td><img src="assets/NovoEvento.png" alt="Formulário de novo evento"></td>
  </tr>
  <tr>
    <td>Logo com animação de pulso e barra de progresso enquanto a página carrega.</td>
    <td>Mês completo, dia atual em destaque e navegação entre meses.</td>
    <td>Nome, data e horário, com validação dos campos e opção de excluir.</td>
  </tr>
</table>

## Funcionalidades

- **Visão mensal** com 42 dias (6 semanas), sem cortes entre meses
- **Navegação** pelas setas na tela, pelo botão **Hoje** ou pelo teclado
- **Criar, editar e excluir eventos** com título, data e horário
- **Salvamento automático** no `localStorage`, com indicador visual
- **Layout responsivo** para computador e celular
- **Animações suaves** na troca de mês, na abertura do diálogo e nas interações

### Atalhos de teclado

| Tecla | Ação |
|---|---|
| <kbd>←</kbd> | Mês anterior |
| <kbd>→</kbd> | Próximo mês |

## Como usar

```bash
git clone https://github.com/sesiraidens/RaidensCalendar.git
```

1. Abra o `index.html` em um navegador moderno.
2. Clique em um dia ou em **+ Novo evento**.
3. Preencha os campos e clique em **Salvar**.

Os eventos ficam no navegador em que foram criados. Para usá-los em outro computador, cadastre-os de novo lá.

### Compatibilidade

Chrome 90+, Firefox 88+, Edge 90+ e Safari 14+.

## Estrutura

```text
RaidensCalendar/
├── index.html      # Página e pre-loader
├── css/            # Estilos, variáveis e animações
├── js/             # storage → calendar → dialog → app
└── assets/         # Capturas de tela
```

O JavaScript é dividido por responsabilidade: `storage.js` cuida do `localStorage`, `calendar.js` desenha o mês e trata a navegação, `dialog.js` controla o formulário e `app.js` inicializa tudo.

---

<div align="center">

<img src="https://sesiraidens.github.io/portifolio/assets/logo_color-aNRVU26Y.png" alt="Logo RAIDENS" width="56">

**Equipe RAIDENS** · SESI 192 Alumínio/SP

[![Email](https://img.shields.io/badge/Email-sesiraidens%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:sesiraidens@gmail.com)
[![Linktree](https://img.shields.io/badge/Linktree-sesiraidens-39E06B?style=flat-square&logo=linktree&logoColor=white)](https://linktr.ee/sesiraidens)
[![GitHub](https://img.shields.io/badge/GitHub-sesiraidens-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/sesiraidens)

</div>

