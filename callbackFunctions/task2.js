function recursion(num) {
    if (num <= 0) {
        return;
    }

    console.log(num);

    recursion(num-1);
}

recursion(13.5);