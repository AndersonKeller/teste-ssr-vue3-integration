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

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <link rel="stylesheet" href="./src/style.css">
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
