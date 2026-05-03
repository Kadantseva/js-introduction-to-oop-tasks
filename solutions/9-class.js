import _ from 'lodash';

// BEGIN
export class Cart {
    constructor() {
        this._it = [];
    }

    addItem(item, count) {
        this._it.push({ item, count });
    }

    getItems() {
        return this._it;
    }

    getCost() {
        return this._it.reduce((sum, { item, count }) => sum + item.price * count, 0);
    }

    getCount() {
        return this._it.reduce((sum, { count }) => sum + count, 0);
    }
}

export default Cart;
// END
