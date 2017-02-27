function MyStaticMethodDecorator(
    target: Function, // the function itself and not the prototype
    propertyKey: string | symbol, // The name of the static method
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("MyStaticMethodDecorator called on: ", target, propertyKey, descriptor);
}

class MyStaticMethodDecoratorExample {
    @MyStaticMethodDecorator
    static staticMethod() {
      
    }
}

let s: MyStaticMethodDecoratorExample = new MyStaticMethodDecoratorExample();
s.staticMethod; 
