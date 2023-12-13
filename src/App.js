import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';


function App() {

  return (
    <div className="flex flex-col w-screen h-screen background items-center overflow-x-hidden py-8">
      <h1 className='w-11/12 bg-white rounded-lg text-center py-2 px-10 text-3xl font-bold uppercase'>
         Get Random gif
      </h1>
      <div className='flex flex-col w-full items-center mt-[30px] gap-y-10'>
        <Random/>
        <Tag/>
      </div> 
    </div>
  );
}
export default App;
