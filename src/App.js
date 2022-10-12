import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './components/Home/Home';
import Chart from './components/Chart/Chart';
import Blog from './components/Blog/Blog';
import Quizzes from './components/Quizzes/Quizzes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/chart',
          element: <Chart></Chart>
        },
        { path: '/blog', element: <Blog></Blog> }
      ]
    },
    {
      path: 'quizzes/:quizzesId',
      loader: async ({ params }) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizzesId}`)
      },
      element: <Quizzes></Quizzes>
    },
    {
      path: '*', element: <div className='font-bold text-2xl h-20 bg-gradient-to-r from-cyan-500 to-blue-500 bg-gradient-to-l hover:bg-gradient-to-r text-white'>
        <h1>404!</h1>
        <p>This page is not available</p>
      </div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
