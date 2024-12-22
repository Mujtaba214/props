import { Data } from './Data';
import Card from './Components/Card/Card';
const App = () => {

  return (
    <>
      {Data ?
        (Data.map((e, i) => {
          return <Card key={i} id={e.id} imgSrc={e.imgSrc} title={e.title} desc={e.desc} />
        })) : <h1>Data can't found</h1>
      }
    </>
  )
}

export default App