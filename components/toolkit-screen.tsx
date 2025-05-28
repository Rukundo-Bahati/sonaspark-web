"use client"

import { useState } from "react"
import { Search, MessageCircle, Share2, Download, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { getTranslation } from "@/utils/translations"

interface ToolkitScreenProps {
  language: string
  theme: "light" | "dark"
}

const tools = [
  {
    id: 1,
    title: "Carbon Footprint Calculator",
    type: "calculator",
    image: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg",
    description: "Calculate your carbon footprint and get recommendations for reduction.",
    downloads: 1234,
    rating: 4.5
  },
  {
    id: 2,
    title: "Project Proposal Template",
    type: "template",
    image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg",
    description: "Professional template for climate change project proposals.",
    downloads: 856,
    rating: 4.8
  },
  {
    id: 3,
    title: "Risk Assessment Tool",
    type: "tool",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
    description: "Comprehensive tool for assessing climate-related risks.",
    downloads: 567,
    rating: 4.2
  }
]

export default function ToolkitScreen({ language, theme }: ToolkitScreenProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredTools = tools.filter(tool =>
    (activeTab === "all" || tool.type === activeTab) &&
    (tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     tool.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{getTranslation("toolkit", language)}</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              {getTranslation("feedback", language)}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{getTranslation("feedback", language)}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">{getTranslation("subject", language)}</Label>
                <Input id="subject" placeholder={getTranslation("enterSubject", language)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{getTranslation("message", language)}</Label>
                <Textarea
                  id="message"
                  placeholder={getTranslation("enterMessage", language)}
                  rows={4}
                />
              </div>
              <Button className="w-full">{getTranslation("submit", language)}</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder={getTranslation("searchTools", language)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">{getTranslation("all", language)}</TabsTrigger>
          <TabsTrigger value="calculator">{getTranslation("calculators", language)}</TabsTrigger>
          <TabsTrigger value="template">{getTranslation("templates", language)}</TabsTrigger>
          <TabsTrigger value="tool">{getTranslation("tools", language)}</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredTools.map((tool) => (
            <Card key={tool.id}>
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="relative w-48 h-32">
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{tool.title}</h3>
                        <Badge variant="secondary">{tool.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-500">{tool.description}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{tool.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{tool.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        {getTranslation("download", language)}
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {getTranslation("discuss", language)}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        {getTranslation("share", language)}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}