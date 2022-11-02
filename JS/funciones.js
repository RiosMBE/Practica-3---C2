function cotizar(){
    var txtvalor = document.getElementById('valor').value;
    txtvalor = txtvalor * 1;
    var txtFinanciar;
    var txtTotFin;
    var txtFin;
    var txtpago;
    var cmbPlanes = document.getElementById('planes').value;
    var interes;
    switch(cmbPlanes){
        case "12":
            interes = 12.5;
            break;
        case "18":
            interes = 17.2;
            break;
        case "24":
            interes = 21;
            break;
        case "36":
            interes = 26;
            break;
        case "48":
            interes = 45;
            break;
        default:
            break;
    }
    let txtenganche = txtvalor * 0.3;
    document.getElementById('enganche').value = txtenganche;

    txtTotFin = Number(txtvalor - txtenganche);
    txtFin = Number(txtvalor * (interes / 100));
    txtFinanciar = txtFin + txtTotFin;
    txtpago = txtFinanciar / cmbPlanes;
    txtpago = txtpago.toFixed(2);
    document.getElementById('total').value = "$" + txtFinanciar;
    document.getElementById('Pago').value = "$" + txtpago;
}

function limpiar(){
    document.getElementById('valor').value = "";
    document.getElementById('enganche').value = "";
    document.getElementById('total').value = "";
    document.getElementById('planes').value = "";
    document.getElementById('pago').value = "";
}