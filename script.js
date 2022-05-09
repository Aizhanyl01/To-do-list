let main = document.createElement('main')
main.classList.add('container')

document.body.prepend(main)

let projectName = document.createElement('h1')
projectName.innerHTML = "Let's do it"
main.append(projectName)

let listBlock = document.createElement('div')
listBlock.className = "mainBlock"
main.append(listBlock)

let firstDiv = document.createElement('div')
listBlock.append(firstDiv)

let texIn = document.createElement('input')
texIn.className = "texIn"
texIn.setAttribute('placeholder','Gonna do...')
firstDiv.append(texIn)

let setDate = document.createElement('input')
setDate.setAttribute('type','date')
firstDiv.append(setDate)

let addBtn = document.createElement('button')
addBtn.innerHTML = 'Add'
addBtn.id = 'AddBtn'
firstDiv.append(addBtn)


let list = document.createElement('ul')
listBlock.append(list)

//let li = document.createElement('li')
////li.innerHTML = 'salam'
//list.append(li)

const addTodo = (e) => {


let newTask = texIn.value
let date = setDate.value

let li = document.createElement('li')
li.className = 'taskItem'

let doneBtn =document.createElement('img')
doneBtn.src = 'baseline_done_white_24dp.png'
doneBtn.className = 'btn'
doneBtn.addEventListener('click' , completeTodo)


let deleteBtn =document.createElement('img')
deleteBtn.src = 'baseline_delete_white_24dp.png'
deleteBtn.className = 'btn'
deleteBtn.addEventListener('click', deleteTodo)

let lable = document.createElement('lable')
lable.append(newTask + ' ' + date)

li.append (lable)
li.append(doneBtn)
li.append(deleteBtn)

list.append(li)

}
const completeTodo = (e) => {

    let isDone = e.currentTarget.parentNode.classList.contains('done') 

    isDone 
    
? e.currentTarget.parentNode.classList.remove('done')
: e.currentTarget.parentNode.classList.add('done');

}

const deleteTodo = (e) => {
    e.currentTarget.parentNode.remove(e.parentNode)
}



addBtn.addEventListener('click', addTodo)