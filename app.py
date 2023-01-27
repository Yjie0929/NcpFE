from flask import Flask, render_template, request, jsonify, Response
import time
import callmysql

app = Flask(__name__)


@app.route('/')
def tem() -> render_template:
    return render_template('base.html')


@app.route('/time', methods=['GET'])
def get_time():
    format_datetime = time.strftime('%Y年%m月%d日 %H:%M:%S', time.localtime())
    return format_datetime


@app.route('/ajax', methods=['GET', 'POST'])  # 配置与ajax相对应的视图函数,button触发时,ajax执行该路由
def ajax() -> str:
    name = request.values.get('test_key1')
    score = request.values.get('test_key2')
    print(name, score)
    return '1000'  # 向ajax返回数据,作为回调函数function的形参变量a使用


@app.route('/one', methods=['GET', 'POST'])
def one() -> jsonify:
    data = {
        'td': '{:,}'.format(int(callmysql.get_total_diagnosis())),
        'to': '{:,}'.format(int(callmysql.get_total_overseas())),
        'tc': '{:,}'.format(int(callmysql.get_total_cured())),
        'tD': '{:,}'.format(int(callmysql.get_total_dead())),
    }
    return jsonify(data)


@app.route('/map', methods=['GET', 'POST'])
def map_data() -> jsonify:
    lis = list()
    for data in callmysql.get_all_province_data():
        lis.append({'name': data[0], 'value': int(data[1])})
    return jsonify({'data': lis})


@app.route('/getTotalData', methods=['GET', 'POST'])
def total_data() -> jsonify:
    total_diagnosis, current_diagnosis, from_date = [], [], []
    for total in callmysql.for_total_data():
        total_diagnosis.append(total[0])
        current_diagnosis.append(total[1])
        from_date.append(total[-1])
    return jsonify({
        "from_date": from_date,
        "total_diagnosis": total_diagnosis,
        "current_diagnosis": current_diagnosis,
    })


@app.route('/newData', methods=['GET', 'POST'])
def new_data() -> jsonify:
    new_diagnosis, from_date = [], []
    for new in callmysql.for_new_data():
        new_diagnosis.append(new[0])
        from_date.append(new[-1])
    return jsonify({
        "from_date": from_date,
        "new_diagnosis": new_diagnosis,
    })


@app.route('/topCity', methods=['GET', 'POST'])
def top_city() -> jsonify:
    total_diagnosis, current_diagnosis, new_diagnosis = [], [], []
    for data in callmysql.for_top_city_data():
        current_diagnosis.append(data[0])  # 现有确诊
        new_diagnosis.append(data[1])  # 新增确诊
    return jsonify({
        "current_diagnosis": current_diagnosis,
        "new_diagnosis": new_diagnosis
    })


@app.route('/sar', methods=['GET', 'POST'])
def sar() -> jsonify:
    total_diagnosis, current_diagnosis, new_diagnosis = [], [], []
    for data in callmysql.for_sar_data():
        current_diagnosis.append(data[0])  # 现有确诊
        new_diagnosis.append(data[1])  # 新增确诊
    return jsonify({
        "current_diagnosis": current_diagnosis,
        "new_diagnosis": new_diagnosis
    })


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
