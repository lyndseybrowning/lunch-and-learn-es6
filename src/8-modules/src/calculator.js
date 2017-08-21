const calculator = () => {
    let total = 0;

    return {
        add(num) {
            total += num;
            return this;
        },

        subtract(num) {
            total -= num;
            return this;
        },

        multiply(num) {
            total *= num;
            return this;
        },
        
        getTotal() {
            return total;
        }
    };
};


// export a default function
// which is considered the main exported value
// and is used when we want to export a single value
export default calculator;
