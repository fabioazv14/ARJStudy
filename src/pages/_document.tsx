import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt" className="dark" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('arj-theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.classList.remove('dark', 'light');
                    document.documentElement.classList.add(theme);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
