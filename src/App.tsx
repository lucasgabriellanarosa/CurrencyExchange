import './App.css'

function App() {

  return (
    <main className='flex flex-col items-center justify-center gap-8 min-h-svh bg-linear-to-br from-sky-500 to-indigo-500'>

      <h1 className='text-4xl'>Currency Exchange</h1>

      <div className='flex flex-row gap-4 bg-blue-100 rounded-lg items-center justify-center p-6'>      

        <form>
          <h2 className='text-xs'>Amount</h2>
          <div className='border-2 border-solid border-gray-400 rounded-sm p-1'>
            <select className='text-sm'>
              <option value="BRL">BRL</option>
            </select>
            <input type="number" className='outline-none' />
          </div>
        </form>

        <form>
          <h2 className='text-xs'>Converted To</h2>
          <div className='border-2 border-solid border-gray-400 rounded-sm p-1'>
            <select className='text-sm'>
              <option value="BRL">BRL</option>
            </select>
            <input type="number" className='outline-none' />
          </div>

        </form>

      </div>
    
    </main>
  )
}

export default App
