"use client"

import { useState } from "react"
import { ArrowLeft, Search, Filter, Award, DollarSign, FileText, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { getTranslation } from "@/utils/translations"

interface FundingTrackerScreenProps {
  onBack: () => void
  language: string
  theme: "light" | "dark"
}

const mockLoans = [
  {
    id: 1,
    title: "Climate Resilience Loan",
    amount: "$50,000",
    interest: "2.5%",
    term: "5 years",
    status: "Available",
    description: "Low-interest loan for climate adaptation projects in rural communities."
  },
  {
    id: 2,
    title: "Green Infrastructure Fund",
    amount: "$100,000",
    interest: "3%",
    term: "7 years",
    status: "Available",
    description: "Funding for sustainable infrastructure development and green technology adoption."
  },
  {
    id: 3,
    title: "Emergency Response Loan",
    amount: "$25,000",
    interest: "1.5%",
    term: "3 years",
    status: "Available",
    description: "Quick-access funding for emergency climate response initiatives."
  }
]

const mockAwards = [
  {
    id: 1,
    title: "Community Resilience Grant",
    amount: "$30,000",
    deadline: "2024-06-30",
    status: "Open",
    description: "Grant for community-based climate adaptation projects."
  },
  {
    id: 2,
    title: "Innovation in Climate Tech",
    amount: "$75,000",
    deadline: "2024-07-15",
    status: "Open",
    description: "Award for innovative climate technology solutions."
  },
  {
    id: 3,
    title: "Youth Climate Action",
    amount: "$20,000",
    deadline: "2024-08-01",
    status: "Open",
    description: "Funding for youth-led climate initiatives."
  }
]

export function FundingTrackerScreen({ onBack, language, theme }: FundingTrackerScreenProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("loans")

  const filteredLoans = mockLoans.filter(loan => 
    loan.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loan.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredAwards = mockAwards.filter(award =>
    award.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    award.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-4 pb-20">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">{getTranslation("funding", language)}</h1>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={getTranslation("searchFunding", language)}
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="loans" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="loans">
            <DollarSign className="h-4 w-4 mr-2" />
            {getTranslation("loans", language)}
          </TabsTrigger>
          <TabsTrigger value="awards">
            <Award className="h-4 w-4 mr-2" />
            {getTranslation("awards", language)}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="loans" className="space-y-4">
          {filteredLoans.map((loan) => (
            <Card key={loan.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{loan.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {loan.amount} • {loan.interest} • {loan.term}
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    {loan.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-700 mt-2">{loan.description}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      <FileText className="h-4 w-4 mr-2" />
                      {getTranslation("apply", language)}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{loan.title}</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="name">{getTranslation("name", language)}</Label>
                        <Input id="name" />
                      </div>
                      <div>
                        <Label htmlFor="email">{getTranslation("email", language)}</Label>
                        <Input id="email" type="email" />
                      </div>
                      <div>
                        <Label htmlFor="project">{getTranslation("projectDescription", language)}</Label>
                        <Textarea id="project" />
                      </div>
                      <div>
                        <Label htmlFor="amount">{getTranslation("requestedAmount", language)}</Label>
                        <Input id="amount" type="number" />
                      </div>
                      <Button type="submit" className="w-full">
                        {getTranslation("submitApplication", language)}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="awards" className="space-y-4">
          {filteredAwards.map((award) => (
            <Card key={award.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{award.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {award.amount} • {getTranslation("deadline", language)}: {award.deadline}
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {award.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-700 mt-2">{award.description}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      <FileText className="h-4 w-4 mr-2" />
                      {getTranslation("apply", language)}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{award.title}</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="name">{getTranslation("name", language)}</Label>
                        <Input id="name" />
                      </div>
                      <div>
                        <Label htmlFor="email">{getTranslation("email", language)}</Label>
                        <Input id="email" type="email" />
                      </div>
                      <div>
                        <Label htmlFor="project">{getTranslation("projectDescription", language)}</Label>
                        <Textarea id="project" />
                      </div>
                      <div>
                        <Label htmlFor="impact">{getTranslation("expectedImpact", language)}</Label>
                        <Textarea id="impact" />
                      </div>
                      <Button type="submit" className="w-full">
                        {getTranslation("submitApplication", language)}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
