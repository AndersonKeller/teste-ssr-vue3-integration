export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

import { renderToString as renderToString_ } from "@vue/server-renderer";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import { createApp } from "./app";
import logoUrl from "./logo.svg";

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const app = createApp(Page, pageProps, pageContext);

  const appHtml = await renderToString(app);

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc =
    (documentProps && documentProps.description) ||
    "App using Vite + vite-plugin-ssr";
  // import "../src/"
  //NÃO IMPORTA O STYLE.CSS, ELE ESTÁ APLICADO DENTRO DA TAG STYLE, DEVE SER CORRIGIDO <link rel="stylesheet" href="style.css" />
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        
        <title>${title}</title>
        <style>
            :root {
                --dl-color-primary: #dc0714;
                --dl-color-secondary: #d8b973;
                --dl-color-terciaria: #575756;
                --dl-color-quaternaria: #f2ebe2;
                --dl-color-quinquenario: #e7e7e7;
                --dl-color-black: #261b1c;
                --dl-color-red-mid: #65383e;
                --dl-color-red-dark: #3b2427;
                --dl-color-orange: #f18700;
                --dl-color-orange-light: #ffeed8;
                --dl-color-red-light: #f7e3e2;
                --dl-color-white: #ffffff;
                --dl-color-grey-light: #f1f1f1;
                --dl-color-grey: #999999;
                --dl-color-grey-mid: #cccccc;
                --dl-color-green: #76962e;
                --dl-color-green-light: #ebf3da;
            }
            @import url("https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,800;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");
@font-face {
  font-family: 'fontSecundaria';
  src: local('Avallon Alt'), local('Avallon-Alt'),
      url('~@/assets/fonts/Avalon/AvallonAlt.woff2') format('woff2'),
      url('~@/assets/fonts/Avalon/AvallonAlt.woff') format('woff'),
      url('~@/assets/fonts/Avalon/AvallonAlt.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
/* 
@font-face {
    font-family: "fontMontserratBold";
    src: local("Montserrat"),
        url("~@/assets/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "fontMontserratRegular";
    src: local("Montserrat"),
        url("~@/assets/fonts/Montserrat/Montserrat-Regular.ttf")
            format("truetype");
    font-weight: 400;
    font-style: normal;
} */
/* 
@font-face {
  font-family: 'fontPoppinsRegular';
  src: local('Poppins'),
      url('~@/assets/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
} */

html,
body {
    overflow-x: hidden;
}

body {
  background-color: var(--dl-color-red-mid);
  color: var(--dl-color-black);
  margin: 0;
  font-size: 13px;
  line-height: 24px;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  text-transform: none;
  letter-spacing: normal;
  --positionSAC: 130px;
  --positionCookies: 74px;
}

p,
li,
ul,
pre,
div,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
}

button,
input,
optgroup,
select,
textarea {
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: inherit;
}
#launcher {
    height: 68px !important;
}
img {
    display: block;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.fechar {
    cursor: pointer !important;
    position: absolute !important;
    right: 0px !important;
    margin: 10px;
}

.animate-cookies-button {
    bottom: -100px;
    left: -100px;
}

.theme--light.v-application {
    background-color: transparent;
}

.v-responsive__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: -webkit-fill-available;
}
.v-navigation-drawer__content {
    position: absolute !important;
}

.v-toolbar {
    max-width: 100% !important;
}
.v-tabs {
    width: 75% !important;
}
.v-tabs-bar {
    display: flex !important;
    border-radius: inherit !important;
    height: 48px !important;
    align-items: stretch !important;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: 0px 5px 20px 5px rgb(0 0 0 / 10%) !important;
}
.botao_mobile {
    width: 117px !important;
    max-width: 100% !important;
    flex: 100 !important;
}
@media screen and (max-width: 992px) {
  .responsividadeCards {
    display: flex !important;
    flex-direction: column !important;
  }
  .v-slide-group__wrapper div.v-slide-group__content.v-tabs-bar__content {
    white-space: normal;
  }
  .compre_cadeira {
    padding-top: 30px !important;
    border-left-width: 12px !important;
  }
  .botao_mobile {
    max-width: 100% !important;
    flex: 100 !important;
  }

  #launcher {
    height: var(--positionSAC) !important;
    z-index: 96 !important;
  }
}

