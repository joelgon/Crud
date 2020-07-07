import React, {useEffect, useState} from 'react';
import Services from '../../services/services'


function Listar({match}) {

    const [Users, setUsers] = useState([])

    useEffect( () => {
        async function loaders(){
            const response = await Services.get('/user')
            setUsers(response.data)
        }
        loaders();
    }, [match.params.id]);

    async function list (){
        const response = await Services.get('/user')
        setUsers(response.data)
    }

    async function remover(id) {
        await Services.delete(`/user/${id}`)
        await list()
    }

  return (
    <table className="table table-striped ">
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
        <tbody>
            {Users.map(user => (
                <tr key={user.id}>
                    <th>{user.id}</th>
                    <td>{user.nome}</td>
                    <td>{user.tipo}</td>
                    <td>{user.documento}</td>
                    <td>{user.dataCadastro}</td>
                    <td>{user.telefone}</td>
                    <td>
                        <button className="btn btn-danger" onClick={ () => remover(user.id)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default Listar;