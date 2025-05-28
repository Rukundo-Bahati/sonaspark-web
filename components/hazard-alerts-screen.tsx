"use client"

import { ArrowLeft, Info, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getTranslation } from "@/utils/translations"

interface HazardAlertsScreenProps {
  onBack: () => void
  language: string
  theme: "light" | "dark"
}

export function HazardAlertsScreen({ onBack, language, theme }: HazardAlertsScreenProps) {
  const alerts = [
    {
      id: 1,
      type: getTranslation("floodWarning", language),
      location: getTranslation("coastalAreas", language),
      time: getTranslation("twoHoursAgo", language),
      severity: getTranslation("moderate", language),
      severityColor: "yellow",
      description:
        language === "en"
          ? "Rising water levels in coastal areas due to heavy rainfall. Potential for localized flooding in low-lying areas."
          : language === "fr"
            ? "Élévation du niveau d'eau dans les zones côtières en raison de fortes précipitations. Risque d'inondations localisées dans les zones basses."
            : "Amazi ariyongera mu nkengero z'amazi kubera imvura nyinshi. Hashobora kuba umwuzure mu turere turi hasi.",
    },
    {
      id: 2,
      type:
        language === "en" ? "Hurricane Alert" : language === "fr" ? "Alerte Ouragan" : "Imenyesha ry'Inkubi y'Umuyaga",
      location: language === "en" ? "Eastern Region" : language === "fr" ? "Région Est" : "Akarere k'Iburasirazuba",
      time: language === "en" ? "6 hours ago" : language === "fr" ? "il y a 6 heures" : "hashize amasaha 6",
      severity: language === "en" ? "Severe" : language === "fr" ? "Sévère" : "Bikabije",
      severityColor: "red",
      description:
        language === "en"
          ? "Hurricane approaching eastern coastline. Expected landfall in 48 hours. Prepare emergency supplies and evacuation plans."
          : language === "fr"
            ? "Ouragan approchant la côte est. Atterrissage prévu dans 48 heures. Préparez des fournitures d'urgence et des plans d'évacuation."
            : "Inkubi y'umuyaga iregereza inkombe y'iburasirazuba. Iteganyijwe kugera ku butaka mu masaha 48. Tegura ibikoresho by'ubutabazi n'ingamba zo kwimuka.",
    },
    {
      id: 3,
      type:
        language === "en"
          ? "Air Quality Alert"
          : language === "fr"
            ? "Alerte Qualité de l'Air"
            : "Imenyesha ry'Ubwiza bw'Umwuka",
      location: language === "en" ? "Urban Centers" : language === "fr" ? "Centres Urbains" : "Uduce tw'Imijyi",
      time: language === "en" ? "12 hours ago" : language === "fr" ? "il y a 12 heures" : "hashize amasaha 12",
      severity: getTranslation("moderate", language),
      severityColor: "yellow",
      description:
        language === "en"
          ? "Elevated pollution levels due to industrial activities and traffic. Sensitive groups should limit outdoor exposure."
          : language === "fr"
            ? "Niveaux de pollution élevés en raison d'activités industrielles et de la circulation. Les groupes sensibles devraient limiter l'exposition en plein air."
            : "Urwego rwo guhumana rwiyongereye kubera ibikorwa by'inganda n'ibinyabiziga. Abantu bafite intege nke bagomba kugabanya igihe bamara hanze.",
    },
  ]

  return (
    <div className="flex flex-col gap-4 pb-20">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">{getTranslation("hazardAlerts", language)}</h1>
      </div>

      {/* Map Placeholder */}
      <div
        className="relative h-60 bg-blue-50 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => {
          alert(
            language === "en"
              ? "Expanding map view"
              : language === "fr"
                ? "Agrandissement de la vue de la carte"
                : "Kwagura indangahantu",
          )
        }}
      >
        <div className="absolute inset-0 bg-blue-100 opacity-50"></div>
        <div className="relative z-10 text-center">
          <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-700">
            {language === "en"
              ? "Interactive Map"
              : language === "fr"
                ? "Carte Interactive"
                : "Ikarita Ishobora Gukoreshwa"}
          </p>
          <p className="text-xs text-gray-500">
            {language === "en"
              ? "Tap to expand"
              : language === "fr"
                ? "Appuyez pour agrandir"
                : "Kanda kugira ngo waguze"}
          </p>
        </div>

        {/* Map Markers */}
        <div className="absolute top-1/4 left-1/4 h-3 w-3 bg-yellow-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-3 w-3 bg-yellow-500 rounded-full animate-pulse"></div>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">
          {language === "en" ? "Active Alerts" : language === "fr" ? "Alertes Actives" : "Imenyesha Ikoreshwa"}
        </h2>
        <Badge variant="outline" className="bg-blue-50">
          {alerts.length} {getTranslation("total", language)}
        </Badge>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <Card key={alert.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{alert.type}</h3>
                    <Badge
                      variant="outline"
                      className={`bg-${alert.severityColor}-100 text-${alert.severityColor}-800 border-${alert.severityColor}-300`}
                    >
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {alert.location} • {alert.time}
                  </p>
                </div>
              </div>

              <Separator className="my-3" />

              <p className="text-sm text-gray-700 mb-3">{alert.description}</p>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  window.alert(
                    language === "en"
                      ? `Learning more about ${alert.type}`
                      : language === "fr"
                      ? `En savoir plus sur ${alert.type}`
                      : `Kumenya ibisobanuro kuri ${alert.type}`
                  )
                }}
              >
                <Info className="h-4 w-4 mr-2" />
                {getTranslation("learnMore", language)}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 p-3 rounded-lg mt-2">
        <p className="text-xs text-blue-700 flex items-center gap-1">
          <Info className="h-4 w-4" />
          {language === "en"
            ? "Alerts are updated every 15 minutes. Last updated 5 minutes ago."
            : language === "fr"
              ? "Les alertes sont mises à jour toutes les 15 minutes. Dernière mise à jour il y a 5 minutes."
              : "Imenyesha ivugururwa buri minota 15. Ivugururiwe hashize iminota 5."}
        </p>
      </div>
    </div>
  )
}
