// Write your solution in this file!

// Write your solution in this file!

let employee = {
    name: "John Doe",
    streetAddress: "123 Main Street",
  };

  function updateEmployeeWithKeyAndValue(obj, key, value) {

      const newObj = { ...obj };

      newObj[key] = value;

      return newObj;
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

      employee[key] = value;

      return employee;
    }

    function deleteFromEmployeeByKey(employee, key){

      const newEmployee = { ...employee };

      delete newEmployee[key];

      return newEmployee;

    }

    function destructivelyDeleteFromEmployeeByKey(employee, key){
      delete employee[key];

      return employee;
    }
