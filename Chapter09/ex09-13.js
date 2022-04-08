function isFalsy(v) {
    return !v;
}

function isTruthy(v) {
    return !!v;
}

console.log(isTruthy([]));
if({}) console.log(2);
if([]) console.log(3);
