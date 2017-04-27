var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [100, 100, 200],
            backgroundColor: [
                "#ff9800",
                "#f44336",
                "#2196f3"
            ],
            hoverBackgroundColor: [
                "#ff9800",
                "#f44336",
                "#2196f3"
            ]
        }]
};
var myDoughnutChart = new Chart('myChart1', {
    type: 'doughnut',
    data: data
    //options: options
});
