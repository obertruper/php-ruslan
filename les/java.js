function cube(num) {
    return num * num * num ;
}

function min(num1, num2) {
    if (num1 < num2) {
        return num1
    } else {
        return num2
    }
 }

 function dayOfWeek(day) {
    switch ((day)) {
        case 1: return 'пн';
        case 2: return 'вт';
        case 3: return 'ср';
        case 4: return 'чт';
        case 5: return 'пт';
        case 6: return 'сб';
        case 7: return 'вс';
    }
     return 'неверный день'
 }
  var result
