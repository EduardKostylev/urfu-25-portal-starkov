import { create } from "zustand";

const useHeader = create((set) => ({
    activeTab: 'main',

    setActiveTab: (tab) => set(() => ({ activeTab: tab }))
}))

export default useHeader;