import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  ArrowLeft,
  Bell,
  BookOpen,
  FileQuestion,
  Folder,
  Gift,
  GitGraphIcon,
  Globe,
  Home,
  Import,
  Layers,
  LayoutDashboard,
  Library,
  MoreVertical,
  PenBox,
  Plus,
  Search,
  Share2,
  Sparkles,
  User,
  User2Icon,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";

export default function StudyDeck() {
  return (
    <div className="bg-background flex h-screen">
      {/* Left Sidebar */}
      <div className="container mx-auto px-4">
        <div className="flex gap-6">
          <aside className="flex w-64 flex-col gap-4">
            <Card className="neo-brutal-box p-4">
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Library className="h-4 w-4" /> My decks
                </li>
                <li className="flex items-center gap-2">
                  <GitGraphIcon className="h-4 w-4" /> Progress
                </li>
                <li className="flex items-center gap-2">
                  <User2Icon className="h-4 w-4" /> Profile
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Public decks
                </li>
              </ul>
            </Card>

            <Button className="neo-brutal-button w-full bg-purple-900 text-white">
              Learn
            </Button>
            <Button
              variant="default"
              className="neo-brutal-button w-full"
              onClick={() => setShowModal(true)}
            >
              Add
            </Button>

            <Card className="neo-brutal-box p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold">My decks</h3>
                <div className="flex gap-2">
                  <Search className="h-4 w-4" />
                  <Plus className="h-4 w-4" />
                </div>
              </div>
              {/* <ul className="space-y-2">
                {decks.map((deck) => (
                  <li key={deck.id} className="flex items-center gap-2">
                    <span
                      className={`h-3 w-3 rounded-full ${deck.color}`}
                    ></span>
                    {deck.name}
                  </li>
                ))}
              </ul> */}
            </Card>
          </aside>

          <main className="flex-1">
            <div className="mb-6">
              <h1 className="mb-4 text-2xl font-bold">My decks</h1>
              <Tabs defaultValue="active">
                <TabsList className="border-b-2 border-black">
                  <TabsTrigger value="active" className="font-bold">
                    Active
                  </TabsTrigger>
                  <TabsTrigger value="archived" className="text-gray-500">
                    Archived
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* {decks.map((deck) => (
                <Card
                  key={deck.id}
                  className={`neo-brutal-box ${deck.color} aspect-square p-6`}
                  onClick={() => router.push(`/decks/${deck.id}`)}
                >
                  <h3 className="mb-2 font-bold">{deck.name}</h3>
                  {deck.cards > 0 && (
                    <p className="text-sm">{deck.cards} cards</p>
                  )}
                </Card>
              ))} */}
              <Card
                className="neo-brutal-box flex aspect-square cursor-pointer items-center justify-center bg-white p-6"
                onClick={() => setShowModal(true)}
              >
                <Plus className="h-8 w-8" />
              </Card>
            </div>
          </main>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-4">
            <Button variant="default" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <span className="h-4 w-4 rounded-sm bg-orange-400" />
              mp module 2
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="default" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="default" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="default">Add</Button>
            <Button>Learn</Button>
          </div>
        </header>
        <Tabs defaultValue="cards" className="flex-1">
          <div className="border-b px-4">
            <TabsList>
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="lessons">Lessons</TabsTrigger>
              <TabsTrigger value="imports">Imports</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="cards" className="flex-1 p-4">
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium">Cards (137)</h3>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  All
                </Button>
                <Button variant="outline" size="sm">
                  New (136)
                </Button>
                <Button variant="outline" size="sm">
                  Learning (1)
                </Button>
              </div>
            </div>
            <Card className="mb-4">
              <CardContent className="p-4">
                <h4 className="mb-2 text-lg font-medium">
                  What is the main topic of Module 2?
                </h4>
                <p className="text-muted-foreground">
                  Melting{" "}
                  <Badge variant="secondary">
                    & Metal Mould Casting Methods
                  </Badge>
                </p>
                <Button variant="default" size="sm" className="mt-4">
                  <FileQuestion className="mr-2 h-4 w-4" />
                  Questions (1)
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="mb-2 text-lg font-medium">
                  What is the primary limitation of sand moulds?
                </h4>
                <p className="text-muted-foreground">
                  They are <Badge variant="secondary">temporary</Badge> and
                  destroyed after each{" "}
                  <Badge variant="secondary">casting</Badge>.
                </p>
                <Button variant="default" size="sm" className="mt-4">
                  <FileQuestion className="mr-2 h-4 w-4" />
                  Questions (1)
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 border-l p-4">
        <div className="space-y-4">
          <Button variant="default" className="w-full justify-start gap-2">
            <Layers className="h-4 w-4" />
            Cards
            <span className="text-muted-foreground ml-auto text-xs">
              Write your own cards
            </span>
          </Button>
          <Button variant="default" className="w-full justify-start gap-2">
            <PenBox className="h-4 w-4" />
            Subdeck
            <span className="text-muted-foreground ml-auto text-xs">
              Make a deck within a deck
            </span>
          </Button>
          <Button variant="default" className="w-full justify-start gap-2">
            <Sparkles className="h-4 w-4" />
            AI Generate
            <span className="text-muted-foreground ml-auto text-xs">
              Get the AI to make cards
            </span>
          </Button>
          <Button variant="default" className="w-full justify-start gap-2">
            <Import className="h-4 w-4" />
            Import
            <span className="text-muted-foreground ml-auto text-xs">
              Notes, YouTube, PDF...
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
