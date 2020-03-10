import React from 'react';
import styles from './Skill.module.css';

const skill = props => {
  return <div className={styles.Skill}>{props.skill}</div>;
};

export default skill;
