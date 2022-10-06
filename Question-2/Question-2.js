const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message': 'Delayed Success!'}
            resolve(success)
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error('{error: Delayed Exception!}')
            } catch (fallo) {
                reject(fallo)
            }
        }, 500)
    })
} 

resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(error))



rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(error))



