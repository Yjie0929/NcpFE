from datetime import date
import os
import pandas as pd

today = str(date.today())


def get_total_diagnosis():
    path = r'../NcpDataSpider/ncpPro/csv/{}'.format(today)
    if os.path.exists(path):
        data = pd.read_csv(path + r'/total.csv')
        return data.累计确诊病例[0]


def get_total_overseas() -> str:
    path = r'../NcpDataSpider/ncpPro/csv/{}'.format(today)
    if os.path.exists(path):
        data = pd.read_csv(path + r'/total.csv')
        return data.累计境外病例[0]


def get_total_cured() -> str:
    path = r'../NcpDataSpider/ncpPro/csv/{}'.format(today)
    if os.path.exists(path):
        data = pd.read_csv(path + r'/total.csv')
        return data.累计治愈[0]


def get_total_dead() -> str:
    path = r'../NcpDataSpider/ncpPro/csv/{}'.format(today)
    if os.path.exists(path):
        data = pd.read_csv(path + r'/total.csv')
        return data.累计死亡[0]


def get_all_province_data() -> tuple:
    area, diagnosis, result = [], [], []
    path = r'../NcpDataSpider/ncpPro/csv/{}'.format(today)
    if os.path.exists(path):
        data = pd.read_csv(path + r'/province.csv')
        [area.append(i) for i in data.地区]
        [diagnosis.append(i) for i in data.现有确诊]
        area = tuple(area)
        diagnosis = tuple(diagnosis)
        for i in zip(area, diagnosis):
            result.append(i)
        return tuple(result)


def for_total_data() -> tuple:
    path = r'../NcpDataSpider/ncpPro/csv/totalDiagnosisForAll.csv'
    total_diagnosis, current_diagnosis, from_date, result = [], [], [], []
    if os.path.exists(path):
        data = pd.read_csv(path)
        [total_diagnosis.append(i) for i in data.累计确诊病例]
        [current_diagnosis.append(i) for i in data.现有确诊病例]
        [from_date.append(i) for i in data.数据来源日期]
        total_diagnosis = tuple(total_diagnosis)
        current_diagnosis = tuple(current_diagnosis)
        from_date = tuple(from_date)
        for i in zip(total_diagnosis, current_diagnosis, from_date):
            result.append(i)
    return tuple(result)


def for_new_data() -> tuple:
    path = r'../NcpDataSpider/ncpPro/csv/totalDiagnosisForAll.csv'
    new_diagnosis, from_date, result = [], [], []
    if os.path.exists(path):
        data = pd.read_csv(path)
        [new_diagnosis.append(i) for i in data.新增确诊病例]
        [from_date.append(i) for i in data.数据来源日期]
        new_diagnosis = tuple(new_diagnosis)
        from_date = tuple(from_date)
        for i in zip(new_diagnosis, from_date):
            result.append(i)
    return tuple(result)


def for_top_city_data() -> tuple:
    path = r'../NcpDataSpider/ncpPro/csv/{}'.format(today)
    current_diagnosis, new_diagnosis, result = [], [], []
    if os.path.exists(path):
        data = pd.read_csv(path + '/province.csv')  # 索引：地区[0], 新增确诊[1], 现有确诊[2], 累计确诊[3]
        data_of_beijing = data[data['地区'] == '北京'].values[0]
        data_of_jiangsu = data[data['地区'] == '江苏'].values[0]
        data_of_guangdong = data[data['地区'] == '广东'].values[0]
        current_diagnosis.extend((data_of_beijing[2], data_of_jiangsu[2], data_of_guangdong[2]))
        new_diagnosis.extend((data_of_beijing[1], data_of_jiangsu[1], data_of_guangdong[1]))
        for i in zip(tuple(current_diagnosis), tuple(new_diagnosis)):
            result.append(i)
        return tuple(result)


def for_sar_data() -> tuple:
    path = r'../NcpDataSpider/ncpPro/csv/{}'.format(today)
    current_diagnosis, new_diagnosis, result = [], [], []
    if os.path.exists(path):
        data = pd.read_csv(path + '/province.csv')  # 索引：地区[0], 新增确诊[1], 现有确诊[2], 累计确诊[3]
        data_of_beijing = data[data['地区'] == '香港'].values[0]
        data_of_jiangsu = data[data['地区'] == '澳门'].values[0]
        data_of_guangdong = data[data['地区'] == '台湾'].values[0]
        current_diagnosis.extend((data_of_beijing[2], data_of_jiangsu[2], data_of_guangdong[2]))
        new_diagnosis.extend((data_of_beijing[1], data_of_jiangsu[1], data_of_guangdong[1]))
        for i in zip(tuple(current_diagnosis), tuple(new_diagnosis)):
            result.append(i)
        return tuple(result)
