import '../styles/globals.css'
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
        desiredChainId = {ChainId.Rinkeby}
        chainRpc={{
            [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/5bd465a1f77143b0811e41069d51ca91'
        }}
        
    >     
        <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
