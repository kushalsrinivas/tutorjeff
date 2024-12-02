import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

interface DeckGridProps {
  decks: Deck[];
}

export interface Deck {
  name: string;
  cards: number;
  color: string;
}

const DeckGrid: React.FC<DeckGridProps> = ({ decks }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Render Decks */}
      {decks.map((deck: Deck, index) => (
        <Card
          key={index}
          className={`border-black shadow-md p-4 ${deck.color} aspect-square`}
        >
          <CardHeader>
            <CardTitle className="mb-2 text-xl font-bold">{deck.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{deck.cards} cards</p>
          </CardContent>
        </Card>
      ))}

      {/* Add New Deck */}
      <Card className="border-black shadow-md bg-white aspect-square flex items-center justify-center cursor-pointer">
        <CardContent>
          <i className="bi bi-plus text-4xl"></i>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeckGrid;
