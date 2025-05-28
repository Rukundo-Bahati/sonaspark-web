"use client"

import { Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getTranslation } from "@/utils/translations"

interface ToolkitCardProps {
  count: number
  onClick: () => void
  language: string
}

export function ToolkitCard({ count, onClick, language }: ToolkitCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Button
          variant="ghost"
          className="h-full w-full flex flex-col items-center justify-center p-4 gap-2"
          onClick={onClick}
        >
          <Leaf className="h-6 w-6 text-green-500" />
          <span className="text-sm font-medium">{getTranslation("adaptationToolkit", language)}</span>
          <span className="text-xs text-gray-500">
            {count} {getTranslation("resources", language)}
          </span>
        </Button>
      </CardContent>
    </Card>
  )
}
