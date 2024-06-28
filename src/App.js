// import { useState } from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import ThemeContext from './context/ThemeContext';
// import StockContext from './context/StockContext';


// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [stockSymbol, setStockSymbol] = useState("APP");

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/* Place context providers inside Routes */}
//           <Route
//             path='/home'
//             element={
//               <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
//                 <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
//                   <Dashboard />
//                 </StockContext.Provider>
//               </ThemeContext.Provider>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;




import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;