// Mantiqiy operatorlar && || !
// && - va, and, и
// || - yoki, or, или
// ! - emas, not, не

// falsy - false, 0, -0, 0n, NaN, null, undefined, ""

// && - va operatori hardoim false qiymatda qoqiladi
// || - yoki operatori hardoim true qiymatda qoqiladi

console.log(5 && 6 && "Open web" && {} && []);

console.log(null && undefined && [234] && {})

console.log(0 || "" || null || undefined || NaN);

console.log(5 || null && "Open web" || {});

console.log(!null);

console.log(!!25 == 25)

// console.log(24 != 25)

// Taqqoslash operatorlari ==, ===, <, >, <=, >=

// console.log(24 < 23)

console.log("A" > "Z")

console.log("Bobur" > "Baxtiyor")
