"use client"

import { ArrowLeft, FileText, Send, ThumbsUp, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface PolicyDashboardScreenProps {
  onBack: () => void
  language: string
  theme: "light" | "dark"
}

export function PolicyDashboardScreen({ onBack, language, theme }: PolicyDashboardScreenProps) {
  const [feedback, setFeedback] = useState("")

  const policies = [
    {
      id: 1,
      title:
        language === "en"
          ? "National Climate Resilience Plan"
          : language === "fr"
            ? "Plan National de Résilience Climatique"
            : "Gahunda y'Igihugu yo Guhangana n'Imihindagurikire y'Ibihe",
      status: language === "en" ? "Active" : language === "fr" ? "Actif" : "Irakora",
      date:
        language === "en"
          ? "Updated 3 months ago"
          : language === "fr"
            ? "Mis à jour il y a 3 mois"
            : "Byavuguruwe amezi 3 ashize",
      summary:
        language === "en"
          ? "Comprehensive national strategy to address climate change impacts and build community resilience."
          : language === "fr"
            ? "Stratégie nationale complète pour faire face aux impacts du changement climatique et renforcer la résilience communautaire."
            : "Ingamba z'igihugu zikomatanyije zo guhangana n'ingaruka z'imihindagurikire y'ibihe no kubaka ubushobozi bw'abaturage.",
    },
    {
      id: 2,
      title:
        language === "en"
          ? "Coastal Protection Act"
          : language === "fr"
            ? "Loi sur la Protection Côtière"
            : "Itegeko ryo Kurinda Inkengero",
      status: language === "en" ? "Proposed" : language === "fr" ? "Proposé" : "Byatanzwe",
      date:
        language === "en"
          ? "Updated 1 month ago"
          : language === "fr"
            ? "Mis à jour il y a 1 mois"
            : "Byavuguruwe ukwezi 1 gushize",
      summary:
        language === "en"
          ? "Legislation to protect coastal areas from rising sea levels and erosion through infrastructure and natural solutions."
          : language === "fr"
            ? "Législation pour protéger les zones côtières de l'élévation du niveau de la mer et de l'érosion grâce à des infrastructures et des solutions naturelles."
            : "Amategeko yo kurinda inkengero z'inyanja kuzamuka kw'amazi n'isuri binyuze mu bikorwa remezo n'ibisubizo kamere.",
    },
    {
      id: 3,
      title:
        language === "en"
          ? "Sustainable Agriculture Initiative"
          : language === "fr"
            ? "Initiative d'Agriculture Durable"
            : "Umushinga w'Ubuhinzi Burambye",
      status: language === "en" ? "Active" : language === "fr" ? "Actif" : "Irakora",
      date:
        language === "en"
          ? "Updated 6 months ago"
          : language === "fr"
            ? "Mis à jour il y a 6 mois"
            : "Byavuguruwe amezi 6 ashize",
      summary:
        language === "en"
          ? "Program to support farmers in adopting climate-resilient agricultural practices and crops."
          : language === "fr"
            ? "Programme pour soutenir les agriculteurs dans l'adoption de pratiques agricoles et de cultures résilientes au climat."
            : "Gahunda yo gufasha abahinzi kwemera uburyo bw'ubuhinzi n'ibihingwa bihangana n'imihindagurikire y'ibihe.",
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
            ? "Policy Dashboard"
            : language === "fr"
              ? "Tableau de Bord des Politiques"
              : "Ikigega cy'Amategeko"}
        </h1>
      </div>

      <div className="space-y-3">
        {policies.map((policy) => (
          <Card key={policy.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{policy.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{policy.date}</p>
                </div>
                <Badge
                  variant={
                    policy.status === (language === "en" ? "Active" : language === "fr" ? "Actif" : "Irakora")
                      ? "default"
                      : "secondary"
                  }
                >
                  {policy.status}
                </Badge>
              </div>

              <Separator className="my-3" />

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{policy.summary}</p>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-1 items-center"
                  onClick={() => {
                    alert(
                      language === "en"
                        ? `Viewing ${policy.title}`
                        : language === "fr"
                          ? `Affichage de ${policy.title}`
                          : `Kureba ${policy.title}`,
                    )
                  }}
                >
                  <FileText className="h-4 w-4" />
                  {language === "en" ? "View" : language === "fr" ? "Voir" : "Reba"}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-1 items-center"
                  onClick={() => {
                    alert(
                      language === "en"
                        ? `Comment on ${policy.title}`
                        : language === "fr"
                          ? `Commenter sur ${policy.title}`
                          : `Gutanga igitekerezo kuri ${policy.title}`,
                    )
                  }}
                >
                  <MessageSquare className="h-4 w-4" />
                  {language === "en" ? "Comment" : language === "fr" ? "Commenter" : "Igitekerezo"}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-1 items-center ml-auto"
                  onClick={() => {
                    alert(
                      language === "en"
                        ? `Supporting ${policy.title}`
                        : language === "fr"
                          ? `Soutien à ${policy.title}`
                          : `Gushyigikira ${policy.title}`,
                    )
                  }}
                >
                  <ThumbsUp className="h-4 w-4" />
                  {language === "en" ? "Support" : language === "fr" ? "Soutenir" : "Shyigikira"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-4">
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">
            {language === "en"
              ? "Submit Feedback"
              : language === "fr"
                ? "Soumettre des Commentaires"
                : "Gutanga Ibitekerezo"}
          </h3>
          <Textarea
            placeholder={
              language === "en"
                ? "Share your thoughts on current policies..."
                : language === "fr"
                  ? "Partagez vos réflexions sur les politiques actuelles..."
                  : "Sangiza ibitekerezo byawe ku mategeko ariho..."
            }
            className="mb-3"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <Button
            className="w-full flex items-center gap-2"
            onClick={() => {
              if (feedback.trim()) {
                alert(
                  language === "en"
                    ? "Feedback submitted successfully!"
                    : language === "fr"
                      ? "Commentaires soumis avec succès !"
                      : "Ibitekerezo byawe byakiriwe neza!",
                )
                setFeedback("")
              } else {
                alert(
                  language === "en"
                    ? "Please enter your feedback"
                    : language === "fr"
                      ? "Veuillez entrer vos commentaires"
                      : "Nyamuneka andika ibitekerezo byawe",
                )
              }
            }}
          >
            <Send className="h-4 w-4" />
            {language === "en" ? "Submit Feedback" : language === "fr" ? "Envoyer Commentaires" : "Ohereza Ibitekerezo"}
          </Button>
        </CardContent>
      </Card>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mt-2">
        <p className="text-xs text-blue-700 dark:text-blue-300">
          {language === "en"
            ? "Your feedback helps shape climate resilience policies in your community."
            : language === "fr"
              ? "Vos commentaires aident à façonner les politiques de résilience climatique dans votre communauté."
              : "Ibitekerezo byawe bifasha gushyiraho amategeko yo guhangana n'imihindagurikire y'ibihe mu muryango wawe."}
        </p>
      </div>
    </div>
  )
}
