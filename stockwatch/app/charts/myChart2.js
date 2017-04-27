var data = {
    labels: ["January", "February", "March"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                '#4caf50',
                '#4caf50',
                '#4caf50',
            ],
            borderColor: [
                '#4caf50',
                '#4caf50',
                '#4caf50',
            ],
            borderWidth: 1,
            data: [2800, 450, 600],
        }
    ]
};
var myBarChart = new Chart('myChart2', {
    type: 'bar',
    stepSize: 700,
    data: data
});
