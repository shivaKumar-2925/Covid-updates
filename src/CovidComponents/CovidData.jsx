import React,{useEffect,useState}from 'react'
import './CovidStyles.css'


const CovidData = () => {
const [recCovid, setRecCovid] = useState([])
const GoCovidTrack=async()=>{
  let res = await fetch('https://data.covid19india.org/data.json')
  let ActualData = await res.json()
  setRecCovid(ActualData.statewise)

}


  useEffect(() => {
GoCovidTrack()
  }, [])


console.log(recCovid);

  return (
    <div>
    <header className="head">
      <h1>india Covid 19 updates</h1>

    </header>
    <div className="main">
      <table className="mainTable">
        <thead className="headTable">
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recover</th>
            <th>Death</th>
            <th>Last-Update</th>
          </tr>
        </thead>
        <tbody className='tbBody'>


        {recCovid.map((arr,ind)=>{
          return(
            <>
               <tr key={ind}>
                  <td>{arr.state}</td>
            <td>{arr.confirmed}</td>
            <td>{arr.active}</td>
            <td>{arr.recovered}</td>
            <td>{arr.deaths}</td>
            <td>{arr.lastupdatedtime}</td>
          </tr>
          
            </>
          )
        })}
          
        
        </tbody>
        
      </table><div className="tbFooter">
            <p>for more info contact covid19India@gmail.com</p>
          </div>
    </div>
    </div>
  )
}

export default CovidData
