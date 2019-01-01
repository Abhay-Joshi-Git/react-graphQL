import App, { Container } from "next/app";
import Page from "../components/Layout/Page";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";

class MyApp extends App {
    static getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = Component.getInitialProps(ctx);
        }
        pageProps.query = ctx.query;
        return pageProps;
    }

    render() {
        const { Component, apollo, ...pageProps } = this.props;
        console.log('page props ...', pageProps);
        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps}/>
                    </Page>
                </ApolloProvider>
            </Container>
        );
    }
}

export default withData(MyApp);
