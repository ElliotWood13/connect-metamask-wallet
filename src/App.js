import { SetupWallet } from './components/organisms/setupWallet'
import { Layout } from './components/layouts/layout'

const App = () => {
  return (
    <div>
      <Layout>
        <SetupWallet />
      </Layout>
    </div>
  );
}

export default App;