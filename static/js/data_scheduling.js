function getTime() {  //显示当前时间（右上）
    $.ajax({
        url: '/time',
        type: 'get',
        timeout: 1000,
        success: function (data) {
            $('#time').html(data)
        },
        error: function () {
            $('#time').html('时间获取异常')
        }
    });
}

function getTotalDiagnosis() {  //显示疫情数据（中上）
    $.ajax({
        url: '/one',
        type: 'get',
        success: function (data) {
            $("#total_diagnosis").text(data.td);
            $("#total_overseas").text(data.to);
            $("#total_cured").text(data.tc);
            $("#total_dead").text(data.tD);
        },
        error: function () {
            $('#total_diagnosis').html('0');
            $("#total_overseas").text('0');
            $("#total_cured").text('0');
            $("#total_dead").text('0');
        }
    });
}

function get_map_data() {  //显示地图、数据（不严谨）
    $.ajax({
        url: '/map',
        success: function (data) {
            ec_center_option.series[0].data = data.data
            ec_center.setOption(ec_center_option)
        },
        error: function () {

        }
    });
}

function get_data_for_total_line() {
    $.ajax({
        url: '/getTotalData',
        success: function (data) {
            total_trend_option.xAxis.data = data.from_date
            total_trend_option.series[0].data = data.total_diagnosis
            total_trend_option.series[1].data = data.current_diagnosis
            total_trend.setOption(total_trend_option)
        }
    });
}

function get_data_for_new_line() {
    $.ajax({
        url: '/newData',
        success: function (data) {
            new_option.xAxis.data = data.from_date
            new_option.series[0].data = data.new_diagnosis
            new_trend.setOption(new_option)
        }
    });
}

function get_data_for_top_city() {
    $.ajax({
        url: '/topCity',
        success: function (data) {
            top_option.series[0].data = data.current_diagnosis
            top_option.series[1].data = data.new_diagnosis
            top_city.setOption(top_option)
        }
    });
}

function get_data_for_sar() {
    $.ajax({
        url: '/sar',
        success: function (data) {
            sar_option.series[0].data = data.current_diagnosis
            sar_option.series[1].data = data.new_diagnosis
            sar.setOption(sar_option)
        }
    });
}

getTotalDiagnosis()
get_map_data()
get_data_for_total_line()
get_data_for_new_line()
get_data_for_top_city()
get_data_for_sar()

setInterval(getTime, 1000)
setInterval(getTotalDiagnosis, 86400 * 1000)
setInterval(get_map_data, 86400 * 1000)
setInterval(get_data_for_total_line, 86400 * 1000)
setInterval(get_data_for_new_line, 86400 * 1000)
setInterval(get_data_for_top_city, 86400 * 1000)
setInterval(get_data_for_sar, 86400 * 1000)
