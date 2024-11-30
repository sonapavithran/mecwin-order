
import './App.css';
import Header from './component/Header';
import SubHeader from './component/subheader';
import OrderSubHeader from './component/ordersubheader';
import OrderDetails from './component/orderdetails';
import OrderPage from './component/orderpage';


function App() {
  return (
    <div className="app">
      <Header />
      <SubHeader/>
      <OrderSubHeader/>
      {/* <OrderDetails/> */}
      
      
      </div>
  );
}

export default App;
