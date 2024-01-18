// File: src/components/DepartmentListComponent.tsx
import React, { useState } from "react";
import { Typography, Checkbox, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./style.css";
interface DepartmentData {
  department: string;
  sub_departments: string[];
}

interface Department {
  name: string;
  subDepartments: SubDepartment[];
  expanded: boolean;
  selected: boolean;
}

interface SubDepartment {
  name: string;
  selected: boolean;
}

const hardcodedData: DepartmentData[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
  // Add more departments as needed
];

const DepartmentListComponent: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>(
    hardcodedData.map((data) => ({
      name: data.department,
      expanded: false,
      selected: false,
      subDepartments: data.sub_departments.map((subDepartment) => ({
        name: subDepartment,
        selected: false,
      })),
    }))
  );

  const handleToggleDepartment = (departmentName: string) => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((department) =>
        department.name === departmentName
          ? { ...department, expanded: !department.expanded }
          : department
      )
    );
  };

  const handleToggleDepartmentSelect = (departmentName: string) => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((department) =>
        department.name === departmentName
          ? {
              ...department,
              selected: !department.selected,
              subDepartments: department.subDepartments.map(
                (subDepartment) => ({
                  ...subDepartment,
                  selected: !department.selected,
                })
              ),
            }
          : department
      )
    );
  };

  const handleToggleSubDepartmentSelect = (
    departmentName: string,
    subDepartmentName: string
  ) => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((department) =>
        department.name === departmentName
          ? {
              ...department,
              subDepartments: department.subDepartments.map((subDepartment) =>
                subDepartment.name === subDepartmentName
                  ? { ...subDepartment, selected: !subDepartment.selected }
                  : subDepartment
              ),
            }
          : department
      )
    );
  };

  const renderSubDepartments = (
    department: Department,
    subDepartments: SubDepartment[]
  ) => (
    <ul>
      {subDepartments.map((subDepartment) => (
        <li key={subDepartment.name}>
          <Checkbox
            checked={subDepartment.selected}
            onChange={() =>
              handleToggleSubDepartmentSelect(
                department.name,
                subDepartment.name
              )
            }
          />
          {subDepartment.name}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="department">
      {departments.map((department) => (
        <div key={department.name}>
          <div className="depart_name">
            <IconButton onClick={() => handleToggleDepartment(department.name)}>
              {department.expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <Checkbox
              checked={department.selected}
              onChange={() => handleToggleDepartmentSelect(department.name)}
            />
            <Typography variant="body1">{department.name}</Typography>
          </div>
          {department.expanded &&
            renderSubDepartments(department, department.subDepartments)}
        </div>
      ))}
    </div>
  );
};

export default DepartmentListComponent;
