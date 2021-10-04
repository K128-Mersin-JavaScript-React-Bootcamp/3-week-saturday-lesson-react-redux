import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { deleteItemFromServer, getItemsFromServer, addItemFromServer, addItemSaga } 
    from '../actions/itemActions';

function ItemsPage(props) {
    const [name, setName] = useState('');

    useEffect(() => {
        props.getItemsFromServer()
    }, []);

    return (
        <div>
            <h2>ItemsPage</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => props.addItemFromServer({ name: name })}>
                AddItem</button>
            <button onClick={() => props.getItemSaga()}>
            getItemSaga</button>

            <ul>
                {props.items.map((v, i) => 
                <li key={v.id}>
                    {v.name}
                    <button onClick={() => props.deleteItemFromServer(v.id)}>Delete</button>
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
    addItemFromServer: (item) => dispatch(addItemFromServer(item)),
    getItemsFromServer: () => dispatch(getItemsFromServer()),
    deleteItemFromServer: (id) => dispatch(deleteItemFromServer(id)),
    //addItemSaga: (id) => dispatch(addItemSaga(item)),
    getItemSaga: () => dispatch({type: 'GET_ITEM_SAGA'}),
})


export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);