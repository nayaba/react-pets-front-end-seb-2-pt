import { useState } from 'react'

const PetForm = (props) => {
	const initialState = {
		name: '',
		age: '',
		breed: '',
	}

	const [formData, setFormData] = useState(
        props.selected ? props.selected : initialState
    )

	const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

	const handleSubmit = (event) => {
        event.preventDefault()
        if (props.selected) {
            props.handleUpdatePet(formData, props.selected._id)
        } else {
            props.handleAddPet(formData)
        }
    }

	return (
		<div>
			<form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					required
					onChange={handleChange}
				/>
                <label htmlFor="">Age</label>
				<input
					type="text"
					name="age"
					value={formData.age}
					required
					onChange={handleChange}
				/>
                <label htmlFor="">Breed</label>
				<input
					type="text"
					name="breed"
					value={formData.breed}
					onChange={handleChange}
				/>
				<button type="submit">
                    {props.selected ? 'Update Pet' : 'Add New Pet'}
                </button>
			</form>
		</div>
	)
}

export default PetForm
