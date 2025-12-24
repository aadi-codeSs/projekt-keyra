import { useState } from 'react'
import './App.css'
import { MnemonicGenerator } from './components/generateMnemonic';
import { Logo } from './components/ui/Logo';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      {/* <MnemonicGenerator mnemonic={mnemonic} setMnemonic={setMnemonic}></MnemonicGenerator> */}
      <Header></Header>
      <Footer></Footer>
    </>
  )
}

export default App
