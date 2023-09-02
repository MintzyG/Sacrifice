#include "cards.hpp"
#include "deck.hpp"

enum GameModes {
	Classic = 0,
	SpeedX,
	SpeedXOne,
	Exterminator,
	Duos,
	Teams,
	Tournament,
	Hardcore,
	Custom,
	GMSize
};

class Game {
public:

	// Initializes a Classic game of Sacrifice
	Game();

	// Initializes the Sacrifice with the desired GameMode
	Game(GameModes);

	// Initializes a Custom GameMode of Sacrifice with 'X' cards in the deck
	Game(GameModes, int);
	
	// Prints the default game info, for more information use PrintGameDebug() or PrintGameRaw()
	void PrintGameInfo() const;

	~Game();

private:
	Deck m_Deck;
	GameModes m_mode;
	int m_MaxPlayers;
};
