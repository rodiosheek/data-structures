function fnCall(target, key, descriptor) {
    console.log(target, key, descriptor);
    return descriptor;
}

export default function (target, key, descriptor) {
    return fnCall(target, key, descriptor);
}