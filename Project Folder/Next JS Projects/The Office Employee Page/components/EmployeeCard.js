import React from "react";
import styles from "./EmployeeCard.module.css";
//creates emplyee card component and adds dara from employee.json file
const EmployeeCard = ({ employee }) => {
  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        <img
          src={employee.photoUrl}
          alt={employee.name}
          className={styles.photo}
        />
      </div>
      <h3>{employee.name}</h3>
      <p className={styles.title}>{employee.role}</p>
      <p className={styles.department}>{employee.department}</p>
      <p className={styles.bio}>{employee.bio}</p>
      <p>✉️ {employee.email}</p>
    </div>
  );
};

export default EmployeeCard;
