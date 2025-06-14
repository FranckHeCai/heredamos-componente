import { create } from "zustand";
import { persist } from 'zustand/middleware'
import type { FlowStore } from "../types";

export const useFlowStore = create<FlowStore>()(persist((set) => ({
  currentStep: 0,
  setCurrentStep: (currentStep) => set({currentStep}),
}),
 {
  // Partialize para guardar el estado en el localStorage
        name: 'Flow Store', 
        partialize: (state) => ({ 
          currentStep: state.currentStep
        }),
}
))