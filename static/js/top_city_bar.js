var top_city = echarts.init(document.getElementById('top_city'), 'dark')

top_option = {
    title: {
        text: '重点省份数据(当日)',
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
            data: ['北京', '江苏', '广东']
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

top_city.setOption(top_option);

