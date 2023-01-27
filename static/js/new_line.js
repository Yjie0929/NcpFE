var new_trend = echarts.init(document.getElementById('new'), 'dark')

new_option = {
    title: {
        text: '新增曲线',
        left: 'left'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['新增确诊'],
        // left: 'right'
        x: 380,
        y: 5
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: [{
        type: 'value',
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true,
            color: 'white',
            fontSize: 12,
            formatter: function (value) {
                if (value >= 1000) {
                    value = (value / 1000) + 'k';
                }
                return value;
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#4c5e77',  //设置网格颜色
                width: 1,
                type: 'solid',
            }
        }
    }],
    series: [
        {
            name: '新增确诊',
            type: 'line',
            // stack: 'Total',
            smooth: true,
            data: []
        },
    ]
};