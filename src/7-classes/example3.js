class BaseClass {
    constructor(props) {
        this.props = props;
    }
}

class SubClass extends BaseClass {
    constructor(props) {
        // if a class inherits from another class
        // it needs to call the super method
        // to pass properties to the parent class
        // otherwise you'll get a 'this is undefined' error
        super(props);
        this.anotherProp = 'Hello world';
    }
}

const subClass = new SubClass(true);

console.log(subClass.props); // true
