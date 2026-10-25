let x = 10;
switch (x) {
    case 10: // it will always match the first case and will not go to the next case
        let b1 = 1;
        console.log(b1);
        break;
    case 10:
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("d");

}