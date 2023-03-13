export const changeName =(data, nameType) => {
    return {
        type : nameType ,
        payload : data
    }
} 

export const apiResponse =(data) => {
    // console.log(data);
    return {
        type : "API",
        payload : data
    }
} 