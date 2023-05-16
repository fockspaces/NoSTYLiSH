export const fetchHistogram = async () => {
  const apiUrl = "http://127.0.0.1:8000/api/1.0/orders/histogram";
  const response = await fetch(apiUrl);
  const { data } = await response.json();

  // Group the data by price range
  const bins = {};
  const binSize = 20;
  data.forEach((item) => {
    const binIndex = Math.floor(item.price / binSize);
    const binStart = binIndex * binSize;
    const binEnd = binStart + binSize;
    const binLabel = `${binStart}-${binEnd}`;
    if (!bins[binLabel]) {
      bins[binLabel] = {
        priceRange: binLabel,
        count: 0,
      };
    }
    bins[binLabel].count += item.count;
  });

  // Sort the bins by price range
  const sortedBins = Object.values(bins).sort(
    (a, b) => parseFloat(a.priceRange) - parseFloat(b.priceRange)
  );

  const counts = sortedBins.map((item) => item.count);
  const prices = sortedBins.map((item) => item.priceRange);

  const chartData = {
    labels: prices,
    datasets: [
      {
        label: "Number of Products",
        data: counts,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 0,
      },
    ],
  };

  const chart = document.getElementById("histogramChart").getContext("2d");
  const myHistogramChart = new Chart(chart, {
    type: "bar",
    data: chartData,
    options: {
      plugins: {
        title: {
          display: true,
          text: "Product sold percentage in different price range",
        },
      },
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
          },
        },
      },
    },
  });
};
