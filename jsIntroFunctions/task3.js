function checkOrder (ordered, available) {
    if ( ordered === 0) {
        console.log (`Your order is empty`);
        return;
    }

    if ( ordered > available) {
        console.log (`Your order is too large, we don't have enough goods`);
        return;
    }

    console.log (`Your order is accepted`);
}

const orderExpression = function (ordered, available) {
    checkOrder (ordered, available);
}

const orderExpressionArrow = (ordered, available) => {
    orderExpression (ordered, available);
}

const orderExpressionArrowCons = (ordered, available) => orderExpressionArrow(ordered, available);

// Order bigger than what's available
checkOrder(12, 0);

// Order smaller than what's available
orderExpression(5, 10);

// Order the same as available
orderExpressionArrow(5, 5);

// Order is 0
orderExpressionArrowCons(0, 10);