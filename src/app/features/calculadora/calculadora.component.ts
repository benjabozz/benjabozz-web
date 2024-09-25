import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CalculadoraComponent {
  displayValue = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitingForSecondOperand = false;

  buttons: string[] = [
    '7',
    '8',
    '9',
    'C',
    '4',
    '5',
    '6',
    '/',
    '1',
    '2',
    '3',
    '*',
    '0',
    '.',
    '=',
    '+',
    '-',
    '%',
  ];

  handleClick(value: string) {
    if (this.isNumber(value)) {
      this.inputDigit(value);
    } else if (this.isOperator(value)) {
      this.handleOperator(value);
    } else if (value === 'C') {
      this.clear();
    } else if (value === '=') {
      this.performCalculation();
    } else if (value === '.') {
      this.inputDecimal();
    }
  }

  isNumber(value: string): boolean {
    return !isNaN(Number(value));
  }

  isOperator(value: string): boolean {
    return ['+', '-', '*', '/', '%'].includes(value);
  }

  inputDigit(digit: string) {
    if (this.waitingForSecondOperand) {
      this.displayValue = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue =
        this.displayValue === '0' ? digit : this.displayValue + digit;
    }
  }

  inputDecimal() {
    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  handleOperator(nextOperator: string) {
    const inputValue = parseFloat(this.displayValue);

    if (this.firstOperand === null) {
      this.firstOperand = inputValue;
    } else if (this.operator) {
      const result = this.calculate(
        this.firstOperand,
        inputValue,
        this.operator
      );
      this.displayValue = String(result);
      this.firstOperand = result;
    }

    this.operator = nextOperator;
    this.waitingForSecondOperand = true;
  }

  calculate(
    firstOperand: number,
    secondOperand: number,
    operator: string
  ): number {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return secondOperand !== 0 ? firstOperand / secondOperand : NaN;
      case '%':
        return (firstOperand / 100) * secondOperand;
      default:
        return secondOperand;
    }
  }

  performCalculation() {
    if (this.operator && this.firstOperand !== null) {
      const secondOperand = parseFloat(this.displayValue);
      const result = this.calculate(
        this.firstOperand,
        secondOperand,
        this.operator
      );
      this.displayValue = String(result);
      this.firstOperand = null;
      this.operator = null;
      this.waitingForSecondOperand = false;
    }
  }

  clear() {
    this.displayValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }
}
