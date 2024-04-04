import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props) {
  return (
    <Html lang={props.locale}>
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// Document.getInitialProps = async (ctx) => {
//   const finalProps = await documentGetInitialProps(ctx);
//   return finalProps;
// };
