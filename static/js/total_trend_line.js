var total_trend = echarts.init(document.getElementById('total_trend'), 'dark')

total_trend_option = {
    title: {
        text: '确诊数据',
        // left: 'left'
    },
    tooltip: {
        trigger: 'axis',
        //指示器
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#7171C6'
            }
        },
    },
    legend: {
        data: ['累计确诊', '现有确诊'],
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
        //y轴字体设置
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
        axisLine: {
            show: true
        },
        //与x轴平行的线样式
        splitLine: {
            show: true,
            lineStyle: {
                color: '#4c5e77',
                width: 1,
                type: 'solid',
            }
        }
    }],
    series: [
        {
            name: '累计确诊',
            type: 'line',
            // stack: 'Total',  //影响曲线显示
            smooth: true,
            data: []
        },
        {
            name: '现有确诊',
            type: 'line',
            // stack: 'Total',
            smooth: true,
            data: []
        },
    ]
};


