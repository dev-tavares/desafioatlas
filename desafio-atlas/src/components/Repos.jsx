/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';

function Repos({ repo }) {
  const { name, language, description, updated_at } = repo;

  console.log(repo);
  return (
    <div>
      <p>
        {name}
      </p>
      <p>
        {language}
      </p>
      {description && <p>{`Description ${description}`}</p>}
      <p>
        Updated on
        {' '}
        {new Date(updated_at)
          .toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}
      </p>
    </div>
  );
}

Repos.propTypes = {
  repo: PropTypes.shape({
    description: PropTypes.string,
    language: PropTypes.string,
    name: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default Repos;
