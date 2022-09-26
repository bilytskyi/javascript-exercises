const findTheOldest = function(people) {
    const yearNow = new Date().getFullYear();
    const oldest = people.sort(function(a, b) {
        if (!a.hasOwnProperty('yearOfDeath')) {
            a.yearOfDeath = yearNow;
        }
        if (!b.hasOwnProperty('yearOfDeath')) {
            b.yearOfDeath = yearNow;
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
      });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
