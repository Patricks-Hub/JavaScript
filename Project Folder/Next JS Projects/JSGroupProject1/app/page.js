"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import EmployeeCard from "../components/EmployeeCard";
import styles from "./styles.module.css";

async function fetchEmployees() {
  const response = await fetch("/employees.json");
  const data = await response.json();
  return data;
}

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name"); // Default search by name
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setEmployees(data.employees);
      setFilteredEmployees(data.employees);
    };

    getEmployees();
  }, []);

  useEffect(() => {
    let results = [];
    if (searchBy === "name") {
      results = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (searchBy === "role") {
      results = employees.filter((employee) =>
        employee.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      results = employees; // Shows all employees if no search term is provided
    }
    setFilteredEmployees(results);
  }, [searchTerm, searchBy, employees]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // handles the search term input
  };

  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value); // handles the change between name and role
  };

  return (
    // The serch bar and employee cards are displayed here depending on the search term and search by
    <div className={styles.container}>
      <Header />
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder={`🔍 Search by ${
            searchBy === "name" ? "Name" : "Role"
          }...`}
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        <div className={styles.filterControls}>
          <label htmlFor="searchBy" style={{ marginRight: "10px" }}>
            Search By:
          </label>
          <select
            id="searchBy"
            value={searchBy}
            onChange={handleSearchByChange}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            <option value="name">Name</option>
            <option value="role">Role</option>
          </select>
        </div>
      </div>
      <div className={styles.cardGrid}>
        {filteredEmployees &&
          filteredEmployees.map((employee) => (
            <EmployeeCard key={employee.email} employee={employee} />
          ))}
      </div>
    </div>
  );
}
