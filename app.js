const data = [
  { trainer: "Amit", fatal: 3 },
  { trainer: "Rahul", fatal: 5 },
  { trainer: "Neha", fatal: 2 },
  { trainer: "Priya", fatal: 4 }
];

// KPI
const totalTraining = data.length;
const totalFatal = data.reduce((sum, d) => sum + d.fatal, 0);
const percent = ((totalFatal / (totalTraining * 5)) * 100).toFixed(2);

document.getElementById("totalTraining").innerText = totalTraining;
document.getElementById("totalFatal").innerText = totalFatal;
document.getElementById("fatalPercent").innerText = percent + "%";

// Chart
const ctx = document.getElementById('trainerChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map(d => d.trainer),
    datasets: [{
      label: 'Fatal Count',
      data: data.map(d => d.fatal)
    }]
  }
});
