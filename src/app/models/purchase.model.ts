export interface Purchase {
  userId?: number;
  amount?: number;
  currency?: string;
}

export interface Transaction {
  id?: number;
  user?: any;
  currency?: string;
  amount?: number;
  result?: number;
  date?: Date;
}
