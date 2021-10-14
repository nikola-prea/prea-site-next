import { useEffect, useState } from 'react';

const EMPLOYEE_API = process.env.GATSBY_EMPLOYEE_API_URL;

function useEmployee() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    async function fetchAsync() {
      const response = await fetch(EMPLOYEE_API);
      const { data } = await response.json();

      const filteredData = data.filter((employee) => {
        if (employee.organizationDepartment) {
          if (employee.customSchemas.extendedEmployeeDataWebsite.ListImageLink) {
            if (employee.customSchemas.extendedEmployeeDataWebsite.ListImageLink.split('.')[1] !== 'jpgv') {
              return employee;
            }
          }
        }
      });

      setEmployeeList(filteredData);
    }

    fetchAsync();
  }, []);

  return {
    employees: employeeList,
  };
}
export default useEmployee;
