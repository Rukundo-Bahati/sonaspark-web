"use client"

import { useState } from "react"
import { Search, MessageCircle, Share2, HelpCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { getTranslation } from "@/utils/translations"

interface EducationHubScreenProps {
  onBack: () => void
  language: string
  theme: "light" | "dark"
}

const courses = [
  {
    id: 1,
    title: "Climate Change Basics",
    image: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg",
    duration: "2 hours",
    level: "Beginner",
    progress: 75,
    description: "Learn the fundamentals of climate change and its impact on our planet."
  },
  {
    id: 2,
    title: "Sustainable Agriculture",
    image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg",
    duration: "3 hours",
    level: "Intermediate",
    progress: 30,
    description: "Discover sustainable farming practices and their role in climate adaptation."
  },
  {
    id: 3,
    title: "Renewable Energy",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
    duration: "4 hours",
    level: "Advanced",
    progress: 0,
    description: "Explore various renewable energy sources and their implementation."
  }
]

const videos = [
  {
    id: 1,
    title: "Understanding Climate Change",
    thumbnail: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg",
    duration: "15:30",
    views: 1234,
    date: "2024-02-15",
    description: "A comprehensive overview of climate change and its effects."
  },
  {
    id: 2,
    title: "Sustainable Farming Techniques",
    thumbnail: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg",
    duration: "20:45",
    views: 856,
    date: "2024-02-10",
    description: "Learn about sustainable farming methods that help combat climate change."
  },
  {
    id: 3,
    title: "Solar Energy Implementation",
    thumbnail: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
    duration: "18:20",
    views: 567,
    date: "2024-02-05",
    description: "Step-by-step guide to implementing solar energy solutions."
  }
]

const resources = [
  {
    id: 1,
    title: "Climate Change Handbook",
    type: "PDF",
    size: "2.5 MB",
    downloads: 1234,
    date: "2024-02-15",
    description: "A comprehensive guide to understanding climate change."
  },
  {
    id: 2,
    title: "Sustainable Agriculture Guide",
    type: "PDF",
    size: "3.1 MB",
    downloads: 856,
    date: "2024-02-10",
    description: "Detailed guide on sustainable farming practices."
  },
  {
    id: 3,
    title: "Renewable Energy Toolkit",
    type: "ZIP",
    size: "15.2 MB",
    downloads: 567,
    date: "2024-02-05",
    description: "Complete toolkit for implementing renewable energy solutions."
  }
]

export default function EducationHubScreen({ onBack, language, theme }: EducationHubScreenProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("courses")

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">{getTranslation("educationHub", language)}</h1>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{getTranslation("support", language)}</DialogTitle>
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
          placeholder={getTranslation("searchEducation", language)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="courses">{getTranslation("courses", language)}</TabsTrigger>
          <TabsTrigger value="videos">{getTranslation("videos", language)}</TabsTrigger>
          <TabsTrigger value="resources">{getTranslation("resources", language)}</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          {filteredCourses.map((course) => (
            <Card key={course.id}>
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="relative w-48 h-32">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <p className="text-sm text-gray-500">{course.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">{course.duration}</Badge>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{getTranslation("progress", language)}</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <div className="flex gap-2">
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

        <TabsContent value="videos" className="space-y-4">
          {filteredVideos.map((video) => (
            <Card key={video.id}>
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="relative w-48 h-32">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">{video.title}</h3>
                      <p className="text-sm text-gray-500">{video.description}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{video.views} {getTranslation("views", language)}</span>
                      <span>{video.date}</span>
                    </div>
                    <div className="flex gap-2">
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

        <TabsContent value="resources" className="space-y-4">
          {filteredResources.map((resource) => (
            <Card key={resource.id}>
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="w-48 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-400">{resource.type}</span>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">{resource.title}</h3>
                      <p className="text-sm text-gray-500">{resource.description}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{resource.size}</span>
                      <span>{resource.downloads} {getTranslation("downloads", language)}</span>
                      <span>{resource.date}</span>
                    </div>
                    <div className="flex gap-2">
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
