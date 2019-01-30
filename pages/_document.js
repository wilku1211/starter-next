import Document, { Head, Main, NextScript } from "next/document";


      export default class MyDocument extends Document {
      render() {
        return (
          <html lang="en">
             <Head>
    
              <meta name="robots" content="noindex, nofollow" />
 
              <link
                href="https://fonts.googleapis.com/css?family=Roboto"
                rel="stylesheet"
              />

            </Head> 
            <body>
              <Main />
              <NextScript />
            </body>

          </html>
        );
      }
    }