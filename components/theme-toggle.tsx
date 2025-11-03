"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState<boolean>(false)

	useEffect(() => {
		const stored = typeof window !== "undefined" ? localStorage.getItem("uvg-theme") : null
		const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		const enableDark = stored ? stored === 'dark' : prefersDark
		setIsDark(enableDark)
		document.documentElement.classList.toggle('dark', enableDark)
	}, [])

	const toggleTheme = () => {
		const next = !isDark
		setIsDark(next)
		document.documentElement.classList.toggle('dark', next)
		localStorage.setItem('uvg-theme', next ? 'dark' : 'light')
	}

	return (
		<button
			onClick={toggleTheme}
			aria-label="Cambiar tema"
			className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 transition-colors dark:bg-amber-400 dark:text-slate-900 dark:hover:bg-amber-300"
		>
			{isDark ? (
				// Luna (tema oscuro activado)
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
					<path d="M21.64 13A9 9 0 1111 2.36 7 7 0 0021.64 13z" />
				</svg>
			) : (
				// Sol (tema claro activado)
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
					<path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0 4a1 1 0 011 1v1h-2v-1a1 1 0 011-1zm0-22a1 1 0 00-1 1v1h2V1a1 1 0 00-1-1zM1 11a1 1 0 011-1h1v2H2a1 1 0 01-1-1zm19-1h1a1 1 0 110 2h-1v-2zM4.22 4.22a1 1 0 011.42 0L7 5.59 5.59 7 4.22 5.64a1 1 0 010-1.42zM18.36 18.36a1 1 0 010 1.41l-1.36 1.36L15.64 19.7l1.36-1.36a1 1 0 011.36 0zM18.36 5.64L17 7 15.64 5.64 17 4.28a1 1 0 011.36 1.36zM7 19.7l-1.36 1.36a1 1 0 01-1.41-1.41L5.59 18.3 7 19.7z" />
				</svg>
			)}
		</button>
	)
}

