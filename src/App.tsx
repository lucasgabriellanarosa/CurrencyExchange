import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [currencies, setCurrencies] = useState([])
  
  const [currencyOne, setCurrencyOne] = useState<string>('brl')
  const [currencyTwo, setCurrencyTwo] = useState<string>('usd')

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
            <input type="number" className='outline-none'/>
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
            <input type="number" className='outline-none'/>
          </div>

        </form>

      </div>
    
    </main>
  )
}

export default App
