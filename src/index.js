import config from './config/config';
import app from './config/express';
import moment from 'moment';

if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => {
    const factories = [
      { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
      { name: "BR2", employees: ["Jessie", "Karen", "John"] },
      { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
      { name: "BR4", employees: [] }
    ];

    const employeeType = [
      { id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },
      { id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },
      { id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },
    ];

    const employees = [
      { id: 1, name: "Alice", type: 2 },
      { id: 2, name: "Bob", type: 3 },
      { id: 3, name: "John", type: 2 },
      { id: 4, name: "Karen", type: 1 },
      { id: 5, name: "Miles", type: 3 },
      { id: 6, name: "Henry", type: 1 }
    ];

    const tasks = [
      { id: 1, title: "task01", duration: 60 },
      { id: 2, title: "task02", duration: 120 },
      { id: 3, title: "task03", duration: 180 },
      { id: 4, title: "task04", duration: 360 },
      { id: 5, title: "task05", duration: 30 },
      { id: 6, title: "task06", duration: 220 },
      { id: 7, title: "task07", duration: 640 },
      { id: 8, title: "task08", duration: 250 },
      { id: 9, title: "task09", duration: 119 },
      { id: 10, title: "task10", duration: 560 },
      { id: 11, title: "task11", duration: 340 },
      { id: 12, title: "task12", duration: 45 },
      { id: 13, title: "task13", duration: 86 },
      { id: 14, title: "task14", duration: 480 },
      { id: 15, title: "task15", duration: 900 }
    ];

    // convert time string to seconds and calculate work hours 
    employeeType.forEach(function (type) {
      type.work_begin = timeToSec(type.work_begin);
      type.work_end = timeToSec(type.work_end);
      type.work_hour = (type.work_end - type.work_begin) / 3600;
      type.work_hour = type.work_hour < 0 ? type.work_hour + 24 : type.work_hour;
    });

    // Q1
    function countEmployeesByFactory(factories) {
      var employeeNumber = [];
      factories.forEach(function (factory) {
        employeeNumber.push({ name: factory.name, count: factory.employees.length });
      });
      return employeeNumber;
    }

    // Q2
    function countFactoriesByEmployee(factories) {
      var obj = {};
      var factoryNumber = [];
      factories.forEach(function (factory) {
        factory.employees.forEach(function (employee) {
          obj[employee] = obj[employee] + 1 || 1;
        });
      });
      Object.keys(obj).forEach(function (key) {
        factoryNumber.push({ employee: key, count: obj[key] });
      });
      return factoryNumber;
    }

    // Q3
    function orderEmployeesList(factories) {
      factories.forEach(function (factory) {
        factory.employees.sort();
      });
      return factories;
    }

    // Q4
    function countTotalWorkHours(employees, employeeType) {
      var totalHours = 0;
      employees.forEach(function (employee) {
        totalHours += employeeType.find(type => type.id === employee.type).work_hour;
      });
      return totalHours;
    }

    // Q5
    function howManyEmployeeByTime(employeeType, employees, dayTime) {
      var time = timeToSec(dayTime);
      var typeId = [];
      var count = 0;
      // find out all type whose working hours contains day time
      employeeType.forEach(function (type) {
        if (timeBetween(time, type.work_begin, type.work_end)) {
          typeId.push(type.id);
        }
      });
      employees.forEach(function (employee) {
        if (typeId.includes(employee.type)) {
          count++;
        }
      });
      return count;
    }

    // Q6
    function countDaysOfWork(tasks, employees, employeeType) {
      var totalDuration = 0;
      // count total duration
      tasks.forEach(function (task) {
        totalDuration += task.duration;
      });
      return Math.ceil(totalDuration / countTotalWorkHours(employees, employeeType));
    }

    function timeToSec(timeString) {
      var time = moment(timeString, "HH:mm:ss").diff(moment().startOf('day'), 'seconds');
      return time;
    }

    function timeBetween(time, beg, end) {
      if (end < beg) {
        return (time >= beg || time <= end);
      } else {
        return (beg <= time && time <= end);
      }
    }

    // console.log(countEmployeesByFactory(factories));
    // console.log(countFactoriesByEmployee(factories));
    // console.log(orderEmployeesList(factories));
    // console.log(countTotalWorkHours(employees, employeeType));
    // console.log(howManyEmployeeByTime(employeeType, employees, "17:00:00"));
    // console.log(countDaysOfWork(tasks, employees, employeeType));
  });
}

export default app;