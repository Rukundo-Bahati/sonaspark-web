"use client"

import { ArrowLeft, Download, Search, Filter, WifiOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

interface AdaptationToolkitScreenProps {
  onBack: () => void
  language: string
  theme: "light" | "dark"
}

export function AdaptationToolkitScreen({ onBack, language, theme }: AdaptationToolkitScreenProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const resources = [
    {
      id: 1,
      title:
        language === "en"
          ? "Drought-Resistant Farming Guide"
          : language === "fr"
            ? "Guide d'Agriculture Résistante à la Sécheresse"
            : "Amabwiriza y'Ubuhinzi Buhangana n'Amapfa",
      category: language === "en" ? "Agriculture" : language === "fr" ? "Agriculture" : "Ubuhinzi",
      offline: true,
      thumbnail: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg",
    },
    {
      id: 2,
      title:
        language === "en"
          ? "Flood Protection Measures"
          : language === "fr"
            ? "Mesures de Protection Contre les Inondations"
            : "Ingamba zo Kurinda Umwuzure",
      category: language === "en" ? "Infrastructure" : language === "fr" ? "Infrastructure" : "Ibikorwa remezo",
      offline: true,
      thumbnail: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg",
    },
    {
      id: 3,
      title:
        language === "en"
          ? "Water Conservation Techniques"
          : language === "fr"
            ? "Techniques de Conservation de l'Eau"
            : "Uburyo bwo Kubungabunga Amazi",
      category: language === "en" ? "Water" : language === "fr" ? "Eau" : "Amazi",
      offline: false,
      thumbnail: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
    },
    {
      id: 4,
      title:
        language === "en"
          ? "Sustainable Energy Solutions"
          : language === "fr"
            ? "Solutions Énergétiques Durables"
            : "Ibisubizo by'Ingufu Zirambye",
      category: language === "en" ? "Energy" : language === "fr" ? "Énergie" : "Ingufu",
      offline: false,
      thumbnail: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
    },
    {
      id: 5,
      title:
        language === "en"
          ? "Emergency Evacuation Plan"
          : language === "fr"
            ? "Plan d'Évacuation d'Urgence"
            : "Gahunda yo Kwimuka mu Bihe Bikomeye",
      category: language === "en" ? "Safety" : language === "fr" ? "Sécurité" : "Umutekano",
      offline: true,
      thumbnail: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
    },
    {
      id: 6,
      title:
        language === "en"
          ? "Heat Wave Survival Guide"
          : language === "fr"
            ? "Guide de Survie aux Vagues de Chaleur"
            : "Amabwiriza yo Guhangana n'Ibihe by'Ubushyuhe Bukabije",
      category: language === "en" ? "Health" : language === "fr" ? "Santé" : "Ubuzima",
      offline: true,
      thumbnail: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg",
    },
  ]

  return (
    <div className="flex flex-col gap-4 pb-20">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">
          {language === "en"
            ? "Adaptation Toolkit"
          
            : language === "fr"
              ? "Boîte à Outils d'Adaptation"
              : "Ibikoresho byo Kwihangana"}
        </h1>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="search"
            placeholder={
              language === "en"
                ? "Search resources..."
                : language === "fr"
                  ? "Rechercher des ressources..."
                  : "Shakisha ibikoresho..."
            }
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            alert(
              language === "en" ? "Filter options" : language === "fr" ? "Options de filtrage" : "Uburyo bwo gutoranya",
            )
          }}
        >
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="all">{language === "en" ? "All" : language === "fr" ? "Tous" : "Byose"}</TabsTrigger>
          <TabsTrigger value="offline">
            {language === "en" ? "Offline" : language === "fr" ? "Hors Ligne" : "Bidakenera Interineti"}
          </TabsTrigger>
          <TabsTrigger value="popular">
            {language === "en" ? "Popular" : language === "fr" ? "Populaire" : "Bikunzwe"}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-2 gap-3">
            {resources.map((resource) => (
              <Card key={resource.id}>
                <CardContent className="p-3">
                  <div className="relative mb-2">
                    <img
                      src={resource.thumbnail || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-20 object-cover rounded-md bg-gray-100 dark:bg-gray-800"
                    />
                    {resource.offline && (
                      <Badge variant="secondary" className="absolute bottom-1 right-1 flex items-center gap-1 text-xs">
                        <WifiOff className="h-3 w-3" />
                        {language === "en" ? "Offline" : language === "fr" ? "Hors Ligne" : "Nta Interineti"}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2">{resource.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.category}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        alert(
                          language === "en"
                            ? `Downloading ${resource.title}...`
                            : language === "fr"
                              ? `Téléchargement de ${resource.title}...`
                              : `Kumanura ${resource.title}...`,
                        )
                      }}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="offline" className="mt-4">
          <div className="grid grid-cols-2 gap-3">
            {resources
              .filter((r) => r.offline)
              .map((resource) => (
                <Card key={resource.id}>
                  <CardContent className="p-3">
                    <div className="relative mb-2">
                      <img
                        src={resource.thumbnail || "/placeholder.svg"}
                        alt={resource.title}
                        className="w-full h-20 object-cover rounded-md bg-gray-100 dark:bg-gray-800"
                      />
                      <Badge variant="secondary" className="absolute bottom-1 right-1 flex items-center gap-1 text-xs">
                        <WifiOff className="h-3 w-3" />
                        {language === "en" ? "Offline" : language === "fr" ? "Hors Ligne" : "Nta Interineti"}
                      </Badge>
                    </div>
                    <h3 className="text-sm font-medium line-clamp-2">{resource.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => {
                          alert(
                            language === "en"
                              ? `Downloading ${resource.title}...`
                              : language === "fr"
                                ? `Téléchargement de ${resource.title}...`
                                : `Kumanura ${resource.title}...`,
                          )
                        }}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="mt-4">
          <div className="grid grid-cols-2 gap-3">
            {resources.slice(0, 4).map((resource) => (
              <Card key={resource.id}>
                <CardContent className="p-3">
                  <div className="relative mb-2">
                    <img
                      src={resource.thumbnail || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-20 object-cover rounded-md bg-gray-100 dark:bg-gray-800"
                    />
                    {resource.offline && (
                      <Badge variant="secondary" className="absolute bottom-1 right-1 flex items-center gap-1 text-xs">
                        <WifiOff className="h-3 w-3" />
                        {language === "en" ? "Offline" : language === "fr" ? "Hors Ligne" : "Nta Interineti"}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2">{resource.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.category}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        alert(
                          language === "en"
                            ? `Downloading ${resource.title}...`
                            : language === "fr"
                              ? `Téléchargement de ${resource.title}...`
                              : `Kumanura ${resource.title}...`,
                        )
                      }}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mt-2">
        <p className="text-xs text-blue-700 dark:text-blue-300 flex items-center gap-1">
          <Download className="h-4 w-4" />
          {language === "en"
            ? "Download resources for offline access in areas with limited connectivity."
            : language === "fr"
              ? "Téléchargez des ressources pour un accès hors ligne dans les zones à connectivité limitée."
              : "Manura ibikoresho kugira ngo ubibone utakoresheje interineti ahantu interineti idakora neza."}
        </p>
      </div>
    </div>
  )
}
