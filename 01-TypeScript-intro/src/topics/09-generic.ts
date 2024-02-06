
export function whatsMyType<T>(argument: T ): T{
    return argument;
}

const amIString =whatsMyType('Hola Mundo');
const amINumber =whatsMyType(100);


