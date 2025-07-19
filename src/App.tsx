import { WalletSection } from "./WalletSection";
import "./index.css";


// Raw wallet config (no broken imports)

const coreumTestnet = {
  chain_name: "coreum",
  chain_id: "coreum-testnet-1",
  rpc: "https://full-node.testnet-1.coreum.dev:26657",
  rest: "https://full-node.testnet-1.coreum.dev:1317",
  bip44: { coin_type: 990 },
  bech32_config: {
    bech32PrefixAccAddr: "core",
    bech32PrefixAccPub: "corepub",
    bech32PrefixValAddr: "corevaloper",
    bech32PrefixValPub: "corevaloperpub",
    bech32PrefixConsAddr: "corevalcons",
    bech32PrefixConsPub: "corevalconspub",
  },
  currencies: [
    {
      coinDenom: "CORE",
      coinMinimalDenom: "utestcore",
      coinDecimals: 6,
      coinGeckoId: "coreum",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "CORE",
      coinMinimalDenom: "utestcore",
      coinDecimals: 6,
      coinGeckoId: "coreum",
      gasPriceStep: { low: 0.025, average: 0.05, high: 0.1 },
    },
  ],
  stakeCurrency: {
    coinDenom: "CORE",
    coinMinimalDenom: "utestcore",
    coinDecimals: 6,
    coinGeckoId: "coreum",
  },
  features: ["ibc-transfer", "cosmwasm"],
};

export default function App() {
  return (



<ChainProvider
  chains={[coreumTestnet]}
  assetLists={[]}
  wallets={keplrWallets}
  walletConnectOptions={{ signClient: { projectId: "demo" } }}
>




      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-6">SoloPass Testnet Mint</h1>
        <WalletSection />
      </div>
    </ChainProvider>
  );
}

