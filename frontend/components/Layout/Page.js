import Header from "./header/Header";
import Meta from "./Meta";
import Styled, { ThemeProvider, injectGlobal } from "styled-components";

const lightTheme = {
    background: "white",
    color: "black",
    primaryBGColor: "teal",
    primaryColor: "teal",
    borderColor: 'grey'
};

const darkTheme = {
    background: "black",
    color: "white",
    primaryBGColor: "grey",
    primaryColor: "grey"
};

injectGlobal`
    @font-face {
        font-family: 'radnika-n';
        src: url('/static/radnikanext-medium-webfont.woff2') format("woff2");
        font-style: normal;
    }
    html {
        font-family: 'radnika-n';
        font-size: 16px;
        height: 100vh;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        height: 100%;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: ${lightTheme.color};
    }
`

const StyledPage = Styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
`;

const InnerContainer = Styled.div`
    max-width: 1000px;
    padding: 2rem;
`;

const Page = props => (
    <ThemeProvider theme={lightTheme}>
        <StyledPage className="main-page">
            <Meta />
            <Header />
            <InnerContainer>{props.children}</InnerContainer>
        </StyledPage>
    </ThemeProvider>
);

export default Page;
