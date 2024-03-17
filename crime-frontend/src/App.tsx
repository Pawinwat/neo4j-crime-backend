// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { HashRouter, Route, Routes } from 'react-router-dom'
import Analytics from './pages/analytics/Analytics'
// import TopBar from './components/navigation/TopBar'
import { useRoutes } from "react-router-dom";
import Dashboard from './layouts/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient()

  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <Analytics />,
        },
      ],
    },
  ]);

  return <QueryClientProvider client={queryClient}>
    {element}
  </QueryClientProvider>
    ;
}

export default App
