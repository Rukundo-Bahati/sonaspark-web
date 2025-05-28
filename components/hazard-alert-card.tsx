"use client"

import { Bell } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getTranslation } from "@/utils/translations"

interface HazardAlertCardProps {
  count: number
  onClick: () => void
  language: string
}

export function HazardAlertCard({ count, onClick, language }: HazardAlertCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Button
          variant="ghost"
          className="h-full w-full flex flex-col items-center justify-center p-4 gap-2"
          onClick={onClick}
        >
          <Bell className="h-6 w-6 text-yellow-500" />
          <span className="text-sm font-medium">{getTranslation("hazardAlerts", language)}</span>
          {count > 0 && (
            <Badge variant="destructive" className="text-xs">
              {count} {getTranslation("active", language)}
            </Badge>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
