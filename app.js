const i1 = 6;
const i2 = 2;

slowMath.add(i1, i2)
    .then((r1) => {
        console.log(i1 + " + " + i2 + " = " + r1);
        return slowMath.multiply(r1, 2);
    }).then((r2) => {
        console.log("* 2 = " + r2);
        return slowMath.divide(r2, 4);
    }).then((r3) => {
        console.log("/ 4 = " + r3);
        return slowMath.subtract(r3, 3);
    }).then((r4) => {
        console.log("- 3 = " + r4);
        return slowMath.add(r4, 98);
    }).then((r5) => {
        console.log("+ 98 = " + r5);
        return slowMath.remainder(r5, 2);
    }).then((r6) => {
        console.log("% 2 = " + r6);
        return slowMath.multiply(r6, 50);
    }).then((r7) => {
        console.log("* 50 = " + r7);
        return slowMath.remainder(r7, 40);
    }).then((r8) => {
        console.log("% 40 = " + r8);
        return slowMath.add(r8, 32);
    }).then((r9) => {
        console.log("+ 32 = " + r9);
        console.log("The Final Result is " + r9);
        if(r9 == 42){console.log("The answer to the ultimate question of life, the universe, and everything.");}
    }).catch((err) => {
        console.log(err);
    });

document.getElementById('await').addEventListener('click', () => {
    doMath();
});

async function doMath() {
    try {
        let r1 = await slowMath.add(i1, i2);
        console.log(r1);
        r2 = await slowMath.multiply(r1, 2);
        console.log(r2);
        r3 = await slowMath.divide(r2, 4);
        console.log(r3);
        r4 = await slowMath.subtract(r3, 3);
        console.log(r4);
        r5 = await slowMath.add(r4, 98);
        console.log(r5);
        r6 = await slowMath.remainder(r5, 2);
        console.log(r6);
        r7 = await slowMath.multiply(r6, 50);
        console.log(r7);
        r8 = await slowMath.remainder(r7, 40);
        console.log(r8);
        r9 = await slowMath.add(r8, 32);
        console.log(r9);
        console.log("The Final Result is " + r9);
        if(r9 == 42){console.log("The answer to the ultimate question of life, the universe, and everything.");}
    } catch (err) {
        console.log(err);
    }
}