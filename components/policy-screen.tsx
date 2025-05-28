"use client"

import { useState } from "react"
import { ArrowLeft, MessageCircle, Eye, ThumbsUp, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { getTranslation } from "@/utils/translations"

interface PolicyScreenProps {
  onBack: () => void
  language: string
  theme: "light" | "dark"
}

const policies = [
  {
    id: 1,
    title: "Climate Adaptation Policy",
    description: "Guidelines for implementing climate adaptation measures in local communities.",
    views: 2345,
    comments: 123,
    likes: 456,
    category: "Adaptation"
  },
  {
    id: 2,
    title: "Disaster Response Protocol",
    description: "Standard operating procedures for disaster response and recovery.",
    views: 1890,
    comments: 89,
    likes: 234,
    category: "Response"
  },
  {
    id: 3,
    title: "Resource Management Framework",
    description: "Framework for efficient allocation and management of climate resources.",
    views: 1567,
    comments: 67,
    likes: 189,
    category: "Management"
  }
]

export function PolicyScreen({ onBack, language, theme }: PolicyScreenProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredPolicies = policies.filter(policy =>
    policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    policy.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-4 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">{getTranslation("policies", language)}</h1>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Input
            placeholder={getTranslation("searchPolicies", language)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">{getTranslation("all", language)}</TabsTrigger>
          <TabsTrigger value="adaptation">{getTranslation("adaptation", language)}</TabsTrigger>
          <TabsTrigger value="response">{getTranslation("response", language)}</TabsTrigger>
          <TabsTrigger value="management">{getTranslation("management", language)}</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredPolicies.map((policy) => (
            <Card key={policy.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{policy.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {policy.category} • {policy.views} {getTranslation("views", language)}
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {policy.likes} {getTranslation("likes", language)}
                  </Badge>
                </div>
                <p className="text-sm text-gray-700 mt-2">{policy.description}</p>
                <div className="flex gap-2 mt-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {getTranslation("comment", language)} ({policy.comments})
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{getTranslation("comments", language)}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="comment">{getTranslation("addComment", language)}</Label>
                          <Textarea id="comment" />
                        </div>
                        <Button type="submit" className="w-full">
                          {getTranslation("submit", language)}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    {getTranslation("view", language)}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="adaptation" className="space-y-4">
          {filteredPolicies
            .filter(policy => policy.category === "Adaptation")
            .map(policy => (
              <Card key={policy.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{policy.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {policy.category} • {policy.views} {getTranslation("views", language)}
                      </p>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      {policy.likes} {getTranslation("likes", language)}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">{policy.description}</p>
                  <div className="flex gap-2 mt-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {getTranslation("comment", language)} ({policy.comments})
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{getTranslation("comments", language)}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="comment">{getTranslation("addComment", language)}</Label>
                            <Textarea id="comment" />
                          </div>
                          <Button type="submit" className="w-full">
                            {getTranslation("submit", language)}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      {getTranslation("view", language)}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="response" className="space-y-4">
          {filteredPolicies
            .filter(policy => policy.category === "Response")
            .map(policy => (
              <Card key={policy.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{policy.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {policy.category} • {policy.views} {getTranslation("views", language)}
                      </p>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      {policy.likes} {getTranslation("likes", language)}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">{policy.description}</p>
                  <div className="flex gap-2 mt-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {getTranslation("comment", language)} ({policy.comments})
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{getTranslation("comments", language)}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="comment">{getTranslation("addComment", language)}</Label>
                            <Textarea id="comment" />
                          </div>
                          <Button type="submit" className="w-full">
                            {getTranslation("submit", language)}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      {getTranslation("view", language)}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="management" className="space-y-4">
          {filteredPolicies
            .filter(policy => policy.category === "Management")
            .map(policy => (
              <Card key={policy.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{policy.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {policy.category} • {policy.views} {getTranslation("views", language)}
                      </p>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      {policy.likes} {getTranslation("likes", language)}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">{policy.description}</p>
                  <div className="flex gap-2 mt-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {getTranslation("comment", language)} ({policy.comments})
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{getTranslation("comments", language)}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="comment">{getTranslation("addComment", language)}</Label>
                            <Textarea id="comment" />
                          </div>
                          <Button type="submit" className="w-full">
                            {getTranslation("submit", language)}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      {getTranslation("view", language)}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
} 