$(function () {

    $(".dashboard_content .performance_item .charts_updates_btn button").on("click", function () {

        $(this).addClass("active").siblings().removeClass("active");

    });

});

var ctx = document.getElementById('performance_chart').getContext('2d'),

    ship = document.getElementById('shipments_chart').getContext('2d'),

    daily_chart = document.getElementById('daily_chart').getContext('2d'),

    completed_chart = document.getElementById('completed_chart').getContext('2d');

// add font family
Chart.defaults.global.defaultFontColor = '#9A9A9A';
Chart.defaults.global.defaultFontFamily = "Poppins","sans-serif";
Chart.defaults.global.defaultFontSize = 12;

// performances
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],

        // START 
        datasets: [{
            label: 'Accounts',
            backgroundColor: 'transparent',
            borderColor: '#e14eca',
            borderWidth: 1,
            data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
        },],
        // END

    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
            position: "right",
            labels: {
                fontColor: '#e14eca'
            }
        },
        tooltips: {
            enabled: true, 
        },
    }
});

function chartUpdateA() {
    
    chart.data.datasets[0].label = 'Accounts';
    chart.data.datasets[0].data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100];

    chart.update();

}

function chartUpdateP() {

    chart.data.datasets[0].label = 'Purchases';
    chart.data.datasets[0].data = [80, 120, 105, 110, 95, 105, 95, 100, 80, 95, 70, 120];

    chart.update();

}

function chartUpdateS() {

    chart.data.datasets[0].label = 'Sessions';
    chart.data.datasets[0].data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];

    chart.update();

}

// shipments
var charttwo = new Chart(ship, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['JUN', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],

        // START 
        datasets: [{
            label: 'Accounts',
            backgroundColor: 'transparent',
            borderColor: '#e14eca',
            borderWidth: 1,
            data: [80, 100, 70, 80, 120, 80],
        },],
        // END

    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
            position: "right",
            labels: {
                fontColor: '#e14eca'
            }
        },
        tooltips: {
            enabled: true, 
        },
    }
});

// daily_chart
var chartthree = new Chart(daily_chart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],

        // START 
        datasets: [{
            label: 'Accounts',
            backgroundColor: 'transparent',
            borderColor: '#1f8ef1',
            borderWidth: 1,
            data: [53, 20, 10, 80, 100, 45],
        },],
        // END

    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
            position: "right",
            labels: {
                fontColor: '#e14eca'
            }
        },
        tooltips: {
            enabled: true, 
        },
    }
});

// daily_chart
var chartfour = new Chart(completed_chart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['JUN', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],

        // START 
        datasets: [{
            label: 'Accounts',
            backgroundColor: 'transparent',
            borderColor: '#00d6b4',
            borderWidth: 1,
            data: [90, 27, 60, 12, 80],
        },],
        // END

    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
            position: "right",
            labels: {
                fontColor: '#e14eca'
            }
        },
        tooltips: {
            enabled: true, 
        },
    }
});