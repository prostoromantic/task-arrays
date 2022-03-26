/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let numbers = data.split(',');
    numbers.sort((a, b) => a - b);
    let string = '';
    for (let i = 0; i < numbers.length; i++) {
        if (i != numbers.length - 1) {
            string += numbers[i] + ',';
        } else {
            string += numbers[i];
        }
    }
    return string;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let i = 0;
    while (i < data.length) {
        if (data[i] > 100) {
            data.splice(i, 1);
        } else {
            i += 1;
        }
    }
    return data;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let data = [];
    for (let i = 0; i < 5; i++) {
        data.push(array1[i]);
        data.push(array2[i]);
    }
    return data;
}
