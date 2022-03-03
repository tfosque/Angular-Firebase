// TODO: Remove ? this this was for testing only

export interface CartModel {
  id?: number;
  qty?: number;
  total?: number;
  price?: Price;
  details?: Details;
  product?: string;
  manufacturerNumber?: string;
  variations?: any;
  color?: any;
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
