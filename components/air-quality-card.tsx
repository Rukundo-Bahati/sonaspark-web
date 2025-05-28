"use client"

import { LineChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getTranslation } from "@/utils/translations"

interface AirQualityCardProps {
  aqi: number
  status: string
  pm25: number
  onClick: () => void
  language: string
}

export function AirQualityCard({ aqi, status, pm25, onClick, language }: AirQualityCardProps) {
  // Determine color based on AQI
  const getColor = () => {
    if (aqi <= 50) return "bg-green-100 text-green-800"
    if (aqi <= 100) return "bg-yellow-100 text-yellow-800"
    if (aqi <= 150) return "bg-orange-100 text-orange-800"
    if (aqi <= 200) return "bg-red-100 text-red-800"
    if (aqi <= 300) return "bg-purple-100 text-purple-800"
    return "bg-rose-100 text-rose-800"
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Button variant="ghost" className="h-full w-full flex flex-col items-start p-4 gap-2" onClick={onClick}>
          <div className="flex justify-between items-center w-full">
            <span className="text-sm font-medium text-gray-500">{getTranslation("airQualityIndex", language)}</span>
            <LineChart className="h-5 w-5 text-primary" />
          </div>

          <div className="flex items-end gap-2 mt-1">
            <span className="text-4xl font-bold">{aqi}</span>
            <span className={`text-sm px-2 py-0.5 rounded-full ${getColor()}`}>{status}</span>
          </div>

          <div className="flex justify-between items-center w-full mt-2">
            <span className="text-sm text-gray-500">
              {getTranslation("pm25", language)}: {pm25} µg/m³
            </span>
            <span className="text-xs text-primary">{getTranslation("viewDetails", language)} →</span>
          </div>
        </Button>
      </CardContent>
    </Card>
  )
}
