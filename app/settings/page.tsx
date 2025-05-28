"use client"

import { useState } from "react"
import { ArrowLeft, Bell, Eye, Mail, Shield, Globe, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { getTranslation } from "@/utils/translations"

interface SettingsPageProps {
  language: string
  theme: "light" | "dark"
}

const settingsData = {
  notifications: {
    email: true,
    push: true,
    updates: true,
    alerts: true
  },
  privacy: {
    profileVisibility: "public",
    showEmail: false,
    showProjects: true
  },
  contact: {
    email: "john@example.com",
    phone: "+250 123 456 789",
    location: "Kigali, Rwanda"
  },
  security: {
    twoFactor: false,
    lastPasswordChange: "2024-02-15"
  }
}

export default function SettingsPage({ language, theme }: SettingsPageProps) {
  const [settings, setSettings] = useState(settingsData)
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save the settings to your backend
  }

  const handleSignOut = () => {
    // Here you would typically handle the sign out logic
    console.log("Signing out...")
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">{getTranslation("settings", language)}</h1>
      </div>

      <div className="grid gap-6">
        {/* Notifications Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5" />
              <h3 className="text-lg font-semibold">{getTranslation("notifications", language)}</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">{getTranslation("emailNotifications", language)}</Label>
                <Switch
                  id="email-notifications"
                  checked={settings.notifications.email}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, email: checked }
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">{getTranslation("pushNotifications", language)}</Label>
                <Switch
                  id="push-notifications"
                  checked={settings.notifications.push}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, push: checked }
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="updates-notifications">{getTranslation("updatesNotifications", language)}</Label>
                <Switch
                  id="updates-notifications"
                  checked={settings.notifications.updates}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, updates: checked }
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="alerts-notifications">{getTranslation("alertsNotifications", language)}</Label>
                <Switch
                  id="alerts-notifications"
                  checked={settings.notifications.alerts}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, alerts: checked }
                    })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="h-5 w-5" />
              <h3 className="text-lg font-semibold">{getTranslation("privacy", language)}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>{getTranslation("profileVisibility", language)}</Label>
                <Select
                  value={settings.privacy.profileVisibility}
                  onValueChange={(value) =>
                    setSettings({
                      ...settings,
                      privacy: { ...settings.privacy, profileVisibility: value }
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">{getTranslation("public", language)}</SelectItem>
                    <SelectItem value="private">{getTranslation("private", language)}</SelectItem>
                    <SelectItem value="connections">{getTranslation("connectionsOnly", language)}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-email">{getTranslation("showEmail", language)}</Label>
                <Switch
                  id="show-email"
                  checked={settings.privacy.showEmail}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      privacy: { ...settings.privacy, showEmail: checked }
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-projects">{getTranslation("showProjects", language)}</Label>
                <Switch
                  id="show-projects"
                  checked={settings.privacy.showProjects}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      privacy: { ...settings.privacy, showProjects: checked }
                    })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5" />
              <h3 className="text-lg font-semibold">{getTranslation("contactInformation", language)}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{getTranslation("email", language)}</Label>
                <Input
                  id="email"
                  type="email"
                  value={settings.contact.email}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      contact: { ...settings.contact, email: e.target.value }
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{getTranslation("phone", language)}</Label>
                <Input
                  id="phone"
                  value={settings.contact.phone}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      contact: { ...settings.contact, phone: e.target.value }
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">{getTranslation("location", language)}</Label>
                <Input
                  id="location"
                  value={settings.contact.location}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      contact: { ...settings.contact, location: e.target.value }
                    })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Security Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5" />
              <h3 className="text-lg font-semibold">{getTranslation("accountSecurity", language)}</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="two-factor">{getTranslation("twoFactorAuth", language)}</Label>
                <Switch
                  id="two-factor"
                  checked={settings.security.twoFactor}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      security: { ...settings.security, twoFactor: checked }
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>{getTranslation("lastPasswordChange", language)}</Label>
                <p className="text-sm text-gray-500">{settings.security.lastPasswordChange}</p>
              </div>
              <Button variant="outline" className="w-full">
                {getTranslation("changePassword", language)}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Language Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5" />
              <h3 className="text-lg font-semibold">{getTranslation("language", language)}</h3>
            </div>
            <div className="space-y-4">
              <Select
                value={language}
                onValueChange={(value) => {
                  // Here you would typically handle language change
                  console.log("Language changed to:", value)
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="rw">Kinyarwanda</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Sign Out Button */}
        <Button
          variant="destructive"
          className="w-full"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4 mr-2" />
          {getTranslation("signOut", language)}
        </Button>
      </div>
    </div>
  )
} 