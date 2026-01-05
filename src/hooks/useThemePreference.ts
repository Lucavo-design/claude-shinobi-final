'use client'

import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

export function useThemePreference(defaultTheme: Theme = 'light') {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
    }
    setIsLoaded(true)
  }, [])

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('theme', theme)
    }
  }, [theme, isLoaded])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return { theme, setTheme, toggleTheme, isLoaded }
}
