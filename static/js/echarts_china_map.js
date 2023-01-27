var ec_center = echarts.init(document.getElementById("china_map"), 'dark');

var ec_center_option = {
    title: {
        text: '',
        subtext: '',
        x: 'left'
    },
    tooltip: {
        trigger: 'item'
    },
    //左侧小导航图标
    visualMap: {
        show: true,
        x: 20,
        y: 'top',
        textStyle: {
            fontSize: 10,
        },
        splitList: [{start: 0, end: 0},
            {start: 1, end: 10},
            {start: 10, end: 50},
            {start: 50, end: 100},
            {start: 100}],
        color: ['#8A3310', '#c9572a', '#da754d', '#f3b6a0', '#ffffff']
    },
    //配置属性
    series: [{
        name: '现有确诊人数',
        type: 'map',
        mapType: 'china',
        roam: false, //拖动和缩放
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
        data: 1 //mydata //数据
    }]
};

ec_center.setOption(ec_center_option);


