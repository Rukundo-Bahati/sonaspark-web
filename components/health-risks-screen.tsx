"use client"

import { ArrowLeft, AlertTriangle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface HealthRisksScreenProps {
  onBack: () => void
  onTips: () => void
  language: string
  theme: "light" | "dark"
}

export function HealthRisksScreen({ onBack, onTips, language, theme }: HealthRisksScreenProps) {
  const healthRisks = [
    {
      id: 1,
      condition: language === "en" ? "Asthma" : language === "fr" ? "Asthme" : "Asima",
      risk: language === "en" ? "High" : language === "fr" ? "Élevé" : "Hejuru",
      riskColor: "red",
      description:
        language === "en"
          ? "Current air quality may trigger asthma attacks. Keep inhalers accessible."
          : language === "fr"
            ? "La qualité de l'air actuelle peut déclencher des crises d'asthme. Gardez les inhalateurs accessibles."
            : "Ubwiza bw'umwuka ubu bushobora gutera ibitero by'asima. Gira imiti y'asima hafi.",
    },
    {
      id: 2,
      condition: language === "en" ? "Heart Disease" : language === "fr" ? "Maladie Cardiaque" : "Indwara z'Umutima",
      risk: language === "en" ? "Moderate" : language === "fr" ? "Modéré" : "Biraringaniye",
      riskColor: "yellow",
      description:
        language === "en"
          ? "Increased risk of cardiovascular symptoms. Limit outdoor activities."
          : language === "fr"
            ? "Risque accru de symptômes cardiovasculaires. Limitez les activités extérieures."
            : "Ibyago byiyongereye by'ibimenyetso by'indwara z'umutima. Gabanya ibikorwa byo hanze.",
    },
    {
      id: 3,
      condition:
        language === "en"
          ? "Respiratory Infections"
          : language === "fr"
            ? "Infections Respiratoires"
            : "Indwara z'Ubuhumekero",
      risk: language === "en" ? "Moderate" : language === "fr" ? "Modéré" : "Biraringaniye",
      riskColor: "yellow",
      description:
        language === "en"
          ? "Elevated risk of respiratory infections. Wear masks when outdoors."
          : language === "fr"
            ? "Risque élevé d'infections respiratoires. Portez des masques à l'extérieur."
            : "Ibyago byiyongereye by'indwara z'ubuhumekero. Ambara agapfukamunwa uri hanze.",
    },
    {
      id: 4,
      condition: language === "en" ? "Eye Irritation" : language === "fr" ? "Irritation des Yeux" : "Kuryamira Amaso",
      risk: language === "en" ? "Low" : language === "fr" ? "Faible" : "Hasi",
      riskColor: "green",
      description:
        language === "en"
          ? "Minor risk of eye irritation. Use eye drops if needed."
          : language === "fr"
            ? "Risque mineur d'irritation des yeux. Utilisez des gouttes pour les yeux si nécessaire."
            : "Ibyago bike byo kuryamira amaso. Koresha imiti y'amaso niba bikenewe.",
    },
    {
      id: 5,
      condition: language === "en" ? "Allergies" : language === "fr" ? "Allergies" : "Aleriji",
      risk: language === "en" ? "High" : language === "fr" ? "Élevé" : "Hejuru",
      riskColor: "red",
      description:
        language === "en"
          ? "High pollen and particulate matter may worsen allergies. Take antihistamines as prescribed."
          : language === "fr"
            ? "Le pollen élevé et les particules peuvent aggraver les allergies. Prenez des antihistaminiques selon la prescription."
            : "Umukungugu mwinshi n'uduce duto bishobora kwongera aleriji. Fata imiti y'aleriji nk'uko yagutegekewe.",
    },
  ]

  return (
    <div className="flex flex-col gap-4 pb-20">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">
          {language === "en" ? "Health Risks" : language === "fr" ? "Risques pour la Santé" : "Ingaruka ku Buzima"}
        </h1>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 p-3 rounded-r-md">
        <div className="flex gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            {language === "en"
              ? "Current air quality may pose health risks to sensitive groups."
              : language === "fr"
                ? "La qualité de l'air actuelle peut présenter des risques pour la santé des groupes sensibles."
                : "Ubwiza bw'umwuka ubu bushobora kugira ingaruka ku buzima ku bantu bafite ibibazo."}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {healthRisks.map((risk) => (
          <Card key={risk.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{risk.condition}</h3>
                <Badge
                  variant="outline"
                  className={`bg-${risk.riskColor}-100 text-${risk.riskColor}-800 border-${risk.riskColor}-300 dark:bg-${risk.riskColor}-900/30 dark:text-${risk.riskColor}-300 dark:border-${risk.riskColor}-800`}
                >
                  {risk.risk}
                </Badge>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{risk.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={onTips} className="mt-2">
        {language === "en"
          ? "View Air Quality Tips"
          : language === "fr"
            ? "Voir Conseils sur la Qualité de l'Air"
            : "Reba Inama ku Bwiza bw'Umwuka"}
      </Button>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mt-2">
        <p className="text-xs text-blue-700 dark:text-blue-300 flex items-center gap-1">
          <ExternalLink className="h-4 w-4" />
          {language === "en"
            ? "Consult healthcare providers for personalized advice."
            : language === "fr"
              ? "Consultez des professionnels de la santé pour des conseils personnalisés."
              : "Baza abaganga kugira ngo bahe inama zihariye."}
        </p>
      </div>
    </div>
  )
}
