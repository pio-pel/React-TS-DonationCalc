import countTax from "./countTax";

// Return object with currency code, mid rate, result (value * mid rate), tax amount & comment

function countResult(
  { currency, code, mid }: { currency: string; code: string; mid: string },
  selectedTaxGroup: number | null,
  inputDonationAmount: string
) {
  const results: {
    code: string;
    mid: string;
    result: string;
    taxAmount: number | string;
    taxComment: string;
  } = {
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

export default countResult;
