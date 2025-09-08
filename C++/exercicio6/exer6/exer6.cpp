#include <iostream>;
#include <locale>;
#include <vector>;
#include <algorithm>
using namespace std;

int main() {

	setlocale(LC_ALL, "pt_br.UTF-8");


	//1
	/*vector<int> numeros(10);
	cout << "Informe 10 números \n";

	for (int i = 0; i < numeros.size(); i++)
	{
		int j = i + 1;
		cout << j << "º Numero: ";
		cin >> numeros[i];
	}

	cout << "\n";

	for (int i = 0; i < numeros.size() ; i++)
	{
		cout << numeros[i] << '\n';
	}*/

	//2
	/*int soma = 0;
	vector<int> numeros(7);
	cout << "Informe 7 números \n";

	for (int i = 0; i < numeros.size(); i++)
	{
		int j = i + 1;
		cout << j << "º Numero: ";
		cin >> numeros[i];
	}

	cout << "\n";

	for (int i = 0; i < numeros.size(); i++)
	{
		soma += numeros[i];
	}


	cout << "Soma: " << soma << '\n';*/

	//3
	/*int soma = 0;
	int media = 0;
	vector<int> idade = { 18, 18, 18, 17, 17, 16, 16, 16, 16, 16, 16, 16,16, 16, 16, 16,16 };

	for (int i = 0; i < idade.size(); i++)
	{
		soma += idade[i];
	}

	media = soma / idade.size();

	cout << "Média: " << media;*/

	//4
	/*int soma = 0;

	vector<int> numeros{ 5, 9, 7, 10, 15, 23 };
	numeros.push_back(20);
	numeros.push_back(30);

	for (int i = 0; i < numeros.size(); i++)
	{
		soma += numeros[i];
	}
	cout << "Total: " << soma<< "R$";*/

	//5
	int opt;
	int soma = 0;
	int sub = 0;
	int mult = 1;

	vector<int> numeros(10);
	cout << "Informe 10 números \n";

	for (int i = 0; i < numeros.size(); i++)
	{
		int j = i + 1;
		cout << j << "º Numero: ";
		cin >> numeros[i];
	}

	cout << "\nEscolha um número \n 1 - Somar \n 2 - Subtração \n 3 - Multiplicação\n\n";
	cin >> opt;

	switch (opt)
	{
	case 1:

		for (int i = 0; i < numeros.size(); i++)
		{
			soma += numeros[i];
		}

		cout << "\nSoma: " << soma << "\n";

		break;
	case 2:
		for (int i = 0; i < numeros.size(); i++)
		{
			sub -= numeros[i];
		}
		cout << "\nSubtração: " << sub << "\n";

		break;
	case 3:
		
		for (int i = 0; i < numeros.size(); i++)
		{
			
			mult *= numeros[i];
		}
		cout << "\nMultiplicação: " << mult << "\n";
		break;

	default:
		cout << "Número invalido\n";
		cin >> opt;
		break;
	}
};