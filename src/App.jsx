import './App.css';
import Sidebar from './components/sidebar';
import {  PageContextProvider } from './context/page-context';
import Content from './components/content';

function App() {
  return (
    <main className="flex h-screen w-full">
      <PageContextProvider >
        <Sidebar />
        <Content />
      </PageContextProvider>
  </main>
  );
}

export default App;
