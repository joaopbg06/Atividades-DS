
#include <iostream>
#include <locale>
using namespace std;
// ;
int main()
{
	locale::global(locale("pt_BR.UTF-8"));

	//Atividades 5 - C++

	//1

	/*for (int i = 1; i <= 10; i++)
	{
		cout << i << "\n";
	};*/
	

	//2
	/*int tab1;
	cout << "Informe um número\n";
	cin >> tab1;

	for (int i = 1; i <= 10; i++)
	{
		int resul = tab1 * i;
		cout << tab1 << " x " << i << " = " << resul << "\n";

	};*/

	//3
	/*int num = 5;
	while (num <= 50)
	{
		cout << num << "\n";
		num += 5;
	}*/

	//4
	/*int num;
	cout << "Informe 5 número\n";
	cin >> num;
	for (int i = 1; i < 5; i++)
	{
		if (num > 100) {
			cout << "Número especial \n";
			cin >> num;
		}
		else
		{
			cout << "Número Comum \n";
			cin >> num;
		}
	}*/


	//5
	/*int num = 1;
	while (num <= 31)
	{
		cout << num << "\n";
		num += 2;
	}*/

	//6
	/*int num;
	cout << "Informe 5 números\n";
	cin >> num;
	for (int i = 1; i < 5; i++)
	{
		if (num > 0) {
			cout << "Positivo \n";
			cin >> num;

		}
		else if(num < 0)
		{
			cout << "Negativo \n";
			cin >> num;
		}
		else
		{
			cout << "Zero \n";
			cin >> num;
			}
	}*/


}

