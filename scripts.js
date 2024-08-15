// Placeholder economic data (replace with actual data fetched from an API)
const economicData = {
    gdp: { value: 500, unit: 'billion AUD', trend: 'up' },
    unemploymentRate: { value: 5.2, unit: '%', trend: 'down' },
    inflationRate: { value: 2.5, unit: '%', trend: 'stable' },
    // Add more indicators as needed
};

// Placeholder chart data (replace with actual data)
const chartData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
        {
            label: 'GDP (billion AUD)',
            data: [450, 480, 460, 490, 500],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
        },
        {
            label: 'Unemployment Rate (%)',
            data: [5.5, 5.3, 6.0, 5.8, 5.2], 
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
        },
        {
            label: 'Inflation Rate (%)',
            data: [2.0, 2.3, 1.8, 2.7, 2.5], 
            borderColor: 'green',
            backgroundColor: 'rgba(0, 128, 0, 0.2)',
        }
    ]
};

// Function to create an indicator element
function createIndicatorElement(indicatorName, data) {
    const indicatorElement = document.createElement('div');
    indicatorElement.classList.add('indicator');

    const titleElement = document.createElement('h3');
    titleElement.textContent = indicatorName;
    indicatorElement.appendChild(titleElement);

    const valueElement = document.createElement('p');
    valueElement.textContent = `${data.value} ${data.unit}`;
    indicatorElement.appendChild(valueElement);

    const trendIcon = document.createElement('i');
    trendIcon.classList.add('trend-icon');
    if (data.trend === 'up') {
        trendIcon.classList.add('fa', 'fa-arrow-up');
    } else if (data.trend === 'down') {
        trendIcon.classList.add('fa', 'fa-arrow-down');
    } 
    indicatorElement.appendChild(trendIcon);

    return indicatorElement;
}

// Populate the key indicators section
const indicatorGrid = document.querySelector('.indicator-grid');
for (const indicatorName in economicData) {
    const indicatorElement = createIndicatorElement(indicatorName, economicData[indicatorName]);
    indicatorGrid.appendChild(indicatorElement);
}

// Function to create a chart
function createChart(chartType, chartData, chartContainer) {
    const chartCanvas = document.createElement('canvas');
    chartContainer.appendChild(chartCanvas);

    new Chart(chartCanvas, {
        type: chartType,
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Create charts for different economic indicators
const chartsSection = document.getElementById('charts');
const chartContainer = chartsSection.querySelector('.chart-container');

// GDP Chart (Line Chart)
createChart('line', {
    labels: chartData.labels,
    datasets: [{
        label: 'GDP (billion AUD)',
        data: chartData.datasets[0].data,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
    }]
}, chartContainer);

// Unemployment Rate Chart (Bar Chart)
createChart('bar', {
    labels: chartData.labels,
    datasets: [{
        label: 'Unemployment Rate (%)',
        data: chartData.datasets[1].data,
        backgroundColor: 'rgba(255, 99, 132, 0.5)', 
    }]
}, chartContainer);

// Inflation Rate Chart (Line Chart)
createChart('line', {
    labels: chartData.labels,
    datasets: [{
        label: 'Inflation Rate (%)',
        data: chartData.datasets[2].data,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 128, 0, 0.2)',
    }]
}, chartContainer);
