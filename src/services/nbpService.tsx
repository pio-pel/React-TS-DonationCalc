const dayInMiliseconds = 1000 * 60 * 60 * 24; //miliseconds, seconds, minutes, hours

interface Data {
  effectiveDate: string;
  no: string;
  rates: [{ currency: string; code: string; mid: string }];
  table: string;
}

class NbpService {
  url: string;
  cache: {
    [key: string]: Data;
  };
  constructor(url: string) {
    this.url = url;
    this.cache = {
      date: {
        effectiveDate: "",
        no: "",
        rates: [{ currency: "", code: "", mid: "" }],
        table: "",
      },
    };
  }

  async getCurrencyRatesForDate(date: string) {
    if (!date) return;

    if (this.cache[date]) {
      return this.cache[date];
    }

    await fetch(`${this.url}${date}`, {
      headers: {
        Accept: "application/json",
      },
    }).then(async (data) => {
      if (data.ok) {
        const response = await data.json();
        this.cache[date] = response[0];
        return;
      }

      console.warn(data.status, data?.statusText);
    });

    return this.cache[date];
  }

  async getCurrencyRates(date: string) {
    let response;
    let dayNumber = new Date(date).getDay();
    // Saturday is day === 6 so go back one day to Friday - last day when currency rates were published
    // Sunday is day === 0 so go back two days to Friday - last day when currency rates were published
    let count = dayNumber === 0 ? 2 : dayNumber === 6 ? 1 : 0;

    for (count = 0; count <= 5; count++) {
      response = await this.getCurrencyRatesForDate(
        this.changeDate(date, count)
      );

      if (response) break;
    }
    return response;
  }

  changeDate(date: string, count: number) {
    if (!count) return date;

    return new Date(new Date(date).getTime() - count * dayInMiliseconds)
      .toISOString()
      .slice(0, 10);
  }
}

export default NbpService;
