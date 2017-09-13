import React from 'react';
import Grid from './Grid';

class Dashboard extends React.Component {
  
  render() {
    const data = this.props.Dashboard.data
    const style = this.props.Dashboard.style

    return (
      <div style={style}>
        {
          data.map(item => {
            return <div key={item.id} style={{height: item.property.height}}><Grid data = {item} /></div>
          })
        }
      </div>
      
    )
  }
}

export default Dashboard