type BaseModel = {
  id: string;
};

type Customer = BaseModel & {
  name: string;
  phone: string;
  email: string;
};

type Pricebook = BaseModel & {
  name: string;
  active: boolean;
};

type PricebookEntry = BaseModel & {
  listPrice: number;
  expand?: { pricebook?: Pricebook; product?: Product };
};

type Order = BaseModel & {
  dueDate: Date;
  expand?: { customer?: Customer; pricebook?: Pricebook };
};

type OrderItem = BaseModel & {
  unitPrice: number;
  quantity: number;
  expand?: { order?: Order; pricebookEntry?: PricebookEntry };
};

type Product = BaseModel & {
  code: string;
  name: string;
  active: boolean;
  photo?: string;
};

type Checklist = BaseModel & {
  referenceDate: string;
  status: string;
};

type ChecklistItem = BaseModel & {
  confirmed: boolean;
  notArrive: boolean;
  expand?: { checklist?: Checklist; product?: Product };
};
