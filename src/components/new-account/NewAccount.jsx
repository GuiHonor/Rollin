

const NewAccount = ({register, className}) => {
    return (    
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <input
                className={className}
                type='text'
                placeholder='Nome'
                {...register('name')}
                required
            />

            <input
                className={className}
                type='text'
                placeholder='Sobrenome'
                {...register('lastName')}
                required
            />
        </div>
    )
}

export default NewAccount