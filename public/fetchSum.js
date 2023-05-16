export const fetchSum = async () => {
  const apiUrl = "http://127.0.0.1:8000/api/1.0/orders/total";

  // get total
  const response = await fetch(apiUrl);
  const data = await response.json();
  const total = data.data;

  // prepare chart
  const chart = document.getElementById("totalChart");
  chart.innerHTML = `<h1>Total Revenue: \n${total}</h1>`;
};
