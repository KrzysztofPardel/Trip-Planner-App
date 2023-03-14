import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '/src/scss/TakeList.scss'
import Todo from '/src/components/Todo.jsx'
import { GiWrappingStar } from 'react-icons/gi'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { db } from '/src/components/firebase'
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'
const style = {
	bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
	container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-sl p-4`,
	heading: `text-3xl font-bold text-center text-gray-800 p-2`,
	form: `flex align-items`,
	input: `border p-2 w-[76vw] h-[8vh] text-xl`,
	button: `border p-2 w-[10vw] h-[8vh] ml-2 bg-blue-500 text-slate-100`,
	count: `text-center p-2`,
}

const TakeList = () => {
	const [todos, setTodos] = useState([])
	const [input, setInput] = useState('')
	//Create todo
	const createTodo = async e => {
		e.preventDefault(e)
		if (input === '') {
			alert('Please enter an item to take')
			return
		}
		//creating new collection + adding data to our database
		await addDoc(collection(db, 'todos'), {
			text: input,
			completed: false,
		})
		setInput('')
	}

	//Read todo from firebase
	useEffect(() => {
		const q = query(collection(db, 'todos'))
		const unsubscribe = onSnapshot(q, querySnapshot => {
			let todosArr = []
			querySnapshot.forEach(doc => {
				todosArr.push({ ...doc.data(), id: doc.id })
			})
			setTodos(todosArr)
		})
		return () => unsubscribe()
	}, []) //empty array prevents the memory leak
	//Update todo in firebase

	//responsible for changing boolean values
	const toggleComplete = async todo => {
		await updateDoc(doc(db, 'todos', todo.id), {
			completed: !todo.completed,
		})
	}
	//Delete todo
	const deleteTodo = async id => {
		await deleteDoc(doc(db, 'todos', id))
	}
	return (
		<div className={style.bg}>
			<div className={style.container}>
				<h3 className={style.heading}>Todo App</h3>
				<form onSubmit={createTodo} className={style.form}>
					<input
						className={style.input}
						type='text'
						value={input}
						onChange={e => setInput(e.target.value)}
						placeholder='I want to take...'
					/>
					<button className={style.button}>
						<AiOutlinePlus size={30} />
					</button>
				</form>
				<ul>
					{todos.map((todo, index) => (
						<Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
					))}
				</ul>
				{todos.length < 1 ? null : <p className={style.count}>{`You have ${todos.length} todos`}</p>}
			</div>
		</div>
	)
}

// const [tasks, setTasks] = useState([])
// const [input, setInput] = useState([''])

// const handleSubmit = () => {
//     e.preventDefault()
//     const addTask = {
//         id: Math.floor(Math.random() * 1000),
//         text: input,
//         completed: false,
//     }
//     setTasks([...tasks, addTask])
//     setInput('')
// }

// <div className='app'>
// 			<div className='container'>
// 				<h1>
// 					<GiWrappingStar />
// 					My Take List
// 				</h1>

// 				<form onSubmit={handleSubmit}>
// 					<AiOutlinePlus />
// 					<input
// 						type='text'
// 						className='task-add_new'
// 						placeholder='I want to take..'
// 						value={input}
// 						onChange={e => setInput(e.target.value)}
// 					/>
// 				</form>

// 				<div className='tasks-container'>
// 					{tasks.map(task => (
// 						<div className='' key={task.id}>
// 							<p className=''>{task.text}</p>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	)

export default TakeList
