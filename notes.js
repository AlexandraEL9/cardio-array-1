<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Array Cardio 💪</title>
  <link rel="icon" href="https://fav.farm/✅" />
</head>
<body>
  <!-- Information for users to check the JavaScript Console -->
  <p><em>Psst: have a look at the JavaScript Console</em> 💁</p>

  <script>
    // Declaration of arrays containing data
    const inventors = [
      // Array of objects representing inventors
    ];

    const people = [
      // Array of strings representing people's names
    ];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
    console.table(fifteen); // Output filtered inventors in tabular format

    // Array.prototype.map()
    // 2. Give us an array of the inventor first and last names
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames); // Output array of full names

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered); // Output sorted inventors in tabular format

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears); // Output total years lived by all inventors

    // 5. Sort the inventors by years lived
    const oldest = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? -1 : 1);
    console.table(oldest); // Output sorted inventors by years lived in tabular format

    // 7. Sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });
    console.log(alpha); // Output sorted people by last name

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation = data.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
    console.log(transportation); // Output count of each transportation mode

  </script>
</body>
</html>

