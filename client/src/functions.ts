
const func1 = (arg1:string):void => alert(arg1)

const createUkey = ():string => {
    let nextRand:string = String(Math.floor(Math.random() * 10))

    while(true) {
        if(nextRand.length === 6) {
            return nextRand;
        }

        nextRand += Math.floor(Math.random() * 10);
    }

}

export default {func1, createUkey}