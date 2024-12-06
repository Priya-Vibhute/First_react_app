import { useCallback, useEffect, useState } from "react";

function CurrencyConverter() {

    const [currency, setCurrency] = useState(0);
    const [dollar,setDollar]=useState(0);

    const changeCurrency=useCallback(() => {

        fetch("https://api.exchangerate-api.com/v4/latest/INR")
            .then(data => data.json())
            .then(data => {
                setDollar(currency*data["rates"]["USD"])
            })

    }, [currency])

    useEffect(()=>{
        changeCurrency();
    },[currency])

    return (<div class="input-group mb-3">

        <h1>Currency converter </h1>
        <span class="input-group-text">$</span>
        <span class="input-group-text">{dollar}</span>
        <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" value={currency} onChange={(e)=>setCurrency(e.target.value)}/>
    </div>);
}

export default CurrencyConverter;