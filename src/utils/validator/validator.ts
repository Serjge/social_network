

export function requiredField<T>  (value: T)  {
    if(value )  return undefined
    return 'Field is Required'

}

export const maxLengthCreator = (maxLength:number) => (value:string) => {
    if( value.length >maxLength)  return `Max length is ${maxLength} symbols`
    return undefined
}

export function maxLength30  (value: string)  {
    if(value && value.length )  return 'Max length is 30 symbols'
    return undefined
}