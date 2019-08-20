import React from 'react';
import Chart from './Chart.jsx';
import $ from 'jquery';
import Options from './Options.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: [{
        labels: ['Boston', 'Lowell', 'Fremont'],
        datasets:[
          {
            label: 'Horsepower',
            data:[4.4, 15.6, 27],
            backgroundColor: 'rgba(238, 29, 6, 0.83)'
          },
        ],
      },
      {
        labels: ['Boston', 'Lowell', 'Fremont'],
        datasets:[
          {
            label: 'Torque',
            data:[4.4, 15.6, 27],
            backgroundColor: 'rgba(6, 215, 238, 0.83)'
          },
        ],
      },
      {
        labels: ['Boston', 'Lowell', 'Fremont'],
        datasets:[
          {
            label: 'Quarter Mile Time (sec)',
            data:[4.4, 15.6, 27],
            backgroundColor: 'rgba(6, 238, 29, 0.83)'
          },
        ],
      },
      {
        labels: ['Boston', 'Lowell', 'Fremont'],
        datasets:[
          {
            label: 'Weight (lbs)',
            data:[4.4, 15.6, 27],
            backgroundColor: 'rgba(238, 6, 99, 0.83)'
          },
        ],
      }
    ],
    allBrands:["Aprilia","BMW","Buell","Ducati","Harley-Davidson","Honda",
      "Kawasaki","KTM","Moto-Guzzi", "MV Agusta", "Suzuki", "Triumph", 
      "Victory", "Yamaha"
    ],
    selectedBrands: []
    }
    this.checkBoxHandler = this.checkBoxHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this);
  }

  checkBoxHandler(event){
    let UpdatedSelectedBrands = [...this.state.selectedBrands]
  
    if(event.target.checked) {
    UpdatedSelectedBrands.push(event.target.value)
    } else {
     let idx = UpdatedSelectedBrands.indexOf(event.target.value)
     UpdatedSelectedBrands.splice(idx,1)
    }

    this.setState({selectedBrands: UpdatedSelectedBrands.sort()})
  }

  submitHandler(event){
    var brands = [];
    this.state.selectedBrands.forEach(e => {
      brands.push(`"${e}"`)
    })
    $.get( `/MultipleBrands/[${brands}]`, ( data ) => {

      let brandTxf = new Set();
      let modelTxf = [];
      let horsePower = [];
      let torque= [];
      let quarterMileTime = [];
      let weight = [];

      data.forEach(engineStat => {
        modelTxf.push(engineStat.brand + ' ' + engineStat.model);

        brandTxf.add(engineStat.brand) // this will add all names of 
        
        horsePower.push(Number(engineStat.horsepower.split(' ')[0]));
        torque.push(Number(engineStat.torque.split(' ')[0]));
        quarterMileTime.push((Number(engineStat.torque.split(' ')[0])));
        weight.push(Number(engineStat.weight));
      })

      let newChartData = {...this.state.chartData};
      newChartData[0].brands = [...brandTxf];
      newChartData[0].labels = [...modelTxf];
      newChartData[0].datasets[0].data = [...horsePower];

      newChartData[1].labels = [...modelTxf];
      newChartData[1].datasets[0].data = [...torque];

      newChartData[2].labels = [...modelTxf];
      newChartData[2].datasets[0].data = [...quarterMileTime];

      newChartData[3].labels = [...modelTxf];
      newChartData[3].datasets[0].data = [...weight];

      this.setState({chartData: newChartData})
    })  
    
  }

  componentDidMount(){
    $.get( '/allbrands', ( data ) => {
      let brandTxf = new Set();
      let modelTxf = [];
      let horsePower = [];
      let torque= [];
      let quarterMileTime = [];
      let weight = [];

      data.forEach(engineStat => {
        modelTxf.push(engineStat.brand + ' ' + engineStat.model);

        brandTxf.add(engineStat.brand) // this will add all names of 
        
        horsePower.push(Number(engineStat.horsepower.split(' ')[0]));
        torque.push(Number(engineStat.torque.split(' ')[0]));
        quarterMileTime.push((Number(engineStat.torque.split(' ')[0])));
        weight.push(Number(engineStat.weight));
      })

      let newChartData = {...this.state.chartData};
      newChartData[0].brands = [...brandTxf];
      newChartData[0].labels = [...modelTxf];
      newChartData[0].datasets[0].data = [...horsePower];

      newChartData[1].labels = [...modelTxf];
      newChartData[1].datasets[0].data = [...torque];

      newChartData[2].labels = [...modelTxf];
      newChartData[2].datasets[0].data = [...quarterMileTime];

      newChartData[3].labels = [...modelTxf];
      newChartData[3].datasets[0].data = [...weight];

      this.setState({chartData: newChartData})
    })  
  };

  render(){
    return (
      <div>
        
        <Options 
          brands={this.state.allBrands} 
          checkBox={this.checkBoxHandler} 
          submitBtn={this.submitHandler}  
        />
        <Chart  data={this.state.chartData[0]} />
        <Chart  data={this.state.chartData[1]} />
        <Chart  data={this.state.chartData[2]} />
        <Chart  data={this.state.chartData[3]} />

      </div>
    )
  }
}

export default App;