#include "game.hpp"
#include <iostream>

// Initializes a Classic game of Sacrifice
Game::Game()
	: m_mode(Classic), m_MaxPlayers(10)
{
	m_Deck = Deck();
}

// Initializes the Sacrifice with the desired GameMode
Game::Game(GameModes gm) 
	: m_mode(gm)
{
	switch (gm) {
	case Classic:
		std::cerr << "Use the apropriate constructor for Classic, Game()";
		std::exit(1);
		break;
	case SpeedX:
		m_MaxPlayers = 10;
		break;
	case SpeedXOne:
		m_MaxPlayers = 2;
		break;
	case Exterminator:
		m_MaxPlayers = 10;
		break;
	case Duos:
		m_MaxPlayers = 10;
		break;
	case Teams:
		m_MaxPlayers = 12;
		break;
	case Tournament:
		m_MaxPlayers = 12;
		break;
	case Hardcore:
		m_MaxPlayers = 10;
		break;
	case Custom:
		std::cerr << "Use the apropriate constructor for custom, Game(int)";
		std::exit(1);
		break;
	case GMSize:
		std::cerr << "Can't Start a game with an invalid game mode: GMSize";
		std::exit(1);
		break;
	default:
		std::cerr << "Something went terribly wrong at game inicialization Game(GameModes)" << std::endl;
		std::exit(1);
		break;
	}
}

// Initializes a Custom GameMode of Sacrifice with 'X' cards in the deck
Game::Game(GameModes gm, int x)
	: m_mode(gm)
{
	if (gm == Custom) {
		m_MaxPlayers = 10;
		m_Deck = Deck(x, true);
	}
	else {
		std::cerr << "You tried using the Custom Game constructor to initialize another Game Mode" << std::endl;
		std::exit(1);
	}
}

// TODO: add PrintGameDebug() or PrintGameRaw()

// Prints the default game info, for more information use PrintGameDebug() or PrintGameRaw()
void Game::PrintGameInfo() const {
	m_Deck.PrintDeck();
}


Game::~Game()
{
}