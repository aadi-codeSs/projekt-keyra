import { generateMnemonic } from "bip39"
import { useState } from "react";

const MnemonicGenerator = ({mnemonic, setMnemonic}) => {

    return <button onClick = {
        async function(){
            const mn = await generateMnemonic();
            setMnemonic(mn);
            console.log(mn);
        }
    }>
        Create Seed Phrase
    </button>
}

export {MnemonicGenerator}
