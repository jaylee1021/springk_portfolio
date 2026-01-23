'use client';

import * as React from 'react';

interface SplashContextType {
    hasShownSplash: boolean;
    setHasShownSplash: (shown: boolean) => void;
}

const SplashContext = React.createContext<SplashContextType | undefined>(undefined);

export function SplashProvider({ children }: { children: React.ReactNode }) {
    const [hasShownSplash, setHasShownSplash] = React.useState(false);

    return (
        <SplashContext.Provider value={{ hasShownSplash, setHasShownSplash }}>
            {children}
        </SplashContext.Provider>
    );
}

export function useSplash() {
    const context = React.useContext(SplashContext);
    if (context === undefined) {
        throw new Error('useSplash must be used within a SplashProvider');
    }
    return context;
}
