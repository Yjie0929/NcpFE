var sar = echarts.init(document.getElementById('sar'), 'dark')

sar_option = {
    title: {
        text: '特别行政区数据(当日)',
        left: 'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
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
    xAxis: [
        {
            type: 'category',
            data: ['香港', '澳门', '台湾']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '现有确诊',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            name: '新增确诊',
            type: 'bar',
            data: [],
            emphasis: {
                focus: 'series'
            },
        },
    ]
};

sar.setOption(sar_option);

