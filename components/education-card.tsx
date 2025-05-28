"use client"

import { BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { getTranslation } from "@/utils/translations"

interface EducationCardProps {
  progress: number
  onClick: () => void
  language: string
}

export function EducationCard({ progress, onClick, language }: EducationCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Button
          variant="ghost"
          className="h-full w-full flex flex-col items-center justify-center p-4 gap-2"
          onClick={onClick}
        >
          <BookOpen className="h-6 w-6 text-blue-500" />
          <span className="text-sm font-medium">{getTranslation("education", language)}</span>
          <div className="w-full">
            <div className="flex justify-between text-xs mb-1">
              <span>{getTranslation("progress", language)}</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </Button>
      </CardContent>
    </Card>
  )
}
