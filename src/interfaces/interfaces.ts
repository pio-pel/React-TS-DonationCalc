export interface DataInterface {
    effectiveDate: string;
    no: string;
    rates: [{ currency: string; code: string; mid: string }];
    table: string;
  }
  
  export interface ResultInterface {
    code: string;
    mid: string;
    result: string;
    taxAmount: number | string;
    taxComment: string;
  }
