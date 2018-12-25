import Head from 'next/head';

const Meta = props => (
    <div>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="/static/favicon.png" />
            <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
            <title>SICK FIT</title>
        </Head>
    </div>
);

export default Meta;
