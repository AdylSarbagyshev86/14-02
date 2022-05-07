const a = "a" //string

const b = 20 // number

const bool = true; // boolean
const bool2 = false

// console.log(typeof bool)

const obj= {
    key: "value",
    username: "Alex",
    data: {
        first_name: "Jack",
        last_name: "Barbora"
    }
}

// console.log(obj.data.first_name)
// console.log(obj.data)

const arr = []

// console.log(arr[1])

const arr2 = [
    {
        key: "value"
    },
    {
        key:"value"
    },
    {
        key:"value3"
    }
]
// console.log(arr2[2].key)

//const name =alert("Вам запрещено")
//const.log("Hello " + name)

const first_number = promt(message: "Введите число");
const last_number = promt(message:"Введите второе число");

if (first_number > last_number){
    console.log(first_number + ">" + last_number)

} else if (first_number1 < last_number){
    console.log(first_number + "<" + last_number)

}else {
    console.log(first_number + "=" + last_number)
}