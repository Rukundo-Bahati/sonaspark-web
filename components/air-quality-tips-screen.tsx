"use client"

import { ArrowLeft, Share2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface AirQualityTipsScreenProps {
  onBack: () => void
  language: string
  theme: "light" | "dark"
}

export function AirQualityTipsScreen({ onBack, language, theme }: AirQualityTipsScreenProps) {
  const tips = [
    {
      id: 1,
      title:
        language === "en"
          ? "Use Protective Masks"
          : language === "fr"
            ? "Utilisez des Masques Protecteurs"
            : "Koresha Agapfukamunwa Karinda",
      description:
        language === "en"
          ? "Wear N95 or KN95 masks when outdoors to filter particulate matter."
          : language === "fr"
            ? "Portez des masques N95 ou KN95 à l'extérieur pour filtrer les particules."
            : "Ambara agapfukamunwa ka N95 cyangwa KN95 uri hanze kugira ngo ufatishe uduce duto.",
    },
    {
      id: 2,
      title: language === "en" ? "Stay Indoors" : language === "fr" ? "Restez à l'Intérieur" : "Guma mu Nzu",
      description:
        language === "en"
          ? "Limit outdoor activities, especially during peak pollution hours."
          : language === "fr"
            ? "Limitez les activités extérieures, surtout pendant les heures de pointe de pollution."
            : "Gabanya ibikorwa byo hanze, cyane cyane mu masaha y'ubwandu bwinshi.",
    },
    {
      id: 3,
      title:
        language === "en"
          ? "Use Air Purifiers"
          : language === "fr"
            ? "Utilisez des Purificateurs d'Air"
            : "Koresha Imashini Isukura Umwuka",
      description:
        language === "en"
          ? "If available, use air purifiers with HEPA filters in your home."
          : language === "fr"
            ? "Si disponible, utilisez des purificateurs d'air avec filtres HEPA dans votre maison."
            : "Niba ihari, koresha imashini isukura umwuka ifite HEPA mu rugo rwawe.",
    },
    {
      id: 4,
      title:
        language === "en"
          ? "Keep Windows Closed"
          : language === "fr"
            ? "Gardez les Fenêtres Fermées"
            : "Gumisha Amadirishya Afunze",
      description:
        language === "en"
          ? "Keep windows and doors closed to prevent outdoor pollutants from entering."
          : language === "fr"
            ? "Gardez les fenêtres et les portes fermées pour empêcher les polluants extérieurs d'entrer."
            : "Gumisha amadirishya n'inzugi bifunze kugira ngo ubuhumane bwo hanze butinjira.",
    },
    {
      id: 5,
      title: language === "en" ? "Stay Hydrated" : language === "fr" ? "Restez Hydraté" : "Nywa Amazi Ahagije",
      description:
        language === "en"
          ? "Drink plenty of water to help your body flush out toxins."
          : language === "fr"
            ? "Buvez beaucoup d'eau pour aider votre corps à éliminer les toxines."
            : "Nywa amazi menshi kugira ngo afashe umubiri wawe gukuramo uburozi.",
    },
    {
      id: 6,
      title:
        language === "en"
          ? "Avoid Strenuous Exercise"
          : language === "fr"
            ? "Évitez l'Exercice Intense"
            : "Irinde Imyitozo Ikomeye",
      description:
        language === "en"
          ? "Avoid heavy exercise outdoors when air quality is poor."
          : language === "fr"
            ? "Évitez l'exercice intense à l'extérieur lorsque la qualité de l'air est mauvaise."
            : "Irinde imyitozo ikomeye hanze iyo ubwiza bw'umwuka bubi.",
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
            ? "Air Quality Tips"
            : language === "fr"
              ? "Conseils sur la Qualité de l'Air"
              : "Inama ku Bwiza bw'Umwuka"}
        </h1>
      </div>

      <div className="space-y-3">
        {tips.map((tip) => (
          <Card key={tip.id}>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">{tip.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{tip.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        variant="outline"
        className="flex gap-2 items-center"
        onClick={() => {
          alert(
            language === "en"
              ? "Sharing air quality tips..."
              : language === "fr"
                ? "Partage des conseils sur la qualité de l'air..."
                : "Gusangiza inama ku bwiza bw'umwuka...",
          )
        }}
      >
        <Share2 className="h-4 w-4" />
        {language === "en" ? "Share These Tips" : language === "fr" ? "Partager Ces Conseils" : "Sangiza Izi Nama"}
      </Button>

      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mt-2">
        <p className="text-xs text-green-700 dark:text-green-300">
          {language === "en"
            ? "These tips are general guidelines. Adapt them to your specific situation."
            : language === "fr"
              ? "Ces conseils sont des directives générales. Adaptez-les à votre situation spécifique."
              : "Izi nama ni amabwiriza rusange. Zihindure ukurikije uko wowe uteye."}
        </p>
      </div>
    </div>
  )
}
