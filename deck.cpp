#include <vector>
#include <iostream>
#include "cards.hpp"
#include "deck.hpp"

Deck::Deck() 
	: CardsInDeck(0)
{

	Carta carta;
	
	for (int i = 0; i < SizeC - 2; i++) {
		// Setting up the numbers
		for (int j = 0; j < 5; j++) {
			carta.SetColor((Color)(i + 1));
			carta.SetNumber(j);
			carta.SetPlusType(EmptyPT);
			carta.SetType(EmptyT);
			carta.SetSpecialType(EmptyST);
			deck.push_back(carta);
			CardsInDeck += 1;
		}
		// Setting up +2
		for (int j = 0; j < 6; j++) {
			carta.SetColor((Color)(i + 1));
			carta.SetNumber(-1);
			carta.SetPlusType(TwoPT);
			carta.SetType(EmptyT);
			carta.SetSpecialType(EmptyST);
			deck.push_back(carta);
			CardsInDeck += 1;
		}
	
		for (int j = 0; j < 6; j++) {
			carta.SetColor((Color)(i + 1));
			carta.SetNumber(-1);
			carta.SetPlusType(EmptyPT);
			carta.SetType(Block);
			carta.SetSpecialType(EmptyST);
			deck.push_back(carta);
			CardsInDeck += 1;
		}

		for (int j = 0; j < 6; j++) {
			carta.SetColor((Color)(i + 1));
			carta.SetNumber(-1);
			carta.SetPlusType(EmptyPT);
			carta.SetType(Reverse);
			carta.SetSpecialType(EmptyST);
			deck.push_back(carta);
			CardsInDeck += 1;
		}
	}

	for (int i = 0; i < 16; i++) {
		carta.SetColor(Black);
		carta.SetNumber(-1);
		carta.SetPlusType(FourPT);
		carta.SetType(EmptyT);
		carta.SetSpecialType(EmptyST);
		deck.push_back(carta);
		CardsInDeck += 1;
	}

	for (int i = 0; i < 16; i++) {
		carta.SetColor(Black);
		carta.SetNumber(-1);
		carta.SetPlusType(EmptyPT);
		carta.SetType(EmptyT);
		carta.SetSpecialType(Joker);
		deck.push_back(carta);
		CardsInDeck += 1;
	}
}

void Deck::PrintDeck() const {

	std::cout << std::endl;

	for (int i = 0; i < deck.size(); i++) {
		deck[i].PrintCarta();
	}

	std::cout << "Cards in deck: " << CardsInDeck << std::endl;
}

Deck::~Deck()
{
}