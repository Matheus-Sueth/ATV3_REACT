import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import medico1 from './images/1.jpg'

const App = () => {
    //return <div>Meu primeiro componente REACTJS</div>
    //return <img src="logo192.png"></img>
    //return <p>&#128512;</p>
    const estilodiv = { 
        margin: 'auto',
        width: '60%', 
        height: '30%',
        backgroundColor: '#EEE',
        padding: 12,
        borderRadius: 8
    }
    const nome = {
        "medico1": "José da Silva",
        "medico2": "Maria da Silva",
        "medico3": "Jaqueline Mendes"
    }
    return (
        <div style={estilodiv}>
            <label htmlFor="titulo" style={{display:'block', marginBottom: 4, textAlign: 'center', fontWeight: 'bold'}}>Profissionais de saúde</label>
            <div style={{backgroundColor: '#EEE',
                           width: '100%',
                           height: '75',
                           borderStyle: 'ridge',
                           borderRadius: 8,
                           display: 'flex',
                           justifyContent: 'space-between'
                       }}>
                <div className="auxiliar">
                   <img id="img" src={medico1} alt=''/>
                   <text id="text" >{nome['medico1']}</text>
                </div>
                <div className="auxiliar" /* style={{marginLeft: '5%', marginRight: '5%'}} */>
                   <img id="img" src={process.env.PUBLIC_URL +'/2.jpg'} alt=''/>
                   <text id="text" >{nome['medico2']}</text>
                </div>
                <div className="auxiliar">
                <img id="img" src='https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt=''/>
                <text id="text" >{nome['medico3']}</text>
                </div>
            </div>
        </div>
       )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root') 
)
