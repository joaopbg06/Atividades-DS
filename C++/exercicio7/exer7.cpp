#include <iostream>
#include <locale>

using namespace std;

//1 – Faça um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que
// recebe por hora e calcule o salário desse funcionário.A seguir, mostre o número e o salário do funcionário.

//int salario(int a, int b);
//
//int main() {
//	locale::global(locale("pt_BR.UTF-8"));
//
//	int num1, num2, num3;
//
//	cout << "Qual é o seu número de funcionário? ";
//	cin >> num1;
//	cout << "Quantas horas você trabalha? ";
//	cin >> num2;
//	cout << "Qual o valor que você recebe? ";
//	cin >> num3;
//
//	int resultado = salario(num2, num3);
//
//	cout << "O funcionário " << num1 << " tem o salário de: " << resultado << " reais";
//}
//
//int salario(int a, int b) {
//	return a * b;
//}




//2 – Fazer um programa para ler, a quantidade e o valor unitário de dois produtos e mostre quanto no
// final a pessoa deve pagar :

//int pagamento(double a, double b, double c, double d);
//
//int main() {
//	locale::global(locale("pt_BR.UTF-8"));
//	double num1, num2, num3, num4;
//
//	cout << "Qual é o valor do produto? ";
//	cin >> num1;
//	cout << "Qual a quantidade? ";
//	cin >> num2;
//	cout << "Qual é o valor do outro produto? ";
//	cin >> num3;
//	cout << "Qual a quantidade? ";
//	cin >> num4;
//
//
//	double resultado = pagamento(num1, num2, num3, num4);
//
//	cout << "Valor de pagamento: " << resultado << " reais";
//}
//
//int pagamento(double a, double b, double c, double d) {
//	return (a * b) + (c * d);
//}






//3 - Fazer um programa que leia três valores: A, B e C. Em seguida, calcule e mostre :
//a) a área do triângulo retângulo que tem A por base e C por altura.
//Fórmula: A * C / 2.0
//b) a área do círculo de raio C. (pi = 3.14159)
//Fórmula: 3.14159 * C * C
//c) a área do trapézio que tem A e B por bases e C por altura.
//Fórmula: (A + B) / 2.0 * C
//d) a área do quadrado que tem lado B.
//Fórmula: B * B
//e) a área do retângulo que tem lado A e altura B.
//Fórmula: A * B

double triangulo(double a, double c);
double circulo(double c);
double trapezio(double a, double b, double c);
double quadrado(double b);
double retangulo(double a, double c);

int main() {
	locale::global(locale("pt_BR.UTF-8"));
	double num1, num2, num3;

	cout << "Informe o valor de A: ";
	cin >> num1;
	cout << "Informe o valor de B: ";
	cin >> num2;
	cout << "Informe o valor de C: ";
	cin >> num3;

	double resultado1 = triangulo(num1, num3);
	double resultado2 = circulo(num3);
	double resultado3 = trapezio(num1, num2, num3);
	double resultado4 = quadrado(num2);
	double resultado5 = retangulo(num1, num2);

	cout << " Triângulo: " << resultado1;
	cout << "\n Círculo: " << resultado2;
	cout << "\n Trapézio: " << resultado3;
	cout << "\n Quadrado: " << resultado4;
	cout << "\n Retângulo: " << resultado5;

}

double triangulo(double a, double c) {
	return (a * c) / 2.0;
}

double circulo(double c) {
	return 3.14159 * c * c;
}

double trapezio(double a, double b, double c) {
	return (a + b) / 2.0 * c;
}

double quadrado(double b) {
	return b * b;
}

double retangulo(double a, double b) {
	return a * b;
}