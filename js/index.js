let monto = 0, plazo = 0;
let element = null;
montoElemnet = document.getElementById("monto");
document.getElementById("monto").addEventListener("change", getporsentaje);
document.getElementById("plazo").addEventListener("change", getporsentaje);
function getporsentaje(){
    let t = 0;
    if(document.getElementById("monto").value != ""){        
        monto = formatCurrencyToNumber(document.getElementById("monto").value);
    }else{
        alert("ingrese un monto")
    }
    plazo = document.getElementById("plazo").value;
    if(monto != 0 && plazo != 0){       
        if(monto < 300000){
            clean();
        }else{
            if(montoElemnet.classList.contains('error')){
                montoElemnet.classList.remove('error')
            }
            switch (plazo) {
                case '12':
                    if(monto >= 300000 && monto <= 599999){                    
                        t = (monto * 7.5 ) / 100;
                        activeElement(t,'1');                  
                    } 
                    if(monto >= 600000 && monto <= 899999){
                        t = ( monto * 8 ) / 100;
                        activeElement(t, '4');
                    }
                    if(monto >= 900000 && monto <= 1999999){
                        t = ( monto * 9 ) / 100;
                        activeElement(t, '7');
                    }
                    if(monto >= 2000000 && monto <= 2999999){
                        t = ( monto * 10 ) / 100;
                        activeElement(t, '10');
                    }
                    if(monto >= 3000000){
                        t = ( monto * 12 ) / 100;
                        activeElement(t,'13');
                    }                
                break;
                case '24':
                    if(monto >= 300000 && monto <= 599999){                    
                        t = (monto * 8.5 ) / 100;
                        activeElement(t,'2');                  
                    } 
                    if(monto >= 600000 && monto <= 899999){
                        t = ( monto * 9 ) / 100;
                        activeElement(t, '5');
                    }
                    if(monto >= 900000 && monto <= 1999999){
                        t = ( monto * 10 ) / 100;
                        activeElement(t, '8');
                    }
                    if(monto >= 2000000 && monto <= 2999999){
                        t = ( monto * 11 ) / 100;
                        activeElement(t, '11');
                    }
                    if(monto >= 3000000){
                        t = ( monto * 13 ) / 100;
                        activeElement(t,'14');
                    }                
                break;
                case '36':
                    if(monto >= 300000 && monto <= 599999){                    
                        t = (monto * 9 ) / 100;
                        activeElement(t,'3');                  
                    } 
                    if(monto >= 600000 && monto <= 899999){
                        t = ( monto * 10 ) / 100;
                        activeElement(t, '6');
                    }
                    if(monto >= 900000 && monto <= 1999999){
                        t = ( monto * 11 ) / 100;
                        activeElement(t, '9');
                    }
                    if(monto >= 2000000 && monto <= 2999999){
                        t = ( monto * 12 ) / 100;
                        activeElement(t, '12');
                    }
                    if(monto >= 3000000){
                        t = ( monto * 14 ) / 100;
                        activeElement(t,'15');
                    }                
                break;
                default:
                    clean();
                break;
            } 
        }               
    }

//     monto = formatCurrencyToNumber(monto);
//     let plazo = document.getElementById("plazo").value;
//     // let valT = (monto * 10) / 100;
//     // let p = document.getElementById("p");
//     // let t = document.getElementById("t");
//     // p.innerHTML = valP.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//     // t.innerHTML = valT.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

$("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
});

function formatCurrencyToNumber (n){
    return Number(n.replace(/[^0-9.-]+/g,""));

}

function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  
  // don't validate empty input
  if (input_val === "") { return; }
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    
  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);
    
    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = "$" + left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
    
    // final formatting
    if (blur === "blur") {
      input_val += ".00";
    }
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

function activeElement(t,id) {
    let total = document.getElementById("total");
    total.value = t.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    if(element != null){
        element.classList.remove("active-l");
    }
    element = document.getElementById(id);
    element.classList.add('active-l')   
}

function clean(){    
    montoElemnet.classList.add('error');
    let total = document.getElementById("total");
    total.value = '';
    if(element.classList.contains('active-l')){
        element.classList.remove("active-l");
    }
}