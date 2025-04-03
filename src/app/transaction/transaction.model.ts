export interface Transaction {
    id: number;
    stock: string;
    type: 'BUY' | 'SELL' | 'DIVIDEND';
    quantity: number;
    price: number;
    date: string;
}
