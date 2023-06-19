// Count tax & return object with tax-sum & comment
export function countTax(selectedTaxGroup: number | null, result: string) {
  const sum = Number(result);
  const taxes: {
    taxAmount: number | string;
    taxComment: string;
  } = { taxAmount: 0.0, taxComment: "" };

  const taxFreeAllowance1 = 10434;
  const taxFreeAllowance2 = 7878;
  const taxFreeAllowance3 = 5308;
  const taxOver1 = 11128;
  const taxOver2 = 22256;

  if (selectedTaxGroup === 0) {
    taxes.taxAmount = 0.0;
    if (sum > taxFreeAllowance1) {
      taxes.taxComment = "countTaxZero1";
    } else {
      taxes.taxComment = "countTaxZero2";
    }
  }
  if (selectedTaxGroup === 1) {
    if (sum <= taxFreeAllowance1) {
      taxes.taxAmount = 0.0;
      taxes.taxComment = "countTaxOne1";
    }
    if (sum > taxFreeAllowance1 && sum <= taxOver1) {
      taxes.taxAmount = 0.03 * sum;
      taxes.taxComment = "countTaxOne2";
    }
    if (sum > taxOver1 && sum <= taxOver2) {
      taxes.taxAmount = 0.05 * (sum - taxOver1) + 333.9;
      taxes.taxComment = "countTaxOne3";
    }
    if (sum > taxOver2) {
      taxes.taxAmount = 0.07 * (sum - taxOver2) + 890.3;
      taxes.taxComment = "countTaxOne4";
    }
  }
  if (selectedTaxGroup === 2) {
    if (sum <= taxFreeAllowance2) {
      taxes.taxAmount = 0.0;
      taxes.taxComment = "countTaxTwo1";
    }
    if (sum > taxFreeAllowance2 && sum <= taxOver1) {
      taxes.taxAmount = 0.07 * sum;
      taxes.taxComment = "countTaxTwo2";
    }
    if (sum > taxOver1 && sum <= taxOver2) {
      taxes.taxAmount = 0.09 * (sum - taxOver1) + 779;
      taxes.taxComment = "countTaxTwo3";
    }
    if (sum > taxOver2) {
      taxes.taxAmount = 0.12 * (sum - taxOver2) + 1780;
      taxes.taxComment = "countTaxTwo4";
    }
  }
  if (selectedTaxGroup === 3) {
    if (sum <= taxFreeAllowance3) {
      taxes.taxAmount = 0.0;
      taxes.taxComment = "countTaxThree1";
    }
    if (sum > taxFreeAllowance3 && sum <= taxOver1) {
      taxes.taxAmount = 0.12 * sum;
      taxes.taxComment = "countTaxThree2";
    }
    if (sum > taxOver1 && sum <= taxOver2) {
      taxes.taxAmount = 0.16 * (sum - taxOver1) + 1335.4;
      taxes.taxComment = "countTaxThree3";
    }
    if (sum > taxOver2) {
      taxes.taxAmount = 0.2 * (sum - taxOver2) + 3115.9;
      taxes.taxComment = "countTaxThree4";
    }
  }
  if (selectedTaxGroup === null) {
    taxes.taxAmount = "resultAreaTaxNoDataInfo";
    taxes.taxComment = "resultAreaTaxNoSelectedTaxGroupInfo";
  }
  return taxes;
}
