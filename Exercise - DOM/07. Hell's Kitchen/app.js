function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurants = JSON.parse(document.querySelector('#inputs textarea').value);
      let catalog = restaurants
          .reduce((catalog, r) => reduceCatalog(catalog, r), {});

      let sortedCatalog = Object.keys(catalog)
          .sort((key1, key2) => catalog[key2].avgPrice() - catalog[key1].avgPrice());
      let bestRestaurant = catalog[sortedCatalog[0]];
      let sortedSalary = Object.keys(bestRestaurant.employees)
          .sort((key1, key2) => bestRestaurant.employees[key2] - bestRestaurant.employees[key1]);

      let restaurantInfo = `Name: ${sortedCatalog[0]} Average Salary: ${bestRestaurant.avgPrice()} Best Salary: ${bestRestaurant.employees[sortedSalary[0]].toFixed(2)}`
      let workersInfo = ''
      sortedSalary.forEach((key) => {
         workersInfo += `Name: ${key} With Salary: ${bestRestaurant.employees[key]} `;
      });

      document.querySelectorAll('#outputs div p')[0].textContent = restaurantInfo;
      document.querySelectorAll('#outputs div p')[1].textContent = workersInfo;


      function reduceCatalog(catalog, r) {
         let [restaurantName, employees] = r.split(' - ');
         employees = employees.split(', ');

         let exists = catalog[restaurantName];
         if (!exists) {
            catalog[restaurantName] = { "employees": {}, avgPrice };
         }

         employees.forEach((e) => {
            let [eName, eSalary] = e.split(' ');
            catalog[restaurantName]["employees"][eName] = Number(eSalary);
         });

         return catalog;

      }

      function avgPrice() {
         let salaries = Object.values(this.employees);
         let totalSalaries = salaries.reduce((avg, s) => avg+= s);
         let avgPrice = totalSalaries / salaries.length;

         return avgPrice.toFixed(2);
      }
   }
}