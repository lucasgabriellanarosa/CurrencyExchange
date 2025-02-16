import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [currencies, setCurrencies] = useState<object[]>([])
  const [currencyOne, setCurrencyOne] = useState<string>('usd')
  const [currencyTwo, setCurrencyTwo] = useState<string>('brl')
  const [exchange, setExchange] = useState<number>()
  const [amount, setAmount] = useState<number>(1)
  const [totalExchange, setTotalExchange] = useState<number>()

  useEffect(() => {
    axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
    .then(result => {
      setCurrencies(result.data)
  })
  }, [])


  const changeSelectedCurrency = (selectedCurrency: string, currency: number) => {
    if(currency == 1){
      setCurrencyOne(selectedCurrency)
    }else{
      setCurrencyTwo(selectedCurrency)
    }
  }

  useEffect(() => {
    axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyOne}.json`)
    .then(result => setExchange(result.data[currencyOne][currencyTwo]))
  }, [currencyOne, currencyTwo])

  useEffect(() => {
    setTotalExchange(exchange * amount)
  }, [exchange, amount])


  const handleSetAmount = (value: number) => {
    setAmount(value)
  }

  return (
    <main className='flex flex-col items-center justify-center gap-8 min-h-svh bg-linear-to-br from-sky-500 to-indigo-500'>

      <h1 className='text-4xl'>Currency Exchange</h1>

      <div className='flex flex-row gap-4 bg-blue-100 rounded-lg items-center justify-center p-6'>      

        <form>
          <h2 className='text-xs'>Amount</h2>
          <div className='border-2 border-solid border-gray-400 rounded-sm p-1'>
            <select className='text-sm uppercase outline-none' onChange={(e) => changeSelectedCurrency(e.target.value, 1)} value={currencyOne}>
              {
                currencies > [] ?
                Object.keys(currencies).map((currency) => (
                  <option key={currency} value={currency} className='uppercase'>{currency}</option>
                ))
                :
                <></>
              }
            </select>
            <input type="number" className='outline-none' value={amount} onChange={(e) => handleSetAmount(e.target.value)}/>
          </div>
        </form>

        <form>
          <h2 className='text-xs'>Converted To</h2>
          <div className='border-2 border-solid border-gray-400 rounded-sm p-1'>
          <select className='text-sm uppercase outline-none' onChange={(e) => changeSelectedCurrency(e.target.value, 2)} value={currencyTwo}>
              {
                currencies > [] ?
                Object.keys(currencies).map((currency) => (
                  <option key={currency} value={currency} className='uppercase'>{currency}</option>
                ))
                :
                <></>
              }
            </select>
            <input type="number" className='outline-none' value={totalExchange?.toFixed(2)}/>
          </div>

        </form>

      </div>
    
    </main>
  )
}

export default App
