export interface ICustomer {
  id: number;
  name: string;
  city: string;
  orderTotal?: number;
  customerSince: any;
}

export interface IOrder {
  customerId: number;
  productName: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