@media screen and (max-width: 600px) {
    .v-slide-group__content {
        justify-content: center;
        display: flex;
    }
    .responsividadeCards {
        display: flex !important;
        flex-direction: column !important;
    }
    .v-toolbar {
        max-width: 100% !important;
        padding-left: 15px;
    }
    .responsivSocio {
        max-width: 100% !important;
        padding: 0px !important;
    }
    .compre_cadeira {
        padding-top: 30px !important;
    }
    .icone-ajuda {
        margin-bottom: 18px !important;
    }
    .botao_mobile {
        max-width: 100% !important;
        flex: 100 !important;
    }
}
@media screen and (max-width: 480px) {
    .responsividadeCards {
        display: flex !important;
        flex-direction: column !important;
    }
    .v-toolbar {
        max-width: 100% !important;
        padding-left: 30px;
    }
    .responsivSocio {
        max-width: 100% !important;
        padding: 0px !important;
    }
    .compre_cadeira {
        padding-top: 30px !important;
    }
    .icone-ajuda {
        margin-bottom: 18px !important;
    }
    .botao_mobile {
        max-width: 100% !important;
        flex: 100 !important;
    }
}

.v-stepper__content {
    padding: 0px !important;
}
.v-icon.v-icon.v-icon--link {
    color: gray;
}

.theme--light.v-stepper .v-stepper__step__step .v-icon {
    color: white;
    display: none;
}
span .v-stepper__step__step .primary {
    background-color: var(--dl-color-secondary) !important;
    color: var(--dl-color-secondary) !important;
}

.v-stepper--alt-labels .v-stepper__step {
    flex-direction: column-reverse !important;
}

.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label {
    padding-bottom: 10px !important;
}
.theme--light.v-stepper .v-stepper__label {
    padding-bottom: 10px !important;
}

.v-stepper--alt-labels .v-stepper__header .v-divider {
    margin: 57px -55px 0 !important;
}

div .barra-menu.v-tabs--fixed-tabs > .v-tabs-bar .v-tab {
    font-size: 12px;
    font-weight: 600;
}
.feito-gol {
    color: var(--dl-color-green);
    font-size: 20px;
    letter-spacing: 1px;
}
.compre_cadeira {
    display: flex;
    align-items: center;
    justify-content: center;
}
.v-item-group {
    width: 100%;
    max-width: 1050px !important;
}
.v-main__wrap {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

/*COOKIES ACEITE MUDANDO ESTILO CSS NO CÓDIGO*/
.cookies-mbr-ever-actives[data-v-f776eb0a] {
    color: red !important;
}
.bar-settings-button[data-v-98017c2a] {
    color: red !important;
}
.cookies-mbr-buttons[data-v-f776eb0a] {
    color: red !important;
}

            * {
                box-sizing: border-box;
                border-width: 0;
                border-style: solid;
                font-size: 12px;
                font-family: "Montserrat", "sans-serif" !important;
                line-height: 1.6em;
            }

            html,
            body {
                font-family: "Montserrat", "sans-serif" !important;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin-bottom: 16px;
                text-transform: uppercase;
                font-weight: bold;
            }
            ::-webkit-scrollbar {
                width: 6px;
                height: 8px;
            }

            ::-webkit-scrollbar-track {
                background-color: #f1f1f1 !important;
            }

            ::-webkit-scrollbar-thumb {
                background: #dc0714 !important;
                border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: #b30000 !important;
            }

            .BotaoGradiente {
                border: solid 1px black;
                cursor: pointer;
                background: #dc0714 !important;
            }

            .BotaoGradiente:hover {
                background: #d8b973 !important;
            }

            .BotaoGradiente:active {
                background: #dc0714;
            }

            .card-pedidos-titles {
                color: #dc0714 !important;
            }
        </style>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}

async function renderToString(app) {
  let err;
  // Workaround: renderToString_() swallows errors in production, see https://github.com/vuejs/core/issues/7876
  app.config.errorHandler = (err_) => {
    err = err_;
  };
  const appHtml = await renderToString_(app);
  if (err) throw err;
  return appHtml;
}
