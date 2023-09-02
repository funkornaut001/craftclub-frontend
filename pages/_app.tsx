import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  paperWallet,
  metamaskWallet,
  coinbaseWallet,
  ChainId,
  ConnectWallet,
  useAddress } from "@thirdweb-dev/react";
import { BaseGoerli } from "@thirdweb-dev/chains";
import Head from "next/head";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "Base Goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      supportedWallets={[ paperWallet({ paperClientId: "PAPER_CLIENT_ID" }), metamaskWallet(), coinbaseWallet() ]}
      activeChain={BaseGoerli}
    >
      <Head>
        <title>Craft Club NFT Minting Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Change the meta values to better fit what you need */}
        <meta
          name="description"
          content="Learn How To Use Thirdweb's Edition Drop contract and create a customizable Edition Drop minting page"
        />
        <meta
          name="keywords"
          content="Thirdweb, thirdweb Edition drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
        />
      </Head>

      {/* Add connect wallet button here to add more pages to minting website - styling need work */}
      <ConnectWallet />

      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
