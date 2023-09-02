#include "cards.hpp"
#include "printCard.hpp"
#include <iostream>

Carta::Carta()
	: m_Color(EmptyC), m_Type(EmptyT), m_PlusType(EmptyPT), m_SpecialType(EmptyST), m_Number(-1)
{
}

Carta::~Carta () {
}

Color Carta::GetColor() const {
	return m_Color;
}

Type Carta::GetType() const {
	return m_Type;
}

PlusType Carta::GetPlusType() const {
	return m_PlusType;
}

SpecialType Carta::GetSpecialType() const {
	return m_SpecialType;
}

int Carta::GetNumber() const {
	return m_Number;
}

//TODO: Implement PrintRaw() and PrintDebug()
void Carta::PrintCarta() const {
	if (m_PlusType != 0) {
		std::cout << StringColor(m_Color) << StringPlusType(m_PlusType) << std::endl;
	} else if (m_Type != 0) {
		std::cout << StringColor(m_Color) << StringType(m_Type) << std::endl;
	}
	else if (m_Number != -1) {
		std::cout << StringColor(m_Color) << m_Number << std::endl;
	}
	else if (m_SpecialType != 0) {
		std::cout << StringSpecial(m_SpecialType) << std::endl;
	}
}

void Carta::SetColor(Color color) {
	m_Color = color;
}

void Carta::SetType(Type type) {
	m_Type = type;
}

void Carta::SetPlusType(PlusType plusType) {
	m_PlusType = plusType;
}

void Carta::SetSpecialType(SpecialType specialType) {
	m_SpecialType = specialType;
}

void Carta::SetNumber(int number) {
	m_Number = number;
}