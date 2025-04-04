export interface Transaction {
    id: number;
    stock: string;
    type: 'BUY' | 'SELL' | 'DIVIDEND' | 'DEPOSIT' | 'WITHDRAWAL';
    quantity: number;
    price: number;
    date: string;
}
