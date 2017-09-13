import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { Row, Col } from 'antd';
import { BarOption, PieOption } from './chartOptions'

class Grid extends React.Component {
  onChartClick = (obj) => {
    console.log(obj)
  }
  
  render() {
    const data = this.props.data
    const children = this.props.data.children
    let onEvents = {
      'click': this.onChartClick,
    }
    return (
      <Row
        type="flex"
        justify="center"
        style={{
          height: isNaN(data.property.height) ? '100%' : data.property.height
        }}
      >
        {
          children.map(item => {
            return (
              <Col key={item.id} span={item.span}>
                <div style={{ height: '100%', padding: data.property.padding || '4px'}}>
                <div style={{border: '1px solid #00A0E9', height: '100%'}}>
                {
                  (!item.children || item.children.length === 0) ? null : 
                  item.children.map(item => <Grid key={item.id} data={item}/>)
                }
                {
                  item.component ? (() => <ReactEcharts onEvents={onEvents} option={PieOption} style={{height: data.property.height ? data.property.height - 8 : '100%'}} />)() : null
                }
                </div>
                </div>
              </Col>)
          })
        }
      </Row>
    )
  }
}

export default Grid