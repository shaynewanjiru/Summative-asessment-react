import { useState } from 'react'
import Header from './components/Header'
import AddProjForm from './components/AddProjForm'
import ProjList from './components/ProjList'
import './App.css'

export default function App() {
  const [project, setProject] = useState([])
  const [error, setError] = useState('')
  
  function handleDelete(id) {
    setProject(project.filter(proj => proj.id !== id));
  } 
  


  function handleSearch(searchTerm) {
    return project.filter(proj =>
      proj.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }


  return (
    <div className="App">
      <Header />
      <AddProjForm setProject={setProject} setError={setError} />
      <ProjList
        projects={project}
        error={error}
        handleSearch={handleSearch}
        handleDelete={handleDelete}
      />
    </div>

   
    
      )}