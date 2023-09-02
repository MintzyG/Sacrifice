#pragma once

enum Color {
	EmptyC = 0,
	Blue,
	Green,
	Red,
	Yellow,
	Black,
	SizeC = 6
};

enum Type {
	EmptyT = 0,
	Block,
	Reverse,
	SizeT = 3
};

enum PlusType {
	EmptyPT = 0,
	OnePT,
	TwoPT,
	FourPT,
	TwentyPT,
	SizePT = 5
};

enum SpecialType {
	EmptyST = 0,
	Joker,
	DefenseRune,
	PovertyRune,
	BanishmentRune,
	SizeST = 5
};

class Carta {
public:
	Carta();
	~Carta();

	void PrintCarta() const;
	
	Color GetColor() const;
	Type GetType() const;
	SpecialType GetSpecialType() const;
	PlusType GetPlusType() const;
	int GetNumber() const;
	
	void SetColor(Color);
	void SetType(Type);
	void SetSpecialType(SpecialType);
	void SetPlusType(PlusType);
	void SetNumber(int);

private:
	Color m_Color;
	Type m_Type;
	PlusType m_PlusType;
	SpecialType m_SpecialType;
	int m_Number;
};
