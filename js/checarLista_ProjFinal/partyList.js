partylist= ['Tassio', 'Letícia','Thiago', 'Lara','Mauricio', 'Dyenifer'];
partyTicket = ['10', '20'];

function checkNome() {
    guestName = document.getElementById('name').value;
    if (partylist.includes(guestName)) {
        return true;
    }else{
        return false;
    }
}

function checkCode() {
    ticketCode = document.getElementById('code').value;
    if(typeof(ticketCode) === "null"){
        return 0;
    }
    else if (partyTicket.includes(ticketCode)) {
        return true;
    }else{
        return false;
    }
}

function checkInvited() {
    if (checkNome() === true && checkCode() === true) {
        document.getElementById('permissionStatus').innerText = 'All right, Welcome to the party!';
    }else{   
        document.getElementById('permissionStatus').innerText = 'Permission denied.'; 
    }
}




