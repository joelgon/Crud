import React, {useEffect, useState} from 'react';
import Services from '../../services/services'

import './Lista.css'
import services from '../../services/services';


function Listar({match}) {

    const [Users, setUsers] = useState([])
    const [params, setParams] = useState('')

    useEffect( () => {
        async function loaders(){
            const response = await Services.get('/user')
            setUsers(response.data)
        }
        loaders();
    }, [match.params.id]);

    async function Search(flag){
        const response = await Services.get(`/user?params=${flag}`)
        setUsers(response.data)
    }

    async function list (){
        const response = await Services.get('/user')
        setUsers(response.data)
    }

    async function remover(id) {
        await Services.delete(`/user/${id}`)
        await list()
    }

    async function SoftDelete(id) {
        await services.delete(`/user/soft/${id}`)
        await list()
    }
    return (
        <div>
            <form className="form-inline ">
                <input className="form-control col-sm-10 " 
                    type="search" 
                    placeholder="Search"
                    value={params}
                    onChange={ ({target}) => setParams(target.value) }  
                />
                <button className="btn btn-success col-sm-2" 
                    type="Button" 
                    onClick={() => Search(params)}>
                    Search
                </button>
            </form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Documento</th>
                        <th scope="col">Data</th>
                        <th scope="col">Telefone</th>
                    </tr>
                </thead>
                <tbody className="col-sm-12">
                    {Users.map(user => (
                        <tr key={user.id}>
                            <th>{user.id}</th>
                            <td>{user.nome}</td>
                            <td>{user.tipo}</td>
                            <td>{user.documento}</td>
                            <td>{user.dataCadastro}</td>
                            <td>{user.telefone}</td>
                            <td>
                                <button className="btn btn-warning" onClick={ () => SoftDelete(user.id)}>
                                    <i className="fa fa-trash-o"></i>
                                </button>
                                <button className="btn btn-danger" onClick={ () => remover(user.id)}>
                                    <i className="fa fa-trash-o"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Listar;