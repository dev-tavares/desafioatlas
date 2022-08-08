/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import '../css/Repos.css';
import languageColor from '../utils/gitHubColors';

function Repos({ repo }) {
  const { name, language, description, updated_at, license } = repo;

  return (
    name && (

      <div className="repo-card">
        <p className="repo-name">
          {name}
        </p>
        {description && (
          <p className="repo-description">{`Description ${description}`}</p>
        )}
        {
          repo.fork ? (
            <div className="fork-info">
              <img src="https://img.icons8.com/ios-glyphs/13/000000/code-fork.png" alt="fork-icon" />
              <p>Forked&nbsp;</p>
              <img
                src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/13/000000/external-balance-fintech-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
                alt="license-icon"
              />
              &nbsp;
              <p>{license.name}</p>
              <div className="language-update">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Updated on
                {' '}
                {new Date(updated_at)
                  .toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}
              </div>
            </div>
          ) : (
            language && (

              <div className="language-update">
                <span
                  className="color"
                  style={ language && { background: languageColor[language].color } }
                >
          &nbsp;

                </span>
                {language}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Updated on
                {' '}
                {new Date(updated_at)
                  .toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}
              </div>
            )
          )
        }
      </div>
    )
  );
}

Repos.propTypes = {
  repo: PropTypes.shape({
    description: PropTypes.string,
    language: PropTypes.string,
    name: PropTypes.string,
    updated_at: PropTypes.string,
    fork: PropTypes.bool,
    license: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default Repos;
