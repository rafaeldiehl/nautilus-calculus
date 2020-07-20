import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --light-blue: #9BD7FF;
        --blue: #82BBF1;
        --light-grey: #cdd4e1;
        --grey: #302E36;
        --semi-dark-grey: #222a35;
        --dark-grey: #201E24;
        --platinum: #DFE6EB;
        --hyper-light-blue: rgb(227, 248, 255);
        --semi-dark-blue: rgb(124,130,199);

        --font-primary: 'Roboto', sans-serif;
        --font-secundary: 'Raleway', sans-serif;
        --default-font-size: 1.4em;

        --l-900: 56.25em; //900px
        --l-700: 43.75em; //700px
        --l-600: 37.5em; //600px
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body {
        font-family: var(--font-primary);
        font-size: var(--default-font-size);
        color: var(--dark-grey);
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        font-family: var(--font-secundary);
    }
`;

