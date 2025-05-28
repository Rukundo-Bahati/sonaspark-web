"use client"

import { ArrowLeft, Send, ThumbsUp, MessageSquare, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface CrowdsourcingScreenProps {
  onBack: () => void
  language: string
  theme: "light" | "dark"
}

export function CrowdsourcingScreen({ onBack, language, theme }: CrowdsourcingScreenProps) {
  const [solutionTitle, setSolutionTitle] = useState("")
  const [solutionDescription, setSolutionDescription] = useState("")
  const [solutionCategory, setSolutionCategory] = useState("")

  const solutions = [
    {
      id: 1,
      title:
        language === "en"
          ? "Community Rainwater Harvesting System"
          : language === "fr"
            ? "Système Communautaire de Collecte d'Eau de Pluie"
            : "Uburyo bwo Gukusanya Amazi y'Imvura mu Muryango",
      author: language === "en" ? "Maria L." : language === "fr" ? "Maria L." : "Maria L.",
      votes: 42,
      comments: 8,
      category: language === "en" ? "Water" : language === "fr" ? "Eau" : "Amazi",
      description:
        language === "en"
          ? "A low-cost system using local materials to collect and filter rainwater for community use during dry seasons."
          : language === "fr"
            ? "Un système à faible coût utilisant des matériaux locaux pour collecter et filtrer l'eau de pluie pour l'usage communautaire pendant les saisons sèches."
            : "Uburyo budahenze bukoresha ibikoresho byo mu gace bwo gukusanya no kuyungurura amazi y'imvura kugira ngo akoreshwe n'umuryango mu bihe by'amapfa.",
    },
    {
      id: 2,
      title:
        language === "en"
          ? "Mangrove Restoration Project"
          : language === "fr"
            ? "Projet de Restauration de Mangroves"
            : "Umushinga wo Gusubiza Ibiti by'Inkengero",
      author: language === "en" ? "Ahmed K." : language === "fr" ? "Ahmed K." : "Ahmed K.",
      votes: 36,
      comments: 5,
      category: language === "en" ? "Coastal" : language === "fr" ? "Côtier" : "Inkengero",
      description:
        language === "en"
          ? "Community-led initiative to restore mangrove forests along the coastline to reduce erosion and provide natural storm protection."
          : language === "fr"
            ? "Initiative communautaire pour restaurer les forêts de mangroves le long du littoral afin de réduire l'érosion et fournir une protection naturelle contre les tempêtes."
            : "Umushinga uyobowe n'umuryango wo gusubiza amashyamba y'ibiti by'inkengero kugira ngo bagabanye isuri kandi batange kurindwa k'umuyaga kamere.",
    },
    {
      id: 3,
      title:
        language === "en"
          ? "Solar-Powered Community Cooling Center"
          : language === "fr"
            ? "Centre de Refroidissement Communautaire à Énergie Solaire"
            : "Ikigo cy'Umuryango Gikoreshwa n'Izuba cyo Gukonja",
      author: language === "en" ? "Priya T." : language === "fr" ? "Priya T." : "Priya T.",
      votes: 29,
      comments: 12,
      category: language === "en" ? "Energy" : language === "fr" ? "Énergie" : "Ingufu",
      description:
        language === "en"
          ? "A solar-powered facility where community members can seek relief during extreme heat events, with particular focus on elderly and children."
          : language === "fr"
            ? "Une installation alimentée à l'énergie solaire où les membres de la communauté peuvent chercher du soulagement pendant les événements de chaleur extrême, avec un accent particulier sur les personnes âgées et les enfants."
            : "Ikigo gikoreshwa n'izuba aho abagize umuryango bashobora gushaka ubufasha mu bihe by'ubushyuhe bukabije, by'umwihariko abakuze n'abana.",
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
            ? "Community Solutions"
            : language === "fr"
              ? "Solutions Communautaires"
              : "Ibisubizo by'Umuryango"}
        </h1>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">
            {language === "en"
              ? "Share Your Solution"
              : language === "fr"
                ? "Partagez Votre Solution"
                : "Sangiza Igisubizo Cyawe"}
          </h3>
          <Input
            placeholder={
              language === "en"
                ? "Solution title..."
                : language === "fr"
                  ? "Titre de la solution..."
                  : "Umutwe w'igisubizo..."
            }
            className="mb-2"
            value={solutionTitle}
            onChange={(e) => setSolutionTitle(e.target.value)}
          />
          <Textarea
            placeholder={
              language === "en"
                ? "Describe your climate resilience solution..."
                : language === "fr"
                  ? "Décrivez votre solution de résilience climatique..."
                  : "Sobanura igisubizo cyawe cyo guhangana n'imihindagurikire y'ibihe..."
            }
            className="mb-3"
            value={solutionDescription}
            onChange={(e) => setSolutionDescription(e.target.value)}
          />
          <div className="flex gap-2 mb-3">
            <Button variant="outline" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              {language === "en" ? "Add Image" : language === "fr" ? "Ajouter Image" : "Ongeraho Ishusho"}
            </Button>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700"
              value={solutionCategory}
              onChange={(e) => setSolutionCategory(e.target.value)}
            >
              <option value="">
                {language === "en"
                  ? "Select category..."
                  : language === "fr"
                    ? "Sélectionner catégorie..."
                    : "Hitamo icyiciro..."}
              </option>
              <option value="water">{language === "en" ? "Water" : language === "fr" ? "Eau" : "Amazi"}</option>
              <option value="energy">{language === "en" ? "Energy" : language === "fr" ? "Énergie" : "Ingufu"}</option>
              <option value="agriculture">
                {language === "en" ? "Agriculture" : language === "fr" ? "Agriculture" : "Ubuhinzi"}
              </option>
              <option value="coastal">
                {language === "en" ? "Coastal" : language === "fr" ? "Côtier" : "Inkengero"}
              </option>
              <option value="health">{language === "en" ? "Health" : language === "fr" ? "Santé" : "Ubuzima"}</option>
            </select>
          </div>
          <Button
            className="w-full flex items-center gap-2"
            onClick={() => {
              if (solutionTitle && solutionDescription && solutionCategory) {
                alert(
                  language === "en"
                    ? "Solution submitted successfully!"
                    : language === "fr"
                      ? "Solution soumise avec succès !"
                      : "Igisubizo cyawe cyakiriwe neza!",
                )
                setSolutionTitle("")
                setSolutionDescription("")
                setSolutionCategory("")
              } else {
                alert(
                  language === "en"
                    ? "Please fill all fields"
                    : language === "fr"
                      ? "Veuillez remplir tous les champs"
                      : "Nyamuneka uzuza ibice byose",
                )
              }
            }}
          >
            <Send className="h-4 w-4" />
            {language === "en" ? "Submit Solution" : language === "fr" ? "Soumettre Solution" : "Ohereza Igisubizo"}
          </Button>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">
          {language === "en"
            ? "Community Solutions"
            : language === "fr"
              ? "Solutions Communautaires"
              : "Ibisubizo by'Umuryango"}
        </h2>
        <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20">
          {solutions.length} {language === "en" ? "Total" : language === "fr" ? "Total" : "Igiteranyo"}
        </Badge>
      </div>

      <div className="space-y-3">
        {solutions.map((solution) => (
          <Card key={solution.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{solution.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {language === "en" ? "By" : language === "fr" ? "Par" : "Na"} {solution.author}
                  </p>
                </div>
                <Badge variant="outline">{solution.category}</Badge>
              </div>

              <Separator className="my-3" />

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{solution.description}</p>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-1 items-center"
                  onClick={() => {
                    alert(
                      language === "en"
                        ? `Upvoted ${solution.title}`
                        : language === "fr"
                          ? `Vote pour ${solution.title}`
                          : `Washyigikiye ${solution.title}`,
                    )
                  }}
                >
                  <ThumbsUp className="h-4 w-4" />
                  {solution.votes}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-1 items-center"
                  onClick={() => {
                    alert(
                      language === "en"
                        ? `Viewing comments for ${solution.title}`
                        : language === "fr"
                          ? `Affichage des commentaires pour ${solution.title}`
                          : `Kureba ibitekerezo kuri ${solution.title}`,
                    )
                  }}
                >
                  <MessageSquare className="h-4 w-4" />
                  {solution.comments}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto"
                  onClick={() => {
                    alert(
                      language === "en"
                        ? `Viewing details for ${solution.title}`
                        : language === "fr"
                          ? `Affichage des détails pour ${solution.title}`
                          : `Kureba ibisobanuro birambuye bya ${solution.title}`,
                    )
                  }}
                >
                  {language === "en" ? "View Details" : language === "fr" ? "Voir Détails" : "Reba Birambuye"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mt-2">
        <p className="text-xs text-green-700 dark:text-green-300">
          {language === "en"
            ? "Share your knowledge! Community solutions are reviewed and may be featured in the toolkit."
            : language === "fr"
              ? "Partagez vos connaissances ! Les solutions communautaires sont examinées et peuvent être présentées dans la boîte à outils."
              : "Sangiza ubumenyi bwawe! Ibisubizo by'umuryango birasuzumwa kandi bishobora kugaragara mu bikoresho."}
        </p>
      </div>
    </div>
  )
}
