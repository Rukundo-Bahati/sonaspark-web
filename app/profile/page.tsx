"use client"

import { useState } from "react"
import { ArrowLeft, Edit2, Award, Users, Briefcase, Activity, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { getTranslation } from "@/utils/translations"

interface ProfilePageProps {
  language: string
  theme: "light" | "dark"
}

const userData = {
  name: "John Doe",
  role: "Community Leader",
  image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  projects: 12,
  connections: 245,
  badges: 8,
  about: "Passionate about climate action and community development. Leading sustainable initiatives in local communities.",
  achievements: [
    { id: 1, title: "Project Leader", icon: "🏆", description: "Successfully led 5 community projects" },
    { id: 2, title: "Green Thumb", icon: "🌱", description: "Planted 100+ trees in the community" },
    { id: 3, title: "Water Saver", icon: "💧", description: "Implemented water conservation systems" },
    { id: 4, title: "Community Builder", icon: "👥", description: "Built strong community networks" }
  ],
  activities: [
    { id: 1, title: "Completed Climate Workshop", date: "2024-03-15" },
    { id: 2, title: "Joined Green Initiative", date: "2024-03-10" },
    { id: 3, title: "Shared Resource Guide", date: "2024-03-05" }
  ],
  projectList: [
    {
      id: 1,
      title: "Community Garden",
      description: "Establishing a sustainable community garden",
      progress: 75,
      status: "In Progress"
    },
    {
      id: 2,
      title: "Solar Panel Installation",
      description: "Installing solar panels in community center",
      progress: 100,
      status: "Completed"
    },
    {
      id: 3,
      title: "Water Conservation",
      description: "Implementing water saving systems",
      progress: 30,
      status: "In Progress"
    }
  ]
}

export default function ProfilePage({ language, theme }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState(userData)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save the data to your backend
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">{getTranslation("profile", language)}</h1>
      </div>

      <div className="grid gap-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={editedData.image}
                  alt={editedData.name}
                  fill
                  className="rounded-full object-cover"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute bottom-0 right-0 rounded-full"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{getTranslation("changePhoto", language)}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input type="file" accept="image/*" />
                      <Button className="w-full">{getTranslation("upload", language)}</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <h2 className="text-xl font-bold">{editedData.name}</h2>
              <p className="text-gray-500">{editedData.role}</p>
              <div className="flex gap-4 mt-4">
                <div className="text-center">
                  <p className="font-bold">{editedData.projects}</p>
                  <p className="text-sm text-gray-500">{getTranslation("projects", language)}</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">{editedData.connections}</p>
                  <p className="text-sm text-gray-500">{getTranslation("connections", language)}</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">{editedData.badges}</p>
                  <p className="text-sm text-gray-500">{getTranslation("badges", language)}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{getTranslation("about", language)}</h3>
              <Button variant="ghost" size="sm" onClick={handleEdit}>
                <Edit2 className="h-4 w-4 mr-2" />
                {getTranslation("edit", language)}
              </Button>
            </div>
            {isEditing ? (
              <div className="space-y-4">
                <Textarea
                  value={editedData.about}
                  onChange={(e) => setEditedData({ ...editedData, about: e.target.value })}
                />
                <Button onClick={handleSave}>{getTranslation("save", language)}</Button>
              </div>
            ) : (
              <p className="text-gray-600">{editedData.about}</p>
            )}
          </CardContent>
        </Card>

        {/* Achievements Section */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">{getTranslation("achievements", language)}</h3>
            <div className="grid grid-cols-2 gap-4">
              {editedData.achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">{getTranslation("recentActivities", language)}</h3>
            <div className="space-y-4">
              {editedData.activities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{getTranslation("projects", language)}</h3>
              <Button variant="ghost" size="sm">
                {getTranslation("viewAll", language)}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <div className="space-y-4">
              {editedData.projectList.map((project) => (
                <div key={project.id} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{project.title}</h4>
                      <p className="text-sm text-gray-500">{project.description}</p>
                    </div>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{getTranslation("progress", language)}</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 