export type FlowStore = {
  currentStep: number
  setCurrentStep: (currentStep: number) => void
}
export type Step = 'Subir documentos'| 'Revisión legal' | 'Firma de documentos' |'Revisión de datos'