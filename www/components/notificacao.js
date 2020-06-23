// This is a JavaScript file
function escolha(){
  navigator.notification.confirm('Ecolha (J) ou (N)', esco, 'Escolha:', ['J', 'N']);

  function esco(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert('J', null, 'Você escolheu:', 'Ok');      
    }else{
      navigator.notification.alert('N', null, 'Você escolheu:', 'OK');      
    }
  }
}

function alerta(){
  navigator.notification.alert('Avisado kkkk', null, 'Isso é um aviso', 'OK');
}
