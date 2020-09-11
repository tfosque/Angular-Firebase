// TODO: Remove ? this this was for testing only

export interface CartModel {
  id?: number;
  quantity?: number;
  totalPrice?: number;
  price?: Price;
  details?: Details;
}

export interface Price {
  unitPrice?: number;
  uom?: string;
}

export interface Details {
  itemOrProductDescription?: string;
  catalogRefId?: string;
  productId?: string;
}
