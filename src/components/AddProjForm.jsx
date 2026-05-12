
import { useState } from 'react';

export default function AddProjForm({ setProject, setError }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();

    const Title = title.trim();
    const Description = description.trim();
    if (!Title || !Description) {
      setError('Please fill in all fields');
      return;
    }

    const newProject = {
      id: Date.now(),
      title: Title,
      description: Description
    };

    setProject(previousProject => [...previousProject, newProject]);
    setTitle('');
    setDescription('');
    console.log("Successful project submission");
    setError('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Title"
        name="title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Project Description"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button type="submit">Add Project</button>
    </form>
  );
}