import { useState } from 'react';

export default function ProjList({ projects, error, handleSearch, handleDelete }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const filteredProjects = handleSearch(searchTerm);

  return (
    <div>
      <h2>Project List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={handleSearchChange}
        className="SearchInput"
        />
      <button onClick={handleSearch} className="SearchButton">
        Search
      </button>
      <ul>
        {filteredProjects && filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <li key={project.id}>
              <h3>TITLE : {project.title}</h3>
              <p>DESCRIPTION : {project.description}</p>
              <button onClick={() => handleDelete(project.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No projects yet. Add one to get started!</p>
        )}
      </ul>
    </div>
  );
}