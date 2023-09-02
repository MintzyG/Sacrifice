#pragma once

#include "cards.hpp"
#include <vector>

class Deck {
public:
	Deck();
	~Deck();
	void PrintDeck() const;
private:
	std::vector<Carta> deck;
	int CardsInDeck;
};
