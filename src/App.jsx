import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Button } from './components/ui/button';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import ComplaintList from './pages/complaint-listing';
import ComplaintPage from './pages/complaint';
import PostComplaints from './pages/post-complaints';
import SaveComplaints from './pages/save-complaints';
import MyComplaints from './pages/my-complaints';
import { ThemeProvider } from './components/ui/theme-provider';


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <LandingPage />
      },
      {
        path:"/onboarding",
        element: <Onboarding />
      },
      {
        path:"/complaints",
        element: <ComplaintList />
      },
      {
        path:"/complaint/:id",
        element: <ComplaintPage />
      },
      {
        path:"/post-complaints",
        element: <PostComplaints />
      },
      {
        path:"/saved-compalints",
        element: <SaveComplaints />
      },
      {
        path:"/my-complaints",
        element: <MyComplaints />
      },
    ]
  }
])


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
