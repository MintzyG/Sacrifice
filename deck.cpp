#include <vector>
#include <iostream>
#include "cards.hpp"
#include "deck.hpp"

// Creates a deck with 'Amount' empty cards inside it if 'Fill' is true, otherwise
// it creates a deck with 'Amount' reserved, do 'Amount' = 0 and Fill = 0, just to have
// it act as a default constructor
Deck::Deck(int Amount, bool Fill)
	: CardsInDeck(Amount)
{
	Card card;
	if (Fill)
		for (size_t i = 0; i < Amount; i++)
			deck.push_back(card);
	else
		deck.reserve(Amount);
}

Deck::Deck() 
	: CardsInDeck(0)
{	
	for (int i = 0; i < SizeC - 2; i++) {
		// Setting up the numbers
		for (int j = 0; j < 5; j++) {
			Card card((Color)(i + 1), j);
			deck.push_back(card);
			CardsInDeck += 1;
		}
		// Setting up +2
		for (int j = 0; j < 6; j++) {
			Card card((Color)(i + 1), TwoPT);
			deck.push_back(card);
			CardsInDeck += 1;
		}
	
		for (int j = 0; j < 6; j++) {
			Card card((Color)(i + 1), Block);
			deck.push_back(card);
			CardsInDeck += 1;
		}

		for (int j = 0; j < 6; j++) {
			Card card((Color)(i + 1), Reverse);
			deck.push_back(card);
			CardsInDeck += 1;
		}
	}

	for (int i = 0; i < 16; i++) {
		Card card(Black, FourPT);
		deck.push_back(card);
		CardsInDeck += 1;
	}

	for (int i = 0; i < 16; i++) {
		Card card(Black, Joker);
		deck.push_back(card);
		CardsInDeck += 1;
	}
}

// TODO: Add PrintDeckDebug(); or PrintDeckRaw();

// Prints all cards inside the deck with just the default information about the cards
// if more information is required please use PrintDeckDebug(); or PrintDeckRaw();
void Deck::PrintDeck() const {

	std::cout << std::endl;

	for (int i = 0; i < deck.size(); i++) {
		deck[i].PrintCard();
	}

	std::cout << "Cards in deck: " << CardsInDeck << std::endl;
}

Deck::~Deck()
{
}