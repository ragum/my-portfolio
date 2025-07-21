// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css'; // Import CSS khusus ProjectCard

function ProjectCard({ image, title, description, liveLink, repoLink }) {
    return (
        <div className="project-item">
            <img src={image} alt={title} />
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-links">
                    {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-primary">Lihat</a>}
                    {/* {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-secondary">Lihat Repo</a>} */}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;