(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        const result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;
    }

    Array.prototype.take = function (n) {
        const result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    }

    Array.prototype.sum = function () {
        return this.reduce((a, b) => {
            return a + b;
        }, 0);
    }

    Array.prototype.average = function () {
        return this.reduce((a, b) => {
            return a + b / this.length;
        }, 0);
    }


})()