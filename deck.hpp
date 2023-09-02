#pragma once

#include "cards.hpp"
#include <vector>

class Deck {
public:
	// Initializes a deck with the default deck of the Sacrifice game 
	Deck();

	// Creates a deck with 'Amount' empty cards inside it if 'Fill' is true, otherwise
	// it creates a deck with 'Amount' reserved, do 'Amount' = 0 and Fill = 0, just to have
	// it act as a default constructor
	Deck(int, bool);

	// Prints all cards inside the deck with just the default information about the cards
	// if more information is required please use PrintDeckDebug(); or PrintDeckRaw();
	void PrintDeck() const;
	
	~Deck();
private:
	std::vector<Card> deck;
	int CardsInDeck;
};
