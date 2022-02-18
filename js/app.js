document.getElementById('deposit-button').addEventListener('click',function(){
   // console.log('deposit-button clicked');
   const depositInput = document.getElementById('deposit-input');
   const depositAmountText = depositInput.value;
   const depositAmount = parseFloat(depositAmountText);
   // console.log(depositAmount);
   //get deposit
   const depositTotal = document.getElementById('deposit-total');
   const depositTotalText = depositTotal.innerText;
   const depositTotalAmount = parseFloat(depositTotalText);
   // console.log(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositAmount;
   
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   // console.log(balanceTotalText);
   const BalanceTotalAmount = parseFloat(balanceTotalText);
   balanceTotal.innerText = BalanceTotalAmount + parseFloat(depositTotal.innerText);

    depositInput.value = '';
  
})

document.getElementById('withdraw-button').addEventListener('click',function(){
   // console.log("withdraw-button clicked");
   const withdrawInput = document.getElementById('withdraw-input');
   // console.log('withdraw Amount');
   const withdrawAmountText = withdrawInput.value;
   const withdrawAmount = parseFloat(withdrawAmountText);
   const withdrawTotal = document.getElementById('withdraw-total');
   const withdrawTotalText = withdrawTotal.innerText;
   const withdrawTotalAmount = parseFloat(withdrawTotalText);

   withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;

   const balanceTotal = document.getElementById('balance-total');
   // console.log('balance-total clicked');
   const balanceTotalText = balanceTotal.innerText;
   const balanceTotalAmount = parseFloat(balanceTotalText);

   balanceTotal.innerText = balanceTotalAmount - parseFloat(withdrawTotal.innerText); 

  withdrawInput.value = ''; 

})
