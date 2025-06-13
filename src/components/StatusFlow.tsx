import type {Step} from '../types';
import {useFlowStore} from '../store/store';
import CheckIcon from '../icons/CheckIcon';
const StatusFlow = () => {
  const {currentStep, setCurrentStep} = useFlowStore(state => state)
  
  const steps:Step[] = [
    'Subir documentos',
    'Revisión legal',
    'Firma de documentos',
    'Revisión de datos'
  ]

  return (
    <div className='relative w-full max-w-2xl'>
            {/* Fases */}
            <ol className='z-10 relative flex justify-between'>
              {
                steps.map((step, index)=> {
                  return (
                    <li className='flex flex-col items-center justify-center gap-2 text-amber-950 text-lg font-medium' key={index}>
                      <button
                        onClick={() => setCurrentStep(index)}
                        disabled={index > currentStep}
                        className={`size-10 rounded-full flex items-center justify-center bg-amber-800 text-white disabled:bg-gray-300 disabled:text-gray-900 transition-all duration-300`}>
                        { currentStep > index
                          ? <CheckIcon />
                          : index + 1

                        }
                      </button>
                      {step}
                    </li>
                  )
                })
              }
            </ol>
            {/* Barra de progeso */}
            <div className="z-0 absolute left-1/2 top-4 -translate-x-1/2 w-full max-w-lg h-2 bg-gray-300 rounded overflow-hidden">
              <div
                className="h-full bg-amber-800 transition-all duration-300"
                style={{
                  width: `${(currentStep) / (steps.length - 1) * 100}%`
                }}
                />
            </div>
          </div>
  );
};

export default StatusFlow;