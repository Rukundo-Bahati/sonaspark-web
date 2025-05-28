"use client"

import { useState, useEffect } from "react"
import { Wallet, User, Settings, MoreVertical } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BottomNavigation } from "@/components/bottom-navigation"
import { AirQualityCard } from "@/components/air-quality-card"
import { HazardAlertCard } from "@/components/hazard-alert-card"
import { EducationCard } from "@/components/education-card"
import { ToolkitCard } from "@/components/toolkit-card"
import { HazardAlertsScreen } from "@/components/hazard-alerts-screen"
import { AirQualityScreen } from "@/components/air-quality-screen"
import { HealthRisksScreen } from "@/components/health-risks-screen"
import { AirQualityTipsScreen } from "@/components/air-quality-tips-screen"
import { AdaptationToolkitScreen } from "@/components/adaptation-toolkit-screen"
import { PolicyDashboardScreen } from "@/components/policy-dashboard-screen"
import EducationHubScreen from "@/components/education-hub-screen"
import { CrowdsourcingScreen } from "@/components/crowdsourcing-screen"
import { FundingTrackerScreen } from "@/components/funding-tracker-screen"
import { getTranslation } from "@/utils/translations"
import ProfilePage from "@/app/profile/page"
import SettingsPage from "@/app/settings/page"

export default function HomeScreen() {
  const [activeScreen, setActiveScreen] = useState("home")
  const [language, setLanguage] = useState("en")
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("sonaspark-theme", newTheme)
  }

  const cycleLanguage = () => {
    if (language === "en") setLanguage("fr")
    else if (language === "fr") setLanguage("rw")
    else setLanguage("en")
  }

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("sonaspark-theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return (
          <div className="flex flex-col gap-4 pb-20">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-primary">SonaSpark</h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={toggleTheme} className="text-xs">
                  {theme === "light" ? "🌙" : "☀️"}
                </Button>
                <Button variant="outline" size="sm" onClick={cycleLanguage} className="text-xs">
                  {language.toUpperCase()}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="text-xs">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setActiveScreen("profile")}>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveScreen("settings")}>
                      Settings
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-md">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-yellow-800">{getTranslation("floodWarning", language)}</p>
                  <p className="text-xs text-yellow-700">
                    {getTranslation("coastalAreas", language)} - {getTranslation("twoHoursAgo", language)}
                  </p>
                </div>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                  {getTranslation("moderate", language)}
                </Badge>
              </div>
            </div>

            <AirQualityCard
              aqi={72}
              status={getTranslation("moderate", language)}
              pm25={18.5}
              onClick={() => setActiveScreen("air-quality")}
              language={language}
            />

            <div className="grid grid-cols-2 gap-3">
              <HazardAlertCard count={3} onClick={() => setActiveScreen("hazard-alerts")} language={language} />
              <EducationCard progress={65} onClick={() => setActiveScreen("education-hub")} language={language} />
              <ToolkitCard count={12} onClick={() => setActiveScreen("adaptation-toolkit")} language={language} />
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Button
                    variant="ghost"
                    className="h-full w-full flex flex-col items-center justify-center p-4 gap-2"
                    onClick={() => setActiveScreen("funding-tracker")}
                  >
                    <Wallet className="h-6 w-6 text-green-600" />
                    <span className="text-sm font-medium">{getTranslation("funding", language)}</span>
                    <Badge variant="secondary" className="text-xs">
                      3 {getTranslation("new", language)}
                    </Badge>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case "hazard-alerts":
        return <HazardAlertsScreen onBack={() => setActiveScreen("home")} language={language} theme={theme} />
      case "air-quality":
        return (
          <AirQualityScreen
            onBack={() => setActiveScreen("home")}
            onHealthRisks={() => setActiveScreen("health-risks")}
            language={language}
            theme={theme}
          />
        )
      case "health-risks":
        return (
          <HealthRisksScreen
            onBack={() => setActiveScreen("air-quality")}
            onTips={() => setActiveScreen("air-quality-tips")}
            language={language}
            theme={theme}
          />
        )
      case "air-quality-tips":
        return <AirQualityTipsScreen onBack={() => setActiveScreen("health-risks")} language={language} theme={theme} />
      case "adaptation-toolkit":
        return <AdaptationToolkitScreen onBack={() => setActiveScreen("home")} language={language} theme={theme} />
      case "policy-dashboard":
        return <PolicyDashboardScreen onBack={() => setActiveScreen("home")} language={language} theme={theme} />
      case "education-hub":
        return <EducationHubScreen onBack={() => setActiveScreen("home")} language={language} theme={theme} />
      case "crowdsourcing":
        return <CrowdsourcingScreen onBack={() => setActiveScreen("home")} language={language} theme={theme} />
      case "funding-tracker":
        return <FundingTrackerScreen onBack={() => setActiveScreen("home")} language={language} theme={theme} />
      case "profile":
        return <ProfilePage language={language} theme={theme} />
      case "settings":
        return <SettingsPage language={language} theme={theme} />
      default:
        return null
    }
  }

  return (
    <div className="max-w-md mx-auto bg-background min-h-screen">
      <div className="p-4">{renderScreen()}</div>

      {/* Bottom Navigation */}
      <BottomNavigation activeItem={activeScreen} onItemClick={setActiveScreen} language={language} theme={theme} />
    </div>
  )
}
