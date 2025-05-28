"use client"
import { Home, Bell, Leaf, FileText, Wallet, BookOpen } from "lucide-react"
import { getTranslation } from "@/utils/translations"

interface BottomNavigationProps {
  activeItem: string
  onItemClick: (item: string) => void
  language: string
  theme: "light" | "dark"
}

export function BottomNavigation({ activeItem, onItemClick, language, theme }: BottomNavigationProps) {
  const items = [
    { id: "home", icon: Home, label: getTranslation("home", language) },
    { id: "hazard-alerts", icon: Bell, label: getTranslation("alerts", language) },
    { id: "adaptation-toolkit", icon: Leaf, label: getTranslation("toolkit", language) },
    { id: "policy-dashboard", icon: FileText, label: getTranslation("policy", language) },
    { id: "funding-tracker", icon: Wallet, label: getTranslation("funding", language) },
    { id: "education-hub", icon: BookOpen, label: getTranslation("education", language) },
  ]

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 ${theme === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"} border-t flex justify-between items-center px-2 py-1 max-w-md mx-auto`}
    >
      {items.map((item) => (
        <button
          key={item.id}
          className={`flex flex-col items-center justify-center py-2 px-3 ${
            activeItem === item.id ? "text-primary" : theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
          onClick={() => onItemClick(item.id)}
        >
          <item.icon className="h-5 w-5" />
          <span className="text-xs mt-1">{item.label}</span>
        </button>
      ))}
    </div>
  )
}
