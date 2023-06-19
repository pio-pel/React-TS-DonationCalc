import { countTax } from "./countTax";

// Return object with currency code, mid rate, result (value * mid rate), tax amount & comment

interface Result {
  code: string;
  mid: string;
  result: string;
  taxAmount: number | string;
  taxComment: string;
}

export function countResult(
  { currency, code, mid }: { [key: string]: string }, //currency if you want return full currency name instead of code
  selectedTaxGroup: number | null,
  inputDonationAmount: string
) {
  const results: Result = {
    code: "",
    mid: "",
    result: "",
    taxAmount: 0.0,
    taxComment: "",
  };

  results.result = (Number(mid) * Number(inputDonationAmount)).toFixed(2);
  results.mid = mid;
  results.code = code;

  const taxAmountAndComment = countTax(selectedTaxGroup, results.result);
  results.taxAmount = taxAmountAndComment.taxAmount;
  results.taxComment = taxAmountAndComment.taxComment;

  return results;
}
