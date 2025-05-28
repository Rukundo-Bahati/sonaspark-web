"use client"

import { ArrowLeft, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getTranslation } from "@/utils/translations"

interface AirQualityScreenProps {
  onBack: () => void
  onHealthRisks: () => void
  language: string
  theme: "light" | "dark"
}

export function AirQualityScreen({ onBack, onHealthRisks, language, theme }: AirQualityScreenProps) {
  // AQI data
  const aqi = 72
  const pm25 = 18.5
  const pm10 = 42.3
  const o3 = 35.8
  const no2 = 21.2

  // Determine color based on AQI
  const getColor = () => {
    if (aqi <= 50) return "bg-green-100 text-green-800 border-green-300"
    if (aqi <= 100) return "bg-yellow-100 text-yellow-800 border-yellow-300"
    if (aqi <= 150) return "bg-orange-100 text-orange-800 border-orange-300"
    if (aqi <= 200) return "bg-red-100 text-red-800 border-red-300"
    if (aqi <= 300) return "bg-purple-100 text-purple-800 border-purple-300"
    return "bg-rose-100 text-rose-800 border-rose-300"
  }

  const getStatus = () => {
    if (aqi <= 50) return getTranslation("good", language)
    if (aqi <= 100) return getTranslation("moderate", language)
    if (aqi <= 150) return getTranslation("unhealthyForSensitiveGroups", language)
    if (aqi <= 200) return getTranslation("unhealthy", language)
    if (aqi <= 300) return getTranslation("veryUnhealthy", language)
    return getTranslation("hazardous", language)
  }

  return (
    <div className="flex flex-col gap-4 pb-20">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">{getTranslation("airQuality", language)}</h1>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-1">{getTranslation("currentAQI", language)}</p>
            <div className="text-6xl font-bold mb-2">{aqi}</div>
            <div className={`text-sm px-3 py-1 rounded-full border ${getColor()}`}>{getStatus()}</div>

            <div className="grid grid-cols-2 gap-4 w-full mt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">PM2.5</p>
                <p className="text-xl font-medium">{pm25}</p>
                <p className="text-xs text-gray-500">µg/m³</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">PM10</p>
                <p className="text-xl font-medium">{pm10}</p>
                <p className="text-xs text-gray-500">µg/m³</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">O₃</p>
                <p className="text-xl font-medium">{o3}</p>
                <p className="text-xs text-gray-500">ppb</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">NO₂</p>
                <p className="text-xl font-medium">{no2}</p>
                <p className="text-xs text-gray-500">ppb</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="24h">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">{getTranslation("trends", language)}</h2>
          <TabsList>
            <TabsTrigger value="24h">24h</TabsTrigger>
            <TabsTrigger value="week">{getTranslation("week", language)}</TabsTrigger>
            <TabsTrigger value="month">{getTranslation("month", language)}</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="24h" className="mt-0">
          <Card>
            <CardContent className="p-4">
              {/* Trends Graph Placeholder */}
              <div className="h-40 bg-gray-50 rounded-md flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Simplified graph representation */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
                  <div className="absolute bottom-0 left-1/4 h-20 w-px bg-gray-200"></div>
                  <div className="absolute bottom-0 left-2/4 h-20 w-px bg-gray-200"></div>
                  <div className="absolute bottom-0 left-3/4 h-20 w-px bg-gray-200"></div>

                  {/* Line chart simulation */}
                  <svg className="absolute inset-0" viewBox="0 0 100 50">
                    <path
                      d="M0,30 C10,25 20,35 30,20 C40,10 50,15 60,25 C70,30 80,20 90,15 L100,20"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Time labels */}
                  <div className="absolute bottom-0 left-0 text-xs text-gray-500">00:00</div>
                  <div className="absolute bottom-0 left-[23%] text-xs text-gray-500">06:00</div>
                  <div className="absolute bottom-0 left-[48%] text-xs text-gray-500">12:00</div>
                  <div className="absolute bottom-0 left-[73%] text-xs text-gray-500">18:00</div>
                  <div className="absolute bottom-0 right-0 text-xs text-gray-500">24:00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="mt-0">
          <Card>
            <CardContent className="p-4 flex items-center justify-center h-40">
              <p className="text-gray-500">
                {language === "en"
                  ? "Weekly trend data"
                  : language === "fr"
                    ? "Données de tendance hebdomadaire"
                    : "Amakuru y'imigendekere y'icyumweru"}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="month" className="mt-0">
          <Card>
            <CardContent className="p-4 flex items-center justify-center h-40">
              <p className="text-gray-500">
                {language === "en"
                  ? "Monthly trend data"
                  : language === "fr"
                    ? "Données de tendance mensuelle"
                    : "Amakuru y'imigendekere y'ukwezi"}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-2 gap-3">
        <Button onClick={onHealthRisks} className="flex gap-2 items-center">
          <Heart className="h-4 w-4" />
          {getTranslation("healthRisks", language)}
        </Button>
        <Button
          variant="outline"
          className="flex gap-2 items-center"
          onClick={() => {
            alert(
              language === "en"
                ? "Sharing air quality data..."
                : language === "fr"
                  ? "Partage des données de qualité de l'air..."
                  : "Gusangiza amakuru y'ubwiza bw'umwuka...",
            )
          }}
        >
          <Share2 className="h-4 w-4" />
          {getTranslation("share", language)}
        </Button>
      </div>

      <div className="bg-blue-50 p-3 rounded-lg mt-2">
        <p className="text-xs text-blue-700">
          {language === "en"
            ? "Data is updated every hour. Last updated 15 minutes ago."
            : language === "fr"
              ? "Les données sont mises à jour toutes les heures. Dernière mise à jour il y a 15 minutes."
              : "Amakuru avugururwa buri saha. Avugururiwe hashize iminota 15."}
        </p>
      </div>
    </div>
  )
}
