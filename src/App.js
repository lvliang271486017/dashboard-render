import React, { Component } from 'react';
import './App.css';
import Dashborad from './Dashboard/Dashboard'


class App extends Component {

  onChange(value) {
    console.log(value)
  }

  render() {
    const testData = [{
      id: `row1`,
      parent: 'UnIqEiD',
      type: 'LayoutRow',
      typeDesc: '行',
      property: {
        name: 'test1',
        advance: {popup: true, width: '1201'},
        height: {type: '自定义', value: 'calc(40% - 30px)'}
      },
      children:[
        {
          id: `column1`,
          parent: `row1`,
          type: 'LayoutBootstrapColumn',
          typeDesc: '列'
        }
      ]
    },
    {
      id: `row2`,
      parent: 'UnIqEiD',
      type: 'LayoutRow',
      typeDesc: '行',
      property: {
        name: 'test2',
        advance: {popup: false, width: '1205'},
        height: {type: '百分比', value: '26'}
      },
      children:[
        {
          id: `column2`,
          parent: `row2`,
          type: 'LayoutBootstrapColumn',
          typeDesc: '列'
        }
      ]
    },
    {
      id: `row3`,
      parent: 'UnIqEiD',
      type: 'LayoutRow',
      typeDesc: '行',
      property: {
        name: 'test3',
        advance: {popup: false, width: '1212'},
        height: {type: '固定', value: '200'}
      },
      children:[
        {
          id: `column3`,
          parent: `row3`,
          type: 'LayoutBootstrapColumn',
          typeDesc: '列'
        }
      ]
    }
  ]
    const Data = [
      {
      id: `row1`,
      parent: 'UnIqEiD',
      type: 'LayoutRow',
      typeDesc: '行',
      property: {
        name: 'test1',
        advance: {popup: true, width: '1201'},
        height: 500,
        padding: '4px'
      },
      children:[
        {
          id: `column1`,
          parent: `row1`,
          type: 'LayoutBootstrapColumn',
          typeDesc: '列',
          span: 12,
          children: [
            {
              id: `row11`,
              parent: 'UnIqEiD',
              type: 'LayoutRow',
              typeDesc: '行',
              property: {
                name: 'test1',
                advance: {popup: true, width: '1201'},
                height: 200
              },
              children:[
                {
                  id: `column11`,
                  parent: `row1`,
                  type: 'LayoutBootstrapColumn',
                  typeDesc: '列',
                  component: true,
                  span: 12
                },
                {
                  id: `column21`,
                  parent: `row1`,
                  type: 'LayoutBootstrapColumn',
                  typeDesc: '列',
                  span: 12
                }
              ]
            },
            {
              id: `row111`,
              type: 'LayoutRow',
              typeDesc: '行',
              property: {
                name: 'test1',
                advance: {popup: true, width: '1201'},
                height: 100
              },
              children:[
                {
                  id: `column111`,
                  type: 'LayoutBootstrapColumn',
                  typeDesc: '列',
                  component: true,
                  span: 24
                }
              ]
            },
            {
              id: `row1111`,
              type: 'LayoutRow',
              typeDesc: '行',
              property: {
                name: 'test1',
                advance: {popup: true, width: '1201'},
                height: 190
              },
              children:[
                {
                  id: `column111`,
                  type: 'LayoutBootstrapColumn',
                  typeDesc: '列',
                  component: true,
                  span: 24
                }
              ]
            }
          ]
        },
        {
          id: `column2`,
          parent: `row1`,
          type: 'LayoutBootstrapColumn',
          typeDesc: '列',
          component: true,
          span: 12
        }
      ]
    },{
      id: `row2`,
      parent: 'UnIqEiD',
      type: 'LayoutRow',
      typeDesc: '行',
      property: {
        name: 'test2',
        advance: {popup: false, width: '1205'},
        height: 300,
        padding: '4px'
      },
      children:[
        {
          id: `column2`,
          parent: `row2`,
          type: 'LayoutBootstrapColumn',
          typeDesc: '列',
          span: 4
        },
        {
          id: `column3`,
          parent: `row2`,
          type: 'LayoutBootstrapColumn',
          typeDesc: '列',
          span: 4
        },
        {
          id: `column4`,
          parent: `row2`,
          type: 'LayoutBootstrapColumn',
          typeDesc: '列',
          span: 16
        }
      ]
    },
    {
      id: `row3`,
      parent: 'UnIqEiD',
      type: 'LayoutRow',
      typeDesc: '行',
      property: {
        name: 'test3',
        advance: {popup: false, width: '1212'},
        height: 'calc(100% - 800px)',
        padding: '4px'
      },
      children:[
        {
          id: `column3`,
          parent: `row3`,
          type: 'LayoutBootstrapColumn',
          typeDesc: '列',
          span: 24
        }
      ]
    }
    ]

    const Dashboard = {
      style: {
        backgroundColor: '#fff',
        padding: '4px',
        height: '100%'
      },
      data: Data
    }
    
    const option = {
      title: 'wrrrr',
      titleLoc: 'center',
      export: true,
      valuesVisible: true
    }

    const option1 = {
      orientation: 'horizontal',
      example: 'bottom',
      showData: true,
      gridLine: true,
      baseLine: '100',
      areaSize: 'similar',
      emptyArea: true,
      emptyAreaText: 'asdf',
      zoomLevel: 5,
      radius: 50,
      mapStyle: '2',
      fileUrl: 'dsaf',
      height: {
        type: 'auto',
        value: true
      },
      table: ''
    }

    const option2 = {
      dial: true,
      title: 'test'
    }

    const option3 = {
      stack: true,
      background: true,
      style: 'circle',
      trendline: 'maverage'
    }

    return (
      // <Layout data={testData} onChange={this.onChange}/>
        // <Dashborad Dashboard={Dashboard} />
        // <ChartTitle option={option} onChange={this.onChange}/>
        // <ChartDraw option={option1} onChange={this.onChange}/>
        // <ChartAxes option={option2} onChange={this.onChange}/>
        // <ChartBar option={option3} onChange={this.onChange}/>
        <Dashborad Dashboard={Dashboard} />
        // <Table />
    )
  }
}

export default App;
