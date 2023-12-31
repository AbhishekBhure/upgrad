import cart from "./cart.json";
import currencyRates from "./currencyRates.json";
import { renderRows, renderTotals } from "./view";

const currencyPicker = document.querySelector("select[name='currency-picker']");

currencyPicker.innerHTML = Object.keys(currencyRates)
  .map((key) => `<option> ${key} </option>`)
  .join("");

//Higher order function
const currencyConvert = (currency, rates, fn) => {
  const converionRate = rates[currency] ?? 1;

  return (cart) => {
    const revised = cart.map((item) => {
      return {
        ...item,
        cost: item.cost * converionRate,
      };
    });

    return fn(revised);
  };
};

const computeCart = function () {
  const currency = this?.value;
  currencyConvert(currency, currencyRates, renderRows)(cart);
  // currencyConvert(currency, currencyRates, renderTotals)(cart);
  //   renderRows(cart);
  //   renderTotals(cart);
};

currencyPicker.addEventListener("change", computeCart);

computeCart();
