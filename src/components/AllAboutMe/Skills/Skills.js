import React from 'react';
import styles from './Skills.module.css';
import Skill from './Skill/Skill';

const mySkills = [
  'Java',
  'JavaScript',
  'React.js',
  'Node.js',
  'HTML',
  'CSS',
  'Swift',
  'C',
  'Python',
  'Mongo.db',
  'MySQL'
];

const skills = () => {
  return (
    <div className={styles.Skills}>
      <div className={styles.Image}>IMAGE GOES HERE</div>
      <div className={styles.Skill}>
        {mySkills.forEach(skill => {
          return (
            <div>
              {skill}
              <Skill skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default skills;
