export const fetchStacks = async () => {
  const apiUrl = "http://127.0.0.1:8000/api/1.0/orders/stacks";
  const response = await fetch(apiUrl);
  const { data } = await response.json();

  // Extract product ids and sizes for creating chart labels
  const productIds = data.map((item) => item.product_id);
  const sizes = data[0].info.map((item) => item.size);

  // Extract data for creating chart datasets
  const chartData = {
    labels: productIds,
    datasets: sizes.map((size, index) => {
      return {
        label: size,
        data: data.map((item) => item.info[index].total_qty),
        backgroundColor: `rgba(54, 162, 235, ${0.2 + index / sizes.length})`,
        borderColor: `rgba(54, 162, 235, ${1 - index / sizes.length})`,
        borderWidth: 0,
      };
    }),
  };

  const chart = document.getElementById("stackBarChart").getContext("2d");
  const myStackedBarChart = new Chart(chart, {
    type: "bar",
    data: chartData,
    options: {
      plugins: {
        title: {
          display: true,
          text: "Quantity of top 5 sold products in different sizes",
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  });
};
