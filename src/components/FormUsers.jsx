import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'

const defailValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: '',
}

const FormUsers = ({createNewUser, updateInfo, updateUserById,setUpdateInfo, setFormIsClose}) => {
    
    const {handleSubmit, reset, register} = useForm()

useEffect(()=>{
    if (updateInfo) {
        reset (updateInfo)
    }
    reset(updateInfo)
},[updateInfo])

const submit = (data) => {
    if (updateInfo){
        //Update
        updateUserById(updateInfo.id, data)
        setUpdateInfo()
    } else {
        //Create
        createNewUser(data)
    }
    reset(defailValues)
    setFormIsClose(true)
}

const handleCloseForme =() => {
    setFormIsClose(true)
}

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <i onClick={handleCloseForme} className="form__x fa-solid fa-xmark"></i>
        <h2 className='form__title'>{ updateInfo ? 'Edit USer': 'New User'}</h2>
        <div className='form__div'>
            <label className='form__label' htmlFor="email">email</label>
            <input className='form__imput' placeholder='@gmail.com' type="email" id='email'  {...register('email')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="password">password</label>
            <input className='form__imput' placeholder='your password' type="password" id='password' {...register('password')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="first_name">first_name</label>
            <input className='form__imput'  placeholder='your Name' type="text" id='first_name'  {...register('first_name')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="last_name">last_name</label>
            <input className='form__imput'  placeholder='your Last Name' type="text" id='last_name'  {...register('last_name')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="birthday">birthday</label>
            <input className='form__imput' type="date" id='birthday' {...register('birthday')}/>
        </div>
        <button className='form__btn'>{ updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUsers