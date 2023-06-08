// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line
/*  console.log(
  document.querySelector('[id="foo$bar"] .item')
  );  */



const status1 = document.querySelectorAll('.status1.');
const reserve1 = document.querySelectorAll('.reserve');
const checkout1 = document.querySelectorAll('.checkout');
const checkin1 = document.querySelectorAll('.checkin');

const status2 = document.querySelectorAll('.status2');
const reserve2 = document.querySelectorAll('.reserve');
const checkout2 = document.querySelectorAll('.checkout');
const checkin2 = document.querySelectorAll('.checkin');

const status3 = document.querySelectorAll('.status3');
const reserve3 = document.querySelectorAll('.reserve');
const checkout3 = document.querySelectorAll('.checkout');
const checkin3 = document.querySelectorAll('.checkin'); 

checkin1.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin2.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin3.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled' 