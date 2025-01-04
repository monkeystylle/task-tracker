import { MyBig } from '@/lib/big';

// Converting \$10.99 to cents for storage
// const amountInCents = toCent(10.99);  // Returns 1099
export const toCent = (amount: number) =>
  new MyBig(amount).mul(100).round(2).toNumber();

// Converting 1099 cents back to dollars
// const amountInDollars = fromCent(1099);  // Returns 10.99
export const fromCent = (amount: number) =>
  new MyBig(amount).div(100).round(2).toNumber();

export const toCurrencyFromCent = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(fromCent(amount));
