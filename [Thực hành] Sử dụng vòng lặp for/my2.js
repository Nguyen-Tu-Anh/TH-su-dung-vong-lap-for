let number = +prompt('Nhập số lớn hơn 0');
let element = 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    element += 1;
    sum = sum + element;
}
document.write(sum);