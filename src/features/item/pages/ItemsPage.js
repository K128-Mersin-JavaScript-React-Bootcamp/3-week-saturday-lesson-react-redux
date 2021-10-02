import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { ENDPOINTS } from '../../../constants/endpoints';
import { addItem, deleteItem, replaceItems } from '../actions/itemActions';

function ItemsPage(props) {
    const [name, setName] = useState('');

    useEffect(() => {
        axios(ENDPOINTS.BASE_URL + "/items")
            .then(json => props.replaceItems(json.data))
    }, []);

    const handleDelete = ({id}) => {
        console.log(id)
        axios.delete(ENDPOINTS.BASE_URL + `/items/${id}`)
        .then(json => props.deleteItem(id));
    }
    const handleAdd = (name) => {
        console.log(name);
        axios.post(ENDPOINTS.BASE_URL + `/items`, { name: name })
        .then(json => props.addItem(json.data));
    }

    return (
        <div>
            <h2>ItemsPage</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => handleAdd(name)}>
                AddItem</button>

            <ul>
                {props.items.map((v, i) => 
                <li key={v.id}>
                    {v.name}
                    <button onClick={() => handleDelete(v)}>Delete</button>
                </li>)}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        items: state.itemsReducer.items,
    }
}
const mapDispatchToProps = (dispatch) => ({
    addItem: (name) => dispatch(addItem(name)),
    replaceItems: (items) => dispatch(replaceItems(items)),
    deleteItem: (name) => dispatch(deleteItem(name)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);