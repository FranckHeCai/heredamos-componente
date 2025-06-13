import { useState } from 'react'

function App() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    'Subir documentos',
    'Revisión legal',
    'Firma de documentos',
    'Finalización'
  ];

  const handleNext = () => {
    setCurrentStep(prev => 
      prev === 3 
        ? prev 
        : prev + 1 
    )
  }

  const handlePrev = () => {
    setCurrentStep(prev => 
      prev === 0 
        ? prev 
        : prev - 1 
    )
  }
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center gap-5 bg-amber-50'>
          <ol className='flex gap-2'>
            {
              steps.map((step, index)=> {
                return (
                  <li className='flex flex-col items-center gap-2' key={index}>
                    <button
                      disabled={index > currentStep}
                      className={`size-10 rounded-full flex items-center justify-center bg-amber-800 text-white disabled:bg-gray-300 disabled:text-gray-900 transition transition-duration-300`}>
                      {index + 1}
                    </button>
                    {step}
                  </li>
                )
              })
            }
          </ol>
          <button className='bg-amber-900 px-5 py-2 text-amber-50 rounded' onClick={handlePrev}>Anterior</button>
          <button className='bg-amber-900 px-5 py-2 text-amber-50 rounded' onClick={handleNext}>Siguiente</button>
      </div>
    </>
  )
}

export default App
