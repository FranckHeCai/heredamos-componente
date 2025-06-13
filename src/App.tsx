import { useFlowStore } from './store/store';
import StatusFlow from './components/StatusFlow';

function App() {
  const {currentStep, setCurrentStep} = useFlowStore(state => state)

  const handleNext = () => {
    setCurrentStep(
      currentStep === 3 
        ? currentStep 
        : currentStep + 1 
    )
  }

  const handlePrev = () => {
    setCurrentStep( 
      currentStep === 0 
        ? currentStep 
        : currentStep - 1 
    )
  }
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center gap-5 bg-amber-50'>
          <StatusFlow />
          <div className='flex gap-5'>
            <button 
              disabled={currentStep === 0}
              className='bg-amber-900 px-5 py-2 text-amber-50 rounded disabled:opacity-50' onClick={handlePrev}>Anterior</button>
            <button 
              disabled={currentStep === 3}
              className='bg-amber-900 px-5 py-2 text-amber-50 rounded disabled:opacity-50' onClick={handleNext}>Siguiente</button>
          </div>
      </div>
    </>
  )
}

export default App
