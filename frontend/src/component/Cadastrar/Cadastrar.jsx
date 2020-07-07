import React, {useState} from 'react';
import Services from '../../services/services'
import InputMask from 'react-input-mask'

function Cadastrar(props){
    
    const [Nome, setNome] = useState('');
    const [Tipo, setTipo] = useState('');
    const [Documento, setDocumento] = useState('');
    const [Data, setData] = useState('');
    const [Telefone, setTelefone] = useState('');

    async function cadastrar(){
        try {
            await Services.post('/user', {Nome, Tipo, Documento, DataCadastro: Data, Telefone} )
        } catch (error) {
            alert("Preencha todos os campos")
        }
    }

  return (
    <form>
        <div className="form-row">
            <div className="form-group col-md-4">
                <label >Nome</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="email" 
                    placeholder="Nome"
                    value={Nome}
                    onChange={ ({target}) => setNome(target.value) } 
                />
            </div>
            <div className="form-group col-md-4">
                <label >Tipo</label>
                <select 
                id="tipo" 
                className="form-control"
                value={Tipo}
                onChange={e => setTipo(e.target.value) }>
                    <option value=''></option>
                    <option value='PF'>PF</option>
                    <option value='PJ'>PJ</option>
                </select>
            </div>
            <div className="form-group col-md-4">
                <label >Documento</label>
                <InputMask
                    mask={Tipo === 'PJ' ? '99.999.999/9999-99' : '999.999.999-99'} 
                    type="text" 
                    className="form-control" 
                    id="documento" 
                    placeholder="CNPJ/CPF"
                    value={Documento}
                    onChange={ ({target}) => setDocumento(target.value) }
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-4">
            <label >Data</label>
                <input 
                    className="form-control" 
                    type="date" 
                    id="data-cadastro"
                    value={Data}
                    onChange={ ({target}) => setData(target.value) }
                />
            </div>
            <div className="form-group col-md-4">
                <label >Telefone</label>
                <InputMask 
                    mask="99999-9999"
                    type="text" 
                    className="form-control" 
                    id="telefone" 
                    placeholder="Telefone"
                    value={Telefone}
                    onChange={ ({target}) => setTelefone(target.value) }
                />
            </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={cadastrar}>Cadastrar</button>
    </form>
  );
}

export default Cadastrar;