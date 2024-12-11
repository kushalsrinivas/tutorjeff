"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Avatar } from "~/components/ui/avatar";
import {
  Search,
  Plus,
  Gift,
  Bell,
  Globe,
  Library,
  GitGraphIcon,
  User2Icon,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const router = useRouter();
  const [decks, setDecks] = useState([
    { id: uuidv4(), name: "mp module 2", cards: 102, color: "bg-orange-400" },
    { id: uuidv4(), name: "Untitled", cards: 0, color: "bg-purple-400" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newDeckName, setNewDeckName] = useState("");

  const createDeck = () => {
    const id = uuidv4();
    const newDeck = {
      id,
      name: newDeckName || "Untitled",
      cards: 0,
      color: "bg-blue-400",
    };
    setDecks([...decks, newDeck]);
    setNewDeckName("");
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="neo-brutal-box mb-6 bg-yellow-300 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">⭐</span>
            <span className="text-2xl font-bold">Gizmo</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              className="neo-brutal-button"
              onClick={() => setShowModal(true)}
            >
              Add deck
            </Button>
            <Button className="neo-brutal-button bg-purple-900 text-white">
              Learn
            </Button>
            <div className="flex gap-3">
              <Gift className="h-6 w-6" />
              <Search className="h-6 w-6" />
              <Bell className="h-6 w-6" />
              <Avatar className="neo-brutal-box h-8 w-8 bg-green-400" />
            </div>
          </div>
        </div>
      </nav>

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
              <ul className="space-y-2">
                {decks.map((deck) => (
                  <li key={deck.id} className="flex items-center gap-2">
                    <span
                      className={`h-3 w-3 rounded-full ${deck.color}`}
                    ></span>
                    {deck.name}
                  </li>
                ))}
              </ul>
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
              {decks.map((deck) => (
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
              ))}
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

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="neo-brutal-box bg-white p-6">
            <h2 className="mb-4 text-xl font-bold">Create a new deck</h2>
            <input
              type="text"
              placeholder="Deck name"
              value={newDeckName}
              onChange={(e) => setNewDeckName(e.target.value)}
              className="mb-4 w-full rounded border border-gray-300 p-2"
            />
            <div className="flex justify-end gap-2">
              <Button
                variant="default"
                onClick={() => setShowModal(false)}
                className="neo-brutal-button"
              >
                Cancel
              </Button>
              <Button
                className="neo-brutal-button bg-blue-600 text-white"
                onClick={createDeck}
              >
                Create
              </Button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .neo-brutal-box {
          border: 3px solid #000;
          box-shadow: 4px 4px 0px #000;
          transition: all 0.2s ease-in-out;
        }
        .neo-brutal-box:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #000;
        }
        .neo-brutal-button {
          border: 3px solid #000;
          box-shadow: 4px 4px 0px #000;
          transition: all 0.1s ease-in-out;
        }
        .neo-brutal-button:active {
          transform: translate(2px, 2px);
          box-shadow: 0px 0px 0px #000;
        }
      `}</style>
    </div>
  );
};

export default App;
