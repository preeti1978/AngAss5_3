var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MyClass = (function () {
    function MyClass(message) {
        this.greeting = message;
    }
    //The following is an example of a method decorator (@MyMethodDecorator) applied to a method on the MyClass class:
    MyClass.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return MyClass;
}());
__decorate([
    MyMethodDecorator(false)
], MyClass.prototype, "greet", null);
/***

A method decorators takes a 3 arguments:

    target the method being decorated.
    key the name of the method being decorated.
    value a property descriptor of the given property if it exists on the object, undefined otherwise. The property descriptor is obtained by invoking the Object.getOwnPropertyDescriptor() function.



****/
//If the method decorator returns a value, it will be used as the Property Descriptor for the method.
function MyMethodDecorator(value) {
    return function (target, propertyKey, descriptor) {
        console.log("This is taget: " + target.constructor);
        console.log(" This is propertyKey: " + propertyKey);
        console.log("This is descriptor: " + JSON.stringify(descriptor));
        descriptor.MyMethodDecorator = value;
    };
}
