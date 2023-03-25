export const fetchPie = async () => {
  const apiUrl = "http://127.0.0.1:8000/api/1.0/orders/pie";

  // Fetch the data from the API
  const response = await fetch(apiUrl);
  const { data } = await response.json();

  // Prepare the data for the chart
  const chartData = {
    labels: data.map(({ color }) => color.name),
    datasets: [
      {
        label: "Colors",
        data: data.map(({ quantity }) => quantity),
        backgroundColor: data.map(({ color }) => color.code),
      },
    ],
  };

  // Create the chart
  const chart = document.getElementById("pieChart").getContext("2d");
  new Chart(chart, {
    type: "pie",
    data: chartData,
    options: {
      plugins: {
        title: {
          display: true,
          text: "Product sold percentage in different colors",
        },
      },
      tooltips: {
        callbacks: {
          label: ({ index }, { labels, datasets }) => {
            const label = labels[index];
            const value = datasets[0].data[index];
            const percentage = (
              (value / datasets[0]._meta.total) *
              100
            ).toFixed(2);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  });
};
