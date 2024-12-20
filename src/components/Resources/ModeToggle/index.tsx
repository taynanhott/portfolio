"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import * as React from "react"

export function ModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false)
  
    useEffect(() => {
      const isDark = document.documentElement.classList.contains('dark')
      setIsDarkMode(isDark)
    }, [])
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode)
      document.documentElement.classList.toggle('dark')
    }
  
    return (
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Alternar para modo claro" : "Alternar para modo escuro"}
        className={`w-12 h-12 cursor-pointer rounded-full ${isDarkMode ? 'hover:bg-slate-100 bg-slate-800' : 'hover:bg-slate-800 bg-slate-100'}`}
      >
        {isDarkMode ? (
          <Moon className="h-[1.2rem] w-[1.2rem] text-slate-100" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">
          {isDarkMode ? "Modo escuro ativo" : "Modo claro ativo"}
        </span>
      </Button>
    )
  }