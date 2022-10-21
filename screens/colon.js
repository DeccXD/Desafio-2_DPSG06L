import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
const App = () => {

  const colon = () =>{
      let cantidad = document.getElementById("numero1").value;
      let conversion  = cantidad*8.75;
      document.getElementById("colon").innerText = conversion;
  
}
  const calculadora = () => {
    colon();
    pesomexicano();
    euros();
    libra();
    franco();
  
  }
  return (
    <>
    <div className="container">
      <br/>
   
    <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">digite numero 1: </label>
    <input type="text" class="form-control" id="numero1" placeholder="digite numero 1:"/>
  </div>
  
  <button onClick={calculadora} type="submit" class="btn btn-primary mb-2">Calcular</button>

      <div className="col-sm-12">
      <table className="table table-sm">
  <thead>
    <tr>
      <th scope="col">COLON SALVADOREÑO</th>
      <th scope="col">PESO MEXICANO</th>
      <th scope="col">EURO</th>
      <th scope="col">LIBRA ESTERLINA</th>
      <th scope="col">FRANCO SUIZO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" id="colon">0</th>
      <th scope="row" id="pesomexicano">0</th>
      <th scope="row" id="euro">0</th>
      <th scope="row" id="esterlina">0</th>
      <th scope="row" id="franco">0</th>
    </tr>
    
  </tbody>
</table>
    </div>
      </div>
   
    
    </>
  );
}

export default App;

  

// fin de Suma

    const styles = StyleSheet.create({
        btnCalcular: {  // boton dentro del formulario
            
            //backgroundColor: '#1d3354',
            backgroundColor: colores.BG_COLOR, 
            
            width:'65%',
            height: '20%',
            alignSelf: 'center',
            borderRadius : 7, 
            justifyContent:'center',
            marginTop: 15,
        },
        textBtnCalcular: {  // texto dentro del boton calcular
            justifyContent: 'center',
            marginHorizontal: 'auto',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 32,
            //color: '#18a999',
            color: colores.ENFASIS_COLOR
        },
        lblResultado:{
           color: '#d64045',
           fontSize: 30,
           fontWeight: 'bold',
           textAlign: 'center',
           marginVertical: '3%',
        },
        txtValores: // controles de textInput
        {
            alignSelf: 'center',
            marginTop: '10%',
            width: '85%',
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#18a999',
            lineHeight:24,
            fontSize: 18,
            color: '#d64045'
        },
        lblError: 
        {
            color: '#d64045',
           fontSize: 18,
           fontWeight: 'bold',
           textAlign: 'center',
      
        }
    });
    