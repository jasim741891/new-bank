// button handler 1st secseon

document.getElementById('deposit-button').addEventListener('click', function () {
    // second kaje
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // third kaje min ke dekeno
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // clear emty string
    depositInput.value = '';
    console.log(depositTotalText)
})

// another site
// event handles deposit 
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposit
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // deposit-amount
    const depositTotal = document.getElementById('deposit-total');
    // add balance
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // updated account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalenceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalenceTotal;
    // input emty
    depositInput.value = '';
});


// handler withdraw event handle

// 1.  withdraw button handel
document.getElementById('withdraw-button').addEventListener('click', function () {
    // 2. withdraw input handle
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    //  convert parseFloat
    const newWithdrawAmount = parseFloat(withdrawAmountText)

    // 3. add/set withdraw balance
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    // convert parseFloat
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // 5. update balance
    const BalanceTotal = document.getElementById('balance-total');
    const PreviousBalanceText = BalanceTotal.innerText;
    // convert parseFloat
    const PreviousBalanceTotal = parseFloat(PreviousBalanceText);
    const newBalenceTotal = PreviousBalanceTotal - newWithdrawAmount;
    BalanceTotal.innerText = newBalenceTotal;

    // 5. emty 
    withdrawInput.value = '';
})